import{d as o,e as i,l as n,R as s}from"./index.js";const r=o({name:"Motion",props:{delay:{type:Number,default:50}},render(){const{delay:t}=this,e=i("motion");return n(s("div",{},{default:()=>[this.$slots.default()]}),[[e,{initial:{opacity:0,y:100},enter:{opacity:1,y:0,transition:{delay:t}}}]])}});export{r as M};
//# sourceMappingURL=motion.js.map
