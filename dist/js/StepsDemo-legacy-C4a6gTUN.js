!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function a(e){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?t(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(t,a,l){var i;return i=function(t,a){if("object"!=e(t)||!t)return t;var l=t[Symbol.toPrimitive];if(void 0!==l){var i=l.call(t,a||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(t)}(a,"string"),(a="symbol"==e(i)?i:i+"")in t?Object.defineProperty(t,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[a]=l,t}System.register(["./app.component-legacy-CT61tSyJ.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(e,t){"use strict";var l;return{setters:[function(e){l=e.n},null,null,null],execute:function(){var t=document.createElement("style");t.textContent="[data-v-3c40be5d] b{display:block}[data-v-3c40be5d] .p-card-body{padding:2rem}\n",document.head.appendChild(t);var i=l({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import Steps from 'primevue2/steps'; ")]),t("h5",[e._v("MenuModel")]),t("p",[e._v("Steps uses the common MenuModel API to define the items, visit "),t("router-link",{attrs:{to:"/menumodel"}},[e._v("MenuModel API")]),e._v(" for details.")],1),t("h5",[e._v("Getting Started")]),t("p",[e._v("Steps is integrated with Vue Router and requires a collection of menuitems as its model.")]),t("CodeHighlight",[e._v(' <Steps :model="items" /> <router-view /> ')]),t("CodeHighlight",{attrs:{lang:"js"}},[e._v(" export default { data() { return { items: [{ label: 'Personal', to: '/steps' }, { label: 'Seat', to: '/steps/seat' }, { label: 'Payment', to: '/steps/payment' }, { label: 'Confirmation', to: '/steps/confirmation' }] } } } ")]),t("h5",[e._v("Interactive")]),t("p",[e._v("Items are readonly by default, if you'd like to make them interactive then disable "),t("i",[e._v("readonly")]),e._v(" property.")]),t("CodeHighlight",[e._v(' <Steps :model="items" :readonly="false" /> <router-view /> ')]),t("h5",[e._v("Properties")]),t("p",[e._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("id")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Unique identifier of the element.")])]),t("tr",[t("td",[e._v("model")]),t("td",[e._v("array")]),t("td",[e._v("null")]),t("td",[e._v("An array of menuitems.")])]),t("tr",[t("td",[e._v("readonly")]),t("td",[e._v("boolean")]),t("td",[e._v("true")]),t("td",[e._v("Whether the items are clickable or not.")])]),t("tr",[t("td",[e._v("exact")]),t("td",[e._v("boolean")]),t("td",[e._v("true")]),t("td",[e._v("Whether to apply 'router-link-active-exact' class if route exactly matches the item path.")])])])])]),t("h5",[e._v("Styling")]),t("p",[e._v("Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-steps")]),t("td",[e._v("Container element.")])]),t("tr",[t("td",[e._v("p-steps-item")]),t("td",[e._v("Menuitem element.")])]),t("tr",[t("td",[e._v("p-steps-number")]),t("td",[e._v("Number of menuitem.")])]),t("tr",[t("td",[e._v("p-steps-title")]),t("td",[e._v("Label of menuitem.")])])])])]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/tabmenu",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v(' <Steps :model="items" :readonly="true" style="margin-bottom: 1rem" /> <keep-alive> <router-view :formData="formObject" @prevPage="prevPage($event)" @nextPage="nextPage($event)" @complete="complete" /> </keep-alive> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { data() { return { items: [{ label: 'Personal', to: '/steps' }, { label: 'Seat', to: '/steps/seat' }, { label: 'Payment', to: '/steps/payment' }, { label: 'Confirmation', to: '/steps/confirmation' }], formObject: {} } }, components: { 'StepsDoc': StepsDoc }, methods: { nextPage(event) { for (let field in event.formData) { this.formObject[field] = event.formData[field]; } this.$router.push(this.items[event.pageIndex + 1].to); }, prevPage(event) { this.$router.push(this.items[event.pageIndex - 1].to); }, complete() { this.$toast.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + this.formObject.firstname + ' ' + this.formObject.lastname + ' your order completed.'}); } } } ")])],1),t("TabPanel",{attrs:{header:"Personal"}},[t("CodeHighlight",[[e._v(' <div class="stepsdemo-content"> <Card> <template #title> Personal Information </template> <template #subtitle> Enter your information </template> <template #content> <p class="p-text-secondary">Enter your information</p> <div class="p-fluid"> <div class="field"> <label for="firstname">Firstname</label> <InputText id="firstname" v-model="$v.firstname.$model" :class="{\'p-invalid\':$v.firstname.$invalid && submitted}" /> <small v-show="$v.firstname.$invalid && submitted" class="p-error">Firstname is required.</small> </div> <div class="field"> <label for="lastname">Lastname</label> <InputText v-model="$v.lastname.$model" :class="{\'p-invalid\':$v.lastname.$invalid && submitted}" /> <small v-show="$v.lastname.$invalid && submitted" class="p-error">Lastname is required.</small> </div> <div class="field"> <label for="age">Age</label> <InputText id="age" v-model="$v.age.$model" :class="{\'p-invalid\':$v.age.$error && submitted}" /> <small v-show="$v.age.$invalid && submitted" class="p-error">Age should be a number.</small> </div> </div> </template> <template #footer> <div class="grid grid-nogutter justify-content-between"> <i></i> <Button label="Next" @click="nextPage(!$v.$invalid)" icon="pi pi-angle-right" iconPos="right" /> </div> </template> </Card> </div> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import {required, integer} from 'vuelidate/lib/validators'; export default { data () { return { firstname: '', lastname: '', age: '', submitted: false } }, validations: { firstname: { required }, lastname: { required }, age: { integer } }, methods: { nextPage(isFormValid) { this.submitted = true; if (!isFormValid) { return; } this.$emit('nextPage', {formData: {firstname: this.firstname, lastname: this.lastname, age: this.age}, pageIndex: 0}); } } } ")])],1),t("TabPanel",{attrs:{header:"Seat"}},[t("CodeHighlight",[[e._v(' <div class="stepsdemo-content"> <Card> <template #title> Seat Information </template> <template #subtitle> Choose your seat </template> <template #content> <div class="p-fluid formgrid grid"> <div class="field col-12 md:col-6"> <label for="class">Class</label> <Dropdown inputId="class" v-model="selectedClass" :options="classes" @change="setVagons($event)" optionLabel="name" placeholder="Select a Class" /> </div> <div class="field col-12 md:col-6"> <label for="lastname">Wagon</label> <Dropdown inputId="wagon" v-model="selectedVagon" :options="vagons" @change="setSeats($event)" optionLabel="vagon" placeholder="Select a Vagon" /> </div> <div class="field col-12"> <label for="seat">Seat</label> <Dropdown inputId="seat" v-model="selectedSeat" :options="seats" optionLabel="seat" placeholder="Select a Seat" /> </div> </div> </template> <template #footer> <div class="grid grid-nogutter justify-content-between"> <Button label="Back" @click="prevPage()" icon="pi pi-angle-left" /> <Button label="Next" @click="nextPage()" icon="pi pi-angle-right" iconPos="right" /> </div> </template> </Card> </div> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { data () { return { selectedClass: '', classes: [ {name: 'First Class', code: 'A', factor: 1}, {name: 'Second Class', code: 'B', factor: 2}, {name: 'Third Class', code: 'C', factor: 3} ], vagons: [], selectedVagon: '', seats: [], selectedSeat: '' } }, methods: { setVagons(event) { if (this.selectedClass && event.value) { this.vagons = []; this.seats = []; for (let i = 1; i < 3 * event.value.factor; i++) { this.vagons.push({vagon: i + event.value.code, type: event.value.name, factor: event.value.factor}); } } }, setSeats(event) { if (this.selectedVagon && event.value) { this.seats = []; for (let i = 1; i < 10 * event.value.factor; i++) { this.seats.push({seat: i, type: event.value.type}); } } }, nextPage() { this.$emit('nextPage', {formData: {class: this.selectedClass.name, vagon: this.selectedVagon.vagon, seat: this.selectedSeat.seat}, pageIndex: 1}); }, prevPage() { this.$emit('prevPage', {pageIndex: 1}); } } } ")])],1),t("TabPanel",{attrs:{header:"Payment"}},[t("CodeHighlight",[[e._v(' <div class="stepsdemo-content"> <Card> <template #title> Payment Information </template> <template #subtitle> Enter your card details </template> <template #content> <div class="p-fluid formgrid grid"> <div class="field col-12"> <label for="class">Class</label> <InputText type="text" v-model="cardholderName" /> </div> <div class="field col-8"> <label id="number" for="lastname">Number</label> <InputMask id="number" mask="9999-9999-9999-9999" v-model="cardholderNumber" /> </div> <div class="field col-2"> <label id="date" for="date">Date</label> <InputMask id="date" mask="99/99" v-model="date" /> </div> <div class="field col-2"> <label for="cvv">CVV</label> <InputMask id="cvv" mask="999" v-model="cvv" /> </div> <div class="field-checkbox col-12"> <Checkbox id="remember" v-model="remember" :binary="true" /> <label for="remember" class="p-checkbox-label">Save credit card information for future</label> </div> </div> </template> <template #footer> <div class="grid grid-nogutter justify-content-between"> <Button label="Back" @click="prevPage()" icon="pi pi-angle-left" /> <Button label="Next" @click="nextPage()" icon="pi pi-angle-right" iconPos="right" /> </div> </template> </Card> </div> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { data () { return { cardholderName:'', cardholderNumber:'', date:'', cvv:'', remember:false } }, methods: { nextPage() { this.$emit('nextPage', {formData: {cardholderName: this.cardholderName, cardholderNumber: this.cardholderNumber, date: this.date, cvv: this.cvv}, pageIndex: 2}); }, prevPage() { this.$emit('prevPage', {pageIndex: 2}); } } } ")])],1),t("TabPanel",{attrs:{header:"Confirmation"}},[t("CodeHighlight",[[e._v(' <div class="stepsdemo-content"> <Card> <template #title> Confirmation </template> <template #content> <div class="field col-12"> <label for="class">Name</label> <b>{{formData.firstname ? formData.firstname : \'-\'}} {{formData.lastname ? formData.lastname : \'-\'}}</b> </div> <div class="field col-12"> <label for="Age">Age</label> <b>{{formData.age ? formData.age : \'-\'}}</b> </div> <div class="field col-12"> <label for="Age">Seat Class</label> <b>{{formData.class ? formData.class : \'-\'}}</b> </div> <div class="field col-12"> <label for="Age">Wagon Number</label> <b>{{formData.vagon ? formData.vagon : \'-\'}}</b> </div> <div class="field col-12"> <label for="Age">Seat</label> <b>{{formData.seat ? formData.seat : \'-\'}}</b> </div> <div class="field col-12"> <label for="Age">Cardholder Name</label> <b>{{formData.cardholderName ? formData.cardholderName : \'-\'}}</b> </div> <div class="field col-12"> <label for="Age">Card Number</label> <b>{{formData.cardholderNumber ? formData.cardholderNumber : \'-\'}}</b> </div> <div class="field col-12"> <label for="Age">Date</label> <b>{{formData.date ? formData.date : \'-\'}}</b> </div> <div class="field col-12"> <label for="Age">CVV</label> <b>{{formData.cvv && formData.cvv.length === 3 ? \'**\' + formData.cvv[2] : \'-\'}}</b> </div> </template> <template #footer> <div class="grid grid-nogutter justify-content-between"> <Button label="Back" @click="prevPage()" icon="pi pi-angle-left" /> <Button label="Complete" @click="complete()" icon="pi pi-check" iconPos="right" class="p-button-success"/> </div> </template> </Card> </div> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { props: { formData: Object }, methods: { prevPage() { this.$emit('prevPage', {pageIndex: 3}); }, complete() { this.$emit('complete'); } }, } ")])],1)],1)],1)}),[],!1,null,null).exports;e("default",l({data:function(){return{items:[{label:"Personal",to:"/steps"},{label:"Seat",to:"/steps/seat"},{label:"Payment",to:"/steps/payment"},{label:"Confirmation",to:"/steps/confirmation"}],formObject:{}}},components:{StepsDoc:i},methods:{nextPage:function(e){this.formObject=a(a({},this.formObject),e.formData),this.$router.push(this.items[e.pageIndex+1].to)},prevPage:function(e){this.$router.push(this.items[e.pageIndex-1].to)},complete:function(){this.$toast.add({severity:"success",summary:"Order submitted",detail:"Dear, "+this.formObject.firstname+" "+this.formObject.lastname+" your order completed."})}}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("Steps",{attrs:{model:e.items,readonly:!0}})],1),t("keep-alive",[t("router-view",{attrs:{formData:e.formObject},on:{prevPage:function(t){return e.prevPage(t)},nextPage:function(t){return e.nextPage(t)},complete:e.complete}})],1)],1),t("StepsDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("Steps")]),t("p",[e._v("Steps components is an indicator for the steps in a wizard workflow. Example below uses nested routes with Steps.")])])])}],!1,null,"3c40be5d").exports)}}}))}();
//# sourceMappingURL=StepsDemo-legacy-C4a6gTUN.js.map