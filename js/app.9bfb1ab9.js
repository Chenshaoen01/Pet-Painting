(function(){var A={3617:function(A,e,t){"use strict";var n=t(9242),i=t(3396),r=t(4427),s=t(2103),o=t(2809),l=t(9141);const a={class:"relative"},c={class:"flex flex-col lg:flex-row py-3 px-4 lg:px-16 lg:py-12 bg-white"},g={class:"flex justify-between"},p=(0,i._)("img",{src:r,alt:"logo",style:{width:"119px",height:"40px"}},null,-1),u=[p],d={id:"link-area",class:"lg:ml-auto items-start hidden lg:block"},m=(0,i.uE)('<div><div class="text-center py-12 px-5 lg:flex lg:justify-center border-t-4 border-orange bg-white"><div class="mb-12 lg:mb-0 lg:flex lg:me-12 lg:items-center"><img src="'+o+'" alt="join the team img1" class="mb-7 lg:mb-0 lg:me-4"><div class="lg:text-left"><p class="mb-5px text-2xl">加入奴才團隊</p><p class="mb-3.5">我也會畫畫，希望能盡一份心力！</p><button type="button" class="btn border border-primary text-lg">聯絡我們</button></div></div><div class="mb-12 lg:mb-0 lg:flex lg:items-center"><img src="'+l+'" alt="join the team img2" class="mb-7 lg:mb-0 lg:me-4"><div class="lg:text-left"><p class="mb-5px text-2xl">加入奴才團隊</p><p class="mb-3.5">我也會畫畫，希望能盡一份心力！</p><button type="button" class="btn border border-primary text-lg">領養專區</button></div></div></div><div class="bg-primary py-6"><p class="text-white text-center text-sm">Copyright © 2021 撿到寶.All rights reserved.</p></div></div>',1),b=(0,i._)("div",{class:"bg-white border border-primary text-base font-bold text-center px-3 py-1 mb-2"},"客製我的毛孩圖",-1),f=["src"];function v(A,e,n,r,o,l){const p=(0,i.up)("router-view"),v=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",c,[(0,i._)("div",g,[(0,i._)("span",{class:"lg:w-auto justify-between items-center cursor-pointer",onClick:e[0]||(e[0]=A=>r.linkActiveToggle(1)),"data-link":"/"},u),(0,i._)("img",{src:s,alt:"hamburger-button",style:{width:"30px",height:"30px"},class:"lg:hidden cursor-pointer",onClick:e[1]||(e[1]=(...A)=>r.linkAreaToggle&&r.linkAreaToggle(...A))})]),(0,i._)("div",d,[(0,i._)("span",{class:"block lg:inline-block router-link cursor-pointer mt-3 lg:mt-0 lg:ml-12 leading-10 text-orange","data-link":"/",onClick:e[2]||(e[2]=A=>r.linkActiveToggle(1))},"首頁"),(0,i._)("span",{class:"block lg:inline-block router-link cursor-pointer mt-3 lg:mt-0 lg:ml-12 leading-10","data-link":"/service-introduction",onClick:e[3]||(e[3]=A=>r.linkActiveToggle(2))},"服務介紹"),(0,i._)("span",{class:"block lg:inline-block router-link cursor-pointer mt-3 lg:mt-0 lg:ml-12 leading-10","data-link":"/painting",onClick:e[4]||(e[4]=A=>r.linkActiveToggle(3))},"設計作品"),(0,i._)("span",{class:"block lg:inline-block router-link cursor-pointer mt-3 lg:mt-0 lg:ml-12 leading-10","data-link":"/adoption-list",onClick:e[5]||(e[5]=A=>r.linkActiveToggle(4))},"領養專區"),(0,i._)("span",{class:"inline-block router-link cursor-pointer mt-3 lg:mt-0 lg:ml-12 btn btn-orange text-base","data-link":"/order-form",onClick:e[6]||(e[6]=A=>r.linkActiveToggle(5))},"毛孩似顏繪")])]),(0,i.Wm)(p),m,(0,i.Wm)(v,{to:"/order-form",class:"hidden lg:block fixed bottom-0 end-16 cursor-pointer"},{default:(0,i.w5)((()=>[b,(0,i._)("img",{src:t(260)(`./${r.currentLinkPage}.png`),alt:""},null,8,f)])),_:1})])}t(7658);var x=t(4870),h=t(2483),w={setup(){const A=(0,h.tv)(),e=()=>{const A=document.getElementById("link-area");A.classList.toggle("hidden")},t=t=>{const n=document.getElementsByClassName("router-link"),i=[...n];5!==t?i.forEach(((A,e)=>{e+1===t?A.classList.add("text-orange"):A.classList.remove("text-orange")})):i.forEach(((A,e)=>{A.classList.remove("text-orange")})),i.forEach(((e,n)=>{n+1===t&&A.push(`${e.dataset.link}`)})),e()},n=(0,x.iH)("btn");return setInterval((()=>{setTimeout((()=>{n.value="btn2"}),0),setTimeout((()=>{n.value="btn"}),800)}),1600),{currentLinkPage:n,linkAreaToggle:e,linkActiveToggle:t}}},k=t(89);const y=(0,k.Z)(w,[["render",v]]);var q=y,D=t(2402),C=t(3689),B=t(5419),j=t(2716),O=t(6574),L=t(91),Z=t(3723),I=t(6254),E=t(9550),H=t(9570),U=t(1457),T=t(960);const V=(0,i.uE)('<div><img src="'+D+'" alt="homepage header image" class="hidden lg:block"><img src="'+C+'" alt="mobile homepage header image" class="block lg:hidden w-full"></div><div class="flex flex-col lg:flex-row-reverse justify-center items-center px-8 py-20 lg:px-44"><div><p class="text-2xl text-orange text-kalam">Service</p><span class="font-bold font-32 text-kalam">您出錢</span><span class="ml-3 font-bold font-32 text-kalam">我出力</span><br class="lg:hidden"><span class="md:ml-3 font-bold font-32 text-kalam">一起助浪浪</span><p class="leading-8 max-w-350">我們是一群貓奴才狗奴才， 希望能透過自己小小的力量幫助浪貓浪狗們， 可我們沒什麼錢錢，但我們喜歡畫畫、喜愛貓狗，於是想到個兩全其美的好法子！ 如果您購買我們的寵物似顏繪服務， 我們將會把設計費100%全數捐給浪浪們！ 您出錢，我出力，合作無間讓浪浪有飯吃，讚啦！</p></div><img src="'+B+'" alt="" class="mt-8 lg:mt-8 w-full lg:w-6/12 max-w-350 lg:max-w-none lg:me-12"></div>',2),M={class:"flex flex-col items-center pb-20"},P=(0,i.uE)('<img src="'+j+'" class="mx-auto mb-4 lg:mb-10" alt=""><div class="px-4 lg:px-0 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0"><div><img src="'+O+'" class="w-full rounded-3xl lg:rounded-none" alt=""></div><div><img src="'+L+'" class="w-full rounded-3xl lg:rounded-none" alt=""></div><div><img src="'+Z+'" class="w-full rounded-3xl lg:rounded-none" alt=""></div><div><img src="'+I+'" class="w-full rounded-3xl lg:rounded-none" alt=""></div></div>',2),Y={class:"my-7 flex flex-col sm:block items-center"},N={class:"flex flex-col items-center pb-20"},Q=(0,i.uE)('<img src="'+E+'" class="mx-auto mb-4 lg:mb-6" alt=""><p class="mb-8 lg:mb-12 px-2">這裡是在還在等家的浪浪們，若您正巧在找個家人，不訪來認識一下唄</p><div class="px-2 lg:px-4 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6"><div class="rounded-3xl bg-white" style="box-shadow:0px 4px 8px #00000014;"><img src="'+H+'" class="w-full rounded-t-3xl" alt=""><div class="px-6"><p class="mt-7 font-bold">等家中-華仔</p><p class="mt-4 text-line-clamp-2">目前7個月大的華仔，是個愛笑的貪吃鬼，喜歡吃西瓜還有蓮霧，是一隻吃素的乖狗，每次吃飽便躺下來呼呼大睡，看著她自在的樣子，讓人也不知不覺放鬆下來</p><div class="w-full h-px mt-6" style="background-color:#ececec;"></div><div class="text-center my-4"><button type="button" class="text-base w-auto">MORE</button></div></div></div><div class="rounded-3xl bg-white" style="box-shadow:0px 4px 8px #00000014;"><img src="'+U+'" class="w-full rounded-t-3xl" alt=""><div class="px-6"><p class="mt-7 font-bold">等家中-小呆</p><p class="mt-4 text-line-clamp-2">小呆有著圓圓的大眼睛，一歲的他來自台中，原本陪著一位老奶奶生活，上個月奶奶生病住院，於是轉由志工照顧，期待你成為他的下一個家人</p><div class="w-full h-px mt-6" style="background-color:#ececec;"></div><div class="text-center my-4"><button type="button" class="text-base w-auto">MORE</button></div></div></div><div class="rounded-3xl bg-white" style="box-shadow:0px 4px 8px #00000014;"><img src="'+T+'" class="w-full rounded-t-3xl" alt=""><div class="px-6"><p class="mt-7 font-bold">等家中-Snow</p><p class="mt-4 text-line-clamp-2">看起來很兇但特別怕打雷的Snow，很喜歡吃冰，冰冰的水也喜歡，如果摸他的額頭會發出很像貓的叫聲，相當有活力，不適合關籠會發出像獅子的叫聲。 如果照片看起來像你家人，歡迎帶回家一家團圓!</p><div class="w-full h-px mt-6" style="background-color:#ececec;"></div><div class="text-center my-4"><button type="button" class="text-base w-auto">MORE</button></div></div></div></div>',3);function W(A,e){const t=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[V,(0,i._)("div",M,[P,(0,i._)("div",Y,[(0,i.Wm)(t,{to:"/painting",class:"btn me-0 sm:me-6 mb-6 sm:mb-0 w-full text-center"},{default:(0,i.w5)((()=>[(0,i.Uk)("查看更多作品")])),_:1}),(0,i.Wm)(t,{to:"/order-form",class:"btn btn-orange text-center w-full"},{default:(0,i.w5)((()=>[(0,i.Uk)("客製毛孩似顏繪")])),_:1})])]),(0,i._)("div",N,[Q,(0,i.Wm)(t,{to:"/adoption-list",class:"btn my-7 whitespace-nowrap"},{default:(0,i.w5)((()=>[(0,i.Uk)("查看更多浪浪")])),_:1})])],64)}const X={},G=(0,k.Z)(X,[["render",W]]);var F=G;const J=[{path:"/",name:"home",component:F},{path:"/service-introduction",component:()=>t.e(497).then(t.bind(t,3497))},{path:"/painting",component:()=>t.e(626).then(t.bind(t,6626))},{path:"/adoption-list",component:()=>t.e(209).then(t.bind(t,672))},{path:"/adoption-detail/:id",component:()=>t.e(252).then(t.bind(t,1252))},{path:"/order-form",component:()=>t.e(512).then(t.bind(t,7512))}],R=(0,h.p7)({history:(0,h.r5)(),routes:J});var S=R,K=t(65),z=(0,K.MT)({state:{adoptionData:{"小黑":{name:"小黑",breeds:"台灣土狗",age:"2 歲",gender:"公",neuter:"已結紮",size:"大型",vaccine:"已施打",img:"real-black",painting:"painting-black",description:"小黑十分親人，特別喜歡和小朋友玩，許多人看到他都被他的熱情感染，如果你希望他成為你家的開心果，小黑很歡迎你成為他的家人"},"花花":{name:"花花",breeds:"無",age:"1 歲",gender:"母",neuter:"已結紮",size:"小型",vaccine:"已施打",img:"real-hua",painting:"painting-hua",description:"花花兩個月以前被志工發現前腳受傷倒在路邊，就醫後經過志工細心照顧已恢復健康，"},"華仔":{name:"華仔",breeds:"台灣土狗",age:"7 個月",gender:"母",neuter:"已結紮",size:"大型",vaccine:"已施打",img:"real-huazie",painting:"painting-huazie",description:"目前7個月大的華仔，是個愛笑的貪吃鬼，喜歡吃西瓜還有蓮霧，是一隻吃素的乖狗，每次吃飽便躺下來呼呼大睡，看著她自在的樣子，讓人也不知不覺放鬆下來"},Smile:{name:"Smile",breeds:"拉不拉多",age:"2 歲",gender:"公",neuter:"已結紮",size:"小型",vaccine:"已施打",img:"real-smile",painting:"painting-smile",description:"個性溫和的 Smile 總是笑臉迎人，他的個性活潑，每次到公園總是有活力的四處玩耍"},Snow:{name:"Snow",breeds:"阿拉斯加雪橇犬",age:"2 歲",gender:"公",neuter:"已結紮",size:"大型",vaccine:"已施打",img:"real-snow",painting:"painting-snow",description:"看起來很兇但特別怕打雷的Snow，很喜歡吃冰，冰冰的水也喜歡，如果摸他的額頭會發出很像貓的叫聲，相當有活力，不適合關籠會發出像獅子的叫聲。 如果照片看起來像你家人，歡迎帶回家一家團圓!"},"小白":{name:"小白",breeds:"狐狸犬",age:"2 歲",gender:"公",neuter:"已結紮",size:"大型",vaccine:"已施打",img:"real-white",painting:"painting-white",description:"小白是一隻可愛的狐狸犬，雖然一開始有點怕生，但在熟悉環境後便展現活潑的一面，看到他開心的樣子，讓人心情不知不覺得到療育"},"小呆":{name:"小呆",breeds:"邊境牧羊犬",age:"1 歲",gender:"母",neuter:"已結紮",size:"大型",vaccine:"已施打",img:"real-di",painting:"painting-di",description:"小呆有著圓圓的大眼睛，一歲的他來自台中，原本陪著一位老奶奶生活，上個月奶奶生病住院，於是轉由志工照顧，期待你成為他的下一個家人"}}},getters:{},mutations:{},actions:{},modules:{}});(0,n.ri)(q).use(z).use(S).mount("#app")},260:function(A,e,t){var n={"./banner.png":14,"./banner_service-sm.png":5364,"./btn.png":4800,"./btn2.png":9874,"./hamburger-button.png":2103,"./home.png":2402,"./home01.png":5419,"./home_mobile.png":3689,"./lightpaperfibers.png":4483,"./link01.png":2809,"./link02.png":9141,"./logo.png":4427,"./pet-image/painting-black.png":3723,"./pet-image/painting-di.png":1457,"./pet-image/painting-hua.png":91,"./pet-image/painting-huazie.png":9570,"./pet-image/painting-smile.png":6574,"./pet-image/painting-snow.png":960,"./pet-image/painting-white.png":6254,"./pet-image/real-black.png":5127,"./pet-image/real-di.png":1475,"./pet-image/real-hua.png":4614,"./pet-image/real-huazie.png":5051,"./pet-image/real-smile.png":7968,"./pet-image/real-snow.png":5312,"./pet-image/real-white.png":894,"./step01.png":9949,"./step02.png":6042,"./step03.png":453,"./step04.png":5904,"./title01.png":2716,"./title02.png":9550};function i(A){var e=r(A);return t(e)}function r(A){if(!t.o(n,A)){var e=new Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e}return n[A]}i.keys=function(){return Object.keys(n)},i.resolve=r,A.exports=i,i.id=260},14:function(A,e,t){"use strict";A.exports=t.p+"img/banner.3035bd31.png"},5364:function(A,e,t){"use strict";A.exports=t.p+"img/banner_service-sm.d8bdfeae.png"},4800:function(A,e,t){"use strict";A.exports=t.p+"img/btn.c3316e5d.png"},9874:function(A,e,t){"use strict";A.exports=t.p+"img/btn2.4759f8fd.png"},2103:function(A){"use strict";A.exports="data:image/png;base64,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"},2402:function(A,e,t){"use strict";A.exports=t.p+"img/home.e9da4ed9.png"},5419:function(A,e,t){"use strict";A.exports=t.p+"img/home01.5bb9ec6a.png"},3689:function(A,e,t){"use strict";A.exports=t.p+"img/home_mobile.97801172.png"},4483:function(A,e,t){"use strict";A.exports=t.p+"img/lightpaperfibers.816fe4e5.png"},2809:function(A,e,t){"use strict";A.exports=t.p+"img/link01.4da3ae17.png"},9141:function(A,e,t){"use strict";A.exports=t.p+"img/link02.717277ce.png"},4427:function(A){"use strict";A.exports="data:image/png;base64,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"},3723:function(A,e,t){"use strict";A.exports=t.p+"img/painting-black.613bb218.png"},1457:function(A,e,t){"use strict";A.exports=t.p+"img/painting-di.2ae5491f.png"},91:function(A,e,t){"use strict";A.exports=t.p+"img/painting-hua.cf7d6bed.png"},9570:function(A,e,t){"use strict";A.exports=t.p+"img/painting-huazie.ff79b73a.png"},6574:function(A,e,t){"use strict";A.exports=t.p+"img/painting-smile.7b655103.png"},960:function(A,e,t){"use strict";A.exports=t.p+"img/painting-snow.3b08067c.png"},6254:function(A,e,t){"use strict";A.exports=t.p+"img/painting-white.04f5c135.png"},5127:function(A,e,t){"use strict";A.exports=t.p+"img/real-black.a6873ddc.png"},1475:function(A,e,t){"use strict";A.exports=t.p+"img/real-di.43806286.png"},4614:function(A,e,t){"use strict";A.exports=t.p+"img/real-hua.7ba122e6.png"},5051:function(A,e,t){"use strict";A.exports=t.p+"img/real-huazie.5d5b89d1.png"},7968:function(A,e,t){"use strict";A.exports=t.p+"img/real-smile.37e4c523.png"},5312:function(A,e,t){"use strict";A.exports=t.p+"img/real-snow.2007fab4.png"},894:function(A,e,t){"use strict";A.exports=t.p+"img/real-white.bca246eb.png"},9949:function(A,e,t){"use strict";A.exports=t.p+"img/step01.825f2c3a.png"},6042:function(A,e,t){"use strict";A.exports=t.p+"img/step02.8ff39be4.png"},453:function(A,e,t){"use strict";A.exports=t.p+"img/step03.63328e2a.png"},5904:function(A,e,t){"use strict";A.exports=t.p+"img/step04.eec2f5f1.png"},2716:function(A,e,t){"use strict";A.exports=t.p+"img/title01.ce658609.png"},9550:function(A,e,t){"use strict";A.exports=t.p+"img/title02.e671ee93.png"}},e={};function t(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return A[n](r,r.exports,t),r.exports}t.m=A,function(){var A=[];t.O=function(e,n,i,r){if(!n){var s=1/0;for(c=0;c<A.length;c++){n=A[c][0],i=A[c][1],r=A[c][2];for(var o=!0,l=0;l<n.length;l++)(!1&r||s>=r)&&Object.keys(t.O).every((function(A){return t.O[A](n[l])}))?n.splice(l--,1):(o=!1,r<s&&(s=r));if(o){A.splice(c--,1);var a=i();void 0!==a&&(e=a)}}return e}r=r||0;for(var c=A.length;c>0&&A[c-1][2]>r;c--)A[c]=A[c-1];A[c]=[n,i,r]}}(),function(){t.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return t.d(e,{a:e}),e}}(),function(){t.d=function(A,e){for(var n in e)t.o(e,n)&&!t.o(A,n)&&Object.defineProperty(A,n,{enumerable:!0,get:e[n]})}}(),function(){t.f={},t.e=function(A){return Promise.all(Object.keys(t.f).reduce((function(e,n){return t.f[n](A,e),e}),[]))}}(),function(){t.u=function(A){return"js/"+A+"."+{209:"368f5c70",252:"1719d44f",497:"f267c8d5",512:"2531de9f",626:"0896397c"}[A]+".js"}}(),function(){t.miniCssF=function(A){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){t.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)}}(),function(){var A={},e="pet-painting:";t.l=function(n,i,r,s){if(A[n])A[n].push(i);else{var o,l;if(void 0!==r)for(var a=document.getElementsByTagName("script"),c=0;c<a.length;c++){var g=a[c];if(g.getAttribute("src")==n||g.getAttribute("data-webpack")==e+r){o=g;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,t.nc&&o.setAttribute("nonce",t.nc),o.setAttribute("data-webpack",e+r),o.src=n),A[n]=[i];var p=function(e,t){o.onerror=o.onload=null,clearTimeout(u);var i=A[n];if(delete A[n],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(A){return A(t)})),e)return e(t)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){t.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){var A={143:0};t.f.j=function(e,n){var i=t.o(A,e)?A[e]:void 0;if(0!==i)if(i)n.push(i[2]);else{var r=new Promise((function(t,n){i=A[e]=[t,n]}));n.push(i[2]=r);var s=t.p+t.u(e),o=new Error,l=function(n){if(t.o(A,e)&&(i=A[e],0!==i&&(A[e]=void 0),i)){var r=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",o.name="ChunkLoadError",o.type=r,o.request=s,i[1](o)}};t.l(s,l,"chunk-"+e,e)}},t.O.j=function(e){return 0===A[e]};var e=function(e,n){var i,r,s=n[0],o=n[1],l=n[2],a=0;if(s.some((function(e){return 0!==A[e]}))){for(i in o)t.o(o,i)&&(t.m[i]=o[i]);if(l)var c=l(t)}for(e&&e(n);a<s.length;a++)r=s[a],t.o(A,r)&&A[r]&&A[r][0](),A[r]=0;return t.O(c)},n=self["webpackChunkpet_painting"]=self["webpackChunkpet_painting"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(3617)}));n=t.O(n)})();
//# sourceMappingURL=app.9bfb1ab9.js.map