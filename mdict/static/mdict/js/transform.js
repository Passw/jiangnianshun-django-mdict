//*===========================================================================
//* (c)copyright 2000 liqwei
//* Email: liqwei(at)liqwei.com
//*  Site: http://www.liqwei.com/
//*===========================================================================
//* 功能：负责简繁体转换，需要放在页面底部；
//* 版本：v1.0；
//*===========================================================================
//功能：转换对象，使用递归，逐层剥到文本；

//功能：转换指定字符串；
function transformText(txt, isFt){
    if(txt==null || txt=="")return ""
    if(parseInt(isFt)){return s2t(txt)}else{return t2s(txt)}
}
//功能：简体字符转为繁体字符；
function s2t(cc){
    var str='',ss=jtpy(),tt=ftpy();
    for(var i=0;i<cc.length;i++){
        var c = cc.charAt(i);
        if(c.charCodeAt(0)>10000&&ss.indexOf(c)!=-1)str+=tt.charAt(ss.indexOf(c));
          else str+=c;
    }
    return str;
}
//功能：繁体字符转为简体字符；
function t2s(cc){
    var str='',ss=jtpy(),tt=ftpy();
    for(var i=0;i<cc.length;i++){
        var c = cc.charAt(i);
        if(c.charCodeAt(0)>10000&&tt.indexOf(c)!=-1)str+=ss.charAt(tt.indexOf(c));
          else str+=c;
    }
    return str;
}
function jtpy(){
    return '锕爱碍蔼皑剀嗳嫒暧瑷硙锿阂霭叆埯谙钳铵阴顸鹌腌袄奥翱嚣媪岙浇硗骜鳌罢坝钯鲅鲌摆败呗办颁绊坂辩钣帮绑镑谤岗纺报饱宝剥鲍鸨龅备贝辈钡狈惫鹎贲绷镚笔闭毕币毙哔复滗筚纰荜虑诐费赑跸铋闬鲾边变编贬辫拼笾缏鳊标镖镳飑飙骠骉鳔别鳖瘪别鳖濒宾摈滨频傧殡缤膑髌鬓并饼槟禀绠拨驳钵铂卜泼发袯钹镈饽馎鹁补扑钚钸碜财蚕残掺参惨惭灿戋浅骖鲹黪仓沧舱苍伧玱鸧艹册侧测厕帻恻栅层缯诧钗锸镲馇侪虿龇单产缠搀阐颤铲谗蝉馋刬啴冁团婵崭惮忏掸浐渐产禅胀蒇裣觇谄谶长场厂尝肠畅偿伥傥尝怅枨玚苌锠阊鲳鲿绰钞唠涛绉诌鼌车彻砗称尘沉陈衬栈榇渖谌闯龀撑诚惩骋枪柽蛏赪铛迟痴齿耻驰炽啸扦抬滞离饬鸱冲虫宠佣桩烛种冲铳丑绸筹踌畴俦帱梼诪雠处锄触橱础储厨雏憷恹绌刍诎诸蹰传创疮怆戗锤邮纯莼辁鹑缀辍镞龊词辞赐兹荠鹚从丛葱聪囱枞纵总苁骢凑薮辏窜蹿攒撺镩缞错营躜锉鹾达哒垯胆荙跶迭鞑带贷绐诒轪递隶叇骀驮担弹诞郸坛殚瘅箪赡当党挡档荡垱凼烫珰疡砀筜裆谠岛盗捣导祷焘鱽灯邓镫敌缔涤籴约莜觌诋谛适镝题点电淀颠垫巅癫钿钓调鸟粜赵轺铞鲷鸼叠谍绖轶鲽鳎钉顶订锭铤饤丢铥动东冻栋岽胨鸫斗读渎窦钭饾独镀赌犊枢椟牍笃锗阇黩断锻缎簖对队兑怼镦吨顿钝炖趸夺堕亸椭泽缍铎饳饿额鹅讹恶疴哑垭垩桠猡谔轭锇锷阏颚鳄鹗腭贰儿饵尔迩铒鲕鸸罚阀珐废酦饭烦贩范矾钒枫沨访钫鲂鳑飞诽绋绯鲱坟奋愤纷粪偾喷豮鲼风缝丰疯冯讽凤锋沣砜赗负缚赋辅妇抚辐肤讣呒绂幞赙锫韨驸鲋鳆凫麸轧夹钆该盖钙赅赶干赣秆尴绀鳡刚钢纲冈戆沟颃镐皋藁缟诰锆个搁阁鸽铬纥钾铪镉闸颌鲄给颈亘赓鲠鹒宫贡巩龚红唝够钩购构区缑觏诟钩鞴鸲顾蛊贾哌谷诂轱毂钴锢馉鲴鸪鹄鹘剐呙挂诖铦鸹哙关观馆惯贯纶掼权沦鳏鹳广扩横犷归贵轨规硅柜龟诡闺刽伪伪刿匦匮妫桧洼绘鲑鳜滚辊浑绲衮锟鲧过国锅涡划埚帼掴椁腘蜗蝈锞馃虾吓为还骇颏汉韩滩钤阚颔绗号灏胶蚝颢贺鹤呵缴蝎诃辂辖阖饸阋鹖龁鸻轰鸿纮荭讧闳闹黉后糇鲘鲎户壶护沪戏浒芦许轷鳠鹕鹱话画华哗婳桦浍狯铧骅坏怀换唤环缓欢涣焕痪奂缳锾镮阛鲩黄谎锽鳇会挥汇辉毁秽贿讳烩诲咴哕晖炜珲缋翚翙荟袆诙违阓韦颒溃荤愍缗诨阍馄伙货获祸钬镬几机鸡积记级极计挤纪际绩缉饥蓟辑剂济齐继击讥叽哜洁玑矶秸结羁蕲虮蚁觊讦迹跻霁骑骥鱾鲫鲚鹡赍齑价驾荚颊挟槚浃蛱郏铗颉见减间键贱检简歼监坚艰荐剑溅涧鉴践捡笺俭碱硷拣舰槛缄茧饯堑戬枧滥睑笕缣纤裥谏谮谫钘钱锏闲险鞯骞鳒鲣鹣咸将讲奖浆酱蒋强桨绛姜螀缰鳉脚较觉娇绞搅骄矫轿饺铰侥乔侨却学峤挢桥纠荞鲛鹪节届阶杰诫疖诘锴鲒进仅紧尽劲锦晋谨烬尽卺浕琎缙荩觐赆锓馑静惊经镜净竞径荆鲸茎痉刭弪泾烃胫迳陉靓颕垧滢荧颎蓥旧厩缪阄鸠鹫举锯剧惧驹据鉅屦榉窭篓蒌讵邹锔飓鲏龃鹃绢桊锩镌隽决绝诀珏谲镢阕阙鞒骙军骏钧匀皲馂鲪开凯垲恺忾岂铠锎闿莶馅龛钪闶铐鲓颗课壳缂轲钶骒恳垦龈硁铿抠妪殴眍库裤喾圣绔夸块侩脍蒉郐鲙宽髋矿况旷圹纩诓诳贶邝亏窥馈岿愦篑聩顷壸裈阃鲲鹍阔蜡腊蓝癞镴来赖莱厉崃徕懒梾涞濑睐籁赉铼兰烂拦篮栏揽缆阑谰澜览岚廪斓榄炼褴襕镧锒阆捞劳涝络崂痨耢铑铹乐饹鳓类泪垒镭缧颣诔里礼历丽砾沥鲤励篱俪呖坜栎枥泺洒牦疠砺粝缡莅苈蓠蚀蛎里跞轹逦郦酾锂铄雳飒骊疬鳢鲡鹂俩连联练莲恋脸链敛怜帘镰涟奁娈挛殓潋琏蔹裢鲢两辆凉粮谅唡蹒辌魉疗辽镣缭钌镠鹩猎临邻鳞赁凛懔檩渗蔺躏辚领铃灵岭龄凌棂绫鲮鸰陆刘馏偻游浏绺铆锍镏飗骝鹠鹨龙拢笼聋垄咙陇咔昽胧栊泷珑眬砻茏庞楼搂娄喽嵝溇瘘耧蝼镂髅录炉卢鲁卤颅庐掳绿虏赂禄噜垆撸摅橹栌氇渌滤泸箓胪舻辘轳镥鲈鹭鸬乱滦峦孪栾脔銮鸾药锊论轮抡伦仑囵罗锣骡箩萝骆逻啰椤烁荦脶镙驴闾榈吕侣铝屡缕褛稆吗妈马骂码玛蚂么么唛嬷杩犸蓦买卖迈麦脉劢荬满瞒蛮馒谩缦螨颟鳗鹲猫贸锚没务没镁霉谜鹛门们闷懑扪焖钔梦锰黾觅弥幂纟沵猕祢芈谧绵缅渑腼面庙纱缈鹋灭闽悯珉闵鳘鸣铭谬万殁无袜谟镆馍谋亩钼纳钠内镎难摊哝馕闹脑恼挠垴桡蛲铙讷馁拟腻泞滠鲵捻撵辇辗鲇酿袅茑镍聂镊啮嗫摄谂蹑陧颞宁拧柠狞咛宁聍苎纽钮浓农脓侬秾驽疟诺傩钕呕欧鸥沤怄瓯纡讴盘丬抛疱狍赔辔鹏苹罴铍骗谝骈飘朴缥贫嫔颦凭评鲆颇钋钷铺谱镤镨气启弃凄栖脐讫启桤渍碛绮蛴锜颀骐鲯鳍牵签铅钎迁谴谦潜佥悭椠缱羟肷荨鹐墙抢呛蔷嫱庆樯炝襁亲跄锖锵镪翘锹窍硚窑缲诮谯跷铫窃惬箧锲寝钦吣嵚揿骎请轻氢倾庼苘鲭穷琼茕巯虬赇鳅趋驱躯龋岖组觑阒驺劝颧绻诠铨鳈确鹊悫让镶饶绕扰娆荛热认韧纫纴讱轫饪驲绒荣镕嵘缛蝾颂铷颥软锐绥润闰萨杀钑赛鳃伞毵糁馓丧颡扫骚缫鳋涩啬穑铯厦赊鲨晒筛术闪删陕缮姗讪钐骟鳝鳣伤赏汤殇绱觞烧绍绡设慑畲厍叶谁婶肾审绅瘆诜声绳胜时师试识驶势释饰狮视实湿诗尸嘘埘浉绎莳谥贳轼铈铊鲺鲥鸤兽寿绶书树数输属赎竖纾纻镯鹬帅闩双骦鹴税说顺硕丝饲咝厮缌蛳锶飔饴驷鸶耸诵怂讼松擞锼飕馊诉苏肃缩稣谡骕鹔岁随虽谇孙损笋狲荪锁琐唢牺献獭挞沓阘闼态钛鲐谈叹贪瘫谭昙赕钽锬镗铴饧讨绦绦绹鼗韬职铽腾誊体锑屉绨缇跃锡鳀鹈觍阗条鲦龆铁贴听厅颋铜统恸鲖头绣谕图涂秃钍专抟砖颓蜕脱饨鲀驼鸵箨萚饦鼍娲污腽弯湾顽塆纨绾苋网辋为围伟卫维谓潍纬苇遗帏沩涠玮猬诿闱韪喂鲔鳂问闻稳温纹愠缊蕴辒阌韫鳁瓮鹟窝卧挝癯莴龌雾误钨呜吴乌诬芜坞于妩庑御怃邬铻骛鹀鹉鹜龉细袭习铣系屃玺绤胁觋诶郄饻饩鳛峡狭侠煅硖线县现显闲鲜衔锨贤宪羡娴岘崄挦猃狝痫籼藓蚬跹轩鹇项响乡厢详缃芗饷飨骧鲞销萧晓哓枭泶潇箫蟏骁鸮写谢泻协谐携撷绁缬亵锌寻衅兴慭镡荥铏骍汹讻诇锈馐鸺须虚续叙绪吁溆诩谞顼选悬绚癣碹璇谖铉镟馔峃嚯鳕讯训驯逊勋询埙浔鲟压鸭亚鸦讶厌娅挜札氩痖烟盐严验艳阉砚彦谚颜阎俨兖厣滟檐觃讠谳赝这酽闫靥颜餍魇黡鼹龂样养扬痒杨阳鸯旸炀锳钖飏摇谣遥瑶尧钥峣犹飖鳐鹞业爷页晔烨谒邺铘余馌亿医仪异译彝谊艺颐忆义诣议铱勚呓峄怿择瘗祎缢舣贻钇镒镱驿鹢鹝鹥银饮隐荫瘾铟骃应蝇赢鹰颖莹婴樱缨萤嘤茔撄颍潆璎瘿绬萦罂鸴莺鹦哟涌拥咏踊痈镛颙鲬鳙优铀忧诱莸铕鱿鲉与鱼语狱渔誉娱舆屿预驭俣伛嵛欤滪玙蓣觎谀钰阈饫郁鹆远员圆愿园缘渊鸳辕橼贠陨鸢鹓鼋阅岳悦粤彟钺云运晕韵酝郧恽殒氲涢纭赟郓杂扎臜灾载暂赞瓒赞趱錾脏赃脏驵灶枣凿唣则责啧箦谪赜贼鲗赠综锃诈铡咤揸鲊鲝齄债斋战盏毡绽斩谵飐骣鹯张帐涨账诏钊蛰辙詟辄鹧鸷阵镇针诊贞侦桢浈祯纼缜赈轸鸩帧睁争挣证郑狰峥筝诤钲铮纸质帜织执挚掷栀栉絷制觯志贽跖踯踬轵轾铚只骘钟肿众终冢众钟皱轴昼骤纣荮诹赒辀猪筑贮铸嘱驻瞩诛伫槠橥潴铢转赚啭颛装庄壮状妆坠锥赘缒骓谆准浊诼资咨眦缁谘赀辎锱镃鲻踪偬骔鲰诅钻缵鳟历';
}
function ftpy(){
    return '錒愛礙藹皚剴噯嬡曖璦磑鎄閡靄靉垵諳鉗銨陰頇鵪醃襖奧翺囂媼嶴澆磽驁鼇罷壩鈀鮁鮊擺敗唄辦頒絆阪辯鈑幫綁鎊謗崗紡報飽寶剝鮑鴇齙備貝輩鋇狽憊鵯賁繃鏰筆閉畢幣斃嗶複潷篳紕蓽慮詖費贔蹕鉍閈鰏邊變編貶辮拚籩緶鯿標鏢鑣颮飆驃驫鰾別鼈癟彆鱉瀕賓擯濱頻儐殯繽臏髕鬢並餅檳稟綆撥駁缽鉑蔔潑發襏鈸鎛餑餺鵓補撲鈈鈽磣財蠶殘摻參慘慚燦戔淺驂鯵黲倉滄艙蒼傖瑲鶬艸冊側測廁幘惻柵層繒詫釵鍤鑔餷儕蠆齜單産纏攙闡顫鏟讒蟬饞剗嘽囅團嬋嶄憚懺撣滻漸產禪脹蕆襝覘諂讖長場廠嘗腸暢償倀儻嚐悵棖瑒萇錩閶鯧鱨綽鈔嘮濤縐謅鼂車徹硨稱塵沈陳襯棧櫬瀋諶闖齔撐誠懲騁槍檉蟶赬鐺遲癡齒恥馳熾嘯扡擡滯離飭鴟沖蟲寵傭樁燭種衝銃醜綢籌躊疇儔幬檮譸讎處鋤觸櫥礎儲廚雛怵懨絀芻詘諸躕傳創瘡愴戧錘郵純蓴輇鶉綴輟鏃齪詞辭賜茲薺鶿從叢蔥聰囪樅縱總蓯驄湊藪輳竄躥攢攛鑹縗錯營躦銼鹺達噠墶膽薘躂叠韃帶貸紿詒軑遞隸靆駘馱擔彈誕鄲壇殫癉簞贍當黨擋檔蕩壋氹燙璫瘍碭簹襠讜島盜搗導禱燾魛燈鄧鐙敵締滌糴約蓧覿詆諦適鏑題點電澱顛墊巔癲鈿釣調鳥糶趙軺銱鯛鵃疊諜絰軼鰈鰨釘頂訂錠鋌飣丟銩動東凍棟崠腖鶇鬥讀瀆竇鈄餖獨鍍賭犢樞櫝牘篤鍺闍黷斷鍛緞籪對隊兌懟鐓噸頓鈍燉躉奪墮嚲橢澤綞鐸飿餓額鵝訛惡屙啞埡堊椏玀諤軛鋨鍔閼顎鱷鶚齶貳兒餌爾邇鉺鮞鴯罰閥琺廢醱飯煩販範礬釩楓渢訪鈁魴鰟飛誹紼緋鯡墳奮憤紛糞僨噴豶鱝風縫豐瘋馮諷鳳鋒灃碸賵負縛賦輔婦撫輻膚訃嘸紱襆賻錇韍駙鮒鰒鳧麩軋夾釓該蓋鈣賅趕幹贛稈尷紺鱤剛鋼綱岡戇溝頏鎬臯槁縞誥鋯個擱閣鴿鉻紇鉀鉿鎘閘頜魺給頸亙賡鯁鶊宮貢鞏龔紅嗊夠鈎購構區緱覯詬鉤韝鴝顧蠱賈呱穀詁軲轂鈷錮餶鯝鴣鵠鶻剮咼掛詿銛鴰噲關觀館慣貫綸摜權淪鰥鸛廣擴橫獷歸貴軌規矽櫃龜詭閨劊僞偽劌匭匱媯檜窪繪鮭鱖滾輥渾緄袞錕鯀過國鍋渦劃堝幗摑槨膕蝸蟈錁餜蝦嚇為還駭頦漢韓灘鈐闞頷絎號灝膠蠔顥賀鶴嗬繳蠍訶輅轄闔餄鬩鶡齕鴴轟鴻紘葒訌閎鬨黌後餱鮜鱟戶壺護滬戲滸蘆許軤鱯鶘鸌話畫華嘩嫿樺澮獪鏵驊壞懷換喚環緩歡渙煥瘓奐繯鍰鐶闤鯇黃謊鍠鰉會揮匯輝毀穢賄諱燴誨噅噦暉煒琿繢翬翽薈褘詼違闠韋頮潰葷湣緡諢閽餛夥貨獲禍鈥鑊幾機雞積記級極計擠紀際績緝饑薊輯劑濟齊繼擊譏嘰嚌潔璣磯稭結羈蘄蟣蟻覬訐跡躋霽騎驥魢鯽鱭鶺齎齏價駕莢頰挾檟浹蛺郟鋏頡見減間鍵賤檢簡殲監堅艱薦劍濺澗鑒踐撿箋儉堿鹼揀艦檻緘繭餞塹戩梘濫瞼筧縑纖襇諫譖譾鈃錢鐧閒險韉騫鰜鰹鶼鹹將講獎漿醬蔣強槳絳薑螿韁鱂腳較覺嬌絞攪驕矯轎餃鉸僥喬僑卻學嶠撟橋糾蕎鮫鷦節屆階傑誡癤詰鍇鮚進僅緊盡勁錦晉謹燼儘巹濜璡縉藎覲贐鋟饉靜驚經鏡淨競徑荊鯨莖痙剄弳涇烴脛逕陘靚頴坰瀅熒熲鎣舊廄繆鬮鳩鷲舉鋸劇懼駒據钜屨櫸窶簍蔞詎鄒鋦颶鮍齟鵑絹棬錈鐫雋決絕訣玨譎钁闋闕鞽騤軍駿鈞勻皸餕鮶開凱塏愷愾豈鎧鐦闓薟餡龕鈧閌銬鮳顆課殼緙軻鈳騍懇墾齦硜鏗摳嫗毆瞘庫褲嚳聖絝誇塊儈膾蕢鄶鱠寬髖礦況曠壙纊誆誑貺鄺虧窺饋巋憒簣聵頃壼褌閫鯤鶤闊蠟臘藍癩鑞來賴萊厲崍徠懶棶淶瀨睞籟賚錸蘭爛攔籃欄攬纜闌讕瀾覽嵐廩斕欖煉襤襴鑭鋃閬撈勞澇絡嶗癆耮銠鐒樂餎鰳類淚壘鐳縲纇誄裏禮曆麗礫瀝鯉勵籬儷嚦壢櫟櫪濼灑犛癘礪糲縭蒞藶蘺蝕蠣裡躒轢邐酈釃鋰鑠靂颯驪鬁鱧鱺鸝倆連聯練蓮戀臉鏈斂憐簾鐮漣奩孌攣殮瀲璉蘞褳鰱兩輛涼糧諒啢蹣輬魎療遼鐐繚釕鏐鷯獵臨鄰鱗賃凜懍檁滲藺躪轔領鈴靈嶺齡淩欞綾鯪鴒陸劉餾僂遊瀏綹鉚鋶鎦飀騮鶹鷚龍攏籠聾壟嚨隴哢曨朧櫳瀧瓏矓礱蘢龐樓摟婁嘍嶁漊瘺耬螻鏤髏錄爐盧魯鹵顱廬擄綠虜賂祿嚕壚擼攄櫓櫨氌淥濾瀘籙臚艫轆轤鑥鱸鷺鸕亂灤巒孿欒臠鑾鸞藥鋝論輪掄倫侖圇羅鑼騾籮蘿駱邏囉欏爍犖腡鏍驢閭櫚呂侶鋁屢縷褸穭嗎媽馬罵碼瑪螞麼麽嘜嬤榪獁驀買賣邁麥脈勱蕒滿瞞蠻饅謾縵蟎顢鰻鸏貓貿錨冇務沒鎂黴謎鶥門們悶懣捫燜鍆夢錳黽覓彌冪糸濔獼禰羋謐綿緬澠靦麵廟紗緲鶓滅閩憫瑉閔鰵鳴銘謬萬歿無襪謨鏌饃謀畝鉬納鈉內鎿難攤噥饢鬧腦惱撓堖橈蟯鐃訥餒擬膩濘灄鯢撚攆輦輾鯰釀嫋蔦鎳聶鑷齧囁攝諗躡隉顳甯擰檸獰嚀寧聹苧紐鈕濃農膿儂穠駑瘧諾儺釹嘔歐鷗漚慪甌紆謳盤爿拋皰麅賠轡鵬蘋羆鈹騙諞駢飄樸縹貧嬪顰憑評鮃頗釙鉕鋪譜鏷鐠氣啓棄淒棲臍訖啟榿漬磧綺蠐錡頎騏鯕鰭牽簽鉛釺遷譴謙潛僉慳槧繾羥膁蕁鵮牆搶嗆薔嬙慶檣熗繈親蹌錆鏘鏹翹鍬竅礄窯繰誚譙蹺銚竊愜篋鍥寢欽唚嶔撳駸請輕氫傾廎檾鯖窮瓊煢巰虯賕鰍趨驅軀齲嶇組覷闃騶勸顴綣詮銓鰁確鵲愨讓鑲饒繞擾嬈蕘熱認韌紉紝訒軔飪馹絨榮鎔嶸縟蠑頌銣顬軟銳綏潤閏薩殺鈒賽鰓傘毿糝饊喪顙掃騷繅鰠澀嗇穡銫廈賒鯊曬篩術閃刪陝繕姍訕釤騸鱔鱣傷賞湯殤緔觴燒紹綃設懾佘厙葉誰嬸腎審紳瘮詵聲繩勝時師試識駛勢釋飾獅視實濕詩屍噓塒溮繹蒔諡貰軾鈰鉈鯴鰣鳲獸壽綬書樹數輸屬贖豎紓紵鐲鷸帥閂雙驦鸘稅說順碩絲飼噝廝緦螄鍶颸飴駟鷥聳誦慫訟鬆擻鎪颼餿訴蘇肅縮穌謖驌鷫歲隨雖誶孫損筍猻蓀鎖瑣嗩犧獻獺撻遝闒闥態鈦鮐談歎貪癱譚曇賧鉭錟鏜鐋餳討縧絛綯鞀韜職鋱騰謄體銻屜綈緹躍錫鯷鵜覥闐條鰷齠鐵貼聽廳頲銅統慟鮦頭繡諭圖塗禿釷專摶磚頹蛻脫飩魨駝鴕籜蘀飥鼉媧汙膃彎灣頑壪紈綰莧網輞爲圍偉衛維謂濰緯葦遺幃溈潿瑋蝟諉闈韙餵鮪鰃問聞穩溫紋慍縕蘊轀閿韞鰮甕鶲窩臥撾臒萵齷霧誤鎢嗚吳烏誣蕪塢於嫵廡禦憮鄔鋙騖鵐鵡鶩齬細襲習銑係屭璽綌脅覡誒郤餏餼鰼峽狹俠煆硤線縣現顯閑鮮銜鍁賢憲羨嫻峴嶮撏獫獮癇秈蘚蜆躚軒鷳項響鄉廂詳緗薌餉饗驤鯗銷蕭曉嘵梟澩瀟簫蠨驍鴞寫謝瀉協諧攜擷絏纈褻鋅尋釁興憖鐔滎鉶騂洶訩詗鏽饈鵂須虛續敘緒籲漵詡諝頊選懸絢癬镟璿諼鉉鏇饌嶨謔鱈訊訓馴遜勳詢塤潯鱘壓鴨亞鴉訝厭婭掗劄氬瘂煙鹽嚴驗豔閹硯彥諺顔閻儼兗厴灩簷覎訁讞贗這釅閆靨顏饜魘黶鼴齗樣養揚癢楊陽鴦暘煬鍈鍚颺搖謠遙瑤堯鑰嶢猶颻鰩鷂業爺頁曄燁謁鄴鋣餘饁億醫儀異譯彜誼藝頤憶義詣議銥勩囈嶧懌擇瘞禕縊艤貽釔鎰鐿驛鷁鷊鷖銀飲隱蔭癮銦駰應蠅贏鷹穎瑩嬰櫻纓螢嚶塋攖潁瀠瓔癭緓縈罌鴬鶯鸚喲湧擁詠踴癰鏞顒鯒鱅優鈾憂誘蕕銪魷鮋與魚語獄漁譽娛輿嶼預馭俁傴崳歟澦璵蕷覦諛鈺閾飫鬱鵒遠員圓願園緣淵鴛轅櫞貟隕鳶鵷黿閱嶽悅粵彠鉞雲運暈韻醞鄖惲殞氳溳紜贇鄆雜紮臢災載暫贊瓚讚趲鏨髒贓臟駔竈棗鑿唕則責嘖簀謫賾賊鰂贈綜鋥詐鍘吒摣鮓鮺齇債齋戰盞氈綻斬譫颭驏鸇張帳漲賬詔釗蟄轍讋輒鷓鷙陣鎮針診貞偵楨湞禎紖縝賑軫鴆幀睜爭掙證鄭猙崢箏諍鉦錚紙質幟織執摯擲梔櫛縶製觶誌贄蹠躑躓軹輊銍隻騭鍾腫衆終塚眾鐘皺軸晝驟紂葤諏賙輈豬築貯鑄囑駐矚誅佇櫧櫫瀦銖轉賺囀顓裝莊壯狀妝墜錐贅縋騅諄準濁諑資谘眥緇諮貲輜錙鎡鯔蹤傯騌鯫詛鑽纘鱒歷';
}
//function jtpy(){
//    return '万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勐勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤唿啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾鼋鼌鼍鼗鼹齄齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟志制咨只里系范松没尝尝闹面准钟别闲干尽脏拼历'
//}
//function ftpy(){
//    return '萬與醜專業叢東絲丟兩嚴喪個爿豐臨為麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價眾優夥會傴傘偉傳傷倀倫傖偽佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農塚馮衝決況凍淨淒涼淩減湊凜幾鳳鳧憑凱擊氹鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳猛勩勻匭匱區醫華協單賣盧鹵臥衛卻巹廠廳曆厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號歎嘰籲後嚇呂嗎唚噸聽啟吳嘸囈嘔嚦唄員咼嗆嗚詠哢嚨嚀噝吒噅鹹呱響啞噠嘵嗶噦嘩噲嚌噥喲嘜嗊嘮啢嗩唕喚呼嘖嗇囀齧囉嘽嘯噴嘍嚳囁嗬噯噓嚶囑嚕劈囂謔團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壟壚壘墾坰堊墊埡墶壋塏堖塒塤堝墊垵塹墮壪牆壯聲殼壺壼處備複夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗媯姍薑婁婭嬈嬌孌娛媧嫻嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屭屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崠巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔崳嶁脊巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠禦憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣湣慍憤憒願懾憖怵懣懶懍戇戔戲戧戰戩戶紮撲扡執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據撚擄摑擲撣摻摜摣攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖劄術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒棬椏橈楨檔榿橋樺檜槳樁夢檮棶檢欞槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞簷檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳彙漢汙湯洶遝溝沒灃漚瀝淪滄渢溈滬濔濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗湧濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣濕潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦濫瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煆糊溜愛爺牘犛牽犧犢強狀獷獁猶狽麅獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽瑉玨琺瓏璫琿璡璉瑣瓊瑤璦璿瓔瓚甕甌電畫暢佘疇癤療瘧癘瘍鬁瘡瘋皰屙癰痙癢瘂癆瘓癇癡癉瘮瘞瘺癟癱癮癭癩癬癲臒皚皺皸盞鹽監蓋盜盤瞘眥矓著睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜矽碩硤磽磑礄確鹼礙磧磣堿镟滾禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌簽簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糸糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺絏紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽緔緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒韁繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚膁腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艸藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞蓧萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪槁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襇褸襤繈襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖穀豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗讚贇贈贍贏贛赬趙趕趨趲躉躍蹌蹠躒踐躂蹺蹕躚躋踴躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郤郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏钜鑒鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷缽鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐧銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦鍁錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閑閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉韝韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飆飛饗饜飣饑飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鯰鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鯰鯛鯨鯵鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鼇鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鴬鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鶤鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽黿鼂鼉鞀鼴齇齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜誌製谘隻裡係範鬆冇嚐嘗鬨麵準鐘彆閒乾儘臟拚歷'
//}
//function jtpy(){
//    return '皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙闭边编贬变辩辫鳖瘪濒滨宾摈饼拨钵铂驳卜补参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔点垫电淀钓调迭谍叠钉顶锭订东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾剐关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪篱离里鲤礼丽厉励砾历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥觅绵缅庙灭悯闽鸣铭谬谋亩钠纳难挠脑恼闹馁腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞国爱赔喷鹏骗飘频贫苹凭评泼颇扑铺朴谱脐齐骑岂启气弃讫牵扦钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛伞丧骚扫涩杀纱筛晒闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽绥岁孙损笋缩琐锁獭挞抬摊贪瘫滩坛谭谈叹汤烫涛绦腾誊锑题体屉条贴铁厅听烃铜统头图涂团颓蜕脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝呜钨乌诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧销晓啸蝎协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许绪续轩悬选癣绚学勋询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮樱婴鹰应缨莹萤营荧蝇颖哟拥佣痈踊咏涌优忧邮铀犹游诱舆鱼渔娱与屿语吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣灶责择则泽贼赠扎札轧铡闸诈斋债毡盏斩辗崭栈战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰帧郑证织职执纸挚掷帜质钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆浊兹资渍踪综总纵邹诅组钻致钟么为只凶准启板里雳余链泄';
//}
//function ftpy(){
//    return '皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃閉邊編貶變辯辮鼈癟瀕濱賓擯餅撥缽鉑駁蔔補參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締點墊電澱釣調叠諜疊釘頂錠訂東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗臯鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴彙諱誨繪葷渾夥獲貨禍擊機積饑譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚籬離裏鯉禮麗厲勵礫曆瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麽黴沒鎂門悶們錳夢謎彌覓綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓腦惱鬧餒膩攆撚釀鳥聶齧鑷鎳檸獰甯擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐國愛賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪樸譜臍齊騎豈啓氣棄訖牽扡釺鉛遷簽謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽傘喪騷掃澀殺紗篩曬閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖綏歲孫損筍縮瑣鎖獺撻擡攤貪癱灘壇譚談歎湯燙濤縧騰謄銻題體屜條貼鐵廳聽烴銅統頭圖塗團頹蛻脫鴕馱駝橢窪襪彎灣頑萬網韋違圍爲濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩嗚鎢烏誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈鍁鮮纖鹹賢銜閑顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許緒續軒懸選癬絢學勳詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴顔閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲櫻嬰鷹應纓瑩螢營熒蠅穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘輿魚漁娛與嶼語籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗竈責擇則澤賊贈紮劄軋鍘閘詐齋債氈盞斬輾嶄棧戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙幀鄭證織職執紙摯擲幟質鍾終種腫衆謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄濁茲資漬蹤綜總縱鄒詛組鑽緻鐘麼為隻兇準啟闆裡靂餘鍊洩';
//}