import{w as p}from"./listening179-b180f9fb.js";import{m as d,e as _,s as x,c as o,a as t,x as h,y,F as u,r as m,u as g,o as c,l as f,t as s}from"./index-cff5a31a.js";const k={class:"relative overflow-x-auto"},b={class:"w-full text-left text-sm text-gray-500 dark:text-gray-400"},w=t("thead",{class:"bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"},[t("tr",null,[t("th",{class:"w-0 px-6 py-3"}," # "),t("th",{class:"w-0 px-6 py-3"}),t("th",{scope:"col",class:"w-0 px-6 py-3"}," 考点词 "),t("th",{scope:"col",class:"w-0 px-6 py-3"}," 词性 "),t("th",{scope:"col",class:"w-80 px-6 py-3"}," 词义 "),t("th",{scope:"col",class:"px-6 py-3"}," 同义替换 ")])],-1),v={class:"px-6 py-4"},C={class:"px-6 py-4"},B=["onClick"],N={scope:"row",class:"whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"},V=["href"],$={class:"px-6 py-4 italic"},j={class:"px-6 py-4"},E={class:"px-6 py-4"},T=d({__name:"index",setup(F){const l=_(p);function n(r){const a=document.createElement("audio");a.src=`179_audios/${r}.mp3`,a.play()}return(r,a)=>{const i=x("router-link");return c(),o("div",null,[t("div",k,[t("div",null,[h(i,{to:"/ielts/practice"},{default:y(()=>[f(" 练习 ")]),_:1})]),t("table",b,[w,t("tbody",null,[(c(!0),o(u,null,m(g(l),e=>(c(),o("tr",{key:e.index,class:"border-b bg-white dark:border-gray-700 dark:bg-gray-800"},[t("td",v,s(e.index),1),t("td",C,[t("a",{href:"javascript:;",class:"i-carbon-volume-up-filled block",onClick:D=>n(e.word)},null,8,B)]),t("th",N,[t("a",{href:`https://dictionary.cambridge.org/dictionary/english-chinese-simplified/${e.word}`,target:"_blank"},s(e.word),9,V)]),t("td",$,s(e.type),1),t("td",j,s(e.meaning),1),t("td",E,s(e.replace.join(", ")),1)]))),128))])])])])}}});export{T as default};