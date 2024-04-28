System.register(["./app.component-legacy-Dyxh1RLY.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(a,e){"use strict";var t;return{setters:[function(a){t=a.n},null,null,null],execute:function(){var e=t({},(function(){var a=this,e=a._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("h5",[a._v("Import")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[a._v(" import Avatar from 'primevue2/avatar'; import AvatarGroup from 'primevue2/avatargroup'; ")]),e("h5",[a._v("Getting Started")]),e("p",[a._v('Avatar has three built-in display modes; "label", "icon" and "image".')]),e("CodeHighlight",[a._v(' <Avatar label="P" /> <Avatar icon="pi pi-search" /> <Avatar image="user.png" /> ')]),e("h5",[a._v("Sizes")]),e("p",[e("i",[a._v("size")]),a._v(' property defines the size of the Avatar with "large" and "xlarge" as possible values.')]),e("CodeHighlight",[a._v(' <Avatar label="P" size="large"/> ')]),e("h5",[a._v("AvatarGroup")]),e("p",[a._v("A set of Avatars can be displayed together using the "),e("i",[a._v("AvatarGroup")]),a._v(" component.")]),e("CodeHighlight",[a._v(' <AvatarGroup> <Avatar label="P" /> <Avatar icon="pi pi-search" /> <Avatar image="user.png" /> <Avatar label="+2" /> </AvatarGroup> ')]),e("h5",[a._v("Shape")]),e("p",[a._v("Avatar comes in two different styles specified with the "),e("i",[a._v("shape")]),a._v(' property, "square" is the default and "circle" is the alternative.')]),e("CodeHighlight",[a._v(' <Avatar label="P" shape="circle"/> ')]),e("h5",[a._v("Badge")]),e("p",[a._v("A badge can be added to an Avatar with the "),e("router-link",{attrs:{to:"/badge"}},[a._v("Badge")]),a._v(" directive.")],1),e("CodeHighlight",[a._v(' <Avatar image="user.png" size="xlarge" v-badge.danger="4" /> ')]),e("h5",[a._v("Templating")]),e("p",[a._v("Content can easily be customized with the default slot instead of using the built-in modes.")]),e("CodeHighlight",[a._v(" <Avatar> Content </Avatar> ")]),e("h5",[a._v("Properties of Avatar")]),e("p",[a._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[a._v("Name")]),e("th",[a._v("Type")]),e("th",[a._v("Default")]),e("th",[a._v("Description")])])]),e("tbody",[e("tr",[e("td",[a._v("label")]),e("td",[a._v("string")]),e("td",[a._v("null")]),e("td",[a._v("Defines the text to display.")])]),e("tr",[e("td",[a._v("icon")]),e("td",[a._v("string")]),e("td",[a._v("null")]),e("td",[a._v("Defines the icon to display.")])]),e("tr",[e("td",[a._v("image")]),e("td",[a._v("string")]),e("td",[a._v("null")]),e("td",[a._v("Defines the image to display.")])]),e("tr",[e("td",[a._v("size")]),e("td",[a._v("string")]),e("td",[a._v("null")]),e("td",[a._v('Size of the element, valid options are "large" and "xlarge".')])]),e("tr",[e("td",[a._v("shape")]),e("td",[a._v("string")]),e("td",[a._v("square")]),e("td",[a._v('Shape of the element, valid options are "square" and "circle".')])])])])]),e("h5",[a._v("Properties of AvatarGroup")]),e("p",[a._v("Any property as style and class are passed to the main container element. There are no additional properties.")]),e("h5",[a._v("Styling of Avatar")]),e("p",[a._v("Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[a._v("theming")]),a._v(" page.")],1),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[a._v("Name")]),e("th",[a._v("Element")])])]),e("tbody",[e("tr",[e("td",[a._v("p-avatar")]),e("td",[a._v("Container element.")])]),e("tr",[e("td",[a._v("p-avatar-image")]),e("td",[a._v("Container element in image mode.")])]),e("tr",[e("td",[a._v("p-avatar-circle")]),e("td",[a._v("Container element with a circle shape.")])]),e("tr",[e("td",[a._v("p-avatar-text")]),e("td",[a._v("Text of the Avatar.")])]),e("tr",[e("td",[a._v("p-avatar-icon")]),e("td",[a._v("Icon of the Avatar.")])]),e("tr",[e("td",[a._v("p-avatar-lg")]),e("td",[a._v("Container element with a large size.")])]),e("tr",[e("td",[a._v("p-avatar-xl")]),e("td",[a._v("Container element with an xlarge size.")])])])])]),e("h5",[a._v("Styling of AvatarGroup")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[a._v("Name")]),e("th",[a._v("Element")])])]),e("tbody",[e("tr",[e("td",[a._v("p-avatar-group")]),e("td",[a._v("Container element.")])])])])]),e("h5",[a._v("Dependencies")]),e("p",[a._v("None.")])],1),e("TabPanel",{attrs:{header:"Source"}},[e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/avatar",target:"_blank",rel:"noopener noreferrer"}},[e("span",[a._v("View on GitHub")])]),e("CodeHighlight",[[a._v(' <div class="grid"> <div class="col-12 md:col-4"> <div class="card"> <h5>Label</h5> <Avatar label="P" class="mr-2" size="xlarge" /> <Avatar label="V" class="mr-2" size="large" style="background-color:#2196F3; color: #ffffff"/> <Avatar label="U" class="mr-2" style="background-color:#9c27b0; color: #ffffff" /> </div> </div> <div class="col-12 md:col-4"> <div class="card"> <h5>Label - Circle</h5> <Avatar label="P" class="mr-2" size="xlarge" shape="circle" /> <Avatar label="V" class="mr-2" size="large" style="background-color:#2196F3; color: #ffffff" shape="circle" /> <Avatar label="U" class="mr-2" style="background-color:#9c27b0; color: #ffffff" shape="circle" /> </div> </div> <div class="col-12 md:col-4"> <div class="card"> <h5>Label - Badge</h5> <Avatar label="U" size="xlarge" style="background-color:#4caf4f; color: #ffffff" v-badge="4" /> </div> </div> </div> <div class="grid"> <div class="col-12 md:col-4"> <div class="card"> <h5>Icon</h5> <Avatar icon="pi pi-user" class="mr-2" size="xlarge" /> <Avatar icon="pi pi-user" class="mr-2" size="large" style="background-color:#2196F3; color: #ffffff"/> <Avatar icon="pi pi-user" class="mr-2" style="background-color:#9c27b0; color: #ffffff" /> </div> </div> <div class="col-12 md:col-4"> <div class="card"> <h5>Icon - Circle</h5> <Avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" /> <Avatar icon="pi pi-user" class="mr-2" size="large" style="background-color:#2196F3; color: #ffffff" shape="circle" /> <Avatar icon="pi pi-user" class="mr-2" style="background-color:#9c27b0; color: #ffffff" shape="circle" /> </div> </div> <div class="col-12 md:col-4"> <div class="card"> <h5>Icon - Badge</h5> <Avatar icon="pi pi-user" size="xlarge" v-badge="4"/> </div> </div> </div> <div class="grid"> <div class="col-12 md:col-4"> <div class="card"> <h5>Image</h5> <Avatar :image="$publicUrl(\'demo/images/avatar/amyelsner.png\')" class="mr-2" size="xlarge" shape="circle" /> <Avatar :image="$publicUrl(\'demo/images/avatar/asiyajavayant.png\')" class="mr-2" size="large" shape="circle" /> <Avatar :image="$publicUrl(\'demo/images/avatar/onyamalimba.png\')" class="mr-2" shape="circle" /> </div> </div> <div class="col-12 md:col-4"> <div class="card"> <h5>Avatar Group</h5> <AvatarGroup class="mb-3"> <Avatar :image="$publicUrl(\'demo/images/avatar/amyelsner.png\')" size="large" shape="circle"/> <Avatar :image="$publicUrl(\'demo/images/avatar/asiyajavayant.png\')" size="large" shape="circle"/> <Avatar :image="$publicUrl(\'demo/images/avatar/onyamalimba.png\')" size="large" shape="circle"/> <Avatar :image="$publicUrl(\'demo/images/avatar/ionibowcher.png\')" size="large" shape="circle"/> <Avatar :image="$publicUrl(\'demo/images/avatar/xuxuefeng.png\')" size="large" shape="circle"/> <Avatar label="+2" shape="circle" size="large" style="background-color:#9c27b0; color: #ffffff" /> </AvatarGroup> </div> </div> <div class="col-12 md:col-4"> <div class="card"> <h5>Image - Badge</h5> <Avatar :image="$publicUrl(\'demo/images/organization/walter.jpg\')" size="xlarge" v-badge.danger="4" /> </div> </div> </div> ')]],2)],1)],1)],1)}),[],!1,null,null).exports;a("default",t({components:{AvatarDoc:e}},(function(){var a=this,e=a._self._c;return e("div",[a._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"grid"},[e("div",{staticClass:"col-12 md:col-4"},[e("div",{staticClass:"card"},[e("h5",[a._v("Label")]),e("Avatar",{staticClass:"mr-2",attrs:{label:"P",size:"xlarge"}}),e("Avatar",{staticClass:"mr-2",staticStyle:{"background-color":"#2196F3",color:"#ffffff"},attrs:{label:"V",size:"large"}}),e("Avatar",{staticClass:"mr-2",staticStyle:{"background-color":"#9c27b0",color:"#ffffff"},attrs:{label:"U"}})],1)]),e("div",{staticClass:"col-12 md:col-4"},[e("div",{staticClass:"card"},[e("h5",[a._v("Label - Circle")]),e("Avatar",{staticClass:"mr-2",attrs:{label:"P",size:"xlarge",shape:"circle"}}),e("Avatar",{staticClass:"mr-2",staticStyle:{"background-color":"#2196F3",color:"#ffffff"},attrs:{label:"V",size:"large",shape:"circle"}}),e("Avatar",{staticClass:"mr-2",staticStyle:{"background-color":"#9c27b0",color:"#ffffff"},attrs:{label:"U",shape:"circle"}})],1)]),e("div",{staticClass:"col-12 md:col-4"},[e("div",{staticClass:"card"},[e("h5",[a._v("Label - Badge")]),e("Avatar",{directives:[{name:"badge",rawName:"v-badge",value:4,expression:"4"}],staticStyle:{"background-color":"#4caf4f",color:"#ffffff"},attrs:{label:"U",size:"xlarge"}})],1)])]),e("div",{staticClass:"grid"},[e("div",{staticClass:"col-12 md:col-4"},[e("div",{staticClass:"card"},[e("h5",[a._v("Icon")]),e("Avatar",{staticClass:"mr-2",attrs:{icon:"pi pi-user",size:"xlarge"}}),e("Avatar",{staticClass:"mr-2",staticStyle:{"background-color":"#2196F3",color:"#ffffff"},attrs:{icon:"pi pi-user",size:"large"}}),e("Avatar",{staticClass:"mr-2",staticStyle:{"background-color":"#9c27b0",color:"#ffffff"},attrs:{icon:"pi pi-user"}})],1)]),e("div",{staticClass:"col-12 md:col-4"},[e("div",{staticClass:"card"},[e("h5",[a._v("Icon - Circle")]),e("Avatar",{staticClass:"mr-2",attrs:{icon:"pi pi-user",size:"xlarge",shape:"circle"}}),e("Avatar",{staticClass:"mr-2",staticStyle:{"background-color":"#2196F3",color:"#ffffff"},attrs:{icon:"pi pi-user",size:"large",shape:"circle"}}),e("Avatar",{staticClass:"mr-2",staticStyle:{"background-color":"#9c27b0",color:"#ffffff"},attrs:{icon:"pi pi-user",shape:"circle"}})],1)]),e("div",{staticClass:"col-12 md:col-4"},[e("div",{staticClass:"card"},[e("h5",[a._v("Icon - Badge")]),e("Avatar",{directives:[{name:"badge",rawName:"v-badge",value:4,expression:"4"}],attrs:{icon:"pi pi-user",size:"xlarge"}})],1)])]),e("div",{staticClass:"grid"},[e("div",{staticClass:"col-12 md:col-4"},[e("div",{staticClass:"card"},[e("h5",[a._v("Image")]),e("Avatar",{staticClass:"mr-2",attrs:{image:a.$publicUrl("demo/images/avatar/amyelsner.png"),size:"xlarge",shape:"circle"}}),e("Avatar",{staticClass:"mr-2",attrs:{image:a.$publicUrl("demo/images/avatar/asiyajavayant.png"),size:"large",shape:"circle"}}),e("Avatar",{staticClass:"mr-2",attrs:{image:a.$publicUrl("demo/images/avatar/onyamalimba.png"),shape:"circle"}})],1)]),e("div",{staticClass:"col-12 md:col-4"},[e("div",{staticClass:"card"},[e("h5",[a._v("Avatar Group")]),e("AvatarGroup",{staticClass:"mb-3"},[e("Avatar",{attrs:{image:a.$publicUrl("demo/images/avatar/amyelsner.png"),size:"large",shape:"circle"}}),e("Avatar",{attrs:{image:a.$publicUrl("demo/images/avatar/asiyajavayant.png"),size:"large",shape:"circle"}}),e("Avatar",{attrs:{image:a.$publicUrl("demo/images/avatar/onyamalimba.png"),size:"large",shape:"circle"}}),e("Avatar",{attrs:{image:a.$publicUrl("demo/images/avatar/ionibowcher.png"),size:"large",shape:"circle"}}),e("Avatar",{attrs:{image:a.$publicUrl("demo/images/avatar/xuxuefeng.png"),size:"large",shape:"circle"}}),e("Avatar",{staticStyle:{"background-color":"#9c27b0",color:"#ffffff"},attrs:{label:"+2",shape:"circle",size:"large"}})],1)],1)]),e("div",{staticClass:"col-12 md:col-4"},[e("div",{staticClass:"card"},[e("h5",[a._v("Image - Badge")]),e("Avatar",{directives:[{name:"badge",rawName:"v-badge.danger",value:4,expression:"4",modifiers:{danger:!0}}],attrs:{image:a.$publicUrl("demo/images/organization/walter.jpg"),size:"xlarge"}})],1)])])]),e("AvatarDoc")],1)}),[function(){var a=this,e=a._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[a._v("Avatar")]),e("p",[a._v("Avatar represents people using icons, labels and images.")])])])}],!1,null,null).exports)}}}));
//# sourceMappingURL=AvatarDemo-legacy-DKzx400z.js.map
