import{d as _,e as B,f as A,w as j,g as L,h as N,c as d,a as e,i as k,v as S,u as x,j as w,F as u,r as p,k as M,o as n,t as l,l as R,n as D}from"./index-2c9d8c5b.js";import m from"./vocabulary-3e849230.js";const U={class:"px-4 pt-6 2xl:px-0"},F={class:"border border-gray-200 rounded-lg bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6"},I={class:"items-center justify-between lg:flex"},z=e("div",{class:"mb-4 lg:mb-0"},[e("h3",{class:"mb-2 text-xl font-bold text-gray-900 dark:text-white"}," 雅思词汇真经 "),e("span",{class:"text-base font-normal text-gray-500 dark:text-gray-400"},"涵盖雅思必备核心词，逻辑词群记忆法")],-1),H={class:"items-center sm:flex"},K={class:"flex items-center"},O=["value"],P={class:"relative ml-2 flex-1"},Y=e("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"h-4 w-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1),Z={class:"mt-6 flex flex-col"},q={class:"overflow-x-auto rounded-lg"},J={class:"inline-block min-w-full align-middle"},Q={class:"overflow-hidden shadow sm:rounded-lg"},W={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-600"},X=e("thead",{class:"bg-gray-50 dark:bg-gray-700"},[e("tr",null,[e("th",{class:"p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white"}," # "),e("th",{class:"p-4 text-xs font-medium tracking-wider text-gray-500 dark:text-white"},[e("br")]),e("th",{class:"p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white"}," 词 "),e("th",{class:"w-0 text-left text-xs font-medium text-gray-500 dark:text-white"}," 词性 "),e("th",{class:"p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white"}," 词义 "),e("th",{class:"p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white"}," 例句 "),e("th",{class:"p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white"}," 拓展 ")])],-1),G={class:"bg-white dark:bg-gray-800"},ee={class:"bg-hex-f3f3f3"},te={colspan:"7",class:"px-4 py-6 text-sm font-normal text-gray-900 dark:bg-gray-500 dark:text-white"},se={class:"flex flex-row"},oe={class:"flex flex-1 items-center"},re={class:"text-lg"},ae={class:"justify-items-end"},le={controls:"",class:"chapter"},de=["src"],ne={class:"p-4"},ie=["onClick"],ce={class:"group relative whitespace-nowrap p-4 pr-6"},ue=["title","href"],ge=["onClick"],fe={style:{"font-style":"italic","font-family":"times"}},he={class:"p-4"},xe={class:"p-4"},pe={class:"p-4"},b="vocabulary_chapter",ke={__name:"index",setup(ye){const f=_(""),v=Object.keys(m),g=_(localStorage.getItem(b)||v[0]),T=_(!1),C=B(m),$=A(()=>{const t=structuredClone(m),r=f.value.trim().toLowerCase(),s=g.value;if(s!=="")for(const o in t)o!==s&&delete t[o];if(r!=="")for(const o in t){const i=t[o],h=[];i.words.forEach(a=>{h.push(a.filter(y=>y.word.toLowerCase().includes(r)))}),i.words=h}return t});j(g,(t,r)=>{localStorage.setItem(b,t)}),L(()=>{T.value=!0;const t=document.getElementsByTagName("audio");for(const r of t)r.onplay=()=>{for(const s of t)s.blur(),r!==s&&s.pause()}}),N(()=>{for(const t of document.getElementsByTagName("audio"))t.load()}),document.addEventListener("keydown",t=>{if(["ArrowLeft","ArrowRight"," "].includes(t.key)){t.preventDefault();const r=document.getElementsByTagName("audio"),s={ArrowLeft:-5,ArrowRight:5};for(const o of r){if(o.blur(),s[t.key]){const i=s[t.key];o.currentTime=o.currentTime+i}t.key===" "&&(o.paused?o.play():o.pause())}}});let c=null;function E(t){c&&(c.pause(),c.currentTime=0),c=document.createElement("audio"),c.src=t,c.play()}function V(t){const r=`${t.word} ${t.pos} ${t.meaning}`;navigator.clipboard.writeText(r)}return(t,r)=>(n(),d("div",U,[e("div",F,[e("div",I,[z,e("div",H,[e("div",K,[k(e("select",{"onUpdate:modelValue":r[0]||(r[0]=s=>w(g)?g.value=s:null),class:"block w-full flex-1 border border-gray-300 rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 focus:border-blue-500 dark:bg-gray-700 dark:text-white focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400"},[(n(!0),d(u,null,p(x(C),(s,o)=>(n(),d("option",{key:o,value:o},l(o),9,O))),128))],512),[[S,x(g)]]),e("div",P,[Y,k(e("input",{"onUpdate:modelValue":r[1]||(r[1]=s=>w(f)?f.value=s:null),type:"search",class:"block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 dark:border-gray-600 focus:border-blue-500 dark:bg-gray-700 dark:text-white focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400",placeholder:"Search"},null,512),[[M,x(f)]])])])])]),e("div",Z,[e("div",q,[e("div",J,[e("div",Q,[e("table",W,[X,e("tbody",G,[(n(!0),d(u,null,p(x($),(s,o)=>(n(),d(u,{key:o},[e("tr",ee,[e("td",te,[e("div",se,[e("div",oe,[e("span",re,l(o),1),R(" （ "+l(s.groupCount)+" 组 "+l(s.wordCount)+" 个词 ） ",1)]),e("div",ae,[e("audio",le,[e("source",{src:`vocabulary/audio/${s.audio}`,type:"audio/mpeg"},null,8,de)])])])])]),(n(!0),d(u,null,p(s.words,(i,h)=>(n(),d(u,{key:i.label},[(n(!0),d(u,null,p(i,a=>(n(),d("tr",{key:a.id,class:D([{"bg-gray-50 dark:bg-gray-700":a.id%2===0,[`group-color-${h%15}`]:!0},"text-sm text-gray-900 dark:text-white"])},[e("td",ne,l(a.id),1),e("td",null,[e("i",{class:"i-carbon-volume-up-filled block cursor-pointer",onClick:y=>E(`vocabulary/audio/${o}/${a.word}.mp3`)},null,8,ie)]),e("td",ce,[e("a",{class:"hover:underline",title:`在剑桥词典中查询 ${a.word}`,target:"_blank",href:`https://dictionary.cambridge.org/dictionary/english-chinese-simplified/${a.word}`},l(a.word),9,ue),e("i",{class:"i-ph-copy absolute right-0 hidden cursor-pointer px-4 group-hover:inline-block",onClick:y=>V(a)},null,8,ge)]),e("td",fe,l(a.pos),1),e("td",he,l(a.meaning),1),e("td",xe,l(a.example),1),e("td",pe,l(a.extra),1)],2))),128))],64))),128))],64))),128))])])])])])])])]))}};export{ke as default};
