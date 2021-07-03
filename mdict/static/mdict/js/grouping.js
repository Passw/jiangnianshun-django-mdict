function get_data_path(node_id){
    let data_path="";
    if(node_id!="#"){
        let cur_ele=$("#"+node_id);
        let pre_ele=$("#"+node_id).parent();
        if(pre_ele.is("ul")){
            pre_ele=pre_ele.parent();
        }
        let cur_path=cur_ele.attr("data-path");
        let pre_path=pre_ele.attr("data-path");
        while(typeof(pre_path)!="undefined"){
            if(pre_path!="_root"){
                cur_path=pre_path+"/"+cur_path;
            }
            cur_ele=pre_ele;
            pre_ele=cur_ele.parent();
            if(pre_ele.is("ul")){
                pre_ele=pre_ele.parent();
            }
            pre_path=pre_ele.attr("data-path");
        }
        data_path=cur_path;
    }
    return data_path
}

function init_jstree(){
    $('#grouping-left').jstree({
        'plugins' : ["checkbox","search"],
        'core' : {
            'data' : {
                'url' : 'mdictpath/',
                'data' : function (node) {
                    return { 'path' : get_data_path(node.id) };
                }
            }
        }
    }).bind("search.jstree", function (e, data) {
        let snodes=data.res;
        for(let ri=0;ri<snodes.length;ri++){
            if(!$('#'+snodes[ri]).hasClass("jstree-open")&&!$('#'+snodes[ri]).hasClass("jstree-closed")){
                //只选择文件，不选择文件夹。
                $('#grouping-left').jstree(true).select_node(snodes[ri]);
            }
        }
    });
    $('#grouping-right').jstree({
        'core' : {
            'data' : {
                'url' : 'mdictgroup/',
                'data' : function (node) {
                    let group_pk=0;
                    if(node.id!="#"){
                        let cur_ele=$("#"+node.id);
                        group_pk=cur_ele.attr("data-pk");
                    }
                    return { 'group' : group_pk };
                }
            }
        }
    });
}

function init_event(){
    $("#home").click(function(){
        window.location.href="/";
    });
    $("#create-group").click(function(){
        let group_name=$("#group-name").val();
        if(group_name!=""){
            let data={"group_name":group_name};
            $.ajax({
                url:"creategroup/",
                contentType:'json',
                type:'GET',
                data:data,
                success:function(data){
                    refresh_right_jstree();
                    init_dropdown();
                },
                error:function(jqXHR,textStatus,errorThrown){
                    alert(jqXHR.responseText);
                },
            });
        }
    });
    $("#expand-all").click(function(){
        $("#grouping-left").jstree("open_all");
    })
    $("#add-to-group").click(function(){
        let group_pk=$("#group-list").attr("data-pk");
        if(group_pk>0){
            let checked_path = [];
            let checked_eles=$("#grouping-left").jstree(true).get_checked();
            $.each(checked_eles,function () {
                if(!$("#grouping-left").jstree(true).is_disabled(this)){
                    let cur_node=$("#"+this);
                    let prev_node=cur_node.parent().parent();
                    if(prev_node.length>0){
                        if(prev_node.attr("id")=="grouping-left"||!$("#grouping-left").jstree(true).is_checked(prev_node.attr("id"))){
                            if(cur_node.hasClass('path-dir')){
                                checked_path.push(get_data_path(this));
                            }else{
                                checked_path.push(cur_node.attr("data-path"));
                            }
                        }
                    }
                }
            });
            if(checked_path.length>0){
                add_to_group(group_pk,checked_path)
            }
        }
    })
    var to = false;
    $('#grouping-filter').keyup(function () {
        if(to) { clearTimeout(to); }
        to = setTimeout(function () {
        var v = $('#grouping-filter').val();
        $('#grouping-left').jstree(true).deselect_all();
        $('#grouping-left').jstree(true).search(v);
        }, 250);
    });
}

function add_to_group(group_pk,checked_path){
    data={"group_pk":group_pk,"path":checked_path}
    $.ajax({
        url:"/mdict/addtogroup/",
        contentType:'json',
        type:'GET',
        data:data,
        traditional: true,
        success:function(data){
            console.log(data);
            refresh_right_jstree();
        },
        error:function(jqXHR,textStatus,errorThrown){
            alert(jqXHR.responseText);
        },
    });
}

function refresh_right_jstree(){
    $('#grouping-right').jstree(true).refresh();
}

function fill_dropdown(item){
    let span_ele=$(item).children('span');
    $("#group-list").text(span_ele.text());
    $("#group-list").attr("data-pk",span_ele.attr("data-pk"));
}

function init_dropdown(){
    $("#group-list").text("词典分组");
    $("#group-list").attr("data-pk",0);
    $.ajax({
        url:"/mdict/dicgroup/",
        contentType:'json',
        type:'GET',
        success:function(data){
        var dic_group=$.parseJSON(data);
        $('#dic-group').empty();
        for(var i=0;i<dic_group.length;i++){
            var ele='<li onclick="fill_dropdown(this)"><span class="dropdown-item" data-pk='+dic_group[i][0]+'>'+dic_group[i][1]+'</span></li>'
            $('#dic-group').append($(ele));
        }
        },
        error:function(jqXHR,textStatus,errorThrown){
            alert(jqXHR.responseText);
        },
    });
}

function init_grouping(){
    init_jstree();
    init_event();
    init_dropdown();
}