(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-524f937e","chunk-2d0e2c5b"],{"7fb8":function(e,t,n){"use strict";n.r(t);n("27f1");var a=n("1c96"),r=(n("d9e2"),n("7a23")),c=n("2704"),i=n.n(c),s=n("6be8"),l=n("bae1");const o={class:"container max-w-26rem px-15px mx-auto pb-2rem"},p={class:"text-center relative my-0.5rem"},d=Object(r["createElementVNode"])("img",{class:"h-0.8rem mx-10px",src:i.a,alt:""},null,-1),b={class:"text-primaryColor pr-0.5rem"},m={key:0,class:"text-center text-white/50 my-2rem"},u={class:"my-0.5rem text-primaryColor text-center"},y={class:"flex justify-between items-center my-0.5rem"},j={class:"text-primaryColor text-0.8rem font-bold"},O={class:"flex justify-between items-center my-0.5rem"},f={class:"text-primaryColor text-0.8rem font-bold"},g={class:"flex justify-between items-center my-0.5rem"},v={class:"text-primaryColor text-0.8rem font-bold"},w={class:"flex justify-between items-center my-0.5rem"},x={class:"text-primaryColor text-0.8rem font-bold"},D={class:"flex justify-between items-center my-0.5rem"},T={class:"text-primaryColor text-0.8rem font-bold"},V={class:"flex justify-between items-center my-0.5rem"},E={class:"text-primaryColor text-0.8rem font-bold"};var N={__name:"LevelRewardRank",setup(e){const t=Object(r["inject"])("chainInfo"),n=Object(r["ref"])(!1),c=()=>new Promise((e,t)=>{let n=0;const a=setInterval(()=>{n>50&&(clearInterval(a),t(new Error("timeout"))),window.popRewardInfo?(clearInterval(a),e(window.popRewardInfo)):e([]),n++},100)}),i=Object(r["ref"])([]),N=async()=>{try{n.value=!0;const e=await c();console.log(e.data.logs),i.value=e.data.logs}catch(e){n.value=!1,Object(a["a"])(e.message)}};return Object(r["watch"])([()=>t.isActive,()=>t.isLogin],()=>{t.isActive&&t.isLogin&&N()},{immediate:!0}),(e,t)=>(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,[Object(r["createElementVNode"])("div",p,[Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(e.$t("miningView.levelReward")),1),Object(r["createElementVNode"])("button",{class:"absolute -left-0.5rem top-0 flex items-center",onClick:t[0]||(t[0]=t=>e.$router.back())},[d,Object(r["createElementVNode"])("span",b,Object(r["toDisplayString"])(e.$t("back")),1)])]),0===i.value.length?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",m,Object(r["toDisplayString"])(e.$t("noData")),1)):Object(r["createCommentVNode"])("",!0),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(i.value,(t,n)=>(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:n,class:"c-border-box px-0.5rem"},[Object(r["createElementVNode"])("div",u,Object(r["toDisplayString"])(Object(r["unref"])(s["d"])(new Date(t.time).getTime())),1),Object(r["createElementVNode"])("div",y,[Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(e.$t("miningView.angelUsdt"))+":",1),Object(r["createElementVNode"])("span",j,Object(r["toDisplayString"])(Object(r["unref"])(s["c"])(t["angelUsdt"],Object(r["unref"])(l["b"]).USDTDecimals)),1)]),Object(r["createElementVNode"])("div",O,[Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(e.$t("miningView.angelUsdtReward"))+":",1),Object(r["createElementVNode"])("span",f,Object(r["toDisplayString"])(Object(r["unref"])(s["c"])(t["angelUsdtReward"],Object(r["unref"])(l["b"]).USDTDecimals)),1)]),Object(r["createElementVNode"])("div",g,[Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(e.$t("miningView.guildUsdt"))+":",1),Object(r["createElementVNode"])("span",v,Object(r["toDisplayString"])(Object(r["unref"])(s["c"])(t["guildUsdt"],Object(r["unref"])(l["b"]).USDTDecimals)),1)]),Object(r["createElementVNode"])("div",w,[Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(e.$t("miningView.guildUsdtReward"))+":",1),Object(r["createElementVNode"])("span",x,Object(r["toDisplayString"])(Object(r["unref"])(s["c"])(t["guildUsdtReward"],Object(r["unref"])(l["b"]).USDTDecimals)),1)]),Object(r["createElementVNode"])("div",D,[Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(e.$t("miningView.nodeUsdt"))+":",1),Object(r["createElementVNode"])("span",T,Object(r["toDisplayString"])(Object(r["unref"])(s["c"])(t["nodeUsdt"],Object(r["unref"])(l["b"]).USDTDecimals)),1)]),Object(r["createElementVNode"])("div",V,[Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(e.$t("miningView.nodeUsdtReward"))+":",1),Object(r["createElementVNode"])("span",E,Object(r["toDisplayString"])(Object(r["unref"])(s["c"])(t["nodeUsdtReward"],Object(r["unref"])(l["b"]).USDTDecimals)),1)])]))),128))]))}};const S=N;t["default"]=S},a965:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r=n("2704"),c=n.n(r),i=n("238b"),s=n("d250"),l=n("6be8"),o=n("bae1"),p=n("3de1");const d={class:"flex justify-between items-center py-10px border-b-1 border-white/20"},b={class:"font-bold text-1rem text-primaryColor"},m={class:"flex justify-between items-center mb-8px"},u={class:"font-bold text-primaryColor"},y=["data-clipboard-text"],j={class:"flex justify-between items-center text-white/50"};var O={__name:"RewardRecord",props:["rebateType"],setup(e){const t=e,n=Object(a["inject"])("chainInfo"),r=Object(a["inject"])("poolLogContract"),c=Object(a["reactive"])({loading:!1,finished:!1,pageSize:40,skip:0,logs:[],totalRebate:"--"}),i=async()=>{try{if(c.finished||c.loading)return;c.loading=!0,console.log("load...",t.rebateType);const e=await r.value.minerRebateInfo(n.account,o["b"].USDT,c.skip,c.pageSize,t.rebateType);c.loading=!1,c.finished=e.logs.length<c.pageSize,c.logs=e.logs,c.totalRebate=e.total,console.log(e)}catch(e){console.log(e),c.finished=!0,c.loading=!1}};return Object(a["watch"])([()=>r.value],()=>{r.value&&i()},{immediate:!0}),(e,t)=>{const n=Object(a["resolveComponent"])("van-list");return Object(a["openBlock"])(),Object(a["createBlock"])(n,{loading:c.loading,finished:c.finished,"immediate-check":!1,"finished-text":e.$t("noMore"),onLoad:i},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",d,[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.$t("miningView.totalRebate")),1),Object(a["createElementVNode"])("span",b,Object(a["toDisplayString"])(Object(a["unref"])(l["a"])(Object(a["unref"])(l["c"])(c.totalRebate,Object(a["unref"])(o["b"]).USDTDecimals))),1)]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(c.logs,(n,r)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"py-0.5rem border-b-1 border-white/20",key:r},[Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("span",u,Object(a["toDisplayString"])(Object(a["unref"])(l["a"])(Object(a["unref"])(l["c"])(n["rebateAmount"],Object(a["unref"])(o["b"]).USDTDecimals))),1),Object(a["createElementVNode"])("span",{class:"copy-address text-white/50","data-clipboard-text":n["rebateUser"],onClick:t[0]||(t[0]=t=>Object(a["unref"])(p["b"])(".copy-address",e.$t("copySuccess")))},Object(a["toDisplayString"])(Object(a["unref"])(l["b"])(n["rebateUser"])),9,y)]),Object(a["createElementVNode"])("div",j,[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.$t("rate"))+": "+Object(a["toDisplayString"])(Object(a["unref"])(o["f"])[n["level"]-1]/10)+"%",1),Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.$t("level"))+": "+Object(a["toDisplayString"])(n["level"]),1),Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(Object(a["unref"])(l["d"])(1e3*n["rebateTime"])),1)])]))),128))]),_:1},8,["loading","finished","finished-text"])}}};const f=O;var g=f;n("7fb8");const v={class:"container max-w-26rem px-15px mx-auto pb-2rem record"},w={class:"text-center relative my-0.5rem"},x=Object(a["createElementVNode"])("img",{class:"h-0.8rem mx-10px",src:c.a,alt:""},null,-1),D={class:"text-primaryColor pr-0.5rem"},T={class:"flex border-b-1 border-white/20"};var V={__name:"Index",setup(e){const{miningContract:t,getConfigData:n}=Object(i["a"])(),r=Object(a["inject"])("chainInfo"),c=Object(a["ref"])(null);Object(a["provide"])("poolLogContract",c);const l=Object(a["ref"])(0),o=async e=>{l.value!==e&&(l.value=e)},p=async()=>{await n();const e=await t.value.log();c.value=new s["a"](r.provider,r.account,e)};return Object(a["watch"])([()=>r.isActive],()=>{r.isActive&&p()},{immediate:!0}),(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",v,[Object(a["createElementVNode"])("div",w,[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.$t("miningView.rebateRecord")),1),Object(a["createElementVNode"])("button",{class:"absolute -left-0.5rem top-0 flex items-center",onClick:t[0]||(t[0]=t=>e.$router.back())},[x,Object(a["createElementVNode"])("span",D,Object(a["toDisplayString"])(e.$t("back")),1)])]),Object(a["createElementVNode"])("div",T,[Object(a["createElementVNode"])("span",{class:Object(a["normalizeClass"])(["flex-1 text-center py-0.5rem",0===l.value?"border-b-2 border-primaryColor text-primaryColor":"opacity-50"]),onClick:t[1]||(t[1]=e=>o(0))},Object(a["toDisplayString"])(e.$t("miningView.rebateType1")),3),Object(a["createElementVNode"])("span",{class:Object(a["normalizeClass"])(["flex-1 text-center py-0.5rem",1===l.value?"border-b-2 border-primaryColor text-primaryColor":"opacity-50"]),onClick:t[2]||(t[2]=e=>o(1))},Object(a["toDisplayString"])(e.$t("miningView.rebateType2")),3)]),c.value?(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],{key:0},[Object(a["withDirectives"])(Object(a["createVNode"])(Object(a["unref"])(g),{"rebate-type":1},null,512),[[a["vShow"],0===l.value]]),Object(a["withDirectives"])(Object(a["createVNode"])(Object(a["unref"])(g),{"rebate-type":2},null,512),[[a["vShow"],1===l.value]])],64)):Object(a["createCommentVNode"])("",!0)]))}};const E=V;t["default"]=E},bc4f:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"newDev","type":"address"}],"name":"addDev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousDev","type":"address"},{"indexed":true,"internalType":"address","name":"newDev","type":"address"}],"name":"DevTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"commission","type":"uint256"},{"internalType":"address","name":"referee","type":"address"},{"internalType":"uint256","name":"rebateRate","type":"uint256"},{"internalType":"uint256","name":"rebateType","type":"uint256"}],"name":"rebateRecord","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rmAllDevs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"oldDev","type":"address"}],"name":"rmDev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token_","type":"address"},{"internalType":"address","name":"addr_","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devs","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"dev","type":"address"}],"name":"isDev","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"skip","type":"uint256"},{"internalType":"uint256","name":"num","type":"uint256"},{"internalType":"uint256","name":"rebateType","type":"uint256"}],"name":"minerRebateInfo","outputs":[{"components":[{"internalType":"address","name":"rebateUser","type":"address"},{"internalType":"uint256","name":"rebateTime","type":"uint256"},{"internalType":"uint256","name":"rebateAmount","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"rebateRate","type":"uint256"},{"internalType":"uint256","name":"rebateType","type":"uint256"}],"internalType":"struct PopLog.RebateInfo[]","name":"logs","type":"tuple[]"},{"internalType":"uint256","name":"count","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')},d250:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("c030"),r=n("bc4f");class c{constructor(e,t,n,c=r){this.provider=e;const i=e.getSigner(t).connectUnchecked();this.contract=new a["a"].Contract(n,c,i),console.log("pool log contract:",n)}async minerRebateInfo(e,t,n,a,r){return this.contract.minerRebateInfo(e,t,n,a,r)}}}}]);