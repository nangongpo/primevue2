import{n as l}from"./app.component-XqgfEEHA.js";import"./app.fullcalendar-CKwQu0km.js";import"./preact-CNwUjBXN.js";import"./app.core-Bxt8ZFo4.js";const o={};var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("h5",[t._v("Import")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" import FileUpload from 'primevue2/fileupload'; ")]),e("h5",[t._v("Getting Started")]),e("p",[t._v("FileUpload requires a "),e("i",[t._v("url")]),t._v(" property as the upload target and a "),e("i",[t._v("name")]),t._v(" to identify the files at backend.")]),e("CodeHighlight",[t._v(' <FileUpload name="demo[]" url="./upload" /> ')]),e("h5",[t._v("Multiple Uploads")]),e("p",[t._v("Only one file can be selected at a time by default, to allow selecting multiple files at once enable "),e("i",[t._v("multiple")]),t._v(" option.")]),e("CodeHighlight",[t._v(' <FileUpload name="demo[]" url="./upload" :multiple="true" /> ')]),e("h5",[t._v("Basic UI")]),e("p",[t._v("FileUpload basic mode provides a simpler UI as an alternative to advanced mode.")]),e("CodeHighlight",[t._v(' <FileUpload mode="basic" name="demo[]" url="./upload" /> ')]),e("h5",[t._v("DragDrop")]),e("p",[t._v("File selection can also be done by dragging and dropping from the filesystem to the content section of the component.")]),e("h5",[t._v("Auto Uploads")]),e("p",[t._v("When "),e("i",[t._v("auto")]),t._v(" property is enabled, upload begins as soon as file selection is completed or a file is dropped on the drop area.")]),e("CodeHighlight",[t._v(' <FileUpload mode="basic" name="demo[]" url="./upload" :auto="true" /> ')]),e("h5",[t._v("File Types")]),e("p",[t._v("Selectable file types can be restricted with "),e("i",[t._v("accept")]),t._v(" property, example below only allows images to be uploaded. Read more about other possible values "),e("a",{attrs:{href:"https://www.w3schools.com/tags/att_input_accept.asp"}},[t._v(" here")]),t._v(".")]),e("CodeHighlight",[t._v(' <FileUpload mode="basic" name="demo[]" url="./upload" accept="image/*" /> ')]),e("h5",[t._v("File Size and File Limit")]),e("p",[t._v("Maximium file size can be restricted using "),e("i",[t._v("maxFileSize")]),t._v(" property defined in bytes. Similarly "),e("i",[t._v("fileLimit")]),t._v(" is available to restrict the number of files to be uploaded.")]),e("CodeHighlight",[t._v(' <FileUpload name="demo[]" url="./upload" :maxFileSize="1000000" :fileLimit="3" /> ')]),e("p",[t._v("In order to customize the default messages use "),e("i",[t._v("invalidFileSizeMessage")]),t._v(" and "),e("i",[t._v("invalidFileLimitMessage")]),t._v(" options where {0} placeholder refers to the filename and {1} the file size.")]),e("ul",[e("li",[t._v(" invalidFileSizeMessage: '{0}: Invalid file size, file size should be smaller than {1}.' ")]),e("li",[t._v(" invalidFileLimitMessage: 'Maximum number of files exceeded, limit is {0} at most.' ")])]),e("h5",[t._v("Request Customization")]),e("p",[t._v("XHR request to upload the files can be customized using the before-upload callback that passes the xhr instance and FormData object as event parameters.")]),e("h5",[t._v("Custom Upload")]),e("p",[t._v("Uploading implementation can be overridden by enabling "),e("i",[t._v("customMode")]),t._v(" property and defining a custom upload handler event.")]),e("CodeHighlight",[t._v(' <FileUpload name="demo[]" :customUpload="true" @uploader="myUploader" /> ')]),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" myUploader(event) { //event.files == files to upload } ")]),e("h5",[t._v("Empty Template")]),e("p",[t._v("When there is no file selected, you may use the empty slot to display content.")]),e("CodeHighlight",[t._v(' <FileUpload name="demo[]" url="./upload" /> <template #empty> <p>Drag and drop files to here to upload.</p> </template> </FileUpload> ')]),e("h5",[t._v("Properties")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("name")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Name of the request parameter to identify the files at backend.")])]),e("tr",[e("td",[t._v("url")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Remote url to upload the files.")])]),e("tr",[e("td",[t._v("mode")]),e("td",[t._v("string")]),e("td",[t._v("advanced")]),e("td",[t._v('Defines the UI of the component, possible values are "advanced" and "basic".')])]),e("tr",[e("td",[t._v("multiple")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("Used to select multiple files at once from file dialog.")])]),e("tr",[e("td",[t._v("accept")]),e("td",[t._v("string")]),e("td",[t._v("false")]),e("td",[t._v('Pattern to restrict the allowed file types such as "image/*".')])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("Disables the upload functionality.")])]),e("tr",[e("td",[t._v("auto")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("When enabled, upload begins automatically after selection is completed.")])]),e("tr",[e("td",[t._v("maxFileSize")]),e("td",[t._v("number")]),e("td",[t._v("null")]),e("td",[t._v("Maximum file size allowed in bytes.")])]),e("tr",[e("td",[t._v("invalidFileSizeMessage")]),e("td",[t._v("string")]),e("td",[t._v('"{0}: Invalid file size, file size should be smaller than {1}."')]),e("td",[t._v("Message of the invalid fize size.")])]),e("tr",[e("td",[t._v("invalidFileTypeMessage")]),e("td",[t._v("string")]),e("td",[t._v('"{0}: Invalid file type, allowed file types: {1}".')]),e("td",[t._v("Message of the invalid file type.")])]),e("tr",[e("td",[t._v("invalidFileLimitMessage")]),e("td",[t._v("string")]),e("td",[t._v("Maximum number of files exceeded, limit is {0} at most.")]),e("td",[t._v("Message to display when number of files to be uploaded exceeeds the limit.")])]),e("tr",[e("td",[t._v("fileLimit")]),e("td",[t._v("number")]),e("td",[t._v("null")]),e("td",[t._v("Maximum number of files that can be uploaded.")])]),e("tr",[e("td",[t._v("withCredentials")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.")])]),e("tr",[e("td",[t._v("previewWidth")]),e("td",[t._v("number")]),e("td",[t._v("50")]),e("td",[t._v("Width of the image thumbnail in pixels.")])]),e("tr",[e("td",[t._v("chooseLabel")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Label of the choose button. Defaults to PrimeVue "),e("router-link",{attrs:{to:"/locale"}},[t._v("Locale")]),t._v(" configuration.")],1)]),e("tr",[e("td",[t._v("uploadLabel")]),e("td",[t._v("string")]),e("td",[t._v("Upload")]),e("td",[t._v("Label of the upload button. Defaults to PrimeVue "),e("router-link",{attrs:{to:"/locale"}},[t._v("Locale")]),t._v(" configuration.")],1)]),e("tr",[e("td",[t._v("cancelLabel")]),e("td",[t._v("string")]),e("td",[t._v("Cancel")]),e("td",[t._v("Label of the cancel button. Defaults to PrimeVue "),e("router-link",{attrs:{to:"/locale"}},[t._v("Locale")]),t._v(" configuration.")],1)]),e("tr",[e("td",[t._v("customUpload")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("Whether to use the default upload or a manual implementation defined in uploadHandler callback.")])]),e("tr",[e("td",[t._v("showUploadButton")]),e("td",[t._v("boolean")]),e("td",[t._v("true")]),e("td",[t._v("Whether to show the upload button.")])]),e("tr",[e("td",[t._v("showCancelButton")]),e("td",[t._v("boolean")]),e("td",[t._v("true")]),e("td",[t._v("Whether to show the cancel button.")])]),e("tr",[e("td",[t._v("buttonStyle")]),e("td",[t._v("any")]),e("td",[t._v("null")]),e("td",[t._v("Inline style of the component.")])]),e("tr",[e("td",[t._v("buttonClass")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Style class of the component.")])])])])]),e("h5",[t._v("Events")]),e("div",{attrs:{classe:"doc-tablewrapper"}},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("before-upload")]),e("td",[t._v("event.xhr: XmlHttpRequest instance. "),e("br"),t._v(" event.formData: FormData object.")]),e("td",[t._v("Callback to invoke before file upload begins to customize the request such as post parameters before the files.")])]),e("tr",[e("td",[t._v("before-send")]),e("td",[t._v("event.xhr: XmlHttpRequest instance. "),e("br"),t._v(" event.formData: FormData object.")]),e("td",[t._v("Callback to invoke before file send begins to customize the request such as adding headers.")])]),e("tr",[e("td",[t._v("upload")]),e("td",[t._v("event.xhr: XmlHttpRequest instance."),e("br"),t._v(" event.files: Uploaded files.")]),e("td",[t._v("Callback to invoke when file upload is complete.")])]),e("tr",[e("td",[t._v("error")]),e("td",[t._v("event.xhr: XmlHttpRequest instance."),e("br"),t._v(" event.files: Files that are not uploaded.")]),e("td",[t._v("Callback to invoke if file upload fails.")])]),e("tr",[e("td",[t._v("clear")]),e("td",[t._v("-.")]),e("td",[t._v("Callback to invoke when files in queue are removed without uploading.")])]),e("tr",[e("td",[t._v("select")]),e("td",[t._v("event.originalEvent: Original browser event. "),e("br"),t._v(" event.files: List of selected files.")]),e("td",[t._v("Callback to invoke when file upload is complete.")])]),e("tr",[e("td",[t._v("progress")]),e("td",[t._v("event.originalEvent: Original browser event. "),e("br"),t._v(" event.progress: Calculated progress value.")]),e("td",[t._v("Callback to invoke when files are selected.")])]),e("tr",[e("td",[t._v("uploader")]),e("td",[t._v("event.files: List of selected files.")]),e("td",[t._v("Callback to invoke to implement a custom upload.")])])])])]),e("h5",[t._v("Slots")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")])])]),e("tbody",[e("tr",[e("td",[t._v("empty")]),e("td",[t._v("-")])])])])]),e("h5",[t._v("Styling")]),e("p",[t._v("Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-fileupload")]),e("td",[t._v("Container element.")])]),e("tr",[e("td",[t._v("p-fileupload-buttonbar")]),e("td",[t._v("Header containing the buttons.")])]),e("tr",[e("td",[t._v("p-fileupload-content")]),e("td",[t._v("Content section.")])])])])]),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1),e("TabPanel",{attrs:{header:"Source"}},[e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/nangongpo/primevue2/tree/main/src/views/fileupload",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])]),e("CodeHighlight",[[t._v(' <h3>Advanced</h3> <FileUpload name="demo[]" url="./upload.php" @upload="onUpload" :multiple="true" accept="image/*" :maxFileSize="1000000"> <template #empty> <p>Drag and drop files to here to upload.</p> </template> </FileUpload> <h3>Basic</h3> <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" /> <h3>Basic with Auto</h3> <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Browse" /> ')]],2),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v(" export default { methods: { onUpload() { this.$toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000}); } } } ")])],1)],1)],1)},d=[],s=l(o,i,d,!1,null,null);const n=s.exports,r={methods:{onUpload(){this.$toast.add({severity:"info",summary:"Success",detail:"File Uploaded",life:3e3})}},components:{FileUploadDoc:n}};var v=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("h5",[t._v("Advanced")]),e("FileUpload",{attrs:{name:"demo[]",url:"./upload.php",multiple:!0,accept:"image/*",maxFileSize:1e6},on:{upload:t.onUpload},scopedSlots:t._u([{key:"empty",fn:function(){return[e("p",[t._v("Drag and drop files to here to upload.")])]},proxy:!0}])}),e("h5",[t._v("Basic")]),e("FileUpload",{attrs:{mode:"basic",name:"demo[]",url:"./upload.php",accept:"image/*",maxFileSize:1e6},on:{upload:t.onUpload}}),e("h5",[t._v("Basic with Auto")]),e("FileUpload",{attrs:{mode:"basic",name:"demo[]",url:"./upload.php",accept:"image/*",maxFileSize:1e6,auto:!0,chooseLabel:"Browse"},on:{upload:t.onUpload}})],1)]),e("FileUploadDoc")],1)},p=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"content-section introduction"},[t("div",{staticClass:"feature-intro"},[t("h1",[a._v("FileUpload")]),t("p",[a._v("FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.")])])])}],_=l(r,v,p,!1,null,"e769928b");const f=_.exports;export{f as default};
//# sourceMappingURL=FileUploadDemo-CfrvtK-t.js.map
