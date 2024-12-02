System.register(["./app.component-legacy-cLUjg6K2.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.fullcalendar-legacy-DHW3cqgj.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-DJ-X2bns.js"],(function(e,t){"use strict";var a;return{setters:[function(e){a=e.n},null,null,null,null],execute:function(){e("default",a({data:function(){return{selectedClass:"",classes:[{name:"First Class",code:"A",factor:1},{name:"Second Class",code:"B",factor:2},{name:"Third Class",code:"C",factor:3}],vagons:[],selectedVagon:"",seats:[],selectedSeat:""}},methods:{setVagons:function(e){if(this.selectedClass&&e.value){this.vagons=[],this.seats=[];for(var t=1;t<3*e.value.factor;t++)this.vagons.push({vagon:t+e.value.code,type:e.value.name,factor:e.value.factor})}},setSeats:function(e){if(this.selectedVagon&&e.value){this.seats=[];for(var t=1;t<10*e.value.factor;t++)this.seats.push({seat:t,type:e.value.type})}},nextPage:function(){this.$emit("nextPage",{formData:{class:this.selectedClass.name,vagon:this.selectedVagon.vagon,seat:this.selectedSeat.seat},pageIndex:1})},prevPage:function(){this.$emit("prevPage",{pageIndex:1})}}},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepsdemo-content"},[t("Card",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" Seat Information ")]},proxy:!0},{key:"subtitle",fn:function(){return[e._v(" Choose your seat ")]},proxy:!0},{key:"content",fn:function(){return[t("div",{staticClass:"p-fluid formgrid grid"},[t("div",{staticClass:"field col-12 md:col-6"},[t("label",{attrs:{for:"class"}},[e._v("Class")]),t("Dropdown",{attrs:{inputId:"class",options:e.classes,optionLabel:"name",placeholder:"Select a Class"},on:{change:function(t){return e.setVagons(t)}},model:{value:e.selectedClass,callback:function(t){e.selectedClass=t},expression:"selectedClass"}})],1),t("div",{staticClass:"field col-12 md:col-6"},[t("label",{attrs:{for:"lastname"}},[e._v("Wagon")]),t("Dropdown",{attrs:{inputId:"wagon",options:e.vagons,optionLabel:"vagon",placeholder:"Select a Vagon"},on:{change:function(t){return e.setSeats(t)}},model:{value:e.selectedVagon,callback:function(t){e.selectedVagon=t},expression:"selectedVagon"}})],1),t("div",{staticClass:"field col-12"},[t("label",{attrs:{for:"seat"}},[e._v("Seat")]),t("Dropdown",{attrs:{inputId:"seat",options:e.seats,optionLabel:"seat",placeholder:"Select a Seat"},model:{value:e.selectedSeat,callback:function(t){e.selectedSeat=t},expression:"selectedSeat"}})],1)])]},proxy:!0},{key:"footer",fn:function(){return[t("div",{staticClass:"grid grid-nogutter justify-content-between"},[t("Button",{attrs:{label:"Back",icon:"pi pi-angle-left"},on:{click:function(t){return e.prevPage()}}}),t("Button",{attrs:{label:"Next",icon:"pi pi-angle-right",iconPos:"right"},on:{click:function(t){return e.nextPage()}}})],1)]},proxy:!0}])})],1)}),[],!1,null,null).exports)}}}));
//# sourceMappingURL=SeatDemo-legacy-BW2YyJLk.js.map
