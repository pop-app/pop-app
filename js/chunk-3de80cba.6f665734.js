(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3de80cba"],{"1f14":function(e,t,a){"use strict";a.r(t);a("27f1");var n=a("1c96"),l=a("7a23"),c=a("3de1"),s=a("6be8"),r=a("238b"),o=a("6779"),i=a("c030"),u=a("83a8"),d=a("bae1");class p{constructor(e,t,a=d["b"].PopConfigAddress,n=u){this.provider=e;const l=e.getSigner(t).connectUnchecked();this.contract=new i["a"].Contract(a,n,l),console.log("pool config contract:",a)}async setRatePercent(e){return this.contract.setRatePercent(e)}async ratePercent(){return this.contract.ratePercent()}}const b={class:"container max-w-26rem px-15px mx-auto pb-2rem community"},m=Object(l["createElementVNode"])("div",{class:"font-bold text-center mb-3 text-primaryColor"},"-- 配置信息 --",-1),y={class:"mb-3"},O={class:"mb-3"},j={class:"mb-3"},v={class:"mb-3"},w=Object(l["createElementVNode"])("div",{class:"font-bold text-center mb-3 text-primaryColor"},"-- 矿池配置 --",-1),f=Object(l["createElementVNode"])("div",null,"设置机枪池比例",-1),V={class:"border-1 border-primaryColor py-10px rounded-full"},x={class:"text-center mt-2"},N=Object(l["createElementVNode"])("div",{class:"mt-3"},"设置机枪池比例开关",-1),E=Object(l["createTextVNode"])("开启"),g=Object(l["createTextVNode"])("关闭"),h={class:"text-center mt-2"},T=Object(l["createElementVNode"])("div",{class:"w-full h-2px my-2rem"},null,-1),P=Object(l["createElementVNode"])("div",{class:"mt-3"},"设置铸币比例",-1),k={class:"border-1 border-primaryColor py-10px rounded-full"},C={class:"text-center mt-2"},M=Object(l["createElementVNode"])("div",{class:"mt-3"},"设置铸币比例开关",-1),D=Object(l["createTextVNode"])("开启"),_=Object(l["createTextVNode"])("关闭"),J={class:"text-center mt-2"},U=Object(l["createElementVNode"])("div",{class:"w-full h-2px my-2rem"},null,-1),B=Object(l["createElementVNode"])("div",{class:"mt-3"},"设置最大持币数量",-1),S={class:"border-1 border-primaryColor py-10px rounded-full"},Q=Object(l["createElementVNode"])("div",{class:"w-full h-2px my-2rem"},null,-1),R=Object(l["createElementVNode"])("div",{class:"mt-3"},"设置每日收益率",-1),A={class:"border-1 border-primaryColor py-10px rounded-full"},L=Object(l["createElementVNode"])("div",{class:"text-red-500"},[Object(l["createTextVNode"])("* 请输入整数"),Object(l["createElementVNode"])("br"),Object(l["createTextVNode"])(" 例：1% 请输入10， 2% 请输入20， 3% 请输入30 ， 最大不能超过50")],-1);var I={__name:"MiningConfig",setup(e){const t=Object(l["inject"])("chainInfo"),{miningContract:a,getConfigData:i}=Object(r["a"])(),u=Object(l["reactive"])({popJQPoolPercent:"",popBankPercent:""}),d=async()=>{const e=await a.value.getPopJQPoolPercent();console.log(e),u.popJQPoolPercent=e.popJQPoolPercent,u.popBankPercent=e.popBankPercent},I=Object(l["reactive"])({value:"",status:!0}),$=async e=>{if(0!==e||Object(c["a"])(I.value))try{let t=null;0===e&&(t=await a.value.setPopJQPoolPercent(I.value)),1===e&&(t=await a.value.setPopJQPoolEnable(I.status)),Object(n["a"])("处理中..."),await t.wait(),Object(n["a"])("已设置"),await d()}catch(t){console.log(t),Object(n["a"])(t.data||t.message||t)}},q=Object(l["reactive"])({value:"",status:!0}),z=async e=>{if(0!==e||Object(c["a"])(q.value))try{let t=null;0===e&&(t=await a.value.setPopBankPercent(q.value)),1===e&&(t=await a.value.setPopBankEnable(q.status)),Object(n["a"])("处理中..."),await t.wait(),Object(n["a"])("已设置"),await d()}catch(t){console.log(t),Object(n["a"])(t.data||t.message||t)}},F=Object(l["reactive"])({getValue:"",setValue:""}),G=async()=>{if(Object(c["a"])(F.setValue))try{const e=await a.value.setPopRewardMax(o["utils"].parseUnits(F.setValue.toString(),18));Object(n["a"])("处理中..."),await e.wait(),Object(n["a"])("已设置"),await H()}catch(e){console.log(e),Object(n["a"])(e.data||e.message||e)}},H=async()=>{const e=await a.value.popRewardMax();F.getValue=o["utils"].formatUnits(e,18)},K=Object(l["ref"])(null),W=Object(l["reactive"])({getValue:"",setValue:""}),X=async()=>{if(Object(c["a"])(W.setValue))try{const e=await K.value.setRatePercent(W.setValue);Object(n["a"])("处理中..."),await e.wait(),Object(n["a"])("已设置"),await Y()}catch(e){console.log(e),Object(n["a"])(e.data||e.message||e)}},Y=async()=>{W.getValue=await K.value.ratePercent()},Z=async()=>{K.value=new p(t.provider,t.account),await i(),await d(),await H(),await Y()};return Object(l["watch"])([()=>t.isActive,()=>t.isLogin],()=>{t.isActive&&t.isLogin&&Z()},{immediate:!0}),(e,t)=>{const a=Object(l["resolveComponent"])("van-radio"),n=Object(l["resolveComponent"])("van-radio-group");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",b,[Object(l["createElementVNode"])("div",{class:"text-primaryColor",onClick:t[0]||(t[0]=t=>e.$router.back())},"<<返回"),m,Object(l["createElementVNode"])("div",y,"机枪池比例: "+Object(l["toDisplayString"])(Object(l["unref"])(s["a"])(u.popJQPoolPercent/10,0))+"%",1),Object(l["createElementVNode"])("div",O,"铸币比例: "+Object(l["toDisplayString"])(Object(l["unref"])(s["a"])(u.popBankPercent/10,0))+"%",1),Object(l["createElementVNode"])("div",j,"最大持币数量: "+Object(l["toDisplayString"])(Object(l["unref"])(s["a"])(F.getValue)),1),Object(l["createElementVNode"])("div",v,"每日收益率: "+Object(l["toDisplayString"])(W.getValue)+"%",1),w,f,Object(l["createElementVNode"])("div",V,[Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{class:"bg-transparent w-full px-4px",type:"number","onUpdate:modelValue":t[1]||(t[1]=e=>I.value=e)},null,512),[[l["vModelText"],I.value]])]),Object(l["createElementVNode"])("div",x,[Object(l["createElementVNode"])("button",{class:"primary-btn h-2rem w-10rem text-black font-bold rounded-full",onClick:t[2]||(t[2]=e=>$(0))},"确认设置")]),N,Object(l["createVNode"])(n,{modelValue:I.status,"onUpdate:modelValue":t[3]||(t[3]=e=>I.status=e),class:"flex"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(a,{class:"flex-1",name:!0},{default:Object(l["withCtx"])(()=>[E]),_:1}),Object(l["createVNode"])(a,{class:"flex-1",name:!1},{default:Object(l["withCtx"])(()=>[g]),_:1})]),_:1},8,["modelValue"]),Object(l["createElementVNode"])("div",h,[Object(l["createElementVNode"])("button",{class:"primary-btn h-2rem w-10rem text-black font-bold rounded-full",onClick:t[4]||(t[4]=e=>$(1))},"确认设置")]),T,P,Object(l["createElementVNode"])("div",k,[Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{class:"bg-transparent w-full px-4px",type:"number","onUpdate:modelValue":t[5]||(t[5]=e=>q.value=e)},null,512),[[l["vModelText"],q.value]])]),Object(l["createElementVNode"])("div",C,[Object(l["createElementVNode"])("button",{class:"primary-btn h-2rem w-10rem text-black font-bold rounded-full",onClick:t[6]||(t[6]=e=>z(0))},"确认设置")]),M,Object(l["createVNode"])(n,{modelValue:q.status,"onUpdate:modelValue":t[7]||(t[7]=e=>q.status=e),class:"flex"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(a,{class:"flex-1",name:!0},{default:Object(l["withCtx"])(()=>[D]),_:1}),Object(l["createVNode"])(a,{class:"flex-1",name:!1},{default:Object(l["withCtx"])(()=>[_]),_:1})]),_:1},8,["modelValue"]),Object(l["createElementVNode"])("div",J,[Object(l["createElementVNode"])("button",{class:"primary-btn h-2rem w-10rem text-black font-bold rounded-full",onClick:t[8]||(t[8]=e=>z(1))},"确认设置")]),U,B,Object(l["createElementVNode"])("div",S,[Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{class:"bg-transparent w-full px-4px",type:"number","onUpdate:modelValue":t[9]||(t[9]=e=>F.setValue=e)},null,512),[[l["vModelText"],F.setValue]])]),Object(l["createElementVNode"])("div",{class:"text-center mt-2"},[Object(l["createElementVNode"])("button",{class:"primary-btn h-2rem w-10rem text-black font-bold rounded-full",onClick:G},"确认设置")]),Q,R,Object(l["createElementVNode"])("div",A,[Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{class:"bg-transparent w-full px-4px",type:"number","onUpdate:modelValue":t[10]||(t[10]=e=>W.setValue=e)},null,512),[[l["vModelText"],W.setValue]])]),L,Object(l["createElementVNode"])("div",{class:"text-center mt-2"},[Object(l["createElementVNode"])("button",{class:"primary-btn h-2rem w-10rem text-black font-bold rounded-full",onClick:X},"确认设置")])])}}};const $=I;t["default"]=$},"83a8":function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"newDev","type":"address"}],"name":"addDev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pool_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousDev","type":"address"},{"indexed":true,"internalType":"address","name":"newDev","type":"address"}],"name":"DevTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"nodes","type":"address[]"},{"internalType":"uint256","name":"nodeAmount","type":"uint256"}],"name":"rewardExternal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rmAllDevs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"oldDev","type":"address"}],"name":"rmDev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value_","type":"uint256"}],"name":"setMaxValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pool_","type":"address"}],"name":"setPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ratePercent_","type":"uint256"}],"name":"setRatePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateSlice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token_","type":"address"},{"internalType":"address","name":"addr_","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devs","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"dev","type":"address"}],"name":"isDev","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ratePercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')}}]);