import{d as le,r as v,a$ as L,G as c,b0 as Ce,b1 as Ae,n as F,J as y,at as ie,ag as I,k as se,h,u as e,x as Me,b2 as Oe,g as O,X as Fe,al as $e,c as N,f as He,w as x,j as M,y as Pe,t as je,F as De,p as qe,m as ze,_ as Be}from"./index.js";const Ee=()=>{window.cancelAnimationFrame=(()=>window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(a){return window.clearTimeout(a)})(),window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){return window.setTimeout(a,1e3/60)}}()},Re=(a,d)=>{if(a===d)return!0;if(a.length!==d.length)return!1;for(let r=0;r<a.length;++r)if(a[r]!==d[r])return!1;return!0};function ae(){Array.isArray||(Array.isArray=function(f){return Object.prototype.toString.call(f)==="[object Array]"});let a,d,r,l,m,g,t=1,n=arguments[0]||{},p=!1,S=arguments.length;if(typeof n=="boolean"&&(p=n,n=arguments[1]||{},t++),typeof n!="object"&&typeof n!="function"&&(n={}),t===S)return n;for(;t<S;t++)if((d=arguments[t])!=null)for(a in d)r=n[a],l=d[a],m=Array.isArray(l),p&&l&&(typeof l=="object"||m)?(m?(m=!1,g=r&&Array.isArray(r)?r:[]):g=r&&typeof r=="object"?r:{},n[a]=ae(p,g,l)):l!==void 0&&(n[a]=l);return n}const We=Object.freeze(Object.defineProperty({__proto__:null,animationFrame:Ee,arrayEqual:Re,copyObj:ae},Symbol.toStringTag,{value:"Module"})),Le=["innerHTML"],Ie=le({name:"ReSeamlessScroll",__name:"index",props:{data:{type:Array},classOption:{type:Object}},emits:["scrollEnd"],setup(a,{expose:d,emit:r}){const l=a,{animationFrame:m,copyObj:g}=We;m();const t=v(0),n=v(0),p=v(0),S=v(0),f=v(0),_=v(0),$=v(0),H=v("");let T=null,Y=null,P=null,X=null,U=null,j=!1,D="ease-in";l.classOption.key===void 0&&(l.classOption.key=0);const V=L(`wrap${l.classOption.key}`,null),G=L(`slotList${l.classOption.key}`,null),J=L(`realBox${l.classOption.key}`,null),K=c(()=>e(t)<0),Q=c(()=>Math.abs(e(t))<e(_)-e(f)),re=c(()=>({step:1,limitMoveNum:5,hoverStop:!0,direction:"top",openTouch:!0,singleHeight:0,singleWidth:0,waitTime:1e3,switchOffset:30,autoPlay:!0,navigation:!1,switchSingleStep:134,switchDelay:400,switchDisabledClass:"disabled",isSingleRemUnit:!1})),i=c(()=>g({},e(re),l.classOption)),ce=c(()=>e(K)?"":e(i).switchDisabledClass),ue=c(()=>e(Q)?"":e(i).switchDisabledClass),fe=c(()=>({position:"absolute",margin:`${e(S)/2}px 0 0 -${e(i).switchOffset}px`,transform:"translate(-100%,-50%)"})),de=c(()=>({position:"absolute",margin:`${e(S)/2}px 0 0 ${e(f)+e(i).switchOffset}px`,transform:"translateY(-50%)"})),q=c(()=>e(i).direction!=="bottom"&&e(i).direction!=="top"),Z=c(()=>e(q)?{float:"left",overflow:"hidden"}:{overflow:"hidden"}),pe=c(()=>({transform:`translate(${e(t)}px,${e(n)}px)`,transition:`all ${D} ${e(p)}ms`,overflow:"hidden"})),z=c(()=>e(i).navigation),B=c(()=>e(z)?!1:e(i).autoPlay),ee=c(()=>l.data.length>=e(i).limitMoveNum),te=c(()=>e(i).hoverStop&&e(B)&&e(ee)),E=c(()=>e(i).openTouch),ne=c(()=>e(i).isSingleRemUnit?parseInt(window.getComputedStyle(document.documentElement,null).fontSize):1),R=c(()=>e(i).singleWidth*e(ne)),W=c(()=>e(i).singleHeight*e(ne)),b=c(()=>{let o;const s=e(i).step;if(e(q)?o=e(R):o=e(W),o>0&&o%s>0)throw"如果设置了单步滚动，step需是单步大小的约数，否则无法保证单步滚动结束的位置是否准确";return s});function me(){t.value=0,n.value=0,C(),oe()}function he(){if(e(K)){if(Math.abs(e(t))<e(i).switchSingleStep){t.value=0;return}t.value+=e(i).switchSingleStep}}function ve(){if(e(Q)){if(e(_)-e(f)+e(t)<e(i).switchSingleStep){t.value=e(f)-e(_);return}t.value-=e(i).switchSingleStep}}function C(){cancelAnimationFrame(Y||"")}function we(o){if(!e(E))return;let s;const u=o.targetTouches[0],{waitTime:w,singleHeight:A,singleWidth:Te}=e(i);P={x:u.pageX,y:u.pageY},X=e(n),U=e(t),A&&Te?(s&&clearTimeout(s),s=setTimeout(()=>{C()},w+20)):C()}function ye(o){if(!e(E)||o.targetTouches.length>1||o.scale&&o.scale!==1)return;const s=o.targetTouches[0],{direction:u}=e(i),w={x:s.pageX-P.x,y:s.pageY-P.y};o.preventDefault();const A=Math.abs(w.x)<Math.abs(w.y)?1:0;A===1&&u==="bottom"||A===1&&u==="top"?n.value=X+w.y:(A===0&&u==="left"||A===0&&u==="right")&&(t.value=U+w.x)}function ge(){if(!e(E))return;let o;const s=e(i).direction;if(p.value=50,s==="top")e(n)>0&&(n.value=0);else if(s==="bottom"){const u=e($)/2*-1;e(n)<u&&(n.value=u)}else if(s==="left")e(t)>0&&(t.value=0);else if(s==="right"){const u=e(_)*-1;e(t)<u&&(t.value=u)}o&&clearTimeout(o),o=setTimeout(()=>{p.value=0,k()},e(p))}function Se(){e(te)&&ke()}function _e(){e(te)&&be()}function k(){j||(Y=requestAnimationFrame(function(){const o=e($)/2,s=e(_)/2,{direction:u,waitTime:w}=e(i);u==="top"?(Math.abs(e(n))>=o&&(r("scrollEnd"),n.value=0),n.value-=b.value):u==="bottom"?(e(n)>=0&&(r("scrollEnd"),n.value=o*-1),n.value+=b.value):u==="left"?(Math.abs(e(t))>=s&&(r("scrollEnd"),t.value=0),t.value-=b.value):u==="right"&&(e(t)>=0&&(r("scrollEnd"),t.value=s*-1),t.value+=b.value),T&&clearTimeout(T),e(W)?Math.abs(e(n))%e(W)<e(b)?T=setTimeout(()=>{k()},w):k():e(R)&&Math.abs(e(t))%e(R)<e(b)?T=setTimeout(()=>{k()},w):k()}))}function oe(){Me(()=>{const{switchDelay:o}=e(i);if(H.value="",e(q)){S.value=e(V).offsetHeight,f.value=e(V).offsetWidth;let s=e(G).offsetWidth;e(B)&&(s=s*2+1),e(J).style.width=s+"px",_.value=s}if(e(B))D="ease-in",p.value=0;else{D="linear",p.value=o;return}e(ee)?(H.value=e(G).innerHTML,setTimeout(()=>{var s;$.value=(s=e(J))==null?void 0:s.offsetHeight,k()},0)):(C(),n.value=t.value=0)})}function be(){j=!1,k()}function ke(){j=!0,T&&clearTimeout(T),C()}function xe(o){e(i).direction==="left"||e(i).direction==="right"||Oe(()=>{o.deltaY>0?n.value-=b.value:n.value+=b.value},50)()}return Ce(()=>{oe()}),Ae(()=>{C(),clearTimeout(T)}),d({reset:me}),(o,s)=>(O(),F("div",{ref:"wrap"+l.classOption.key},[z.value?(O(),F("div",{key:0,style:y(fe.value),class:ie(ce.value),onClick:he},[I(o.$slots,"left-switch")],6)):se("",!0),z.value?(O(),F("div",{key:1,style:y(de.value),class:ie(ue.value),onClick:ve},[I(o.$slots,"right-switch")],6)):se("",!0),h("div",{ref:"realBox"+l.classOption.key,style:y(pe.value),onMouseenter:Se,onMouseleave:_e,onTouchstartPassive:we,onTouchmovePassive:ye,onTouchend:ge,onMousewheelPassive:xe},[h("div",{ref:"slotList"+l.classOption.key,style:y(Z.value)},[I(o.$slots,"default")],4),h("div",{innerHTML:H.value,style:y(Z.value)},null,12,Le)],36)],512))}}),Ne=Fe(Ie),Ye=a=>(qe("data-v-28c9d5d1"),a=a(),ze(),a),Xe={class:"card-header"},Ue=Ye(()=>h("span",null,"无缝滚动示例",-1)),Ve={class:"item"},Ge=["textContent"],Je=le({name:"SeamlessScroll",__name:"index",setup(a){const d=v(),r=v([{title:"无缝滚动第一行无缝滚动第一行！！！！！！！！！！"},{title:"无缝滚动第二行无缝滚动第二行！！！！！！！！！！"},{title:"无缝滚动第三行无缝滚动第三行！！！！！！！！！！"},{title:"无缝滚动第四行无缝滚动第四行！！！！！！！！！！"},{title:"无缝滚动第五行无缝滚动第五行！！！！！！！！！！"},{title:"无缝滚动第六行无缝滚动第六行！！！！！！！！！！"},{title:"无缝滚动第七行无缝滚动第七行！！！！！！！！！！"},{title:"无缝滚动第八行无缝滚动第八行！！！！！！！！！！"},{title:"无缝滚动第九行无缝滚动第九行！！！！！！！！！！"}]),l=$e({direction:"top"});function m(g){e(d).reset(),e(l).direction=g}return(g,t)=>{const n=N("el-button"),p=N("el-card"),S=N("el-space");return O(),He(S,{wrap:""},{default:x(()=>[M(p,{class:"box-card",shadow:"never"},{header:x(()=>[h("div",Xe,[Ue,M(n,{class:"button",link:"",type:"primary",onClick:t[0]||(t[0]=f=>m("top"))},{default:x(()=>[h("span",{style:y({color:l.direction==="top"?"red":""})}," 向上滚动 ",4)]),_:1}),M(n,{class:"button",link:"",type:"primary",onClick:t[1]||(t[1]=f=>m("bottom"))},{default:x(()=>[h("span",{style:y({color:l.direction==="bottom"?"red":""})}," 向下滚动 ",4)]),_:1}),M(n,{class:"button",link:"",type:"primary",onClick:t[2]||(t[2]=f=>m("left"))},{default:x(()=>[h("span",{style:y({color:l.direction==="left"?"red":""})}," 向左滚动 ",4)]),_:1}),M(n,{class:"button",link:"",type:"primary",onClick:t[3]||(t[3]=f=>m("right"))},{default:x(()=>[h("span",{style:y({color:l.direction==="right"?"red":""})}," 向右滚动 ",4)]),_:1})])]),default:x(()=>[M(e(Ne),{ref_key:"scroll",ref:d,data:r.value,"class-option":l,class:"warp"},{default:x(()=>[h("ul",Ve,[(O(!0),F(De,null,Pe(r.value,(f,_)=>(O(),F("li",{key:_},[h("span",{class:"title",textContent:je(f.title)},null,8,Ge)]))),128))])]),_:1},8,["data","class-option"])]),_:1})]),_:1})}}});const Qe=Be(Je,[["__scopeId","data-v-28c9d5d1"]]);export{Qe as default};
//# sourceMappingURL=index18.js.map
