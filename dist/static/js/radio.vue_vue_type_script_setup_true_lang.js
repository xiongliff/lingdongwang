import{t as s}from"./data.js";import{d as b,r as l,c,g,n as v,j as n,u,h,w as p,i as d}from"./index.js";const w={style:{"margin-top":"20px"}},B=b({__name:"radio",setup(k){const o=l(),i=l(),a=t=>{const{setCurrentRow:e}=o.value.getTableRef();e(t)},_=t=>{i.value=t},m=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}];return(t,e)=>{const f=c("pure-table"),r=c("el-button");return g(),v("div",null,[n(f,{ref_key:"tableRef",ref:o,data:u(s),columns:m,"highlight-current-row":"",onPageCurrentChange:_},null,8,["data"]),h("div",w,[n(r,{onClick:e[0]||(e[0]=C=>a(u(s)[1]))},{default:p(()=>[d("Select second row")]),_:1}),n(r,{onClick:e[1]||(e[1]=C=>a())},{default:p(()=>[d("Clear selection")]),_:1})])])}}});export{B as _};
//# sourceMappingURL=radio.vue_vue_type_script_setup_true_lang.js.map
