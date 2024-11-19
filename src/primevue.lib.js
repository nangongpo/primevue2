import PrimeVue from 'lib/config'
import AutoComplete from 'lib/autocomplete'
import Accordion from 'lib/accordion'
import AccordionTab from 'lib/accordiontab'
import Avatar from 'lib/avatar'
import AvatarGroup from 'lib/avatargroup'
import Badge from 'lib/badge'
import BadgeDirective from 'lib/badgedirective'
import BlockUI from 'lib/blockui'
import Breadcrumb from 'lib/breadcrumb'
import Button from 'lib/button'
import Calendar from 'lib/calendar'
import Card from 'lib/card'
import Carousel from 'lib/carousel'
import CascadeSelect from 'lib/cascadeselect'
import Chart from 'lib/chart'
import Checkbox from 'lib/checkbox'
import Chip from 'lib/chip'
import Chips from 'lib/chips'
import ColorPicker from 'lib/colorpicker'
import Column from 'lib/column'
import ColumnGroup from 'lib/columngroup'
import ConfirmDialog from 'lib/confirmdialog'
import ConfirmPopup from 'lib/confirmpopup'
import ConfirmationService from 'lib/confirmationservice'
import ContextMenu from 'lib/contextmenu'
import DataTable from 'lib/datatable'
import DataView from 'lib/dataview'
import DataViewLayoutOptions from 'lib/dataviewlayoutoptions'
import DeferredContent from 'lib/deferredcontent'
import Dialog from 'lib/dialog'
import Divider from 'lib/divider'
import Dock from 'lib/dock'
import Dropdown from 'lib/dropdown'
import Editor from 'lib/editor'
import Fieldset from 'lib/fieldset'
import FileUpload from 'lib/fileupload'
import FullCalendar from 'lib/fullcalendar'
import ImagePreview from 'lib/imagepreview'
import InlineMessage from 'lib/inlinemessage'
import Inplace from 'lib/inplace'
import InputMask from 'lib/inputmask'
import InputNumber from 'lib/inputnumber'
import InputSwitch from 'lib/inputswitch'
import InputText from 'lib/inputtext'
import Knob from 'lib/knob'
import Listbox from 'lib/listbox'
import MegaMenu from 'lib/megamenu'
import Menu from 'lib/menu'
import Menubar from 'lib/menubar'
import Message from 'lib/message'
import MultiSelect from 'lib/multiselect'
import OrderList from 'lib/orderlist'
import OrganizationChart from 'lib/organizationchart'
import OverlayPanel from 'lib/overlaypanel'
import Paginator from 'lib/paginator'
import Panel from 'lib/panel'
import PanelMenu from 'lib/panelmenu'
import Password from 'lib/password'
import PickList from 'lib/picklist'
import ProgressBar from 'lib/progressbar'
import ProgressSpinner from 'lib/progressspinner'
import Rating from 'lib/rating'
import RadioButton from 'lib/radiobutton'
import Row from 'lib/row'
import Ripple from 'lib/ripple'
import ScrollPanel from 'lib/scrollpanel'
import ScrollTop from 'lib/scrolltop'
import SelectButton from 'lib/selectbutton'
import Skeleton from 'lib/skeleton'
import Slider from 'lib/slider'
import Sidebar from 'lib/sidebar'
import SpeedDial from 'lib/speeddial'
import SplitButton from 'lib/splitbutton'
import Splitter from 'lib/splitter'
import SplitterPanel from 'lib/splitterpanel'
import Steps from 'lib/steps'
import StyleClass from 'lib/styleclass'
import TabMenu from 'lib/tabmenu'
import TabView from 'lib/tabview'
import TabPanel from 'lib/tabpanel'
import Tag from 'lib/tag'
import Terminal from 'lib/terminal'
import Textarea from 'lib/textarea'
import TieredMenu from 'lib/tieredmenu'
import Timeline from 'lib/timeline'
import Tree from 'lib/tree'
import TreeTable from 'lib/treetable'
import Toast from 'lib/toast'
import ToastService from 'lib/toastservice'
import Toolbar from 'lib/toolbar'
import Tooltip from 'lib/tooltip'
import ToggleButton from 'lib/togglebutton'
import TriStateCheckbox from 'lib/tristatecheckbox'
import Galleria from 'lib/galleria'

import 'lib/resources/primevue.min.css'

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

