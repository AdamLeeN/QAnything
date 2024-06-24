import{r as R,D as oe,_ as s,o as Oe,p as et,i as tt,s as X,c as v,d as re,w as J,C as nt,e as l,f as x,F as Ve,b as F,ap as Ze,k as ot,P as rt,A as ie,g as it,aQ as q,m as Ae,au as at,q as lt,at as st,u as Ye,ax as ge,V as ut,n as ct}from"./index-De9HRGdb.js";import{m as vt,a4 as ft,E as Le,$ as Q,K as De,ab as pt,R as gt}from"./RightOutlined-DDskqLVR.js";import{s as dt,h as He,t as mt,D as wt,q as Ue,v as ht,w as bt,L as Ct,E as yt}from"./useChatSource-BrQ0m7KS.js";var St="[object Number]";function Ot(e){return typeof e=="number"||vt(e)&&ft(e)==St}function Pt(e){const t=R(null),n=oe(s({},e)),o=R([]),r=u=>{t.value===null&&(o.value=[],t.value=Le(()=>{let f;o.value.forEach(g=>{f=s(s({},f),g)}),s(n,f),t.value=null})),o.value.push(u)};return Oe(()=>{t.value&&Le.cancel(t.value)}),[n,r]}function ze(e,t,n,o){const r=t+n,u=(n-o)/2;if(n>o){if(t>0)return{[e]:u};if(t<0&&r<o)return{[e]:-u}}else if(t<0||r>o)return{[e]:t<0?u:-u};return{}}function xt(e,t,n,o){const{width:r,height:u}=dt();let f=null;return e<=r&&t<=u?f={x:0,y:0}:(e>r||t>u)&&(f=s(s({},ze("x",n,e,r)),ze("y",o,t,u))),f}var Mt=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const Ee=Symbol("previewGroupContext"),Pe={provide:e=>{et(Ee,e)},inject:()=>tt(Ee,{isPreviewGroup:X(!1),previewUrls:v(()=>new Map),setPreviewUrls:()=>{},current:R(null),setCurrent:()=>{},setShowPreview:()=>{},setMousePosition:()=>{},registerImage:null,rootClassName:""})},It=()=>({previewPrefixCls:String,preview:{type:[Boolean,Object],default:!0},icons:{type:Object,default:()=>({})}}),$t=re({compatConfig:{MODE:3},name:"PreviewGroup",inheritAttrs:!1,props:It(),setup(e,t){let{slots:n}=t;const o=v(()=>{const a={visible:void 0,onVisibleChange:()=>{},getContainer:void 0,current:0};return typeof e.preview=="object"?Qe(e.preview,a):a}),r=oe(new Map),u=R(),f=v(()=>o.value.visible),g=v(()=>o.value.getContainer),S=(a,P)=>{var y,D;(D=(y=o.value).onVisibleChange)===null||D===void 0||D.call(y,a,P)},[M,p]=He(!!f.value,{value:f,onChange:S}),m=R(null),A=v(()=>f.value!==void 0),d=v(()=>Array.from(r.keys())),h=v(()=>d.value[o.value.current]),b=v(()=>new Map(Array.from(r).filter(a=>{let[,{canPreview:P}]=a;return!!P}).map(a=>{let[P,{url:y}]=a;return[P,y]}))),w=function(a,P){let y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;r.set(a,{url:P,canPreview:y})},C=a=>{u.value=a},L=a=>{m.value=a},T=function(a,P){let y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const D=()=>{r.delete(a)};return r.set(a,{url:P,canPreview:y}),D},O=a=>{a==null||a.stopPropagation(),p(!1),L(null)};return J(h,a=>{C(a)},{immediate:!0,flush:"post"}),nt(()=>{M.value&&A.value&&C(h.value)},{flush:"post"}),Pe.provide({isPreviewGroup:X(!0),previewUrls:b,setPreviewUrls:w,current:u,setCurrent:C,setShowPreview:p,setMousePosition:L,registerImage:T}),()=>{const a=Mt(o.value,[]);return l(Ve,null,[n.default&&n.default(),l(We,x(x({},a),{},{"ria-hidden":!M.value,visible:M.value,prefixCls:e.previewPrefixCls,onClose:O,mousePosition:m.value,src:b.value.get(u.value),icons:e.icons,getContainer:g.value}),null)])}}}),Xe=$t,U={x:0,y:0},jt=s(s({},mt()),{src:String,alt:String,rootClassName:String,icons:{type:Object,default:()=>({})}}),Nt=re({compatConfig:{MODE:3},name:"Preview",inheritAttrs:!1,props:jt,emits:["close","afterClose"],setup(e,t){let{emit:n,attrs:o}=t;const{rotateLeft:r,rotateRight:u,zoomIn:f,zoomOut:g,close:S,left:M,right:p,flipX:m,flipY:A}=oe(e.icons),d=X(1),h=X(0),b=oe({x:1,y:1}),[w,C]=Pt(U),L=()=>n("close"),T=X(),O=oe({originX:0,originY:0,deltaX:0,deltaY:0}),a=X(!1),P=Pe.inject(),{previewUrls:y,current:D,isPreviewGroup:K,setCurrent:N}=P,V=v(()=>y.value.size),Z=v(()=>Array.from(y.value.keys())),I=v(()=>Z.value.indexOf(D.value)),de=v(()=>K.value?y.value.get(D.value):e.src),z=v(()=>K.value&&V.value>1),_=X({wheelDirection:0}),ee=()=>{d.value=1,h.value=0,b.x=1,b.y=1,C(U),n("afterClose")},c=i=>{i?d.value+=.5:d.value++,C(U)},E=i=>{d.value>1&&(i?d.value-=.5:d.value--),C(U)},$=()=>{h.value+=90},Y=()=>{h.value-=90},ae=()=>{b.x=-b.x},me=()=>{b.y=-b.y},le=i=>{i.preventDefault(),i.stopPropagation(),I.value>0&&N(Z.value[I.value-1])},se=i=>{i.preventDefault(),i.stopPropagation(),I.value<V.value-1&&N(Z.value[I.value+1])},te=F({[`${e.prefixCls}-moving`]:a.value}),we=`${e.prefixCls}-operations-operation`,he=`${e.prefixCls}-operations-icon`,ue=[{icon:S,onClick:L,type:"close"},{icon:f,onClick:()=>c(),type:"zoomIn"},{icon:g,onClick:()=>E(),type:"zoomOut",disabled:v(()=>d.value===1)},{icon:u,onClick:$,type:"rotateRight"},{icon:r,onClick:Y,type:"rotateLeft"},{icon:m,onClick:ae,type:"flipX"},{icon:A,onClick:me,type:"flipY"}],ce=()=>{if(e.visible&&a.value){const i=T.value.offsetWidth*d.value,j=T.value.offsetHeight*d.value,{left:k,top:H}=Ue(T.value),G=h.value%180!==0;a.value=!1;const B=xt(G?j:i,G?i:j,k,H);B&&C(s({},B))}},be=i=>{i.button===0&&(i.preventDefault(),i.stopPropagation(),O.deltaX=i.pageX-w.x,O.deltaY=i.pageY-w.y,O.originX=w.x,O.originY=w.y,a.value=!0)},ve=i=>{e.visible&&a.value&&C({x:i.pageX-O.deltaX,y:i.pageY-O.deltaY})},Ce=i=>{if(!e.visible)return;i.preventDefault();const j=i.deltaY;_.value={wheelDirection:j}},ye=i=>{!e.visible||!z.value||(i.preventDefault(),i.keyCode===De.LEFT?I.value>0&&N(Z.value[I.value-1]):i.keyCode===De.RIGHT&&I.value<V.value-1&&N(Z.value[I.value+1]))},fe=()=>{e.visible&&(d.value!==1&&(d.value=1),(w.x!==U.x||w.y!==U.y)&&C(U))};let ne=()=>{};return Oe(()=>{J([()=>e.visible,a],()=>{ne();let i,j;const k=Q(window,"mouseup",ce,!1),H=Q(window,"mousemove",ve,!1),G=Q(window,"wheel",Ce,{passive:!1}),B=Q(window,"keydown",ye,!1);try{window.top!==window.self&&(i=Q(window.top,"mouseup",ce,!1),j=Q(window.top,"mousemove",ve,!1))}catch{}ne=()=>{k.remove(),H.remove(),G.remove(),B.remove(),i&&i.remove(),j&&j.remove()}},{flush:"post",immediate:!0}),J([_],()=>{const{wheelDirection:i}=_.value;i>0?E(!0):i<0&&c(!0)})}),Ze(()=>{ne()}),()=>{const{visible:i,prefixCls:j,rootClassName:k}=e;return l(wt,x(x({},o),{},{transitionName:e.transitionName,maskTransitionName:e.maskTransitionName,closable:!1,keyboard:!0,prefixCls:j,onClose:L,afterClose:ee,visible:i,wrapClassName:te,rootClassName:k,getContainer:e.getContainer}),{default:()=>[l("div",{class:[`${e.prefixCls}-operations-wrapper`,k]},[l("ul",{class:`${e.prefixCls}-operations`},[ue.map(H=>{let{icon:G,onClick:B,type:Ne,disabled:pe}=H;return l("li",{class:F(we,{[`${e.prefixCls}-operations-operation-disabled`]:pe&&(pe==null?void 0:pe.value)}),onClick:B,key:Ne},[ot(G,{class:he})])})])]),l("div",{class:`${e.prefixCls}-img-wrapper`,style:{transform:`translate3d(${w.x}px, ${w.y}px, 0)`}},[l("img",{onMousedown:be,onDblclick:fe,ref:T,class:`${e.prefixCls}-img`,src:de.value,alt:e.alt,style:{transform:`scale3d(${b.x*d.value}, ${b.y*d.value}, 1) rotate(${h.value}deg)`}},null)]),z.value&&l("div",{class:F(`${e.prefixCls}-switch-left`,{[`${e.prefixCls}-switch-left-disabled`]:I.value<=0}),onClick:le},[M]),z.value&&l("div",{class:F(`${e.prefixCls}-switch-right`,{[`${e.prefixCls}-switch-right-disabled`]:I.value>=V.value-1}),onClick:se},[p])]})}}}),We=Nt;var At=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const Fe=()=>({src:String,wrapperClassName:String,wrapperStyle:{type:Object,default:void 0},rootClassName:String,prefixCls:String,previewPrefixCls:String,previewMask:{type:[Boolean,Function],default:void 0},placeholder:rt.any,fallback:String,preview:{type:[Boolean,Object],default:!0},onClick:{type:Function},onError:{type:Function}}),Qe=(e,t)=>{const n=s({},e);return Object.keys(t).forEach(o=>{e[o]===void 0&&(n[o]=t[o])}),n};let Lt=0;const Je=re({compatConfig:{MODE:3},name:"VcImage",inheritAttrs:!1,props:Fe(),emits:["click","error"],setup(e,t){let{attrs:n,slots:o,emit:r}=t;const u=v(()=>e.prefixCls),f=v(()=>`${u.value}-preview`),g=v(()=>{const c={visible:void 0,onVisibleChange:()=>{},getContainer:void 0};return typeof e.preview=="object"?Qe(e.preview,c):c}),S=v(()=>{var c;return(c=g.value.src)!==null&&c!==void 0?c:e.src}),M=v(()=>e.placeholder&&e.placeholder!==!0||o.placeholder),p=v(()=>g.value.visible),m=v(()=>g.value.getContainer),A=v(()=>p.value!==void 0),d=(c,E)=>{var $,Y;(Y=($=g.value).onVisibleChange)===null||Y===void 0||Y.call($,c,E)},[h,b]=He(!!p.value,{value:p,onChange:d}),w=R(M.value?"loading":"normal");J(()=>e.src,()=>{w.value=M.value?"loading":"normal"});const C=R(null),L=v(()=>w.value==="error"),T=Pe.inject(),{isPreviewGroup:O,setCurrent:a,setShowPreview:P,setMousePosition:y,registerImage:D}=T,K=R(Lt++),N=v(()=>e.preview&&!L.value),V=()=>{w.value="normal"},Z=c=>{w.value="error",r("error",c)},I=c=>{if(!A.value){const{left:E,top:$}=Ue(c.target);O.value?(a(K.value),y({x:E,y:$})):C.value={x:E,y:$}}O.value?P(!0):b(!0),r("click",c)},de=()=>{b(!1),A.value||(C.value=null)},z=R(null);J(()=>z,()=>{w.value==="loading"&&z.value.complete&&(z.value.naturalWidth||z.value.naturalHeight)&&V()});let _=()=>{};Oe(()=>{J([S,N],()=>{if(_(),!O.value)return()=>{};_=D(K.value,S.value,N.value),N.value||_()},{flush:"post",immediate:!0})}),Ze(()=>{_()});const ee=c=>Ot(c)?c+"px":c;return()=>{const{prefixCls:c,wrapperClassName:E,fallback:$,src:Y,placeholder:ae,wrapperStyle:me,rootClassName:le}=e,{width:se,height:te,crossorigin:we,decoding:he,alt:ue,sizes:ce,srcset:be,usemap:ve,class:Ce,style:ye}=n,fe=g.value,{icons:ne,maskClassName:i}=fe,j=At(fe,["icons","maskClassName"]),k=F(c,E,le,{[`${c}-error`]:L.value}),H=L.value&&$?$:S.value,G={crossorigin:we,decoding:he,alt:ue,sizes:ce,srcset:be,usemap:ve,width:se,height:te,class:F(`${c}-img`,{[`${c}-img-placeholder`]:ae===!0},Ce),style:s({height:ee(te)},ye)};return l(Ve,null,[l("div",{class:k,onClick:N.value?I:B=>{r("click",B)},style:s({width:ee(se),height:ee(te)},me)},[l("img",x(x(x({},G),L.value&&$?{src:$}:{onLoad:V,onError:Z,src:Y}),{},{ref:z}),null),w.value==="loading"&&l("div",{"aria-hidden":"true",class:`${c}-placeholder`},[ae||o.placeholder&&o.placeholder()]),o.previewMask&&N.value&&l("div",{class:[`${c}-mask`,i]},[o.previewMask()])]),!O.value&&N.value&&l(We,x(x({},j),{},{"aria-hidden":!h.value,visible:h.value,prefixCls:f.value,onClose:de,mousePosition:C.value,src:H,alt:ue,getContainer:m.value,icons:ne,rootClassName:le}),null)])}}});Je.PreviewGroup=Xe;const Dt=Je;var zt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"};const Et=zt;function Re(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),o.forEach(function(r){Rt(e,r,n[r])})}return e}function Rt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var xe=function(t,n){var o=Re({},t,n.attrs);return l(ie,Re({},o,{icon:Et}),null)};xe.displayName="RotateLeftOutlined";xe.inheritAttrs=!1;const Tt=xe;var _t={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"};const kt=_t;function Te(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),o.forEach(function(r){Gt(e,r,n[r])})}return e}function Gt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Me=function(t,n){var o=Te({},t,n.attrs);return l(ie,Te({},o,{icon:kt}),null)};Me.displayName="RotateRightOutlined";Me.inheritAttrs=!1;const Bt=Me;var Vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"};const Zt=Vt;function _e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),o.forEach(function(r){Yt(e,r,n[r])})}return e}function Yt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ie=function(t,n){var o=_e({},t,n.attrs);return l(ie,_e({},o,{icon:Zt}),null)};Ie.displayName="ZoomInOutlined";Ie.inheritAttrs=!1;const Ht=Ie;var Ut={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"};const Xt=Ut;function ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),o.forEach(function(r){Wt(e,r,n[r])})}return e}function Wt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $e=function(t,n){var o=ke({},t,n.attrs);return l(ie,ke({},o,{icon:Xt}),null)};$e.displayName="ZoomOutOutlined";$e.inheritAttrs=!1;const Ft=$e;var Qt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"};const Jt=Qt;function Ge(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),o.forEach(function(r){qt(e,r,n[r])})}return e}function qt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var je=function(t,n){var o=Ge({},t,n.attrs);return l(ie,Ge({},o,{icon:Jt}),null)};je.displayName="SwapOutlined";je.inheritAttrs=!1;const Be=je,Se=e=>({position:e||"absolute",inset:0}),Kt=e=>{const{iconCls:t,motionDurationSlow:n,paddingXXS:o,marginXXS:r,prefixCls:u}=e;return{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",background:new q("#000").setAlpha(.5).toRgbString(),cursor:"pointer",opacity:0,transition:`opacity ${n}`,[`.${u}-mask-info`]:s(s({},at),{padding:`0 ${o}px`,[t]:{marginInlineEnd:r,svg:{verticalAlign:"baseline"}}})}},en=e=>{const{previewCls:t,modalMaskBg:n,paddingSM:o,previewOperationColorDisabled:r,motionDurationSlow:u}=e,f=new q(n).setAlpha(.1),g=f.clone().setAlpha(.2);return{[`${t}-operations`]:s(s({},lt(e)),{display:"flex",flexDirection:"row-reverse",alignItems:"center",color:e.previewOperationColor,listStyle:"none",background:f.toRgbString(),pointerEvents:"auto","&-operation":{marginInlineStart:o,padding:o,cursor:"pointer",transition:`all ${u}`,userSelect:"none","&:hover":{background:g.toRgbString()},"&-disabled":{color:r,pointerEvents:"none"},"&:last-of-type":{marginInlineStart:0}},"&-progress":{position:"absolute",left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%)"},"&-icon":{fontSize:e.previewOperationSize}})}},tn=e=>{const{modalMaskBg:t,iconCls:n,previewOperationColorDisabled:o,previewCls:r,zIndexPopup:u,motionDurationSlow:f}=e,g=new q(t).setAlpha(.1),S=g.clone().setAlpha(.2);return{[`${r}-switch-left, ${r}-switch-right`]:{position:"fixed",insetBlockStart:"50%",zIndex:u+1,display:"flex",alignItems:"center",justifyContent:"center",width:e.imagePreviewSwitchSize,height:e.imagePreviewSwitchSize,marginTop:-e.imagePreviewSwitchSize/2,color:e.previewOperationColor,background:g.toRgbString(),borderRadius:"50%",transform:"translateY(-50%)",cursor:"pointer",transition:`all ${f}`,pointerEvents:"auto",userSelect:"none","&:hover":{background:S.toRgbString()},"&-disabled":{"&, &:hover":{color:o,background:"transparent",cursor:"not-allowed",[`> ${n}`]:{cursor:"not-allowed"}}},[`> ${n}`]:{fontSize:e.previewOperationSize}},[`${r}-switch-left`]:{insetInlineStart:e.marginSM},[`${r}-switch-right`]:{insetInlineEnd:e.marginSM}}},nn=e=>{const{motionEaseOut:t,previewCls:n,motionDurationSlow:o,componentCls:r}=e;return[{[`${r}-preview-root`]:{[n]:{height:"100%",textAlign:"center",pointerEvents:"none"},[`${n}-body`]:s(s({},Se()),{overflow:"hidden"}),[`${n}-img`]:{maxWidth:"100%",maxHeight:"100%",verticalAlign:"middle",transform:"scale3d(1, 1, 1)",cursor:"grab",transition:`transform ${o} ${t} 0s`,userSelect:"none",pointerEvents:"auto","&-wrapper":s(s({},Se()),{transition:`transform ${o} ${t} 0s`,display:"flex",justifyContent:"center",alignItems:"center","&::before":{display:"inline-block",width:1,height:"50%",marginInlineEnd:-1,content:'""'}})},[`${n}-moving`]:{[`${n}-preview-img`]:{cursor:"grabbing","&-wrapper":{transitionDuration:"0s"}}}}},{[`${r}-preview-root`]:{[`${n}-wrap`]:{zIndex:e.zIndexPopup}}},{[`${r}-preview-operations-wrapper`]:{position:"fixed",insetBlockStart:0,insetInlineEnd:0,zIndex:e.zIndexPopup+1,width:"100%"},"&":[en(e),tn(e)]}]},on=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",display:"inline-block",[`${t}-img`]:{width:"100%",height:"auto",verticalAlign:"middle"},[`${t}-img-placeholder`]:{backgroundColor:e.colorBgContainerDisabled,backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"30%"},[`${t}-mask`]:s({},Kt(e)),[`${t}-mask:hover`]:{opacity:1},[`${t}-placeholder`]:s({},Se())}}},rn=e=>{const{previewCls:t}=e;return{[`${t}-root`]:pt(e,"zoom"),"&":bt(e,!0)}},qe=it("Image",e=>{const t=`${e.componentCls}-preview`,n=Ae(e,{previewCls:t,modalMaskBg:new q("#000").setAlpha(.45).toRgbString(),imagePreviewSwitchSize:e.controlHeightLG});return[on(n),nn(n),ht(Ae(n,{componentCls:t})),rn(n)]},e=>({zIndexPopup:e.zIndexPopupBase+80,previewOperationColor:new q(e.colorTextLightSolid).toRgbString(),previewOperationColorDisabled:new q(e.colorTextLightSolid).setAlpha(.25).toRgbString(),previewOperationSize:e.fontSizeIcon*1.5})),Ke={rotateLeft:l(Tt,null,null),rotateRight:l(Bt,null,null),zoomIn:l(Ht,null,null),zoomOut:l(Ft,null,null),close:l(st,null,null),left:l(Ct,null,null),right:l(gt,null,null),flipX:l(Be,null,null),flipY:l(Be,{rotate:90},null)},an=()=>({previewPrefixCls:String,preview:ut()}),ln=re({compatConfig:{MODE:3},name:"AImagePreviewGroup",inheritAttrs:!1,props:an(),setup(e,t){let{attrs:n,slots:o}=t;const{prefixCls:r,rootPrefixCls:u}=Ye("image",e),f=v(()=>`${r.value}-preview`),[g,S]=qe(r),M=v(()=>{const{preview:p}=e;if(p===!1)return p;const m=typeof p=="object"?p:{};return s(s({},m),{rootClassName:S.value,transitionName:ge(u.value,"zoom",m.transitionName),maskTransitionName:ge(u.value,"fade",m.maskTransitionName)})});return()=>g(l(Xe,x(x({},s(s({},n),e)),{},{preview:M.value,icons:Ke,previewPrefixCls:f.value}),o))}}),sn=ln,W=re({name:"AImage",inheritAttrs:!1,props:Fe(),setup(e,t){let{slots:n,attrs:o}=t;const{prefixCls:r,rootPrefixCls:u,configProvider:f}=Ye("image",e),[g,S]=qe(r),M=v(()=>{const{preview:p}=e;if(p===!1)return p;const m=typeof p=="object"?p:{};return s(s({icons:Ke},m),{transitionName:ge(u.value,"zoom",m.transitionName),maskTransitionName:ge(u.value,"fade",m.maskTransitionName)})});return()=>{var p,m;const A=((m=(p=f.locale)===null||p===void 0?void 0:p.value)===null||m===void 0?void 0:m.Image)||ct.Image,d=()=>l("div",{class:`${r.value}-mask-info`},[l(yt,null,null),A==null?void 0:A.preview]),{previewMask:h=n.previewMask||d}=e;return g(l(Dt,x(x({},s(s(s({},o),e),{prefixCls:r.value})),{},{preview:M.value,rootClassName:F(e.rootClassName,S.value)}),s(s({},n),{previewMask:typeof h=="function"?h:null})))}}});W.PreviewGroup=sn;W.install=function(e){return e.component(W.name,W),e.component(W.PreviewGroup.name,W.PreviewGroup),e};const fn=W;export{fn as _};
