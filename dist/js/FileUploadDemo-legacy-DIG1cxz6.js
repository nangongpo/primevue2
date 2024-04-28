System.register(["./app.component-legacy-Dyxh1RLY.js","./app.fullcalendar-legacy-BjBSiNq4.js","./preact-legacy-D7Jvwh8t.js","./app.core-legacy-NUaqKLPR.js"],(function(e,t){"use strict";var a;return{setters:[function(e){a=e.n},null,null,null],execute:function(){var t=document.createElement("style");t.textContent="p[data-v-e769928b]{margin:0}\n",document.head.appendChild(t);var l=a({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section documentation"},[t("TabView",[t("TabPanel",{attrs:{header:"Documentation"}},[t("h5",[e._v("Import")]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" import FileUpload from 'primevue2/fileupload'; ")]),t("h5",[e._v("Getting Started")]),t("p",[e._v("FileUpload requires a "),t("i",[e._v("url")]),e._v(" property as the upload target and a "),t("i",[e._v("name")]),e._v(" to identify the files at backend.")]),t("CodeHighlight",[e._v(' <FileUpload name="demo[]" url="./upload" /> ')]),t("h5",[e._v("Multiple Uploads")]),t("p",[e._v("Only one file can be selected at a time by default, to allow selecting multiple files at once enable "),t("i",[e._v("multiple")]),e._v(" option.")]),t("CodeHighlight",[e._v(' <FileUpload name="demo[]" url="./upload" :multiple="true" /> ')]),t("h5",[e._v("Basic UI")]),t("p",[e._v("FileUpload basic mode provides a simpler UI as an alternative to advanced mode.")]),t("CodeHighlight",[e._v(' <FileUpload mode="basic" name="demo[]" url="./upload" /> ')]),t("h5",[e._v("DragDrop")]),t("p",[e._v("File selection can also be done by dragging and dropping from the filesystem to the content section of the component.")]),t("h5",[e._v("Auto Uploads")]),t("p",[e._v("When "),t("i",[e._v("auto")]),e._v(" property is enabled, upload begins as soon as file selection is completed or a file is dropped on the drop area.")]),t("CodeHighlight",[e._v(' <FileUpload mode="basic" name="demo[]" url="./upload" :auto="true" /> ')]),t("h5",[e._v("File Types")]),t("p",[e._v("Selectable file types can be restricted with "),t("i",[e._v("accept")]),e._v(" property, example below only allows images to be uploaded. Read more about other possible values "),t("a",{attrs:{href:"https://www.w3schools.com/tags/att_input_accept.asp"}},[e._v(" here")]),e._v(".")]),t("CodeHighlight",[e._v(' <FileUpload mode="basic" name="demo[]" url="./upload" accept="image/*" /> ')]),t("h5",[e._v("File Size and File Limit")]),t("p",[e._v("Maximium file size can be restricted using "),t("i",[e._v("maxFileSize")]),e._v(" property defined in bytes. Similarly "),t("i",[e._v("fileLimit")]),e._v(" is available to restrict the number of files to be uploaded.")]),t("CodeHighlight",[e._v(' <FileUpload name="demo[]" url="./upload" :maxFileSize="1000000" :fileLimit="3" /> ')]),t("p",[e._v("In order to customize the default messages use "),t("i",[e._v("invalidFileSizeMessage")]),e._v(" and "),t("i",[e._v("invalidFileLimitMessage")]),e._v(" options where {0} placeholder refers to the filename and {1} the file size.")]),t("ul",[t("li",[e._v(" invalidFileSizeMessage: '{0}: Invalid file size, file size should be smaller than {1}.' ")]),t("li",[e._v(" invalidFileLimitMessage: 'Maximum number of files exceeded, limit is {0} at most.' ")])]),t("h5",[e._v("Request Customization")]),t("p",[e._v("XHR request to upload the files can be customized using the before-upload callback that passes the xhr instance and FormData object as event parameters.")]),t("h5",[e._v("Custom Upload")]),t("p",[e._v("Uploading implementation can be overridden by enabling "),t("i",[e._v("customMode")]),e._v(" property and defining a custom upload handler event.")]),t("CodeHighlight",[e._v(' <FileUpload name="demo[]" :customUpload="true" @uploader="myUploader" /> ')]),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" myUploader(event) { //event.files == files to upload } ")]),t("h5",[e._v("Empty Template")]),t("p",[e._v("When there is no file selected, you may use the empty slot to display content.")]),t("CodeHighlight",[e._v(' <FileUpload name="demo[]" url="./upload" /> <template #empty> <p>Drag and drop files to here to upload.</p> </template> </FileUpload> ')]),t("h5",[e._v("Properties")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("name")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Name of the request parameter to identify the files at backend.")])]),t("tr",[t("td",[e._v("url")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Remote url to upload the files.")])]),t("tr",[t("td",[e._v("mode")]),t("td",[e._v("string")]),t("td",[e._v("advanced")]),t("td",[e._v('Defines the UI of the component, possible values are "advanced" and "basic".')])]),t("tr",[t("td",[e._v("multiple")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Used to select multiple files at once from file dialog.")])]),t("tr",[t("td",[e._v("accept")]),t("td",[e._v("string")]),t("td",[e._v("false")]),t("td",[e._v('Pattern to restrict the allowed file types such as "image/*".')])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Disables the upload functionality.")])]),t("tr",[t("td",[e._v("auto")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("When enabled, upload begins automatically after selection is completed.")])]),t("tr",[t("td",[e._v("maxFileSize")]),t("td",[e._v("number")]),t("td",[e._v("null")]),t("td",[e._v("Maximum file size allowed in bytes.")])]),t("tr",[t("td",[e._v("invalidFileSizeMessage")]),t("td",[e._v("string")]),t("td",[e._v('"{0}: Invalid file size, file size should be smaller than {1}."')]),t("td",[e._v("Message of the invalid fize size.")])]),t("tr",[t("td",[e._v("invalidFileTypeMessage")]),t("td",[e._v("string")]),t("td",[e._v('"{0}: Invalid file type, allowed file types: {1}".')]),t("td",[e._v("Message of the invalid file type.")])]),t("tr",[t("td",[e._v("invalidFileLimitMessage")]),t("td",[e._v("string")]),t("td",[e._v("Maximum number of files exceeded, limit is {0} at most.")]),t("td",[e._v("Message to display when number of files to be uploaded exceeeds the limit.")])]),t("tr",[t("td",[e._v("fileLimit")]),t("td",[e._v("number")]),t("td",[e._v("null")]),t("td",[e._v("Maximum number of files that can be uploaded.")])]),t("tr",[t("td",[e._v("withCredentials")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.")])]),t("tr",[t("td",[e._v("previewWidth")]),t("td",[e._v("number")]),t("td",[e._v("50")]),t("td",[e._v("Width of the image thumbnail in pixels.")])]),t("tr",[t("td",[e._v("chooseLabel")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Label of the choose button. Defaults to PrimeVue "),t("router-link",{attrs:{to:"/locale"}},[e._v("Locale")]),e._v(" configuration.")],1)]),t("tr",[t("td",[e._v("uploadLabel")]),t("td",[e._v("string")]),t("td",[e._v("Upload")]),t("td",[e._v("Label of the upload button. Defaults to PrimeVue "),t("router-link",{attrs:{to:"/locale"}},[e._v("Locale")]),e._v(" configuration.")],1)]),t("tr",[t("td",[e._v("cancelLabel")]),t("td",[e._v("string")]),t("td",[e._v("Cancel")]),t("td",[e._v("Label of the cancel button. Defaults to PrimeVue "),t("router-link",{attrs:{to:"/locale"}},[e._v("Locale")]),e._v(" configuration.")],1)]),t("tr",[t("td",[e._v("customUpload")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Whether to use the default upload or a manual implementation defined in uploadHandler callback.")])]),t("tr",[t("td",[e._v("showUploadButton")]),t("td",[e._v("boolean")]),t("td",[e._v("true")]),t("td",[e._v("Whether to show the upload button.")])]),t("tr",[t("td",[e._v("showCancelButton")]),t("td",[e._v("boolean")]),t("td",[e._v("true")]),t("td",[e._v("Whether to show the cancel button.")])]),t("tr",[t("td",[e._v("buttonStyle")]),t("td",[e._v("any")]),t("td",[e._v("null")]),t("td",[e._v("Inline style of the component.")])]),t("tr",[t("td",[e._v("buttonClass")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Style class of the component.")])])])])]),t("h5",[e._v("Events")]),t("div",{attrs:{classe:"doc-tablewrapper"}},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("before-upload")]),t("td",[e._v("event.xhr: XmlHttpRequest instance. "),t("br"),e._v(" event.formData: FormData object.")]),t("td",[e._v("Callback to invoke before file upload begins to customize the request such as post parameters before the files.")])]),t("tr",[t("td",[e._v("before-send")]),t("td",[e._v("event.xhr: XmlHttpRequest instance. "),t("br"),e._v(" event.formData: FormData object.")]),t("td",[e._v("Callback to invoke before file send begins to customize the request such as adding headers.")])]),t("tr",[t("td",[e._v("upload")]),t("td",[e._v("event.xhr: XmlHttpRequest instance."),t("br"),e._v(" event.files: Uploaded files.")]),t("td",[e._v("Callback to invoke when file upload is complete.")])]),t("tr",[t("td",[e._v("error")]),t("td",[e._v("event.xhr: XmlHttpRequest instance."),t("br"),e._v(" event.files: Files that are not uploaded.")]),t("td",[e._v("Callback to invoke if file upload fails.")])]),t("tr",[t("td",[e._v("clear")]),t("td",[e._v("-.")]),t("td",[e._v("Callback to invoke when files in queue are removed without uploading.")])]),t("tr",[t("td",[e._v("select")]),t("td",[e._v("event.originalEvent: Original browser event. "),t("br"),e._v(" event.files: List of selected files.")]),t("td",[e._v("Callback to invoke when file upload is complete.")])]),t("tr",[t("td",[e._v("progress")]),t("td",[e._v("event.originalEvent: Original browser event. "),t("br"),e._v(" event.progress: Calculated progress value.")]),t("td",[e._v("Callback to invoke when files are selected.")])]),t("tr",[t("td",[e._v("uploader")]),t("td",[e._v("event.files: List of selected files.")]),t("td",[e._v("Callback to invoke to implement a custom upload.")])])])])]),t("h5",[e._v("Slots")]),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Parameters")])])]),t("tbody",[t("tr",[t("td",[e._v("empty")]),t("td",[e._v("-")])])])])]),t("h5",[e._v("Styling")]),t("p",[e._v("Following is the list of structural style classes, for theming classes visit "),t("router-link",{attrs:{to:"/theming"}},[e._v("theming")]),e._v(" page.")],1),t("div",{staticClass:"doc-tablewrapper"},[t("table",{staticClass:"doc-table"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Element")])])]),t("tbody",[t("tr",[t("td",[e._v("p-fileupload")]),t("td",[e._v("Container element.")])]),t("tr",[t("td",[e._v("p-fileupload-buttonbar")]),t("td",[e._v("Header containing the buttons.")])]),t("tr",[t("td",[e._v("p-fileupload-content")]),t("td",[e._v("Content section.")])])])])]),t("h5",[e._v("Dependencies")]),t("p",[e._v("None.")])],1),t("TabPanel",{attrs:{header:"Source"}},[t("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/fileupload",target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v("View on GitHub")])]),t("CodeHighlight",[[e._v(' <h3>Advanced</h3> <FileUpload name="demo[]" url="./upload.php" @upload="onUpload" :multiple="true" accept="image/*" :maxFileSize="1000000"> <template #empty> <p>Drag and drop files to here to upload.</p> </template> </FileUpload> <h3>Basic</h3> <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" /> <h3>Basic with Auto</h3> <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Browse" /> ')]],2),t("CodeHighlight",{attrs:{lang:"javascript"}},[e._v(" export default { methods: { onUpload() { this.$toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000}); } } } ")])],1)],1)],1)}),[],!1,null,null).exports;e("default",a({methods:{onUpload:function(){this.$toast.add({severity:"info",summary:"Success",detail:"File Uploaded",life:3e3})}},components:{FileUploadDoc:l}},(function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"content-section implementation"},[t("div",{staticClass:"card"},[t("h5",[e._v("Advanced")]),t("FileUpload",{attrs:{name:"demo[]",url:"./upload.php",multiple:!0,accept:"image/*",maxFileSize:1e6},on:{upload:e.onUpload},scopedSlots:e._u([{key:"empty",fn:function(){return[t("p",[e._v("Drag and drop files to here to upload.")])]},proxy:!0}])}),t("h5",[e._v("Basic")]),t("FileUpload",{attrs:{mode:"basic",name:"demo[]",url:"./upload.php",accept:"image/*",maxFileSize:1e6},on:{upload:e.onUpload}}),t("h5",[e._v("Basic with Auto")]),t("FileUpload",{attrs:{mode:"basic",name:"demo[]",url:"./upload.php",accept:"image/*",maxFileSize:1e6,auto:!0,chooseLabel:"Browse"},on:{upload:e.onUpload}})],1)]),t("FileUploadDoc")],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[e._v("FileUpload")]),t("p",[e._v("FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.")])])])}],!1,null,"e769928b").exports)}}}));
//# sourceMappingURL=FileUploadDemo-legacy-DIG1cxz6.js.map
