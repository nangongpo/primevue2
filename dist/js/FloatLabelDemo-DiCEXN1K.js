import{C as s}from"./CountryService-YamlU8VQ.js";import{n as o}from"./app.component-D2FSMXVj.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const i={data(){return{countries:null,filteredCountries:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],value1:null,value2:null,value3:null,value4:null,value5:null,value6:null,value7:null,value8:null,value9:null,value10:null,value11:null,valueIconLeft:null,valueIconRight:null,selectedCity:null,cascadeCountries:[{name:"Australia",code:"AU",states:[{name:"New South Wales",cities:[{cname:"Sydney",code:"A-SY"},{cname:"Newcastle",code:"A-NE"},{cname:"Wollongong",code:"A-WO"}]},{name:"Queensland",cities:[{cname:"Brisbane",code:"A-BR"},{cname:"Townsville",code:"A-TO"}]}]},{name:"Canada",code:"CA",states:[{name:"Quebec",cities:[{cname:"Montreal",code:"C-MO"},{cname:"Quebec City",code:"C-QU"}]},{name:"Ontario",cities:[{cname:"Ottawa",code:"C-OT"},{cname:"Toronto",code:"C-TO"}]}]},{name:"United States",code:"US",states:[{name:"California",cities:[{cname:"Los Angeles",code:"US-LA"},{cname:"San Diego",code:"US-SD"},{cname:"San Francisco",code:"US-SF"}]},{name:"Florida",cities:[{cname:"Jacksonville",code:"US-JA"},{cname:"Miami",code:"US-MI"},{cname:"Tampa",code:"US-TA"},{cname:"Orlando",code:"US-OR"}]},{name:"Texas",cities:[{cname:"Austin",code:"US-AU"},{cname:"Dallas",code:"US-DA"},{cname:"Houston",code:"US-HO"}]}]}]}},countryService:null,created(){this.countryService=new s},mounted(){this.countryService.getCountries().then(t=>this.countries=t)},methods:{searchCountry(t){setTimeout(()=>{t.query.trim().length?this.filteredCountries=this.countries.filter(a=>a.name.toLowerCase().startsWith(t.query.toLowerCase())):this.filteredCountries=[...this.countries]},250)}}};var n=function(){var a=this,e=a._self._c;return e("div",[e("div",{staticClass:"content-section introduction"},[a._m(0),e("AppInputStyleSwitch")],1),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("div",{staticClass:"p-fluid grid"},[e("div",{staticClass:"field col-12 md:col-4"},[e("span",{staticClass:"p-float-label"},[e("InputText",{attrs:{id:"inputtext",type:"text"},model:{value:a.value1,callback:function(l){a.value1=l},expression:"value1"}}),e("label",{attrs:{for:"inputtext"}},[a._v("InputText")])],1)]),e("div",{staticClass:"field col-12 md:col-4"},[e("span",{staticClass:"p-float-label p-input-icon-left"},[e("i",{staticClass:"pi pi-search"}),e("InputText",{attrs:{id:"inputtext-left",type:"text"},model:{value:a.valueIconLeft,callback:function(l){a.valueIconLeft=l},expression:"valueIconLeft"}}),e("label",{attrs:{for:"inputtext-left"}},[a._v("Left Icon")])],1)]),e("div",{staticClass:"field col-12 md:col-4"},[e("span",{staticClass:"p-float-label p-input-icon-right"},[e("i",{staticClass:"pi pi-search"}),e("InputText",{attrs:{id:"inputtext-right",type:"text"},model:{value:a.valueIconRight,callback:function(l){a.valueIconRight=l},expression:"valueIconRight"}}),e("label",{attrs:{for:"inputtext-right"}},[a._v("Right Icon")])],1)]),e("div",{staticClass:"field col-12 md:col-4"},[e("span",{staticClass:"p-float-label"},[e("AutoComplete",{attrs:{suggestions:a.filteredCountries,field:"name"},on:{complete:function(l){return a.searchCountry(l)}},model:{value:a.value2,callback:function(l){a.value2=l},expression:"value2"}}),e("label",{attrs:{for:"autocomplete"}},[a._v("AutoComplete")])],1)]),e("div",{staticClass:"field col-12 md:col-4"},[e("span",{staticClass:"p-float-label"},[e("Calendar",{attrs:{id:"calendar"},model:{value:a.value3,callback:function(l){a.value3=l},expression:"value3"}}),e("label",{attrs:{for:"calendar"}},[a._v("Calendar")])],1)]),e("div",{staticClass:"field col-12 md:col-4"},[e("span",{staticClass:"p-float-label"},[e("chips",{attrs:{id:"chips"},model:{value:a.value4,callback:function(l){a.value4=l},expression:"value4"}}),e("label",{attrs:{for:"chips"}},[a._v("Chips")])],1)]),e("div",{staticClass:"field col-12 md:col-4"},[e("span",{staticClass:"p-float-label"},[e("InputMask",{attrs:{id:"inputmask",mask:"99/99/9999",slotChar:"mm/dd/yyyy"},model:{value:a.value5,callback:function(l){a.value5=l},expression:"value5"}}),e("label",{attrs:{for:"inputmask"}},[a._v("InputMask")])],1)]),e("div",{staticClass:"field col-12 md:col-4"},[e("span",{staticClass:"p-float-label"},[e("InputNumber",{attrs:{id:"inputnumber"},model:{value:a.value6,callback:function(l){a.value6=l},expression:"value6"}}),e("label",{attrs:{for:"inputnumber"}},[a._v("InputNumber")])],1)]),e("div",{staticClass:"field col-12 md:col-4"},[e("div",{staticClass:"p-inputgroup"},[a._m(1),e("span",{staticClass:"p-float-label"},[e("InputText",{attrs:{id:"inputgroup",type:"text"},model:{value:a.value7,callback:function(l){a.value7=l},expression:"value7"}}),e("label",{attrs:{for:"inputgroup"}},[a._v("InputGroup")])],1)])]),e("div",{staticClass:"field col-12 md:col-4"},[e("span",{staticClass:"p-float-label"},[e("CascadeSelect",{attrs:{id:"cascadeSelect",options:a.cascadeCountries,optionLabel:"cname",optionGroupLabel:"name",optionGroupChildren:["states","cities"]},model:{value:a.selectedCity,callback:function(l){a.selectedCity=l},expression:"selectedCity"}}),e("label",{attrs:{for:"multiselect"}},[a._v("CascadeSelect")])],1)]),e("div",{staticClass:"field col-12 md:col-4"},[e("span",{staticClass:"p-float-label"},[e("Dropdown",{attrs:{id:"dropdown",options:a.cities,optionLabel:"name"},model:{value:a.value8,callback:function(l){a.value8=l},expression:"value8"}}),e("label",{attrs:{for:"dropdown"}},[a._v("Dropdown")])],1)]),e("div",{staticClass:"field col-12 md:col-4"},[e("span",{staticClass:"p-float-label"},[e("MultiSelect",{attrs:{id:"multiselect",options:a.cities,optionLabel:"name"},model:{value:a.value9,callback:function(l){a.value9=l},expression:"value9"}}),e("label",{attrs:{for:"multiselect"}},[a._v("MultiSelect")])],1)]),e("div",{staticClass:"field col-12 md:col-4"},[e("span",{staticClass:"p-float-label"},[e("Textarea",{attrs:{id:"textarea",rows:"3"},model:{value:a.value10,callback:function(l){a.value10=l},expression:"value10"}}),a._v(" "),e("label",{attrs:{for:"textarea"}},[a._v("Textarea")])],1)]),e("div",{staticClass:"field col-12 md:col-4"},[e("span",{staticClass:"p-float-label"},[e("Password",{attrs:{id:"password"},model:{value:a.value11,callback:function(l){a.value11=l},expression:"value11"}}),e("label",{attrs:{for:"password"}},[a._v("Password")])],1)])])])]),e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Source"}},[e("CodeHighlight",[[a._v(' <div class="p-fluid grid"> <div class="field col-12 md:col-4"> <span class="p-float-label"> <InputText id="inputtext" type="text" v-model="value1" /> <label for="inputtext">InputText</label> </span> </div> <div class="field col-12 md:col-4"> <span class="p-float-label p-input-icon-left"> <i class="pi pi-search" /> <InputText id="inputtext-left" type="text" v-model="valueIconLeft" /> <label for="inputtext-left">Left Icon</label> </span> </div> <div class="field col-12 md:col-4"> <span class="p-float-label p-input-icon-right"> <i class="pi pi-search" /> <InputText id="inputtext-right" type="text" v-model="valueIconRight" /> <label for="inputtext-right">Right Icon</label> </span> </div> <div class="field col-12 md:col-4"> <span class="p-float-label"> <AutoComplete v-model="value2" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" /> <label for="autocomplete">AutoComplete</label> </span> </div> <div class="field col-12 md:col-4"> <span class="p-float-label"> <Calendar id="calendar" v-model="value3" /> <label for="calendar">Calendar</label> </span> </div> <div class="field col-12 md:col-4"> <span class="p-float-label"> <chips id="chips" v-model="value4" /> <label for="chips">Chips</label> </span> </div> <div class="field col-12 md:col-4"> <span class="p-float-label"> <InputMask id="inputmask" v-model="value5" mask="99/99/9999" slotChar="mm/dd/yyyy" /> <label for="inputmask">InputMask</label> </span> </div> <div class="field col-12 md:col-4"> <span class="p-float-label"> <InputNumber id="inputnumber" v-model="value6" /> <label for="inputnumber">InputNumber</label> </span> </div> <div class="field col-12 md:col-4"> <div class="p-inputgroup"> <span class="p-inputgroup-addon"> <i class="pi pi-user"></i> </span> <span class="p-float-label"> <InputText id="inputgroup" type="text" v-model="value7" /> <label for="inputgroup">InputGroup</label> </span> </div> </div> <div class="field col-12 md:col-4"> <span class="p-float-label"> <CascadeSelect id="cascadeSelect" v-model="selectedCity" :options="cascadeCountries" optionLabel="cname" optionGroupLabel="name" :optionGroupChildren="[\'states\', \'cities\']" /> <label for="multiselect">CascadeSelect</label> </span> </div> <div class="field col-12 md:col-4"> <span class="p-float-label"> <Dropdown id="dropdown" v-model="value8" :options="cities" optionLabel="name" /> <label for="dropdown">Dropdown</label> </span> </div> <div class="field col-12 md:col-4"> <span class="p-float-label"> <MultiSelect id="multiselect" v-model="value9" :options="cities" optionLabel="name" /> <label for="multiselect">MultiSelect</label> </span> </div> <div class="field col-12 md:col-4"> <span class="p-float-label"> <Textarea id="textarea" v-model="value10" rows="3" /> <label for="textarea">Textarea</label> </span> </div> <div class="field col-12 md:col-4"> <span class="p-float-label"> <Password id="password" v-model="value11" /> <label for="password">Password</label> </span> </div> </div> ')]],2),e("CodeHighlight",{attrs:{lang:"javascript"}},[a._v(" import CountryService from '../../service/CountryService'; export default { data() { return { countries: null, filteredCountries: null, cities: [ {name: 'New York', code: 'NY'}, {name: 'Rome', code: 'RM'}, {name: 'London', code: 'LDN'}, {name: 'Istanbul', code: 'IST'}, {name: 'Paris', code: 'PRS'} ], value1: null, value2: null, value3: null, value4: null, value5: null, value6: null, value7: null, value8: null, value9: null, value10: null, value11: null, valueIconLeft: null, valueIconRight: null, selectedCity: null, cascadeCountries: [ { name: 'Australia', code: 'AU', states: [ { name: 'New South Wales', cities: [ {cname: 'Sydney', code: 'A-SY'}, {cname: 'Newcastle', code: 'A-NE'}, {cname: 'Wollongong', code: 'A-WO'} ] }, { name: 'Queensland', cities: [ {cname: 'Brisbane', code: 'A-BR'}, {cname: 'Townsville', code: 'A-TO'} ] }, ] }, { name: 'Canada', code: 'CA', states: [ { name: 'Quebec', cities: [ {cname: 'Montreal', code: 'C-MO'}, {cname: 'Quebec City', code: 'C-QU'} ] }, { name: 'Ontario', cities: [ {cname: 'Ottawa', code: 'C-OT'}, {cname: 'Toronto', code: 'C-TO'} ] }, ] }, { name: 'United States', code: 'US', states: [ { name: 'California', cities: [ {cname: 'Los Angeles', code: 'US-LA'}, {cname: 'San Diego', code: 'US-SD'}, {cname: 'San Francisco', code: 'US-SF'} ] }, { name: 'Florida', cities: [ {cname: 'Jacksonville', code: 'US-JA'}, {cname: 'Miami', code: 'US-MI'}, {cname: 'Tampa', code: 'US-TA'}, {cname: 'Orlando', code: 'US-OR'} ] }, { name: 'Texas', cities: [ {cname: 'Austin', code: 'US-AU'}, {cname: 'Dallas', code: 'US-DA'}, {cname: 'Houston', code: 'US-HO'} ] } ] } ] } }, countryService: null, created() { this.countryService = new CountryService(); }, mounted() { this.countryService.getCountries().then(data => this.countries = data); }, methods: { searchCountry(event) { setTimeout(() => { if (!event.query.trim().length) { this.filteredCountries = [...this.countries]; } else { this.filteredCountries = this.countries.filter((country) => { return country.name.toLowerCase().startsWith(event.query.toLowerCase()); }); } }, 250); } }, } ")])],1)],1)],1)])},c=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"feature-intro"},[a("h1",[t._v("Float Label")]),a("p",[t._v("All input text components support floating labels.")])])},function(){var t=this,a=t._self._c;return a("span",{staticClass:"p-inputgroup-addon"},[a("i",{staticClass:"pi pi-user"})])}],d=o(i,n,c,!1,null,"10ede5df");const f=d.exports;export{f as default};
//# sourceMappingURL=FloatLabelDemo-DiCEXN1K.js.map
