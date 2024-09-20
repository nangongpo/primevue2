System.register(["./app.component-legacy-CT61tSyJ.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(t,e){"use strict";var i;return{setters:[function(t){i=t.n},null,null,null],execute:function(){var e=document.createElement("style");e.textContent=".custom-marker[data-v-0be596e6]{display:flex;width:2rem;height:2rem;align-items:center;justify-content:center;color:#fff;border-radius:50%;z-index:1}[data-v-0be596e6] .p-timeline-event-content,[data-v-0be596e6] .p-timeline-event-opposite{line-height:1}@media screen and (max-width: 960px){[data-v-0be596e6] .customized-timeline .p-timeline-event:nth-child(2n){flex-direction:row!important}[data-v-0be596e6] .customized-timeline .p-timeline-event:nth-child(2n) .p-timeline-event-content{text-align:left!important}[data-v-0be596e6] .customized-timeline .p-timeline-event-opposite{flex:0}[data-v-0be596e6] .customized-timeline .p-card{margin-top:1rem}}\n",document.head.appendChild(e);var n=i({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("h5",[t._v("Import")]),e("CodeHighlight",{attrs:{lang:"js"}},[t._v(" import Timeline from 'primevue2/timeline'; ")]),e("h5",[t._v("Getting Started")]),e("p",[t._v("Timeline receives the events with the "),e("i",[t._v("value")]),t._v(" property as a collection of arbitrary objects. In addition, "),e("i",[t._v("content")]),t._v(" template is required to display the representation of an event. Example below is a sample events array that is used throughout the documentation.")]),e("CodeHighlight",{attrs:{lang:"js"}},[t._v(" export default { data() { return { events: [ {status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg'}, {status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7'}, {status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800'}, {status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B'} ], events2: [ \"2020\", \"2021\", \"2022\", \"2023\" ] } } } ")]),e("CodeHighlight",[[t._v(' <Timeline :value="events"> <template #content="slotProps"> {{slotProps.item.status}} </template> </Timeline> ')]],2),e("h5",[t._v("Layout")]),e("p",[t._v("Default layout of the timeline is vertical, setting "),e("i",[t._v("layout")]),t._v(' to "horizontal" displays the items horizontally.')]),e("CodeHighlight",[[t._v(' <Timeline :value="events"> <template #content="slotProps"> {{slotProps.item.status}} </template> </Timeline> ')]],2),e("h5",[t._v("Alignment")]),e("p",[t._v("Location of the timeline bar is defined using the "),e("i",[t._v("align")]),t._v(" property.")]),e("CodeHighlight",[[t._v(' <Timeline :value="events" align="right"> <template #content="slotProps"> {{slotProps.item.status}} </template> </Timeline> ')]],2),e("p",[t._v('In addition, the "alternate" alignment option make the contents take turns around the timeline bar.')]),e("CodeHighlight",[[t._v(' <Timeline :value="events" align="alternate"> <template #content="slotProps"> {{slotProps.item.status}} </template> </Timeline> ')]],2),e("h5",[t._v("Opposite")]),e("p",[t._v("Content to be placed at the other side of the bar is defined with the "),e("i",[t._v("opposite")]),t._v(" template.")]),e("CodeHighlight",[[t._v(' <Timeline :value="events"> <template #opposite="slotProps"> <small class="p-text-secondary">{{slotProps.item.date}}</small> </template> <template #content="slotProps"> {{slotProps.item.status}} </template> </Timeline> ')]],2),e("h5",[t._v("Custom Markers")]),e("p",[e("i",[t._v("marker")]),t._v(" template allows placing a custom event marker instead of the default one. Below is an example with custom markers and content.")]),e("CodeHighlight",[[t._v(' <Timeline :value="events" align="alternate" class="customized-timeline"> <template #marker="slotProps"> <span class="custom-marker shadow-2" :style="{backgroundColor: slotProps.item.color}"> <i :class="slotProps.item.icon"></i> </span> </template> <template #content="slotProps"> <Card> <template #title> {{slotProps.item.status}} </template> <template #subtitle> {{slotProps.item.date}} </template> <template #content> <img v-if="slotProps.item.image" :src="$publicUrl(\'demo/images/product/\' + slotProps.item.image)" :alt="slotProps.item.name" width="200" class="shadow-2" /> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p> <Button label="Read more" class="p-button-text"></Button> </template> </Card> </template> </Timeline> ')]],2),e("h5",[t._v("Properties")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("value")]),e("td",[t._v("array")]),e("td",[t._v("null")]),e("td",[t._v("An array of events to display.")])]),e("tr",[e("td",[t._v("align")]),e("td",[t._v("string")]),e("td",[t._v("left")]),e("td",[t._v('Position of the timeline bar relative to the content. Valid values are "left", "right for vertical layout and "top", "bottom" for horizontal layout.')])]),e("tr",[e("td",[t._v("layout")]),e("td",[t._v("string")]),e("td",[t._v("vertical")]),e("td",[t._v('Orientation of the timeline, valid values are "vertical" and "horizontal".')])]),e("tr",[e("td",[t._v("dataKey")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Name of the field that uniquely identifies the a record in the data.")])])])])]),e("h5",[t._v("Slots")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")])])]),e("tbody",[e("tr",[e("td",[t._v("opposite")]),e("td",[t._v("item: Position of the component"),e("br"),t._v(" index: Index of the item")])]),e("tr",[e("td",[t._v("marker")]),e("td",[t._v("item: Custom marker of the component"),e("br"),t._v(" index: Index of the item")])]),e("tr",[e("td",[t._v("content")]),e("td",[t._v("item: Content of the component"),e("br"),t._v(" index: Index of the item")])])])])]),e("h5",[t._v("Styling")]),e("p",[t._v("Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-timeline")]),e("td",[t._v("Container element.")])]),e("tr",[e("td",[t._v("p-timeline-left")]),e("td",[t._v("Container element when alignment is left.")])]),e("tr",[e("td",[t._v("p-timeline-right")]),e("td",[t._v("Container element when alignment is right.")])]),e("tr",[e("td",[t._v("p-timeline-top")]),e("td",[t._v("Container element when alignment is top.")])]),e("tr",[e("td",[t._v("p-timeline-bottom")]),e("td",[t._v("Container element when alignment is bottom.")])]),e("tr",[e("td",[t._v("p-timeline-alternate")]),e("td",[t._v("Container element when alignment is alternating.")])]),e("tr",[e("td",[t._v("p-timeline-vertical")]),e("td",[t._v("Container element of a vertical timeline.")])]),e("tr",[e("td",[t._v("p-timeline-horizontal")]),e("td",[t._v("Container element of a horizontal timeline.")])]),e("tr",[e("td",[t._v("p-timeline-event")]),e("td",[t._v("Event element.")])]),e("tr",[e("td",[t._v("p-timeline-event-opposite")]),e("td",[t._v("Opposite of an event content.")])]),e("tr",[e("td",[t._v("p-timeline-event-content")]),e("td",[t._v("Event content.")])]),e("tr",[e("td",[t._v("p-timeline-event-separator")]),e("td",[t._v("Separator element of an event.")])]),e("tr",[e("td",[t._v("p-timeline-event-marker")]),e("td",[t._v("Marker element of an event.")])]),e("tr",[e("td",[t._v("p-timeline-event-connector")]),e("td",[t._v("Connector element of an event.")])])])])]),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1),e("TabPanel",{attrs:{header:"Source"}},[e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/timeline",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])]),e("CodeHighlight",[[t._v(' <div class="card"> <h5>Left Align</h5> <Timeline :value="events1"> <template #content="slotProps"> {{slotProps.item.status}} </template> </Timeline> </div> <div class="card"> <h5>Right Align</h5> <Timeline :value="events1" align="right"> <template #content="slotProps"> {{slotProps.item.status}} </template> </Timeline> </div> <div class="card"> <h5>Alternate Align</h5> <Timeline :value="events1" align="alternate"> <template #content="slotProps"> {{slotProps.item.status}} </template> </Timeline> </div> <div class="card"> <h5>Opposite Content</h5> <Timeline :value="events1"> <template #opposite="slotProps"> <small class="p-text-secondary">{{slotProps.item.date}}</small> </template> <template #content="slotProps"> {{slotProps.item.status}} </template> </Timeline> </div> <div class="card"> <h5>Customized</h5> <Timeline :value="events1" align="alternate" class="customized-timeline"> <template #marker="slotProps"> <span class="custom-marker shadow-2" :style="{backgroundColor: slotProps.item.color}"> <i :class="slotProps.item.icon"></i> </span> </template> <template #content="slotProps"> <Card> <template #title> {{slotProps.item.status}} </template> <template #subtitle> {{slotProps.item.date}} </template> <template #content> <img v-if="slotProps.item.image" :src="$publicUrl(\'demo/images/product/\' + slotProps.item.image)" :alt="slotProps.item.name" width="200" class="shadow-2" /> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p> <Button label="Read more" class="p-button-text"></Button> </template> </Card> </template> </Timeline> </div> <div class="card"> <h5>Horizontal</h5> <h6>Top Align</h6> <Timeline :value="events2" layout="horizontal" align="top"> <template #content="slotProps"> {{slotProps.item}} </template> </Timeline> <h6>Bottom Align</h6> <Timeline :value="events2" layout="horizontal" align="bottom"> <template #content="slotProps"> {{slotProps.item}} </template> </Timeline> <h6>Alternate Align</h6> <Timeline :value="events2" layout="horizontal" align="alternate"> <template #opposite>   </template> <template #content="slotProps"> {{slotProps.item}} </template> </Timeline> </div> ')]],2),e("CodeHighlight",{attrs:{lang:"js"}},[t._v(" export default { data() { return { events1: [ {status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg'}, {status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7'}, {status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800'}, {status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B'} ], events2: [ \"2020\", \"2021\", \"2022\", \"2023\" ] } } } ")])],1)],1)],1)}),[],!1,null,null).exports;t("default",i({data:function(){return{events1:[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}],events2:["2020","2021","2022","2023"]}},components:{TimelineDoc:n}},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("h5",[t._v("Left Align")]),e("Timeline",{attrs:{value:t.events1},scopedSlots:t._u([{key:"content",fn:function(e){return[t._v(" "+t._s(e.item.status)+" ")]}}])})],1),e("div",{staticClass:"card"},[e("h5",[t._v("Right Align")]),e("Timeline",{attrs:{value:t.events1,align:"right"},scopedSlots:t._u([{key:"content",fn:function(e){return[t._v(" "+t._s(e.item.status)+" ")]}}])})],1),e("div",{staticClass:"card"},[e("h5",[t._v("Alternate Align")]),e("Timeline",{attrs:{value:t.events1,align:"alternate"},scopedSlots:t._u([{key:"content",fn:function(e){return[t._v(" "+t._s(e.item.status)+" ")]}}])})],1),e("div",{staticClass:"card"},[e("h5",[t._v("Opposite Content")]),e("Timeline",{attrs:{value:t.events1},scopedSlots:t._u([{key:"opposite",fn:function(i){return[e("small",{staticClass:"p-text-secondary"},[t._v(t._s(i.item.date))])]}},{key:"content",fn:function(e){return[t._v(" "+t._s(e.item.status)+" ")]}}])})],1),e("div",{staticClass:"card"},[e("h5",[t._v("Customized")]),e("Timeline",{staticClass:"customized-timeline",attrs:{value:t.events1,align:"alternate"},scopedSlots:t._u([{key:"marker",fn:function(t){return[e("span",{staticClass:"custom-marker shadow-2",style:{backgroundColor:t.item.color}},[e("i",{class:t.item.icon})])]}},{key:"content",fn:function(i){return[e("Card",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" "+t._s(i.item.status)+" ")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" "+t._s(i.item.date)+" ")]},proxy:!0},{key:"content",fn:function(){return[i.item.image?e("img",{staticClass:"shadow-2",attrs:{src:t.$publicUrl("demo/images/product/"+i.item.image),alt:i.item.name,width:"200"}}):t._e(),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!")]),e("Button",{staticClass:"p-button-text",attrs:{label:"Read more"}})]},proxy:!0}],null,!0)})]}}])})],1),e("div",{staticClass:"card"},[e("h5",[t._v("Horizontal")]),e("h6",[t._v("Top Align")]),e("Timeline",{attrs:{value:t.events2,layout:"horizontal",align:"top"},scopedSlots:t._u([{key:"content",fn:function(e){return[t._v(" "+t._s(e.item)+" ")]}}])}),e("h6",[t._v("Bottom Align")]),e("Timeline",{attrs:{value:t.events2,layout:"horizontal",align:"bottom"},scopedSlots:t._u([{key:"content",fn:function(e){return[t._v(" "+t._s(e.item)+" ")]}}])}),e("h6",[t._v("Alternate Align")]),e("Timeline",{attrs:{value:t.events2,layout:"horizontal",align:"alternate"},scopedSlots:t._u([{key:"opposite",fn:function(){return[t._v("   ")]},proxy:!0},{key:"content",fn:function(e){return[t._v(" "+t._s(e.item)+" ")]}}])})],1)]),e("TimelineDoc")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("Timeline")]),e("p",[t._v("Timeline visualizes a series of chained events.")])])])}],!1,null,"0be596e6").exports)}}}));
//# sourceMappingURL=TimelineDemo-legacy-BdAxlxTH.js.map
