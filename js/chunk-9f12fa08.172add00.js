(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f12fa08"],{"1c59":function(t,e,s){"use strict";var a=s("6d61"),n=s("6566");a("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n)},"39dd":function(t,e,s){"use strict";s.r(e);var a=s("1da1"),n=(s("e7e5"),s("d399")),c=(s("d3b7"),s("25f0"),s("6062"),s("3ca3"),s("ddb0"),s("96cf"),s("7a23")),r=s("3de1"),i=s("6779"),l=s("0d17"),u=s("6be8"),b=(s("f726"),s("bae1")),o=s("238b"),d=s("f7fe"),j=s.n(d),O={class:"container max-w-26rem px-15px mx-auto pb-2rem community"},m=Object(c["j"])("div",{class:"font-bold text-center mt-5 mb-3 text-primaryColor"},"-- 增发算力配置 --",-1),f=Object(c["j"])("div",null,"用户地址",-1),p={class:"border-1 border-primaryColor py-10px rounded-full"},h=Object(c["j"])("div",{class:"mt-2"},"USDT",-1),x={class:"border-1 border-primaryColor py-10px rounded-full"},v=Object(c["j"])("div",{class:"mt-2"},"算力",-1),y={class:"border-1 border-primaryColor py-10px rounded-full"},L=Object(c["j"])("div",{class:"mt-2"},"等级",-1),R=Object(c["l"])("共识者"),g=Object(c["l"])("节点"),w=Object(c["l"])("工会"),A=Object(c["l"])("天使"),U=Object(c["k"])('<div class="flex justify-between items-center mt-2"><span class="basis-2/5">地址</span><span class="basis-1/5">算力</span><span class="basis-1/5">USDT</span><span class="basis-1/5 text-right">等级</span></div>',1),k={class:"address basis-2/5"},C={class:"basis-1/5 font-bold text-primaryColor"},D={class:"basis-1/5 font-bold text-primaryColor"},S={class:"basis-1/5 font-bold text-primaryColor text-right"},T={setup:function(t){var e=Object(c["q"])("chainInfo"),s=Object(o["a"])(),d=s.miningContract,T=s.getConfigData,V=function(t){return!!i["utils"].isAddress(t)||(Object(n["a"])("请输入正确的用户地址"),!1)},H=(Object(c["I"])(""),Object(c["H"])({hashRate:"",totalHashRate:"",performance:"",mintHashRate:""}),["共识者","节点","工会","天使"]),_=Object(c["H"])({address:"",hashRate:"",uAmount:"",level:0,addressList:[],hashRateList:[],uAmountList:[],levelList:[]}),N=j()((function(){Object(r["a"])(_.uAmount)&&(_.hashRate=l["a"].from(_.uAmount).mulUnsafe(l["a"].from("2")).toString())}),1500),I=new Set,J=function(){V(_.address)&&(I.has(_.address)?Object(n["a"])("该地址已添加"):(I.add(_.address),_.addressList.push(_.address),_.hashRate&&Object(r["a"])(_.hashRate)&&_.hashRateList.push(i["utils"].parseUnits(_.hashRate.toString(),b["b"].USDTDecimals)),_.uAmount&&Object(r["a"])(_.uAmount)&&_.uAmountList.push(i["utils"].parseUnits(_.uAmount.toString(),b["b"].USDTDecimals)),_.levelList.push(_.level),_.address="",_.hashRate="",_.uAmount=""))},P=function(){_.addressList=[],_.hashRateList=[],I.clear()},K=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(_.addressList.length===_.hashRateList.length){t.next=3;break}return Object(n["a"])("批量设置时，算力需输入有效数字"),t.abrupt("return");case 3:return t.next=5,d.value.mintHashRates(_.addressList,_.hashRateList,_.uAmountList,_.levelList);case 5:return e=t.sent,e.hash&&Object(n["a"])("处理中..."),t.next=9,e.wait();case 9:s=t.sent,1===s.status&&Object(n["a"])("已设置");case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c["R"])([function(){return e.isActive},function(){return e.isLogin}],(function(){e.isActive&&e.isLogin&&T()}),{immediate:!0}),function(t,e){var s=Object(c["K"])("van-radio"),a=Object(c["K"])("van-radio-group");return Object(c["D"])(),Object(c["i"])("div",O,[Object(c["j"])("div",{class:"text-primaryColor",onClick:e[0]||(e[0]=function(e){return t.$router.back()})},"<<返回"),m,f,Object(c["j"])("div",p,[Object(c["U"])(Object(c["j"])("input",{class:"bg-transparent w-full px-4px","onUpdate:modelValue":e[1]||(e[1]=function(t){return Object(c["O"])(_).address=t})},null,512),[[c["P"],Object(c["O"])(_).address]])]),h,Object(c["j"])("div",x,[Object(c["U"])(Object(c["j"])("input",{class:"bg-transparent w-full px-4px",type:"number",onInput:e[2]||(e[2]=function(){return Object(c["O"])(N)&&Object(c["O"])(N).apply(void 0,arguments)}),"onUpdate:modelValue":e[3]||(e[3]=function(t){return Object(c["O"])(_).uAmount=t})},null,544),[[c["P"],Object(c["O"])(_).uAmount]])]),v,Object(c["j"])("div",y,[Object(c["U"])(Object(c["j"])("input",{class:"bg-transparent w-full px-4px",type:"number",disabled:"","onUpdate:modelValue":e[4]||(e[4]=function(t){return Object(c["O"])(_).hashRate=t})},null,512),[[c["P"],Object(c["O"])(_).hashRate]])]),L,Object(c["m"])(a,{modelValue:Object(c["O"])(_).level,"onUpdate:modelValue":e[5]||(e[5]=function(t){return Object(c["O"])(_).level=t}),class:"flex"},{default:Object(c["T"])((function(){return[Object(c["m"])(s,{class:"flex-1",name:0},{default:Object(c["T"])((function(){return[R]})),_:1}),Object(c["m"])(s,{class:"flex-1",name:1},{default:Object(c["T"])((function(){return[g]})),_:1}),Object(c["m"])(s,{class:"flex-1",name:2},{default:Object(c["T"])((function(){return[w]})),_:1}),Object(c["m"])(s,{class:"flex-1",name:3},{default:Object(c["T"])((function(){return[A]})),_:1})]})),_:1},8,["modelValue"]),Object(c["j"])("div",{class:"text-center mt-1rem"},[Object(c["j"])("div",{class:"flex mb-1rem"},[Object(c["j"])("button",{class:"primary-btn h-2rem flex-1 text-black font-bold rounded-full",onClick:J},"添加用户"),Object(c["j"])("button",{class:"primary-btn h-2rem flex-1 text-black font-bold rounded-full",onClick:P},"清空列表")]),Object(c["j"])("button",{class:"primary-btn h-2rem w-10rem text-black font-bold rounded-full",onClick:K},"确认批量添加")]),U,(Object(c["D"])(!0),Object(c["i"])(c["a"],null,Object(c["J"])(Object(c["O"])(_).addressList,(function(t,e){return Object(c["D"])(),Object(c["i"])("div",{class:"flex justify-between items-center py-1",key:t},[Object(c["j"])("span",k,Object(c["N"])(Object(c["O"])(u["b"])(t)),1),Object(c["j"])("span",C,Object(c["N"])(Object(c["O"])(u["c"])(Object(c["O"])(_).hashRateList[e],Object(c["O"])(b["b"]).USDTDecimals)||"--"),1),Object(c["j"])("span",D,Object(c["N"])(Object(c["O"])(u["c"])(Object(c["O"])(_).uAmountList[e],Object(c["O"])(b["b"]).USDTDecimals)||"--"),1),Object(c["j"])("span",S,Object(c["N"])(H[Object(c["O"])(_).levelList[e]]||"--"),1)])})),128))])}}};const V=T;e["default"]=V},6062:function(t,e,s){s("1c59")}}]);