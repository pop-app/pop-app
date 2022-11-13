(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bb25c"],{"39dd":function(e,t,a){"use strict";a.r(t);a("27f1");var s=a("1c96"),c=(a("ddb0"),a("7a23")),l=a("3de1"),r=a("6779"),n=a("6be8"),o=(a("f726"),a("bae1")),d=a("238b");const i={class:"container max-w-26rem px-15px mx-auto pb-2rem community"},b=Object(c["createElementVNode"])("div",{class:"font-bold text-center mt-5 mb-3 text-primaryColor"},"-- 批量增发算力配置 --",-1),m=Object(c["createElementVNode"])("div",null,"用户地址",-1),u={class:"border-1 border-primaryColor py-10px rounded-full"},p=Object(c["createElementVNode"])("div",{class:"mt-2"},"算力",-1),j={class:"border-1 border-primaryColor py-10px rounded-full"},O=Object(c["createElementVNode"])("div",{class:"mt-2"},"USDT",-1),h={class:"border-1 border-primaryColor py-10px rounded-full"},f=Object(c["createElementVNode"])("div",{class:"mt-2"},"等级",-1),x=Object(c["createTextVNode"])("共识者"),v=Object(c["createTextVNode"])("节点"),V=Object(c["createTextVNode"])("工会"),N=Object(c["createTextVNode"])("天使"),w=Object(c["createStaticVNode"])('<div class="flex justify-between items-center mt-2"><span class="basis-2/5">地址</span><span class="basis-1/5">算力</span><span class="basis-1/5">USDT</span><span class="basis-1/5 text-right">等级</span></div>',1),y={class:"address basis-2/5"},E={class:"basis-1/5 font-bold text-primaryColor"},L={class:"basis-1/5 font-bold text-primaryColor"},C={class:"basis-1/5 font-bold text-primaryColor text-right"};var g={__name:"HashRateConfig",setup(e){const t=Object(c["inject"])("chainInfo"),{miningContract:a,getConfigData:g}=Object(d["a"])(),k=e=>!!r["utils"].isAddress(e)||(Object(s["a"])("请输入正确的用户地址"),!1),D=(Object(c["ref"])(""),Object(c["reactive"])({hashRate:"",totalHashRate:"",performance:"",mintHashRate:""}),["共识者","节点","工会","天使"]),R=Object(c["reactive"])({address:"",hashRate:"",uAmount:"",level:0,addressList:[],hashRateList:[],uAmountList:[],levelList:[]}),A=new Set,S=()=>{k(R.address)&&(A.has(R.address)?Object(s["a"])("该地址已添加"):(A.add(R.address),R.addressList.push(R.address),R.hashRate&&Object(l["a"])(R.hashRate)&&R.hashRateList.push(r["utils"].parseUnits(R.hashRate.toString(),o["b"].USDTDecimals)),R.uAmount&&Object(l["a"])(R.uAmount)&&R.uAmountList.push(r["utils"].parseUnits(R.uAmount.toString(),o["b"].USDTDecimals)),R.levelList.push(R.level),R.address="",R.hashRate="",R.uAmount=""))},T=()=>{R.addressList=[],R.hashRateList=[],A.clear()},U=async()=>{if(R.addressList.length!==R.hashRateList.length)return void Object(s["a"])("批量设置时，算力需输入有效数字");const e=await a.value.mintHashRates(R.addressList,R.hashRateList,R.uAmountList,R.levelList);e.hash&&Object(s["a"])("处理中...");const t=await e.wait();1===t.status&&Object(s["a"])("已设置")};return Object(c["watch"])([()=>t.isActive,()=>t.isLogin],()=>{t.isActive&&t.isLogin&&g()},{immediate:!0}),(e,t)=>{const a=Object(c["resolveComponent"])("van-radio"),s=Object(c["resolveComponent"])("van-radio-group");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",i,[Object(c["createElementVNode"])("div",{class:"text-primaryColor",onClick:t[0]||(t[0]=t=>e.$router.back())},"<<返回"),b,m,Object(c["createElementVNode"])("div",u,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{class:"bg-transparent w-full px-4px","onUpdate:modelValue":t[1]||(t[1]=e=>R.address=e)},null,512),[[c["vModelText"],R.address]])]),p,Object(c["createElementVNode"])("div",j,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{class:"bg-transparent w-full px-4px",type:"number","onUpdate:modelValue":t[2]||(t[2]=e=>R.hashRate=e)},null,512),[[c["vModelText"],R.hashRate]])]),O,Object(c["createElementVNode"])("div",h,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{class:"bg-transparent w-full px-4px",type:"number","onUpdate:modelValue":t[3]||(t[3]=e=>R.uAmount=e)},null,512),[[c["vModelText"],R.uAmount]])]),f,Object(c["createVNode"])(s,{modelValue:R.level,"onUpdate:modelValue":t[4]||(t[4]=e=>R.level=e),class:"flex"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(a,{class:"flex-1",name:0},{default:Object(c["withCtx"])(()=>[x]),_:1}),Object(c["createVNode"])(a,{class:"flex-1",name:1},{default:Object(c["withCtx"])(()=>[v]),_:1}),Object(c["createVNode"])(a,{class:"flex-1",name:2},{default:Object(c["withCtx"])(()=>[V]),_:1}),Object(c["createVNode"])(a,{class:"flex-1",name:3},{default:Object(c["withCtx"])(()=>[N]),_:1})]),_:1},8,["modelValue"]),Object(c["createElementVNode"])("div",{class:"text-center mt-1rem"},[Object(c["createElementVNode"])("div",{class:"flex mb-1rem"},[Object(c["createElementVNode"])("button",{class:"primary-btn h-2rem flex-1 text-black font-bold rounded-full",onClick:S},"添加用户"),Object(c["createElementVNode"])("button",{class:"primary-btn h-2rem flex-1 text-black font-bold rounded-full",onClick:T},"清空列表")]),Object(c["createElementVNode"])("button",{class:"primary-btn h-2rem w-10rem text-black font-bold rounded-full",onClick:U},"确认批量添加")]),w,(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(R.addressList,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"flex justify-between items-center py-1",key:e},[Object(c["createElementVNode"])("span",y,Object(c["toDisplayString"])(Object(c["unref"])(n["b"])(e)),1),Object(c["createElementVNode"])("span",E,Object(c["toDisplayString"])(Object(c["unref"])(n["c"])(R.hashRateList[t],Object(c["unref"])(o["b"]).USDTDecimals)||"--"),1),Object(c["createElementVNode"])("span",L,Object(c["toDisplayString"])(Object(c["unref"])(n["c"])(R.uAmountList[t],Object(c["unref"])(o["b"]).USDTDecimals)||"--"),1),Object(c["createElementVNode"])("span",C,Object(c["toDisplayString"])(D[R.levelList[t]]||"--"),1)]))),128))])}}};const k=g;t["default"]=k}}]);