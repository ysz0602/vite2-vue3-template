import{g as e,D as a,f as l,p as s,a as o,r as d,o as t,c as m,b as r,M as u,w as n,m as i}from"./vendor.9d7c8355.js";import{a as c}from"./userModel.8f5c343d.js";const p={props:{isEdit:{type:Boolean,default:!1}},setup(s){const o=e(),{model:d,addUser:t,updateUser:m}=c(s.isEdit,o.params.id),r=a({name:[{required:!0,message:"用户名为必填项"}]}),n=l(null);return{model:d,rules:r,form:n,submitForm:function(){n.value.validate((e=>{e&&(s.isEdit?m().then((()=>{u.success({title:"操作成功",message:"更新用户数据成功",duration:2e3})})):t().then((()=>{u.success({title:"操作成功",message:"新增玩家数据成功",duration:2e3})})))}))}}}},f=n();s("data-v-87c5254c");const _={class:"container"},b=i("提交");o();const g=f(((e,a,l,s,o,u)=>{const n=d("el-input"),i=d("el-form-item"),c=d("el-button"),p=d("el-form");return t(),m("div",_,[r(p,{ref:"form",model:s.model,rules:s.rules},{default:f((()=>[r(i,{prop:"name",label:"用户名"},{default:f((()=>[r(n,{modelValue:s.model.name,"onUpdate:modelValue":a[1]||(a[1]=e=>s.model.name=e)},null,8,["modelValue"])])),_:1}),r(i,{prop:"age",label:"用户年龄"},{default:f((()=>[r(n,{modelValue:s.model.age,"onUpdate:modelValue":a[2]||(a[2]=e=>s.model.age=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),r(i,null,{default:f((()=>[r(c,{onClick:s.submitForm,type:"primary"},{default:f((()=>[b])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])}));p.render=g,p.__scopeId="data-v-87c5254c";export{p as _};
