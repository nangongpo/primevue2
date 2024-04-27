import config from './config'
import AutoComplete from './autocomplete'
import Accordion from './accordion'
import AccordionTab from './accordiontab'
import Avatar from './avatar'
import AvatarGroup from './avatargroup'
import Badge from './badge'
import BadgeDirective from './badgedirective'
import BlockUI from './blockui'
import Breadcrumb from './breadcrumb'
import Button from './button'
import Card from './card'
import Carousel from './carousel'
import CascadeSelect from './cascadeselect'
import Chart from './chart'
import Checkbox from './checkbox'
import Chip from './chip'
import Chips from './chips'
import ColorPicker from './colorpicker'
import Column from './column'
import ColumnGroup from './columngroup'
import Calendar from './calendar'
import ConfirmDialog from './confirmdialog'
import ConfirmPopup from './confirmpopup'
import ConfirmationService from './confirmationservice'
import ContextMenu from './contextmenu'
import DataTable from './datatable'
import DataView from './dataview'
import DataViewLayoutOptions from './dataviewlayoutoptions'
import DeferredContent from './deferredcontent'
import Dialog from './dialog'
import Divider from './divider'
import Dock from './dock'
import Dropdown from './dropdown'
import Editor from './editor'
import Fieldset from './fieldset'
import FileUpload from './fileupload'
import FullCalendar from './fullcalendar'
import ImagePreview from './imagepreview'
import InlineMessage from './inlinemessage'
import Inplace from './inplace'
import InputMask from './inputmask'
import InputNumber from './inputnumber'
import InputSwitch from './inputswitch'
import InputText from './inputtext'
import Knob from './knob'
import Listbox from './listbox'
import MegaMenu from './megamenu'
import Menu from './menu'
import Menubar from './menubar'
import Message from './message'
import MultiSelect from './multiselect'
import OrderList from './orderlist'
import OrganizationChart from './organizationchart'
import OverlayPanel from './overlaypanel'
import Paginator from './paginator'
import Panel from './panel'
import PanelMenu from './panelmenu'
import Password from './password'
import PickList from './picklist'
import ProgressBar from './progressbar'
import ProgressSpinner from './progressspinner'
import Rating from './rating'
import RadioButton from './radiobutton'
import Row from './row'
import Ripple from './ripple'
import ScrollPanel from './scrollpanel'
import ScrollTop from './scrolltop'
import SelectButton from './selectbutton'
import Skeleton from './skeleton'
import Slider from './slider'
import Sidebar from './sidebar'
import SpeedDial from './speeddial'
import SplitButton from './splitbutton'
import Splitter from './splitter'
import SplitterPanel from './splitterpanel'
import Steps from './steps'
import StyleClass from './styleclass'
import TabMenu from './tabmenu'
import TabView from './tabview'
import TabPanel from './tabpanel'
import Tag from './tag'
import Terminal from './terminal'
import Textarea from './textarea'
import TieredMenu from './tieredmenu'
import Timeline from './timeline'
import Tree from './tree'
import TreeTable from './treetable'
import Toast from './toast'
import ToastService from './toastservice'
import Toolbar from './toolbar'
import Tooltip from './tooltip'
import ToggleButton from './togglebutton'
import TriStateCheckbox from './tristatecheckbox'
import Galleria from './galleria'

import './common/Common.css'

const components = [
  AutoComplete,
  Accordion,
  AccordionTab,
  Avatar,
  AvatarGroup,
  Badge,
  BadgeDirective, // directive
  BlockUI,
  Breadcrumb,
  Button,
  Card,
  Carousel,
  CascadeSelect,
  Chart,
  Checkbox,
  Chip,
  Chips,
  ColorPicker,
  Column,
  ColumnGroup,
  Calendar,
  ConfirmDialog,
  ConfirmPopup,
  ConfirmationService,
  ContextMenu,
  DataTable,
  DataView,
  DataViewLayoutOptions,
  DeferredContent,
  Dialog,
  Divider,
  Dock,
  Dropdown,
  Editor,
  Fieldset,
  FileUpload,
  FullCalendar,
  ImagePreview,
  InlineMessage,
  Inplace,
  InputMask,
  InputNumber,
  InputSwitch,
  InputText,
  Knob,
  Listbox,
  MegaMenu,
  Menu,
  Menubar,
  Message,
  MultiSelect,
  OrderList,
  OrganizationChart,
  OverlayPanel,
  Paginator,
  Panel,
  PanelMenu,
  Password,
  PickList,
  ProgressBar,
  ProgressSpinner,
  Rating,
  RadioButton,
  Row,
  Ripple,
  ScrollPanel,
  ScrollTop,
  SelectButton,
  Skeleton,
  Slider,
  Sidebar,
  SpeedDial,
  SplitButton,
  Splitter,
  SplitterPanel,
  Steps,
  StyleClass,
  TabMenu,
  TabView,
  TabPanel,
  Tag,
  Terminal,
  Textarea,
  TieredMenu,
  Timeline,
  Tree,
  TreeTable,
  Toast,
  ToastService,
  Toolbar,
  Tooltip,
  ToggleButton,
  TriStateCheckbox,
  Galleria,
]


// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue, options) {
  Vue.use(config, options)
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.use(component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  config,
  AutoComplete,
  Accordion,
  AccordionTab,
  Avatar,
  AvatarGroup,
  Badge,
  BadgeDirective, // directive
  BlockUI,
  Breadcrumb,
  Button,
  Card,
  Carousel,
  CascadeSelect,
  Chart,
  Checkbox,
  Chip,
  Chips,
  ColorPicker,
  Column,
  ColumnGroup,
  Calendar,
  ConfirmDialog,
  ConfirmPopup,
  ContextMenu,
  DataTable,
  DataView,
  DataViewLayoutOptions,
  DeferredContent,
  Dialog,
  Divider,
  Dock,
  Dropdown,
  Editor,
  Fieldset,
  FileUpload,
  FullCalendar,
  ImagePreview,
  InlineMessage,
  Inplace,
  InputMask,
  InputNumber,
  InputSwitch,
  InputText,
  Knob,
  Listbox,
  MegaMenu,
  Menu,
  Menubar,
  Message,
  MultiSelect,
  OrderList,
  OrganizationChart,
  OverlayPanel,
  Paginator,
  Panel,
  PanelMenu,
  Password,
  PickList,
  ProgressBar,
  ProgressSpinner,
  Rating,
  RadioButton,
  Row,
  ScrollTop,
  SelectButton,
  Skeleton,
  Slider,
  Sidebar,
  SpeedDial,
  SplitButton,
  Splitter,
  SplitterPanel,
  Steps,
  TabMenu,
  TabView,
  TabPanel,
  Tag,
  Textarea,
  TieredMenu,
  Timeline,
  Tree,
  TreeTable,
  Toast,
  Toolbar,
  ToggleButton,
  TriStateCheckbox,
  Galleria
}
