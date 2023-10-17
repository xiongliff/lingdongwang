import{g as v,n as g,h as _,d as G,r as p,G as P,X,c as a,e as F,l as I,j as o,w as s,u as i,v as J,at as V,i as z,t as j,aj as M,ac as K,_ as Q}from"./index.js";import{u as W}from"./hooks.js";import{d as Y}from"./git-branch-line.js";import{d as ee}from"./search.js";import{d as te}from"./more-2-fill.js";import{d as oe}from"./office-building.js";const ne={width:1024,height:1024,body:'<path fill="currentColor" d="M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"/><path fill="currentColor" d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"/><path fill="currentColor" d="M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"/>'},le=ne,ae={width:"32",height:"32",viewBox:"0 0 24 24"},re=_("path",{fill:"currentColor",d:"M22 4V2H2v2h9v14.17l-5.5-5.5-1.42 1.41L12 22l7.92-7.92-1.42-1.41-5.5 5.5V4h9Z"},null,-1),se=[re];function ie(f,m){return v(),g("svg",ae,se)}const ce={render:ie},de={width:"32",height:"32",viewBox:"0 0 24 24"},ue=_("path",{fill:"currentColor",d:"M4 2H2v20h2v-9h14.17l-5.5 5.5 1.41 1.42L22 12l-7.92-7.92-1.41 1.42 5.5 5.5H4V2Z"},null,-1),he=[ue];function pe(f,m){return v(),g("svg",de,he)}const _e={render:pe},fe={class:"flex items-center h-[34px]"},me=G({__name:"tree",props:{treeLoading:Boolean,treeData:Array},emits:["tree-select"],setup(f,{expose:m,emit:N}){const x=f,y=p(),d=p(!0),c=p(""),n=p({}),{proxy:O}=K(),B={children:"children",label:"name"},E=P(()=>["!h-[20px]","reset-margin","!text-gray-500","dark:!text-white","dark:hover:!text-primary"]),R=(t,e)=>t?e.name.includes(t):!0;function D(t){var l,u;const e=t.$treeNodeId;n.value[e]=(l=n.value[e])!=null&&l.highlight?Object.assign({id:e},n.value[e],{highlight:!1}):Object.assign({id:e},n.value[e],{highlight:!0}),Object.values(n.value).forEach(h=>{h.id!==e&&(h.highlight=!1)}),N("tree-select",(u=n.value[e])!=null&&u.highlight?Object.assign({...t,selected:!0}):Object.assign({...t,selected:!1}))}function w(t){d.value=t;const e=O.$refs.treeRef.store._getAllNodes();for(let l=0;l<e.length;l++)e[l].expanded=t}function H(){n.value={},c.value="",w(!0)}return X(c,t=>{y.value.filter(t)}),m({onTreeReset:H}),(t,e)=>{const l=a("IconifyIconOffline"),u=a("el-icon"),h=a("el-input"),L=a("el-button"),A=a("el-dropdown-item"),S=a("el-dropdown-menu"),q=a("el-dropdown"),T=a("el-divider"),U=a("el-tree"),Z=F("loading");return I((v(),g("div",{class:"h-full bg-bg_color overflow-auto",style:M({minHeight:"calc(100vh - 133px)"})},[_("div",fe,[o(h,{class:"ml-2",size:"small",modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=r=>c.value=r),placeholder:"请输入部门名称",clearable:""},{suffix:s(()=>[o(u,{class:"el-input__icon"},{default:s(()=>[I(o(l,{icon:i(ee)},null,8,["icon"]),[[J,c.value.length===0]])]),_:1})]),_:1},8,["modelValue"]),o(q,{"hide-on-click":!1},{dropdown:s(()=>[o(S,null,{default:s(()=>[o(A,null,{default:s(()=>[o(L,{class:V(E.value),link:"",type:"primary",icon:i(W)(d.value?i(ce):i(_e)),onClick:e[1]||(e[1]=r=>w(!d.value))},{default:s(()=>[z(j(d.value?"折叠全部":"展开全部"),1)]),_:1},8,["class","icon"])]),_:1})]),_:1})]),default:s(()=>[o(l,{class:"w-[28px] cursor-pointer",width:"18px",icon:i(te)},null,8,["icon"])]),_:1})]),o(T),o(U,{ref_key:"treeRef",ref:y,data:x.treeData,"node-key":"id",size:"small",props:B,"default-expand-all":"","expand-on-click-node":!1,"filter-node-method":R,onNodeClick:D},{default:s(({node:r,data:b})=>{var C,k,$;return[_("span",{class:V(["pl-1","pr-1","rounded","flex","items-center","select-none","hover:text-primary",c.value.trim().length>0&&r.label.includes(c.value)&&"text-red-500",(C=n.value[r.id])!=null&&C.highlight?"dark:text-primary":""]),style:M({color:(k=n.value[r.id])!=null&&k.highlight?"var(--el-color-primary)":"",background:($=n.value[r.id])!=null&&$.highlight?"var(--el-color-primary-light-7)":"transparent"})},[o(l,{icon:b.type===1?i(oe):b.type===2?i(le):i(Y)},null,8,["icon"]),z(" "+j(r.label),1)],6)]}),_:1},8,["data"])],4)),[[Z,x.treeLoading]])}}});const Ce=Q(me,[["__scopeId","data-v-9b5c1dbf"]]);export{Ce as default};
