(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bb25c"],{"39dd":function(e,t,a){"use strict";a.r(t);a("27f1");var s=a("1c96"),c=(a("ddb0"),a("7a23")),l=a("3de1"),n=a("6779"),r=a("0d17"),o=a("6be8"),d=(a("f726"),a("bae1")),i=a("238b"),b=a("f7fe"),m=a.n(b);const u={class:"container max-w-26rem px-15px mx-auto pb-2rem community"},j=Object(c["createElementVNode"])("div",{class:"font-bold text-center mt-5 mb-3 text-primaryColor"},"-- 增发算力配置 --",-1),p=Object(c["createElementVNode"])("div",null,"用户地址",-1),O={class:"border-1 border-primaryColor py-10px rounded-full"},h=Object(c["createElementVNode"])("div",{class:"mt-2"},"USDT",-1),f={class:"border-1 border-primaryColor py-10px rounded-full"},x=Object(c["createElementVNode"])("div",{class:"mt-2"},"算力",-1),v={class:"border-1 border-primaryColor py-10px rounded-full"},V=Object(c["createElementVNode"])("div",{class:"mt-2"},"等级",-1),N=Object(c["createTextVNode"])("共识者"),w=Object(c["createTextVNode"])("节点"),y=Object(c["createTextVNode"])("工会"),E=Object(c["createTextVNode"])("天使"),L=Object(c["createStaticVNode"])('<div class="flex justify-between items-center mt-2"><span class="basis-2/5">地址</span><span class="basis-1/5">算力</span><span class="basis-1/5">USDT</span><span class="basis-1/5 text-right">等级</span></div>',1),g={class:"address basis-2/5"},C={class:"basis-1/5 font-bold text-primaryColor"},R={class:"basis-1/5 font-bold text-primaryColor"},k={class:"basis-1/5 font-bold text-primaryColor text-right"};var D={__name:"HashRateConfig",setup(e){const t=Object(c["inject"])("chainInfo"),{miningContract:a,getConfigData:b}=Object(i["a"])(),D=e=>!!n["utils"].isAddress(e)||(Object(s["a"])("请输入正确的用户地址"),!1),A=(Object(c["ref"])(""),Object(c["reactive"])({hashRate:"",totalHashRate:"",performance:"",mintHashRate:""}),["共识者","节点","工会","天使"]),S=Object(c["reactive"])({address:"",hashRate:"",uAmount:"",level:0,addressList:[],hashRateList:[],uAmountList:[],levelList:[]}),T=m()(()=>{Object(l["a"])(S.uAmount)&&(S.hashRate=r["a"].from(S.uAmount).mulUnsafe(r["a"].from("2")).toString())},1500),U=new Set,_=()=>{D(S.address)&&(U.has(S.address)?Object(s["a"])("该地址已添加"):(U.add(S.address),S.addressList.push(S.address),S.hashRate&&Object(l["a"])(S.hashRate)&&S.hashRateList.push(n["utils"].parseUnits(S.hashRate.toString(),d["b"].USDTDecimals)),S.uAmount&&Object(l["a"])(S.uAmount)&&S.uAmountList.push(n["utils"].parseUnits(S.uAmount.toString(),d["b"].USDTDecimals)),S.levelList.push(S.level),S.address="",S.hashRate="",S.uAmount=""))},B=()=>{S.addressList=[],S.hashRateList=[],U.clear()},H=async()=>{if(S.addressList.length!==S.hashRateList.length)return void Object(s["a"])("批量设置时，算力需输入有效数字");const e=await a.value.mintHashRates(S.addressList,S.hashRateList,S.uAmountList,S.levelList);e.hash&&Object(s["a"])("处理中...");const t=await e.wait();1===t.status&&Object(s["a"])("已设置")};return Object(c["watch"])([()=>t.isActive,()=>t.isLogin],()=>{t.isActive&&t.isLogin&&b()},{immediate:!0}),(e,t)=>{const a=Object(c["resolveComponent"])("van-radio"),s=Object(c["resolveComponent"])("van-radio-group");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",u,[Object(c["createElementVNode"])("div",{class:"text-primaryColor",onClick:t[0]||(t[0]=t=>e.$router.back())},"<<返回"),j,p,Object(c["createElementVNode"])("div",O,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{class:"bg-transparent w-full px-4px","onUpdate:modelValue":t[1]||(t[1]=e=>S.address=e)},null,512),[[c["vModelText"],S.address]])]),h,Object(c["createElementVNode"])("div",f,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{class:"bg-transparent w-full px-4px",type:"number",onInput:t[2]||(t[2]=(...e)=>Object(c["unref"])(T)&&Object(c["unref"])(T)(...e)),"onUpdate:modelValue":t[3]||(t[3]=e=>S.uAmount=e)},null,544),[[c["vModelText"],S.uAmount]])]),x,Object(c["createElementVNode"])("div",v,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{class:"bg-transparent w-full px-4px",type:"number",disabled:"","onUpdate:modelValue":t[4]||(t[4]=e=>S.hashRate=e)},null,512),[[c["vModelText"],S.hashRate]])]),V,Object(c["createVNode"])(s,{modelValue:S.level,"onUpdate:modelValue":t[5]||(t[5]=e=>S.level=e),class:"flex"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(a,{class:"flex-1",name:0},{default:Object(c["withCtx"])(()=>[N]),_:1}),Object(c["createVNode"])(a,{class:"flex-1",name:1},{default:Object(c["withCtx"])(()=>[w]),_:1}),Object(c["createVNode"])(a,{class:"flex-1",name:2},{default:Object(c["withCtx"])(()=>[y]),_:1}),Object(c["createVNode"])(a,{class:"flex-1",name:3},{default:Object(c["withCtx"])(()=>[E]),_:1})]),_:1},8,["modelValue"]),Object(c["createElementVNode"])("div",{class:"text-center mt-1rem"},[Object(c["createElementVNode"])("div",{class:"flex mb-1rem"},[Object(c["createElementVNode"])("button",{class:"primary-btn h-2rem flex-1 text-black font-bold rounded-full",onClick:_},"添加用户"),Object(c["createElementVNode"])("button",{class:"primary-btn h-2rem flex-1 text-black font-bold rounded-full",onClick:B},"清空列表")]),Object(c["createElementVNode"])("button",{class:"primary-btn h-2rem w-10rem text-black font-bold rounded-full",onClick:H},"确认批量添加")]),L,(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(S.addressList,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"flex justify-between items-center py-1",key:e},[Object(c["createElementVNode"])("span",g,Object(c["toDisplayString"])(Object(c["unref"])(o["b"])(e)),1),Object(c["createElementVNode"])("span",C,Object(c["toDisplayString"])(Object(c["unref"])(o["c"])(S.hashRateList[t],Object(c["unref"])(d["b"]).USDTDecimals)||"--"),1),Object(c["createElementVNode"])("span",R,Object(c["toDisplayString"])(Object(c["unref"])(o["c"])(S.uAmountList[t],Object(c["unref"])(d["b"]).USDTDecimals)||"--"),1),Object(c["createElementVNode"])("span",k,Object(c["toDisplayString"])(A[S.levelList[t]]||"--"),1)]))),128))])}}};const A=D;t["default"]=A}}]);