(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[857],{5393:function(e,r){"use strict";r.Z=function(e){return e.filter(Boolean).join(" ")}},5381:function(e,r,t){"use strict";var a=t(6705),n=t(1567),s=t.n(n),i=t(4279),c=t(5393),o=t(5344),l=t.n(o);function d(e){let{direction:r,active:t,error:n,size:s="large"}=e;return(0,a.jsx)(i.E,{icon:"arrow",className:(0,c.Z)([l().icon,l()[r],l()[s],t&&l().active,n&&l().error])})}d.propTypes={direction:s().oneOf(["left","right","up","down"]).isRequired,active:s().bool.isRequired,error:s().bool.isRequired,size:s().oneOf(["small","large"]).isRequired},d.List=function(e){let{children:r}=e;return(0,a.jsx)("div",{className:l().list,children:r})},d.List.propTypes={children:s().node.isRequired},r.Z=d},7015:function(e,r,t){"use strict";var a=t(6705),n=t(955),s=t(1567),i=t.n(s),c=t(5393),o=t(5417),l=t.n(o);let d=(0,n.forwardRef)((e,r)=>{let{className:t,label:n,size:s,children:i,...o}=e;return i?(0,a.jsxs)("label",{htmlFor:o.id,className:(0,c.Z)([l()["label-children"],t]),children:[(0,a.jsx)("input",{name:o.id,ref:r,type:"checkbox",className:l()["checkbox-input"],...o}),i]}):(0,a.jsxs)("label",{htmlFor:o.id,className:(0,c.Z)([l()["checkbox-container"],l()[s],"ui-checkbox",t]),children:[n?(0,a.jsx)("span",{className:l().label,children:n}):null,(0,a.jsx)("input",{name:o.id,ref:r,type:"checkbox",className:l()["checkbox-input"],...o}),(0,a.jsx)("span",{className:(0,c.Z)([l()["checkbox-checkmark"],"ui-checkbox-checkmark"])})]})});d.propTypes={id:i().string.isRequired,className:i().string,label:i().string,size:i().oneOf(["small","large"]),children:i().node},d.defaultProps={className:"",label:null,size:"large",children:null},r.Z=d},4279:function(e,r,t){"use strict";t.d(r,{E:function(){return u}});var a,n=t(955),s=t(1567),i=t.n(s),c=t(4936);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}let d={arrow:function(e){return c.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 41 41"},e),a||(a=c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M28.852 27.333V41h-16.7V27.333H0L20.5 0 41 27.333z","data-name":"Shape 2 copy 4"})))},settings:function(e){return c.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 988 980"},e),c.createElement("path",{fill:"currentColor",d:"m874 553-11 50 67 108-131 168-117-42-46 22-41 121H385l-41-121-46-22-117 42L50 711l67-108-11-50L0 485l47-210 123-14 32-40-14-128L377 0l88 91h50l88-91 189 93-14 128 32 40 123 14 47 210Zm-2-208-101-11-71-91 12-104-93-46-72 74H433l-72-74-93 46 12 104-71 91-101 11-23 104 87 55 25 113-55 89 65 82 96-34 102 50 33 99h104l33-99 102-50 96 34 65-82-55-89 25-113 87-55ZM490.5 683C384.185 683 298 596.815 298 490.5S384.185 298 490.5 298 683 384.185 683 490.5 596.815 683 490.5 683m0-324A131.5 131.5 0 1 0 622 490.5 131.5 131.5 0 0 0 490.5 359","data-name":"Shape 1 copy",style:{fillRule:"evenodd"}}))}};function u(e){let{icon:r,...t}=e;if(d[r])try{let e=d[r];return e?n.createElement(e,t):null}catch(e){console.log('"'.concat(r,'":'),e)}return null}u.propTypes={icon:i().oneOf(Object.keys(d)).isRequired}},8864:function(e,r,t){"use strict";var a=t(6705),n=t(1567),s=t.n(n),i=t(5775),c=t.n(i),o=t(5393);function l(e){let{name:r,className:t=""}=e;return(0,a.jsx)("div",{className:(0,o.Z)([c().container,t]),children:(0,a.jsx)("span",{className:c().name,children:r})})}l.propTypes={name:s().string.isRequired,className:s().string.isRequired},r.Z=l},4114:function(e,r,t){"use strict";t.d(r,{default:function(){return k}});var a=t(6705),n=t(1567),s=t.n(n),i=t(955),c=t(2015),o=t.n(c),l=t(5393),d=function(e){let{initialState:r,key:t,defaultValue:a}=e,[n,s]=(0,i.useState)(r.reduce((e,r)=>(e[r[t]]=a,e),{})),c=Object.values(n).every(e=>e);return{checkboxes:n,handleChange:(e,r)=>{s(t=>({...t,[e]:r||!t[e]}))},checkboxesAreChecked:c,handleChangeAll:()=>{s(e=>{let r={};return Object.keys(e).forEach(e=>{r[e]=!c}),r})}}},u=t(8208),_=t.n(u);function h(e){let{isOpened:r,onClick:t}=e;return(0,a.jsx)("button",{type:"button",onClick:t,className:(0,l.Z)([_().button,_().burger,r?_().cross:""]),"aria-label":"Open side stratagems",children:(0,a.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",children:[(0,a.jsx)("path",{className:(0,l.Z)([_().line,_().line1]),d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),(0,a.jsx)("path",{className:(0,l.Z)([_().line,_().line2]),d:"M 20,50 H 80"}),(0,a.jsx)("path",{className:(0,l.Z)([_().line,_().line3]),d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})]})})}h.propTypes={isOpened:s().bool.isRequired,onClick:s().func.isRequired};var m=t(1471),g=t.n(m);function p(e){let{children:r}=e;return(0,a.jsx)("div",{className:g().container,children:r})}p.propTypes={children:s().node.isRequired},p.Category=function(e){let{children:r}=e;return(0,a.jsx)("div",{className:g().category,children:r})},p.Category.propTypes={children:s().node.isRequired},p.Head=function(e){let{category:r,children:t}=e;return(0,a.jsxs)("div",{className:g().head,children:[(0,a.jsx)("h3",{className:g().title,children:r}),(0,a.jsx)("div",{className:g().action,children:t})]})},p.Head.propTypes={category:s().string.isRequired,children:s().node.isRequired},p.Cards=function(e){let{children:r,stratagems:t}=e;return(0,a.jsx)("div",{className:g().cards,children:t.map((e,t)=>r(e,t))})},p.Cards.propTypes={children:s().func.isRequired,stratagems:s().arrayOf(s().shape({name:s().string.isRequired,code:s().arrayOf(s().string).isRequired})).isRequired};var f=t(7015),x=t(6948),b=t(7910),y=t.n(b);function j(e){let{name:r,code:t,category:n,active:s=!1,children:i=null}=e;return(0,a.jsxs)("div",{className:(0,l.Z)([y().card,s&&y().active]),title:"".concat(r," - ").concat(t.map(e=>{switch(e){case"left":return"←";case"right":return"→";case"up":return"↑";case"down":return"↓";default:return e}})),children:[(0,a.jsx)(x.default,{src:"/icons/stratagems/".concat(n,"/").concat(r,".svg"),alt:r,width:55,height:55,className:y().icon}),i]})}j.propTypes={name:s().string.isRequired,code:s().arrayOf(s().string).isRequired,category:s().string.isRequired,active:s().bool,children:s().node},j.Wrapper=function(e){let{children:r}=e;return(0,a.jsx)("div",{className:y().wrapper,children:r})},j.Wrapper.propTypes={children:s().node.isRequired};var v=t(2378);function C(e){let{stratagems:r,stratagemsByCategories:t,defaultCheckValue:n=!0,children:s}=e,c=window.innerWidth>=1024,[u,_]=(0,i.useState)(!1);(0,i.useEffect)(()=>{c&&_(!0)},[c]);let{checkboxes:m,handleChange:g,checkboxesAreChecked:x,handleChangeAll:b}=d({initialState:r,key:"name",defaultValue:n}),y=e=>{g(e)},C=(e,r)=>{t[e].forEach(e=>g(e.name,r))};return(0,a.jsxs)("main",{className:(0,l.Z)([o().container,u?o().opened:o().closed]),children:[(0,a.jsx)("div",{className:o().buttonSide,children:(0,a.jsx)(h,{onClick:()=>_(!u),isOpened:u})}),(0,a.jsx)("div",{className:o().side,children:(0,a.jsxs)(p,{children:[(0,a.jsx)(f.Z,{id:"all",checked:x,onChange:()=>{b()},label:x?"Deselect all":"Select all",className:o().checkboxAll}),(0,a.jsxs)("div",{className:o().sideContainer,children:[(0,a.jsx)("div",{className:o().sideDecoration}),Object.entries(t).map(e=>{let[r,t]=e,n=t.every(e=>m[e.name]);return(0,a.jsxs)(p.Category,{children:[(0,a.jsx)(p.Head,{category:r,children:(0,a.jsx)(f.Z,{id:r,checked:n,onChange:()=>C(r,!n)})}),(0,a.jsx)(p.Cards,{stratagems:t,children:e=>(0,a.jsx)(f.Z,{id:e.name,checked:m[e.name],onChange:()=>y(e.name),children:(0,a.jsx)(j,{name:e.name,code:e.code,category:e.category.name,active:m[e.name]})},e.name)})]},r)})]})]})}),(0,a.jsx)("div",{className:o().main,children:(0,a.jsx)(v.l,{setCheckedStratagem:g,checkedStratagems:m,children:s})})]})}C.propTypes={children:s().node.isRequired,stratagems:s().arrayOf(s().shape({id:s().string.isRequired,name:s().string.isRequired,code:s().arrayOf(s().string).isRequired,category:s().shape({name:s().string.isRequired})})).isRequired,stratagemsByCategories:s().objectOf(s().arrayOf(s().shape({id:s().string.isRequired,name:s().string.isRequired,code:s().arrayOf(s().string).isRequired}))).isRequired,defaultCheckValue:s().bool.isRequired};var k=C},2378:function(e,r,t){"use strict";t.d(r,{V:function(){return l},l:function(){return o}});var a=t(6705),n=t(1567),s=t.n(n),i=t(955);let c=(0,i.createContext)({checkedStratagems:{},setCheckedStratagem:()=>{}});function o(e){let{checkedStratagems:r={},setCheckedStratagem:t=()=>{},children:n=null}=e,s=(0,i.useMemo)(()=>({checkedStratagems:r,setCheckedStratagem:t}),[r,t]);return(0,a.jsx)(c.Provider,{value:s,children:n})}let l=()=>(0,i.useContext)(c);o.propTypes={checkedStratagems:s().shape({[s().string]:s().bool}).isRequired,setCheckedStratagem:s().func.isRequired,children:s().node.isRequired}},5344:function(e){e.exports={large:"Arrow_large__dV8LH",small:"Arrow_small__RrYqr",icon:"Arrow_icon__hC2BV",right:"Arrow_right__o6b70",left:"Arrow_left__EFNw7",up:"Arrow_up__K61XY",down:"Arrow_down__QO5Xx",active:"Arrow_active__9Vbs7","size-success":"Arrow_size-success___1QN0",error:"Arrow_error__uNT2r","blink-error":"Arrow_blink-error__Ijsc8",list:"Arrow_list__C52AK"}},8208:function(e){e.exports={button:"ButtonSideStratagems_button__d49J5",line:"ButtonSideStratagems_line___SKjj",line1:"ButtonSideStratagems_line1__K5cW6",line2:"ButtonSideStratagems_line2__Lznni",line3:"ButtonSideStratagems_line3__E9MsO",burger:"ButtonSideStratagems_burger__H3EtR",cross:"ButtonSideStratagems_cross__6H4qZ"}},5417:function(e){e.exports={"checkbox-container":"Checkbox_checkbox-container__zwpEM","checkbox-input":"Checkbox_checkbox-input__LwGE_","checkbox-checkmark":"Checkbox_checkbox-checkmark__kP1Gy",large:"Checkbox_large__azCiS",small:"Checkbox_small__LGXRq",label:"Checkbox_label__yjPp9","label-children":"Checkbox_label-children__SavPT"}},1471:function(e){e.exports={container:"StratagemsCategories_container__vgPIw",category:"StratagemsCategories_category__qtBKY",head:"StratagemsCategories_head__4seqe",title:"StratagemsCategories_title__nCfZ5",cards:"StratagemsCategories_cards__HKxlR"}},5775:function(e){e.exports={container:"StratagemsName_container__DXJW2",name:"StratagemsName_name__E4XEJ"}},7910:function(e){e.exports={wrapper:"StratagemsCard_wrapper__KjHnX",card:"StratagemsCard_card__sdnRd",active:"StratagemsCard_active__rDaiJ",icon:"StratagemsCard_icon__bngXX",name:"StratagemsCard_name__in1NC",code:"StratagemsCard_code__HKsqR"}},2015:function(e){e.exports={container:"StrategemsLayout_container__CPRTI",buttonSide:"StrategemsLayout_buttonSide__DOBzJ",side:"StrategemsLayout_side__Pc3uq",sideContainer:"StrategemsLayout_sideContainer__EFJ82",sideDecoration:"StrategemsLayout_sideDecoration__CaydO",main:"StrategemsLayout_main__tohOp",checkboxAll:"StrategemsLayout_checkboxAll__ZLN7R",opened:"StrategemsLayout_opened__ybJp_",closed:"StrategemsLayout_closed__nQ8E_"}}}]);