import{P as d}from"./print2.js";import{b}from"./data2.js";import{r as c,L as i}from"./index.js";function g(a){const t=c(i(b,!0)),e=[{label:"ID",prop:"id"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],o=()=>{d(a.value.getTableDoms().tableWrapper).toPrint};function n({column:{property:r},rowIndex:f}){if(r==="id")return f<3?{background:"#87baf9"}:{background:"#87e8de"}}function l({columnIndex:r}){return r===0?{background:"#f3b2d0"}:{background:"#fafafa"}}function u({rowIndex:r}){return r%2===1?{background:"#ffa39e"}:{background:"#91d5ff"}}return{columns:e,dataList:t,print:o,rowStyle:u,cellStyle:n,headerCellStyle:l}}export{g as useColumns};
//# sourceMappingURL=columns12.js.map
