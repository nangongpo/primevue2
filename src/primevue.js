import PrimeVue from 'primevue2/config'
import AutoComplete from 'primevue2/autocomplete'
import Accordion from 'primevue2/accordion'
import AccordionTab from 'primevue2/accordiontab'
import Avatar from 'primevue2/avatar'
import AvatarGroup from 'primevue2/avatargroup'
import Badge from 'primevue2/badge'
import BadgeDirective from 'primevue2/badgedirective'
import BlockUI from 'primevue2/blockui'
import Breadcrumb from 'primevue2/breadcrumb'
import Button from 'primevue2/button'
import Calendar from 'primevue2/calendar'
import Card from 'primevue2/card'
import Carousel from 'primevue2/carousel'
import CascadeSelect from 'primevue2/cascadeselect'
import Chart from 'primevue2/chart'
import Checkbox from 'primevue2/checkbox'
import Chip from 'primevue2/chip'
import Chips from 'primevue2/chips'
import ColorPicker from 'primevue2/colorpicker'
import Column from 'primevue2/column'
import ColumnGroup from 'primevue2/columngroup'
import ConfirmDialog from 'primevue2/confirmdialog'
import ConfirmPopup from 'primevue2/confirmpopup'
import ConfirmationService from 'primevue2/confirmationservice'
import ContextMenu from 'primevue2/contextmenu'
import DataTable from 'primevue2/datatable'
import DataView from 'primevue2/dataview'
import DataViewLayoutOptions from 'primevue2/dataviewlayoutoptions'
import DeferredContent from 'primevue2/deferredcontent'
import Dialog from 'primevue2/dialog'
import Divider from 'primevue2/divider'
import Dock from 'primevue2/dock'
import Dropdown from 'primevue2/dropdown'
import Editor from 'primevue2/editor'
import Fieldset from 'primevue2/fieldset'
import FileUpload from 'primevue2/fileupload'
import FullCalendar from 'primevue2/fullcalendar'
import ImagePreview from 'primevue2/imagepreview'
import InlineMessage from 'primevue2/inlinemessage'
import Inplace from 'primevue2/inplace'
import InputMask from 'primevue2/inputmask'
import InputNumber from 'primevue2/inputnumber'
import InputSwitch from 'primevue2/inputswitch'
import InputText from 'primevue2/inputtext'
import Knob from 'primevue2/knob'
import Listbox from 'primevue2/listbox'
import MegaMenu from 'primevue2/megamenu'
import Menu from 'primevue2/menu'
import Menubar from 'primevue2/menubar'
import Message from 'primevue2/message'
import MultiSelect from 'primevue2/multiselect'
import OrderList from 'primevue2/orderlist'
import OrganizationChart from 'primevue2/organizationchart'
import OverlayPanel from 'primevue2/overlaypanel'
import Paginator from 'primevue2/paginator'
import Panel from 'primevue2/panel'
import PanelMenu from 'primevue2/panelmenu'
import Password from 'primevue2/password'
import PickList from 'primevue2/picklist'
import ProgressBar from 'primevue2/progressbar'
import ProgressSpinner from 'primevue2/progressspinner'
import Rating from 'primevue2/rating'
import RadioButton from 'primevue2/radiobutton'
import Row from 'primevue2/row'
import Ripple from 'primevue2/ripple'
import ScrollPanel from 'primevue2/scrollpanel'
import ScrollTop from 'primevue2/scrolltop'
import SelectButton from 'primevue2/selectbutton'
import Skeleton from 'primevue2/skeleton'
import Slider from 'primevue2/slider'
import Sidebar from 'primevue2/sidebar'
import SpeedDial from 'primevue2/speeddial'
import SplitButton from 'primevue2/splitbutton'
import Splitter from 'primevue2/splitter'
import SplitterPanel from 'primevue2/splitterpanel'
import Steps from 'primevue2/steps'
import StyleClass from 'primevue2/styleclass'
import TabMenu from 'primevue2/tabmenu'
import TabView from 'primevue2/tabview'
import TabPanel from 'primevue2/tabpanel'
import Tag from 'primevue2/tag'
import Terminal from 'primevue2/terminal'
import Textarea from 'primevue2/textarea'
import TieredMenu from 'primevue2/tieredmenu'
import Timeline from 'primevue2/timeline'
import Tree from 'primevue2/tree'
import TreeTable from 'primevue2/treetable'
import Toast from 'primevue2/toast'
import ToastService from 'primevue2/toastservice'
import Toolbar from 'primevue2/toolbar'
import Tooltip from 'primevue2/tooltip'
import ToggleButton from 'primevue2/togglebutton'
import TriStateCheckbox from 'primevue2/tristatecheckbox'
import Galleria from 'primevue2/galleria'

import './assets/styles/primevue.css'

export default {
  install(Vue, opts = {}) {
    Vue.use(PrimeVue, opts)

    Vue.use(ToastService)
    Vue.use(ConfirmationService)

    Vue.directive('badge', BadgeDirective)
    Vue.directive('tooltip', Tooltip)
    Vue.directive('ripple', Ripple)
    Vue.directive('styleclass', StyleClass)

    Vue.component('Accordion', Accordion)
    Vue.component('AccordionTab', AccordionTab)
    Vue.component('Avatar', Avatar)
    Vue.component('AvatarGroup', AvatarGroup)
    Vue.component('AutoComplete', AutoComplete)
    Vue.component('Badge', Badge)
    Vue.component('BlockUI', BlockUI)
    Vue.component('Breadcrumb', Breadcrumb)
    Vue.component('Button', Button)
    Vue.component('Calendar', Calendar)
    Vue.component('Card', Card)
    Vue.component('Carousel', Carousel)
    Vue.component('CascadeSelect', CascadeSelect)
    Vue.component('Chart', Chart)
    Vue.component('Checkbox', Checkbox)
    Vue.component('Chip', Chip)
    Vue.component('Chips', Chips)
    Vue.component('ColorPicker', ColorPicker)
    Vue.component('Column', Column)
    Vue.component('ColumnGroup', ColumnGroup)
    Vue.component('ConfirmDialog', ConfirmDialog)
    Vue.component('ConfirmPopup', ConfirmPopup)
    Vue.component('ContextMenu', ContextMenu)
    Vue.component('DataTable', DataTable)
    Vue.component('DataView', DataView)
    Vue.component('DataViewLayoutOptions', DataViewLayoutOptions)
    Vue.component('DeferredContent', DeferredContent)
    Vue.component('Dialog', Dialog)
    Vue.component('Divider', Divider)
    Vue.component('Dock', Dock)
    Vue.component('Dropdown', Dropdown)
    Vue.component('Editor', Editor)
    Vue.component('Fieldset', Fieldset)
    Vue.component('FileUpload', FileUpload)
    Vue.component('FullCalendar', FullCalendar)
    Vue.component('ImagePreview', ImagePreview)
    Vue.component('InlineMessage', InlineMessage)
    Vue.component('Inplace', Inplace)
    Vue.component('InputMask', InputMask)
    Vue.component('InputNumber', InputNumber)
    Vue.component('InputSwitch', InputSwitch)
    Vue.component('InputText', InputText)
    Vue.component('Knob', Knob)
    Vue.component('Listbox', Listbox)
    Vue.component('MegaMenu', MegaMenu)
    Vue.component('Menu', Menu)
    Vue.component('Menubar', Menubar)
    Vue.component('Message', Message)
    Vue.component('MultiSelect', MultiSelect)
    Vue.component('OrderList', OrderList)
    Vue.component('OrganizationChart', OrganizationChart)
    Vue.component('OverlayPanel', OverlayPanel)
    Vue.component('Paginator', Paginator)
    Vue.component('Panel', Panel)
    Vue.component('PanelMenu', PanelMenu)
    Vue.component('Password', Password)
    Vue.component('PickList', PickList)
    Vue.component('ProgressBar', ProgressBar)
    Vue.component('ProgressSpinner', ProgressSpinner)
    Vue.component('RadioButton', RadioButton)
    Vue.component('Rating', Rating)
    Vue.component('Row', Row)
    Vue.component('ScrollPanel', ScrollPanel)
    Vue.component('ScrollTop', ScrollTop)
    Vue.component('SelectButton', SelectButton)
    Vue.component('Slider', Slider)
    Vue.component('Sidebar', Sidebar)
    Vue.component('Skeleton', Skeleton)
    Vue.component('SpeedDial', SpeedDial)
    Vue.component('SplitButton', SplitButton)
    Vue.component('Splitter', Splitter)
    Vue.component('SplitterPanel', SplitterPanel)
    Vue.component('Steps', Steps)
    Vue.component('TabView', TabView)
    Vue.component('TabPanel', TabPanel)
    Vue.component('TabMenu', TabMenu)
    Vue.component('Tag', Tag)
    Vue.component('Terminal', Terminal)
    Vue.component('Textarea', Textarea)
    Vue.component('TieredMenu', TieredMenu)
    Vue.component('Timeline', Timeline)
    Vue.component('Toast', Toast)
    Vue.component('Toolbar', Toolbar)
    Vue.component('ToggleButton', ToggleButton)
    Vue.component('Tree', Tree)
    Vue.component('TreeTable', TreeTable)
    Vue.component('TriStateCheckbox', TriStateCheckbox)
    Vue.component('Galleria', Galleria)
  }
}

