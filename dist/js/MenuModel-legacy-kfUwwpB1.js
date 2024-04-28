System.register(["./app.component-legacy-Dyxh1RLY.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(t,e){"use strict";var i;return{setters:[function(t){i=t.n},null,null,null],execute:function(){t("default",i({},(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",[e("div",{staticClass:"content-section documentation"},[e("h1",[t._v("MenuModel")]),e("p",[t._v("PrimeVue menu components share a common api to specify the menuitems and submenus.")]),e("h5",[t._v("MenuItem")]),e("p",[t._v("Core of the API is the MenuItem class that defines various options such as the label, icon and children of an item in a menu.")]),e("CodeHighlight",{attrs:{lang:"js"}},[t._v(" const items: [ { label: 'Options', items: [{label: 'New', icon: 'pi pi-fw pi-plus', command:() => {} }, {label: 'Delete', icon: 'pi pi-fw pi-trash', url: 'http://primetek.com.tr'}] }, { label: 'Account', items: [{label: 'Options', icon: 'pi pi-fw pi-cog', to: '/options'}, {label: 'Sign Out', icon: 'pi pi-fw pi-power-off', to: '/logout'} ] } ]; ")]),e("p",[t._v("MenuItem provides the following properties. Note that not all of them may be utilized by the corresponding menu component.")]),t._m(0),e("h5",[t._v("Command")]),e("p",[t._v("The function to invoke when an item is clicked is defined using the command property.")]),e("CodeHighlight",{attrs:{lang:"js"}},[t._v(" const items = [ { label: 'New', icon: 'pi pi-plus', command: (event) => { // event.originalEvent: Browser event // event.item: Menuitem instance } } ]; ")]),e("h5",[t._v("Navigation")]),t._m(1),e("CodeHighlight",{attrs:{lang:"js"}},[t._v(" const items = [ { label: 'Internal', icon: 'pi pi-plus', to: '/fileupload' }, { label: 'External', icon: 'pi pi-check', url: 'https://www.primefaces.org/primevue' } ]; ")]),e("h5",[t._v("Visibility")]),t._m(2),e("CodeHighlight",{attrs:{lang:"js"}},[t._v(" const items = [ { label: 'Remove', visible: false }, { label: 'Delete', visible: () => this.isUserAdmin() } ]; ")])],1)])}),[function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("label")]),e("td",[t._v("string|function")]),e("td",[t._v("null")]),e("td",[t._v("Property name or getter function to use as the label of an item.")])]),e("tr",[e("td",[t._v("icon")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Icon of the item.")])]),e("tr",[e("td",[t._v("to")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Path of the route.")])]),e("tr",[e("td",[t._v("command")]),e("td",[t._v("function")]),e("td",[t._v("null")]),e("td",[t._v("Callback to execute when item is clicked.")])]),e("tr",[e("td",[t._v("url")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("External link to navigate when item is clicked.")])]),e("tr",[e("td",[t._v("items")]),e("td",[t._v("array")]),e("td",[t._v("null")]),e("td",[t._v("An array of children menuitems.")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("boolean/function")]),e("td",[t._v("false")]),e("td",[t._v("A boolean or a function to return a boolean to specify if the item is disabled.")])]),e("tr",[e("td",[t._v("visible")]),e("td",[t._v("boolean/function")]),e("td",[t._v("true")]),e("td",[t._v("A boolean or a function to return a boolean to specify if the item is visible.")])]),e("tr",[e("td",[t._v("target")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Specifies where to open the linked document.")])]),e("tr",[e("td",[t._v("separator")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("Defines the item as a separator.")])]),e("tr",[e("td",[t._v("style")]),e("td",[t._v("object")]),e("td",[t._v("null")]),e("td",[t._v("Inline style of the menuitem.")])]),e("tr",[e("td",[t._v("class")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Style class of the menuitem.")])])])])])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("p",[t._v("Navigation is specified using "),e("i",[t._v("url")]),t._v(" property for external links or using "),e("i",[t._v("to")]),t._v(" property for internal routing.")])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("p",[t._v("It is a common case to hide certain items based on conditions such as user roles, "),e("i",[t._v("visible")]),t._v(" property is available to implement such cases by supporting functions that returns booleans or simple booleans.")])}],!1,null,null).exports)}}}));
//# sourceMappingURL=MenuModel-legacy-kfUwwpB1.js.map