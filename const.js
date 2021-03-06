const colors = [
  "#F0F8FF",
  "#FAEBD7",
  "#00FFFF",
  "#7FFFD4",
  "#F0FFFF",
  "#F5F5DC",
  "#FFE4C4",
  "#FFEBCD",
  "#0000FF",
  "#8A2BE2",
  "#A52A2A",
  "#DEB887",
  "#5F9EA0",
  "#7FFF00",
  "#D2691E",
  "#FF7F50",
  "#6495ED",
  "#FFF8DC",
  "#DC143C",
  "#00FFFF",
  "#00008B",
  "#008B8B",
  "#B8860B",
  "#A9A9A9",
  "#006400",
  "#BDB76B",
  "#8B008B",
  "#556B2F",
  "#FF8C00",
  "#9932CC",
  "#8B0000",
  "#E9967A",
  "#8FBC8F",
  "#483D8B",
  "#2F4F4F",
  "#00CED1",
  "#9400D3",
  "#FF1493",
  "#00BFFF",
  "#696969",
  "#1E90FF",
  "#B22222",
  "#FFFAF0",
  "#228B22",
  "#FF00FF",
  "#DCDCDC",
  "#F8F8FF",
  "#FFD700",
  "#DAA520",
  "#808080",
  "#008000",
  "#ADFF2F",
  "#F0FFF0",
  "#FF69B4",
  "#CD5C5C",
  "#4B0082",
  "#FFFFF0",
  "#F0E68C",
  "#E6E6FA",
  "#FFF0F5",
  "#7CFC00",
  "#FFFACD",
  "#ADD8E6",
  "#F08080",
  "#E0FFFF",
  "#FAFAD2",
  "#D3D3D3",
  "#90EE90",
  "#FFB6C1",
  "#FFA07A",
  "#20B2AA",
  "#87CEFA",
  "#778899",
  "#B0C4DE",
  "#FFFFE0",
  "#00FF00",
  "#32CD32",
  "#FAF0E6",
  "#FF00FF",
  "#800000",
  "#66CDAA",
  "#0000CD",
  "#BA55D3",
  "#9370DB",
  "#3CB371",
  "#7B68EE",
  "#00FA9A",
  "#48D1CC",
  "#C71585",
  "#191970",
  "#F5FFFA",
  "#FFE4E1",
  "#FFE4B5",
  "#FFDEAD",
  "#000080",
  "#FDF5E6",
  "#808000",
  "#6B8E23",
  "#FFA500",
  "#FF4500",
  "#DA70D6",
  "#EEE8AA",
  "#98FB98",
  "#AFEEEE",
  "#DB7093",
  "#FFEFD5",
  "#FFDAB9",
  "#CD853F",
  "#FFC0CB",
  "#DDA0DD",
  "#B0E0E6",
  "#800080",
  "#663399",
  "#FF0000",
  "#BC8F8F",
  "#4169E1",
  "#8B4513",
  "#FA8072",
  "#F4A460",
  "#2E8B57",
  "#FFF5EE",
  "#A0522D",
  "#C0C0C0",
  "#87CEEB",
  "#6A5ACD",
  "#708090",
  "#FFFAFA",
  "#00FF7F",
  "#4682B4",
  "#D2B48C",
  "#008080",
  "#D8BFD8",
  "#FF6347",
  "#40E0D0",
  "#EE82EE",
  "#F5DEB3",
  "#F5F5F5",
  "#FFFF00",
  "#9ACD32",
  "#012e56"
];
const kana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん"

const characters = "日一人年大十二本中出三見月生五上四金九入学円子八六下気小七山女百先名川千水国長男時行分後前間東今高校土外木来車話北午書半白西電天語聞食何南火右万左休毎立手力目田正母文読友会同自社父地方新場口町明京空通言理体雨作用強足公野思家多心教早元近考画海売知道計事朝字発台広音者業員開少問代工動止主題切意度持花赤青世安楽院店界親重集物使品死始運終答夜住帰真古有歌買急送図週室歩転不風紙研黒春以究起着病待族色銀走秋村夏医合仕市去別内味回写米特夕当首注石料建悪数記点活原交組館引屋試験直英対部相定実決全表習調曜化駅期番取都和平算肉受区洋竹県進森線指旅声予向勝面委形鳥反林頭質所次門王係感投冬打島犬両服式議民連昼茶談流谷玉選局放関私光球科戦弟最細丸役身約太由法的要治成飲消神戸協牛機魚加配兄続育改乗初想農州産助府園共得追馬商葉告軍落参利信勉負側求顔昨守官映美命変福各政横深果船申必様港争無位置草階羽路経借現他費付橋説岸客性岩夫制務登速角央総号害副領妹席設池残堂支星念根姉象報苦労例然具解資際査伝働景飯好判寺賞辺遠低在件団絵任鉄失差課末返増極種短情油示量望植宿薬観察確型倍勢減容党演達能良再弱格候史過波満敗税管常兵状営職積可構録省比第防幸練周軽材断晴等境規術飛殺導曲備単庭完貸輸血述競権温武給済庫歴限辞額漢坂愛耳未退準認息造技航復冷虫移雪類個児論印輪板非列熱革清氏覚遊億芸君財識毛便停陸疑程帯努固接散章静宮効供喜囲卒割旧酒順難黄補悲結秒優師収易雲老令糸券宅暗徒破編警貨鳴責訪案採季陽域欠因皮底富整担歯貿講挙河柱願希祭適婦寄筆余禁逆童若笑脳久束妻仲暴栄札蔵段険均圧許畑呼緑包礼留罪針専折昔値統精則焼測豊厚泳保略処承荷照絶否版存損才座仏績築除降混並危居雑招永炭刊像将基漁昭賛松貯犯価布貝提装諸票亡劇湖応湯箱訓浴検複塩器似背士証麦迷夢兆燃歳署級祝健延護態預乱衣条幹与独氷寒隊率群派庁臣城拾衛浅違張層里裏義勤策困快著誌評標勇刻械菜欧宇被製刷渡欲痛枚郵含裁司探康授孫骨届巻況慣鼻紀閉毒博救突展暮液簡貧視臓律祖湾修織故矢弁功粉純捜超吸療株素養捕街姿閣翌介益衆片敬迎販泉幅彼般節舞忘込皿興推郡宝詩換胸砂占鉱誤灯討頼洗途枝憲抜尊伸激窓爆系胃批普盟志婚齢典従幼浮拡押倒了就患丁異絡厳募捨払綿遺銅昇倉腹遅乳模唱紅属冊香更宣抱恐盛耕卵戻皇巨臨震干頂越企触旗依籍汚源豆創障互筋災沢暑逃善援傾帳梅施銭緒跡駐紹井晩謝雇替鮮仮密拝賀我棒贈幕染薄傷奥詰掛双刺到秘監環寝徳審盗訴刀弓牧縮悩御影泣蒸撃荒佐核硬序融射埋舎揮渉袋響賃吹貴封藤娘敵請径攻納崎樹賢督催酸腕至宗及床宙離桜詞操柔句摘脈郎誕殿濃孝肩机零訳怒鏡看泊杯奏振郷甘掃掘献灰疲皆維己軟浜沈塁邦墓汽忠凍遣煙抗沿雄恋誠緊巣郊腰俳踊眠廃怖江珍僚飼聖吉羊喫踏壊債恩儀溶往継闘葬避涙匹逮鋭迫潮惑崩聴芽脱肥塗軒鋼笛締俵執叫縦房撤削措載乾陣為抑祈眼択秀髪徴忙弾償拠拒刑塚致繰尾描汗仁鈴盤項喪伴懸湿腸契掲躍棄瓶邸咲還穴潔召慮暖缶朗隻枠脂恵露沖伊肺緩肌需靴購充鈍恥貢却端熟獲泥併徹衝焦奪陛隅浦偶析辛磨譲称挑誘紛促慎控握姓筒俊粒渋銃偉糖携診託撮侵括駆透津壁稲畳裂敏是排裕堅芝綱膚覧扱顧訟戒祉誉歓奮勧奈騒閥甲濯縄猫揺免既薦塔隣沸華範隠哲菓杉釈幾妥威豪滞微隆症暫帽肝喚妙枯索后襲懇班柄驚麻舌剤瀬趣陥斎貫仙慰涼舟旬兼旨即柳偽較覇符詳抵脅憎鹿茂肯犠距雅飾燥網竜繁畜翼潟魅嫌坊斉敷擁寸圏罰滅礎腐脚智磁尽僕滑孤炎賠挟寿頑鎖彩摩励輝蓄軸巡稼瞬垂砲噴誇祥牲曇秩帝唆阻泰賄撲堀弘菊絞穀縁唯膨耐塾韓漏慶猛芳懲剣彰棋恒岡揚冒倫陳憶潜熊克岳概拘黙偏雰遇彦諮狭卓阿糧阪簿炉殊殖艦輩奇慢謀拍李丈浩寛覆胞隔浄没暇貞鑑陰銘滴随烈尋稿丹啓丘棟壌漫玄粘悟舗妊騰遂狂岐緯培衰艇屈淡抽披廷准奨浸剰胆繊虚霊悔諭絹惨虐翻墜沼据徐搭盾滝軌妨擦尺鯨荘諾雷漂懐勘栽拐駄添冠斜宏浪亜詐壇勲魔酬紫紋卸欄逸涯拓獄尚彫穏顕巧矛垣欺釣粧之粛愚遭架鬼庶梨稚滋幻煮姫須誓把践呈疎仰剛疾征砕謡亀嫁謙伺嘆菌頻琴棚酷鶴宰廊寂昌伏碁俗漠邪晶墨鎮靖洞履劣殴娠奉憂朴亭也怪酔惜穫佳潤旭悼乏該赴桑髄盆穂壮堤飢傍疫累痴搬癒錦郭磯尿凶吐宴賓虜駒陶鐘憾昆粗訂傘騎寧循忍怠如寮鉛珠凝苗獣哀跳匠蛇澄縫僧眺唐呉凡憩聡溝恭刈睡錯伯曙陵霧魂弊妃舶餓窮掌麗臭悦刃縛暦宜盲粋辱轄萩猿弦窒炊栗洪摂飽嘉冗桃狩朱渦紳枢碑鍛鼓裸猶塊旋幣膜扇槽慈鎌伐蚕漬糾墳坪埼紺慌娯辰霞羅峡俸厘峰醸弔乙汁尼遍衡那薫猟款閲淳偵喝敢胎酵憤豚鳩遮扉硫赦窃泡又慨紡恨肪桂扶戯虎忌晋濁奔斗迅肖鉢朽殻享晃桐藩媒鶏禅嘱鷹胴迭挿猪紘弥陪剖譜庄悠淑敦帆暁傑奴祐錠鵬遷拙侍峠篤渇叔雌堪叙酢亘吟逓甚媛崇笹漆岬癖愉礁屯姻綾擬塀唇閑幽毅曹詠稔卑侮鋳抹尉隷禍酪茎帥逝匿襟蛍寡痢庸坑楊駿賊搾亮畔狙孔茨吾椿拷嬢渓翁圭廉蓮謹窯褒醜升殉煩菱劾堕租桟婿慕瑞罷矯某囚伍泌蘭漸蚊秦茅厄藻沙輔嫡嵐椎嚇凸郁韻霜硝楠勅玲棺幌儒拳翔肇愁曽楼亨薪褐嶺喬賜繕栓寅乃凹洲梶樺槙巌睦錬胡峻衷逐斥槻蝶詔琢蕉宵琉妄朋藍酌遼唄栃橘漱呂頒苑巽肢杜謄瞳湧欣孜巴嗣禎稜倭畝抄斐魁惰虹鴻蛮於赳葵壱笠禄孟侯尭巳弧暢筑阜芹杏鳳馨慧附葛彬匡但眉欽篠菅芋嵯綜翠鮎榛艶婆俣惣蔦淵隼渚倣柏稀芙辻皐雛惟佑倹耀黛荻渥憧柴惇脩繭甫謁箇且斤虞墾璽勺爵遵錘銑塑脹朕痘弐賦丙耗匁濫吏嬉蒼暉只檀凱彗梓丑畿叶汐絢朔煕伽磐爽黎冴旺萌偲瑠鄭芦允蒔鯉柿遥釧矩腎舜釜瑛彪卯函綺茜鴨凌皓洸脇毬鍋樋緋鯛怜邑碧啄穣酉堺悌瓦窪渕雀畠嶋柚亥胤叡茄侃莞伎誼鞠衿玖袈絃梧瑚倖昂瑳裟哉采燦爾紗竣醇恕捷梢菖丞嵩碩汰旦紬汀凪捺柊楓蕗柾亦麿椋冶耶宥蓉璃瞭諒琳麟伶侑勁奎崚昴晏晨晟栞椰洵滉澪燎燿瑶眸笙綸茉莉菫詢諄迪頌颯凜熙蒲湘灘堰獅鷲芥其誰盧榎俺劉幡諏袖龍妖琵琶蘇闇捉趙樽薩淀哨汎頃梁謎箕爪芭逗鍵楢兜烏奄臼桧宋牙篇此枕菩檜牟榊錫廟逢凧鵜庵膳狼尖冨卿串已粟尻燕綴埴餅魯牡箸迦斑蔭祇鷺袴讃湛堆挺雁佃芯蜜播帖桶匂鞍玩萱梯雫絆湊蜂舵珂嶌峨椅宕喧樟櫛挨濡槍壕粥捧藝倶樫噂洛呆醍砦峯蕨隈凄挫夷杭寓戴裾坐塙葦饗冥萬漕杵粕蒙蕃碓麓瀕姜竪稽蹴或杖蓋畏撫喋溢揃痕巷竿蟹崔拭聯厨犀叢轟貰儲麹賭貼溜炒屏諦煎瓜槌蹄楕詫鱒苫惚藁縞鱗姑釘弛僑壬娃斡宛按謂鰯迂窺姥厩閏云曳甥襖臆禾嘩俄臥駕廻恢晦崖鎧浬恰椛鞄柑徽掬桔砧汲灸笈鋸蕎僅巾禽喰屑窟沓鍬祁詣戟隙桁訣倦捲牽硯舷諺乎糊跨檎醐勾庚梗腔膏閤劫忽昏些叉塞肴柵窄拶錆晒撒珊纂仔斯而竺悉灼惹蒐輯楯嘗裳鞘燭訊錐頗摺棲栖醒戚蹟撰穿羨詮閃噌曾楚疏遡遜陀苔托茸辿坦歎耽馳註酎寵牒柘鼎擢填纏顛兎堵砥套董撞萄鳶沌遁頓薙馴汝賑廿禰祢捻杷煤這秤箔曝莫筈挽庇枇毘疋肘畢紐瓢豹斧葡蕪葺吻焚蔽頁瞥娩鞭圃戊蓬鋒貌卜勃殆昧哩沫迄蔓蓑姪勿尤籾輿傭螺裡掠侶淋憐漣煉簾櫓肋亙椀碗俐凛凰刹巖彌徠惺昊晄曖梛橙櫂煌珈珀琥祿稟穰羚苺萠蕾逞釉驍麒堯槇遙俠摑擊焰瘦禱繡繫萊蔣蠟醬頰鷗卽吞增寬巢徵德揭晚曆橫步歷每涉淚渴溫瀨狀簞綠緖緣薰虛蟬賴郞錄鍊黃黑欄廊朗虜類渚琢祐禎蝦魏丼荏惧銚薮鴈呪眞斬翫嶽怨腫搜焉摯苅藏尹狐鴎瀋狛壷橿股煥燈癌嘘旛篭娼篆鮫牌蒋叱廣襄蛋笘宍薗駈瀧埜盃乘亞佛來傳僞價儉兒凉剩劍勳卷單嚴圈國圓團壞壘壯壽奧奬孃實寢將專峽帶廳彈從恆惡惠愼應懷戰戲拔拜拂搖攝收敍晝曉條榮樂樣檢櫻盜氣淨滯澁濕燒爭爲狹默獸疊盡碎祕禪禮稻穗粹縣縱纖飜聽臟與莊藥衞裝覽謠讓賣轉醉釀鎭鑄陷險雜靜顯騷驗髮鷄齊俱猪神祥福諸都侮僧勉勤卑嘆器墨層悔憎懲敏暑梅海漢煮碑社祉祈祖祝禍穀突節練繁署者臭著視謁謹賓贈逸難響囃餌簗峙舘銕鄒蜷箏鵠諌脊牝笏噺抒叩嫉蔡膝鍾仇恣瞑麺鍼礒咸歪韮薔膠呑茗瘤澤溥訃厦冤剥侠贅喉汪猷曼撚噛桝闊浙彭淘剃徘袁舩頬簑甦檄姚蛭椙贋洒諜蓼甕喘鉾緻哺嗜偕罵頚胚牢糞吊鮭乞嗅蔑轍醤舛謳杞狸"
