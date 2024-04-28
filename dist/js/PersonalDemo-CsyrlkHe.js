import{v as s}from"./vuelidate-D1aTq7-B.js";import{n}from"./app.component-D2FSMXVj.js";import"./fast-diff-Fg_c4MGA.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const r={data(){return{firstname:"",lastname:"",age:"",submitted:!1}},validations:{firstname:{required:s.required},lastname:{required:s.required},age:{integer:s.integer}},methods:{nextPage(i){this.submitted=!0,i&&this.$emit("nextPage",{formData:{firstname:this.firstname,lastname:this.lastname,age:this.age},pageIndex:0})}}};var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepsdemo-content"},[t("Card",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" Personal Information ")]},proxy:!0},{key:"subtitle",fn:function(){return[e._v(" Enter your personal information ")]},proxy:!0},{key:"content",fn:function(){return[t("div",{staticClass:"p-fluid"},[t("div",{staticClass:"field"},[t("label",{attrs:{for:"firstname"}},[e._v("Firstname")]),t("InputText",{class:{"p-invalid":e.$v.firstname.$invalid&&e.submitted},attrs:{id:"firstname"},model:{value:e.$v.firstname.$model,callback:function(a){e.$set(e.$v.firstname,"$model",a)},expression:"$v.firstname.$model"}}),t("small",{directives:[{name:"show",rawName:"v-show",value:e.$v.firstname.$invalid&&e.submitted,expression:"$v.firstname.$invalid && submitted"}],staticClass:"p-error"},[e._v("Firstname is required.")])],1),t("div",{staticClass:"field"},[t("label",{attrs:{for:"lastname"}},[e._v("Lastname")]),t("InputText",{class:{"p-invalid":e.$v.lastname.$invalid&&e.submitted},model:{value:e.$v.lastname.$model,callback:function(a){e.$set(e.$v.lastname,"$model",a)},expression:"$v.lastname.$model"}}),t("small",{directives:[{name:"show",rawName:"v-show",value:e.$v.lastname.$invalid&&e.submitted,expression:"$v.lastname.$invalid && submitted"}],staticClass:"p-error"},[e._v("Lastname is required.")])],1),t("div",{staticClass:"field"},[t("label",{attrs:{for:"age"}},[e._v("Age")]),t("InputText",{class:{"p-invalid":e.$v.age.$error&&e.submitted},attrs:{id:"age"},model:{value:e.$v.age.$model,callback:function(a){e.$set(e.$v.age,"$model",a)},expression:"$v.age.$model"}}),t("small",{directives:[{name:"show",rawName:"v-show",value:e.$v.age.$invalid&&e.submitted,expression:"$v.age.$invalid && submitted"}],staticClass:"p-error"},[e._v("Age should be a number.")])],1)])]},proxy:!0},{key:"footer",fn:function(){return[t("div",{staticClass:"grid grid-nogutter justify-content-between"},[t("i"),t("Button",{attrs:{label:"Next",icon:"pi pi-angle-right",iconPos:"right"},on:{click:function(a){return e.nextPage(!e.$v.$invalid)}}})],1)]},proxy:!0}])})],1)},o=[],m=n(r,l,o,!1,null,null);const p=m.exports;export{p as default};
//# sourceMappingURL=PersonalDemo-CsyrlkHe.js.map