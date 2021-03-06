function set_alert_info(entry){
    var alert_box=`
    <div class="alert alert-danger alert-dismissable">
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        未查询到${entry}！
    </div>
    `;
    $("#alert-box").empty();
    $("#alert-box").append(alert_box);
}

function clear_alert_info(){
    $("#alert-box").empty();
}

function scroll_display_list(){
    var des=parseInt(dic_entry_nums/2)-1;
    var r_s_p1=$("#display_list").attr("data-end-p1");
    var data_len=$("#display_list li").length;
    if(data_len<dic_entry_nums){
        if(r_s_p1==0){
            des=data_len-parseInt(dic_entry_nums/2)-1;
        }
    }

    var scroll_h=$("#display_list").children().length;//滚动列表高度
    var div_h=$("#scroll_list").height();//显示区域高度
    var line_h=$("#display_list").children("li").first().height();//一项的行高
    if(dic_back){
        var distance=(scroll_h/2+0.5)*line_h-div_h;
    }else{
        var distance=(scroll_h/2-0.5)*line_h;
    }

    if(dic_search){
        distance=(des+0.5)*line_h;
        $("#li-"+des).css("background-color","#BBBBBB");
        $("#display_list").attr("data-clicked",des);
    }

    $("#scroll_list").scrollTop(distance);
}

rotate_item_list={}

function rotate_content(item){
    var rotate_id=$(item).attr('id');

    if(rotate_id in rotate_item_list){
        var rotate_angle=rotate_item_list[rotate_id];
    }else{
        var rotate_angle=0;
        rotate_item_list[rotate_id]=rotate_angle;
    }
    rotate_angle+=90;
    if(rotate_angle>360){
        rotate_angle=90;
    }

    var card_rotate_angle='rotate('+rotate_angle+'deg)';

    item.style.webkitTransform = card_rotate_angle;
    item.style.mozTransform = card_rotate_angle;
    item.style.msTransform = card_rotate_angle;
    item.style.oTransform = card_rotate_angle;
    item.style.transform = card_rotate_angle;
    item.style.transform = card_rotate_angle;

    rotate_item_list[rotate_id]=rotate_angle;
}

function init_btn_group(){
    $('.go-left').click(function(){//展开上一词条
        if(is_index()||$("#scroll_list").length==0){
            var c=$("#card-container .collapse.show");
            if(c.length==1&&$('.ui-autocomplete').css('display')=='none'){
                var c_id=c.attr("id");
                var n_id=c_id.substring(0,c_id.lastIndexOf("-")+1)+(parseInt(c_id.substring(c_id.lastIndexOf("-")+1))-1);
                if($("#"+n_id)){
                    $("#"+n_id).collapse("show");
                }
            }
        }else{
            var li_id="#li-"+$("#display_list").attr("data-clicked");
            var c=$(li_id).prev();
            c.trigger("click");
        }
    });
    $('.go-right').click(function(){//展开下一词条
        if(is_index()||$("#scroll_list").length==0){
            var c=$("#card-container .collapse.show");
            //c.length==1表示当前有一个展开的词条
            //$('.ui-autocomplete').css('display')=='none'表示当前查询提示框没有显示
            if(c.length==1&&$('.ui-autocomplete').css('display')=='none'){
                var c_id=c.attr("id");
                var n_id=c_id.substring(0,c_id.lastIndexOf("-")+1)+(parseInt(c_id.substring(c_id.lastIndexOf("-")+1))+1);
                if($("#"+n_id)){
                    $("#"+n_id).collapse("show");
                }
            }
        }else{
            var li_id="#li-"+$("#display_list").attr("data-clicked");
            var c=$(li_id).next();
            c.trigger("click");
        }
    });
    $('.scaleup').click(function(){
        var c=$("#card-container .collapse.show");
        if(c.length==1&&$('.ui-autocomplete').css('display')=='none'){
            c.find('iframe').contents().find('*').animate({ fontSize: '+=2px' });
            //只放大字号对于设置height的行之间文字会重叠，同时放大行高，会导致总高度无法准确获取。
        }
    });
    $('.scaledown').click(function(){
        var c=$("#card-container .collapse.show");
        if(c.length==1&&$('.ui-autocomplete').css('display')=='none'){
            c.find('iframe').contents().find('*').animate({ fontSize: '-=2px' });
        }
    });
    $('.go-top').click(function(){//返回顶部
        $('html,body').animate({scrollTop:0},'fast');
    });
}

function speaker_func(c_blue){
    if(c_blue){
        $("#sound-speaker").addClass('text-primary');
        $("#sound-speaker i").removeClass('bi-volume-mute-fill');
        $("#sound-speaker i").addClass('bi-volume-up-fill');
    }else{
        $("#sound-speaker").removeClass('text-primary');
        $("#sound-speaker i").removeClass('bi-volume-up-fill');
        $("#sound-speaker i").addClass('bi-volume-mute-fill');
        var audio=$("#sound-speaker").children('audio');
        if(audio.length>0){
            audio[0].src="";
        }
    }
};

function check_speak(query){
    var url='/mdict/audio/?query='+query;
    query_audio($("#sound-speaker"),url,false,speaker_func);
}

var last=0;

function init_mdict_filter(){
    $("#mdict-filter-input").bind("input propertychange",function(event){
        //juery的change事件，只有当input没有聚焦的时候才能触发，input propertychange能检测input输入过程中的变化
        var txt=$.trim($(this).val().toLowerCase( ));
        var mdict_list=$("#mdict-list-content .card-header");
        if(txt.length>0){
//延时有问题
            last =  event.timeStamp;
            //利用event的timeStamp来标记时间，这样每次事件都会修改last的值，注意last必需为全局变量
            setTimeout(function(){    //设时延迟0.5s执行
                if(last-event.timeStamp==0)
                //如果时间差为0（也就是你停止输入0.5s之内都没有其它的keyup事件发生）则做你想要做的事
                {

                    for(var i=0;i<=mdict_list.length;i++){
                        var dic_a=$(mdict_list[i]).children('a');
                        var title=dic_a.text().toLowerCase();
                        if(title=="")continue;
                        var file=dic_a.attr('data-file').toLowerCase();

                        if(t2s(title).indexOf(txt)==-1&&s2t(title).indexOf(txt)==-1&&t2s(file).indexOf(txt)==-1&&s2t(file).indexOf(txt)==-1){
                            $(mdict_list[i]).hide();
                        }else{
                            $(mdict_list[i]).show();
                        }
                    }
                }
                set_dic_num();
            },500);
        }else{
           last =  event.timeStamp;
           setTimeout(function(){//这里也要定时，否则在手机上，这里运行快，上面延时，快速删除时，显示结果不对
               for(var i=0;i<=mdict_list.length;i++){
                    $(mdict_list[i]).show();
               }
               set_dic_num();
           },500);
        }

    })
}

function init_input(){
    $("#query").focus(function(){//input聚焦时调用auocomplete
        $("#query").autocomplete("search");
    });

    $("#mdict-query-clear").click(function(){
        $("#query").val("");
        $("#query").focus();
    })

    init_mdict_filter();
}

function init_autocomplete(){

    var dic_group=$('#dic-group option:selected').attr('data-pk');

    if(is_index()){//index.html
        $( "#query" ).autocomplete({//jquery-ui
        source: '/mdict/sug/?dic_group='+dic_group,
        //source这里填一个字符串数组或返回字符串数组json的网址
        //delay:500,//默认延迟300
        formatItem: function (data, i, max) {//格式化列表中的条目 row:条目对象,i:当前条目数,max:总条目数
                return  "<div style='margin-bottom: 10px;font-size: 20px;background:red;'>"+row+"</div>";
            }
        });
    }else{//dic.html
        $( "#query" ).autocomplete({//jquery-ui
        source: '/mdict/sug/?dic_pk='+$("html").attr("data-dic-pk"),
        //source这里填一个字符串数组或返回字符串数组json的网址
        //delay:500,
        formatItem: function (data, i, max) {//格式化列表中的条目 row:条目对象,i:当前条目数,max:总条目数
                return  "<div style='margin-bottom: 10px;font-size: 20px;background:red;'>"+row+"</div>";
            }
        });
    }

    init_input();
};

function add_click_event(){
    $('#mdict-query').click(function(e){
        $("#query").autocomplete("close");//按下enter键时关闭autocomplete下拉框
        document.activeElement.blur();//收回手机浏览器的软键盘

        //var modal_brief=$('#modal-container-brief');
        //if(modal_brief.length>0){
            //modal_brief.modal('hide');
        //}
        //当#modal-container-brief中的entry点击时，触发#mdictquery的点击查询，此时要关闭#modal-container-brief。

        var dic_pk=$("html").attr("data-dic-pk");
        var query=$('#query').val();
        $("#card-container").attr("jump-to-entry",query);
        //在iframe外用data设置的值在iframe内取不到，在iframe内用data设置的值，在iframe外用data取不到。改用attr。

        check_speak(query);

        rotate_item_list={};//清空页面旋转记录

        if(dic_pk==-1){
            //index.html调用query_mdict，dic.html调用query_key。
            if(!query){return;}
            $("#result_time").attr("data-start-time",new Date().getTime());//每次点击开始计时
            $("#result_time").attr("data-isover",false);
            query_mdict(query,$("#card-container"),1,true,false);
        }else if(dic_pk==-2){
            if(!query){return;}
            $("#result_time").attr("data-start-time",new Date().getTime());//每次点击开始计时
            $("#result_time").attr("data-isover",false);
            query_es(query,$("#card-container"),1,true,false)
        }else{//dic.html
            dic_search=true;
            dic_back=false;
            var container=$("#card-container");
            if($("html").attr("data-type")=='dic'){
                query_key(container,query);
            }else if($("html").attr("data-type")=='esdic'){
                $("#result_time").attr("data-start-time",new Date().getTime());//每次点击开始计时
                $("#result_time").attr("data-isover",false);
                query_es(query,$("#card-container"),1,true,false)
            }else if($("html").attr("data-type")=='zim'){
                query_zim($("#card-container"),query,dic_pk);
            }
        }
        if($('html').data('data-pushstate')){
            change_title_and_url(query);
        }
        $('html').data('data-pushstate',true)
    })

    $("#sound-speaker").click(function(){
        var audio=$("#sound-speaker").children('audio');
        audio[0].play();
    });

    $('body').click(function(){
        //iframe外点击时删除选择文字弹出框。
        //后续添加点击时同时消除iframe中的选择
        var iframe=$('.collapse.show').find('iframe');
        var tooltip=iframe.contents().find('#tooltip');
        if(tooltip.length>0){
            tooltip.remove();
        }
    }).mousedown(function(e){
      if(e.which == 3){
            var iframe=$('.collapse.show').find('iframe');
            var tooltip=iframe.contents().find('#tooltip');
            if(tooltip.length>0){
                tooltip.remove();
            }
            //'这是右键单击事件';
      }
    })
    $(document).keyup(function(e) {
        var eCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
        //keypress检测不到方向键，必需用keydown或keyup
        if (eCode==13){//回车键
            //判断modal是否打开，打开时，enter无效，这里返回的值有问题，再处理
            $('#mdict-query').trigger('click');
        }else if (eCode == 38){//方向键跳转词条
            //左37上38
            $('.go-left').trigger('click');
        }else if ( eCode == 40){
            //右39下40
            $('.go-right').trigger('click');
        }
        else if(e.shiftKey&&(eCode==107||eCode==61)){//107小键盘+，109小键盘-，61大键盘+，173大键盘-
            //设置组合键shift+加号和减号键
            //直接用加减号键和输入法的翻页键冲突
            //用ctrl+加减号键和浏览器的页面放大缩小快捷键冲突
            $('.scaleup').trigger('click');
        }else if(e.shiftKey&&(eCode==109||eCode==173)){
            $('.scaledown'||eCode==173).trigger('click');
        }
    });
}

var online_dic=[];

function init_online_dic_var(){
    $.ajax({
        url:"/api/mdictonline/",
        contentType:'json',
        type:'GET',
        async:false,//同步
        success:function(data){
            online_dic=data["results"];
            var online_div=$("#online-mdict-checkbox");

            for(var i=0;i<online_dic.length;i++){
                var o_id="onlinedic-"+i;
                var o_name=online_dic[i]["mdict_name"];
                var o_enable=online_dic[i]["mdict_enable"];
                var o_url=online_dic[i]["mdict_url"];
                var o_pror=online_dic[i]["mdict_priority"];
                var o_isiframe=online_dic[i]['mdict_isiframe'];

                var protocol=o_url.split('://')[0];

                if(protocol==''){
                    var o_url_host=extractHostname(o_url);
                }else{
                    var o_url_host=protocol+'://'+extractHostname(o_url);
                }


                var checked="";
                if(o_enable){
                    checked="checked";
                }
                online_ele=`
                <div class="form-checkbox" style="display:inline;">
                    <input class="form-check-input" type="checkbox" id="${o_id}" ${checked} value="${o_name}" data-url="${o_url}" data-isiframe="${o_isiframe}" autocomplete='off'>
                    <label class="form-check-label" for="${o_id}">
                        <span class='badge badge-light text-dark'>${o_pror}</span>
                        ${o_name}
                        <a class='badge badge-primary badge-light text-dark' href="${o_url_host}" target="_blank" style="text-decoration:none;">
                        <i class="bi bi-box-arrow-up-right"></i></a>
                    </label>
                </div><br />
                `
//                chrome中复制标签页时，在线词典的checkbox会被自动选中，需要设置autocomplete='off'。

                online_div.append(online_ele);
            }
        },
        error:function(jqXHR,textStatus,errorThrown){
            alert(jqXHR.responseText);
        },
    });


}

common_config={'force-refresh':'强制刷新','st-enable':'繁简转化','kana-enable':'假名转化','chaizi-enable':'拆字反查','fh-char-enable':'英文全角转半角',
'link-new-label':'跳转新标签页','force-font':'强制使用全宋体','card-show':'展开多个词典','select-btn-enable':'启用查询菜单','disable-iframe-click':'屏蔽默认点击',
'new-label-link':'新标签页正查','compute-every-element':'精确计算高度','fixed-height':'固定高度'}

function init_common_config(){//这里后面改成从后台取数据
    var c_parent=$('#function-checkbox');
    var row_ele='<div class="row"><div id="config-col-1" class="col"></div><div id="config-col-2" class="col"></div></div>';
    c_parent.append(row_ele)
    var i=1;
    var col_num=6;

    for(var key in common_config){
        var c_id="config-"+key;
        var c_text=common_config[key];
        var config_ele=`
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="${c_id}">
            <label class="form-check-label" for="${c_id}">${c_text}</label>
        </div>
        `
        if(i<=col_num){
           c_parent.find("#config-col-1").append(config_ele);
        }else{
           c_parent.find("#config-col-2").append(config_ele);
        }
        i+=1;
    }

    retrieveconfig(true,function(config){
        for(var key in common_config){
            config_id='#config-'+key;
            config_param=key.replace(/-/g,'_');
            $(config_id).prop("checked",config[config_param]);
        }
    })

}

function retrieveconfig(async,func){
    $.ajax({
        url:"/mdict/retrieveconfig/",
        contentType:'json',
        type:'GET',
        async:async,
        success:function(data){
            var config=$.parseJSON(data);
            func(config);
        },
        error:function(jqXHR,textStatus,errorThrown){
            alert(jqXHR.responseText);
        },
    });
}

function init_other_config(){
    $("#t-to-s").click(function(){
        $("#card-container .card .show iframe").each(function(){
            $(this)[0].contentWindow.transform_all_text(0);
        });
    })
    $("#s-to-t").click(function(){
        $("#card-container .card .show iframe").each(function(){
            $(this)[0].contentWindow.transform_all_text(1);
        });
    })

    $("#night-mode").click(function(){
        $('*').not('.fade').not('#bottom-button-group').not('img').not('.btn-close').addClass('dm-night');
        $('img').addClass('dm-night-img-background');
        $('.card-header,.modal-content,.btn-close').addClass('dm-night-border');

        $("#card-container .card .show iframe").each(function(){
            var eles=$(this).contents().find('*');
            eles.not('img').addClass('dm-night');
            eles.find('img').addClass('dm-night-img');
        });

        $(this).attr('data-value','yes');
        $("#day-mode").attr('data-value','no');
    })
    $("#day-mode").click(function(){
        $('*').removeClass('dm-night');
        $('img').removeClass('dm-night-img-background');
        $('.card-header,.modal-content,.btn-close').removeClass('dm-night-border');

        $("#card-container .card .show iframe").each(function(){
            $(this).contents().find('*').removeClass('dm-night').removeClass('dm-night-img');
        });

        $(this).attr('data-value','yes');
        $("#night-mode").attr('data-value','no');
    })
    $('#rotate-page').click(function(){
        $("#card-container .card .show").each(function(){
            rotate_content(this);
        });
    });
    $('#random-search').click(function(){
        $.ajax({
            url:"/mdict/randomsearch/",
            contentType:'json',
            type:'GET',
            success:function(data){
                $('#query').val(html_unescape(data));
                $('#mdict-query').trigger("click");
            },
            error:function(jqXHR,textStatus,errorThrown){
                alert(jqXHR.responseText);
            },
        });
    });
}

function init_modal_config(){
    init_common_config();

    init_other_config();

    init_online_dic_var();

    var modal_container_mdict = document.getElementById('modal-container-mdict')

    modal_container_mdict.addEventListener('shown.bs.modal', function () {
        set_dic_num();
    })

//这里后面再处理
    $("#save_as_default").click(function(){
        update_config();
        update_online_dic();
    });
}

function update_config(){
    var group_name=$('#dic-group').val();
    var default_group=$('#dic-group').find('option:contains('+group_name+')').attr('data-pk');

    var data={"default_group":default_group};
    var data={};
    for(var key in common_config){
        config_id='#config-'+key;
        config_param=key.replace(/-/g,'_');
        config_checked=$(config_id).prop("checked");
        data[config_param]=config_checked;
    }
    $.ajax({
            url:"/mdict/saveconfig",
            contentType:'json',
            type:'GET',
            data:data,
            success:function(data){
                console.log('success');
            },
            error:function(jqXHR,textStatus,errorThrown){
                alert(jqXHR.responseText);
            },
        });
}

function update_online_dic(){
        var temp_dict={};
        $("#online-mdict-checkbox input").each(function(){
            var k=$(this).val();
            temp_dict[k]=$(this).prop("checked");
        });

        var data=temp_dict;
        $.ajax({
            url:"/api/mdictonline/list_update/",
            contentType:'json',
            type:'PATCH',
            data:data,
            success:function(data){
                    console.log('success');
            },
            error:function(jqXHR,textStatus,errorThrown){
                alert(jqXHR.responseText);
            },
        });
}

function init_dic_group(){
    $( "#dic-group" ).selectmenu({
    change: function( event, data ) {
        init_autocomplete();//每次切换分组后，都要重置一下autocomplete()
        get_pk_in_group();
        }
    });

    get_dic_group();
}

function set_dic_num(){
    $("#dic_num").text($("#mdict-list-content .card-header input:visible").length);
}

function get_pk_in_group(){
    var dic_group=$('#dic-group option:selected').attr('data-pk');
    data={"dic_group":dic_group};
    $.ajax({
        url:"/mdict/getpkingroup/",
        contentType:'json',
        type:'GET',
        data:data,
        success:function(data){
        var pk_list=$.parseJSON(data);
        var mdict_list=$("#mdict-list-content .card-header");
        if(pk_list.length==0&&dic_group<=0){
            $(mdict_list).each(function(){$(this).show();});
            set_dic_num()
        }else{
            for(var i=0;i<mdict_list.length;i++){
                var dic_pk=parseInt($(mdict_list[i]).find('input').attr('data-pk'));
                var pk_pos=$.inArray(dic_pk,pk_list);
                if(pk_pos<0){
                    $(mdict_list[i]).hide();
                }else{
                    $(mdict_list[i]).show();
                }
            }
            set_dic_num()
        }

        },
        error:function(jqXHR,textStatus,errorThrown){
            alert(jqXHR.responseText);
        },
    });
}

function get_dic_group(container){//载入词典列表
    $.ajax({
        url:"/mdict/dicgroup/",
        contentType:'json',
        type:'GET',
        async:false,
        success:function(data){
        var dic_group=$.parseJSON(data);
        for(var i=0;i<dic_group.length;i++){
            var ele='<option data-pk='+dic_group[i][0]+'>'+dic_group[i][1]+'</option>'
            $('#dic-group').append($(ele));
        }
        retrieveconfig(false,function(config){
            var group_id=config['default_group'];
            var opt=$("#dic-group").find("option[data-pk="+group_id+"]");
            $('#dic-group').val(opt.text()).selectmenu("refresh");
        })
        },
        error:function(jqXHR,textStatus,errorThrown){
            alert(jqXHR.responseText);
        },
    });
}

function init_navbar_link(){
    $("#btn-es").click(function(){
        if($("html").attr("data-type")=='dic'|$("html").attr("data-type")=='zim'){
            var dic_pk=$("html").attr("data-dic-pk");
            window.location.href="/mdict/esdic/"+dic_pk;
        }else{
            window.location.href="/mdict/es";
        }
    });
    $("#btn-bujian").click(function(){
        window.open("/mdict/bujian");
    });
    $("#btn-home").click(function(){
        window.location.href="/mdict";
    });
    $("#btn-index").click(function(){
        window.location.href="/";
    });
}

function change_modal(){
    var lw=$("#left-col").width();
    var lh=$("#left-col").height();
    var rw=$("#right-col").width();
    var rh=$("#right-col").height();
    if(lw>400&&rw>400&&lh>0&&rh>0){
        if($("#left-container").is(':hidden')){
            $("#modal-mdict").hide();
            $("#modal-config").hide();
            $("#history-btn").hide();

            $("#left-container").append($("#mdict-filter-input"));
            $("#left-container").append($("#mdict-list-content"));
            $("#left-container").show();

            $("#right-container").append($("#config-content"));
            $("#right-container").append($("#history-content"));
            $("#right-container").show();
        }
    }else{
        if($("#left-container").is(':visible')){
            $("#left-container").hide();
            $("#modal-container-mdict .modal-header").prepend($("#mdict-filter-input"));
            $("#modal-container-mdict .modal-body").append($("#mdict-list-content"));

            $("#right-container").hide();
            $("#modal-container-config .modal-content").append($("#config-content"));
            $("#modal-container-history .modal-body").append($("#history-content"));

            $("#modal-mdict").show();
            $("#modal-config").show();
            $("#history-btn").show();
        }
    }
}

function init_resize_listener(){
    change_modal();
    $(window).resize(change_modal);
}


function init_common(){
    $('html').data('data-pushstate',true);

    init_navbar_link();

    init_modal_config();

    init_autocomplete();

    add_click_event();

    init_btn_group();

    init_dic_group();

    init_resize_listener();

    $(window).bind('popstate', function(e){
        //对pushstate的back和forward进行处理
        var state=window.history.state;
        if(state){
            var query=state['query'];
            var group=state['group']

            var opt=$("#dic-group").find("option[data-pk="+group+"]");
            $('#dic-group').val(opt.text()).selectmenu("refresh");

            $('html').data('data-pushstate',false);

            $("#query").val(html_unescape(query));
            $("#mdict-query").trigger("click");
        }
    });
}

function first_query(){
    var first_query=$("html").attr("data-first-query");

    if(first_query!=''){
        $('#query').val(html_unescape(first_query));
        $('#mdict-query').trigger("click");
    }
}

function init_mdict(){
    init_common();

    get_mdict_list($("#mdict-list-content"),false,false);

    first_query();
}

function init_es(){
    init_common();

    get_mdict_list($("#mdict-list-content"),true,true);

    $('#online-mdict-checkbox').hide();
    //$('#open-close-index').show();
    $('#open-close-index').click(function(){
        init_index();
        $("#init-index-spinner").show();
    })

    first_query();
}

function init_index(){//载入词典列表
    var dic_group=$('#dic-group option:selected').attr('data-pk');
    data={"dic_group":dic_group};
    $.ajax({
        url:"/mdict/initindex/",
        contentType:'json',
        type:'GET',
        data:data,
        success:function(data){
            $("#init-index-spinner").hide();
            if(data.indexOf("success")>-1){
                $("#live-toast-body").text("启停索引已完成。");
                new bootstrap.Toast($("#live-toast")[0]).show();
            }else{
                $("#live-toast-body").text(data);
                new bootstrap.Toast($("#live-toast")[0]).show();
                console.log('error:',data)
            }
            get_index_status();
        },
        error:function(jqXHR,textStatus,errorThrown){
            $("#init-index-spinner").hide();
            alert(jqXHR.responseText);
            get_index_status();
        },
    });
}

function init_scroll_list(){
    if(window.location.href.indexOf("query=")>-1){dic_first=false;}
    query_scroll(0,0,dic_entry_nums,1);

    $("#display_list").attr("data-start-p1",0);
    $("#display_list").attr("data-start-p2",0);
    $("#scroll_list").scroll(function (){
        loadmore($(this),$("#display_list"));
    });
}

function init_dic_range(){
    var dic_pk=$('html').attr('data-dic-pk');
    data={"dic_pk":dic_pk};
    $.ajax({
        url:"/mdict/getlbocknum/",
        contentType:'json',
        type:'GET',
        data:data,
        success:function(data){
            var item=$.parseJSON(data);
            var block_num=item['block_num'];
            var dic_range=$("#dic-range");
            dic_range.attr("max",block_num);
            dic_range.val(0);
            dic_range.on('input propertychange', (e) => {
                var block_num_val=$("#dic-range").val();
                var block_num_val2=block_num_val-parseInt(block_num_val);
                block_num_val=parseInt(block_num_val);
                if(block_num_val==block_num){
                    query_scroll(-1,-1,dic_entry_nums,0);
                }else{
                    query_scroll(block_num_val,block_num_val2,dic_entry_nums,0);
                }
            });
        },
        error:function(jqXHR,textStatus,errorThrown){
            alert(jqXHR.responseText);
        },
    });
}

function init_single_dic(){
    get_header($("#modal-container-brief .modal-body"));

    init_dic_range();

    init_scroll_list();

    init_common();

    get_mdict_list($("#mdict-list-content"),false,false);

    first_query();//第一次查询会不会和初始化的0位置查询冲突？
}

function init_es_dic(){
    get_header($("#modal-container-brief .modal-body"));

    init_common();

    get_mdict_list($("#mdict-list-content"),true,true);

    $('#online-mdict-checkbox').hide();
    //$('#open-close-index').show();
    $('#open-close-index').click(function(){
        init_index();
        $("#init-index-spinner").show();
    })

    first_query();//第一次查询会不会和初始化的0位置查询冲突？
}

function get_main_page(){
    var first_query="main.html";

    if(first_query!=''){
        $('#query').val(html_unescape(first_query));
        $('#mdict-query').trigger("click");
    }
}

function init_zim_dic(){
    get_header($("#modal-container-brief .modal-body"));

    init_common();

    get_mdict_list($("#mdict-list-content"),false,false);

    get_main_page();
}
