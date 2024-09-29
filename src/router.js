import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  base: import.meta.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/setup',
      name: 'setup',
      component: () => import('./views/setup/index.vue')
    },
    {
      path: '/accessibility',
      name: 'accessibility',
      component: () => import('./views/accessibility/index.vue')
    },
    {
      path: '/locale',
      name: 'locale',
      component: () => import('./views/locale/index.vue')
    },
    {
      path: '/avatar',
      name: 'avatar',
      component: () => import('./views/avatar/index.vue')
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('./views/support/Support.vue')
    },
    {
      path: '/theming',
      name: 'theming',
      component: () => import('./views/theming/Theming.vue')
    },
    {
      path: '/icons',
      name: 'icons',
      component: () => import('./views/icons/index.vue')
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: () => import('./views/accordion/index.vue')
    },
    {
      path: '/autocomplete',
      name: 'autocomplete',
      component: () => import('./views/autocomplete/index.vue')
    },
    {
      path: '/badge',
      name: 'badge',
      component: () => import('./views/badge/index.vue')
    },
    {
      path: '/chip',
      name: 'chip',
      component: () => import('./views/chip/index.vue')
    },
    {
      path: '/blockui',
      name: 'blockui',
      component: () => import('./views/blockui/index.vue')
    },
    {
      path: '/breadcrumb',
      name: 'breadcrumb',
      component: () => import('./views/breadcrumb/index.vue')
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('./views/button/index.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('./views/calendar/index.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('./views/card/index.vue')
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: () => import('./views/carousel/index.vue')
    },
    {
      path: '/cascadeselect',
      name: 'cascadeselect',
      component: () => import('./views/cascadeselect/index.vue')
    },
    {
      path: '/chart',
      name: 'chart',
      component: () => import('./views/chart/Chart.vue')
    },
    {
      path: '/chart/bar',
      name: 'barchart',
      component: () => import('./views/chart/Bar.vue')
    },
    {
      path: '/chart/combo',
      name: 'combochart',
      component: () => import('./views/chart/Combo.vue')
    },
    {
      path: '/chart/doughnut',
      name: 'doughnutchart',
      component: () => import('./views/chart/Doughnut.vue')
    },
    {
      path: '/chart/line',
      name: 'linechart',
      component: () => import('./views/chart/Line.vue')
    },
    {
      path: '/chart/pie',
      name: 'piechart',
      component: () => import('./views/chart/Pie.vue')
    },
    {
      path: '/chart/polararea',
      name: 'polarareachart',
      component: () => import('./views/chart/PolarArea.vue')
    },
    {
      path: '/chart/radar',
      name: 'radarchart',
      component: () => import('./views/chart/Radar.vue')
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: () => import('./views/checkbox/index.vue')
    },
    {
      path: '/chips',
      name: 'chips',
      component: () => import('./views/chips/index.vue')
    },
    {
      path: '/colorpicker',
      name: 'colorpicker',
      component: () => import('./views/colorpicker/index.vue')
    },
    {
      path: '/confirmdialog',
      name: 'confirmdialog',
      component: () => import('./views/confirmdialog/index.vue')
    },
    {
      path: '/confirmpopup',
      name: 'confirmpopup',
      component: () => import('./views/confirmpopup/index.vue')
    },
    {
      path: '/contextmenu',
      name: 'contextmenu',
      component: () => import('./views/contextmenu/index.vue')
    },
    {
      path: '/datatable',
      name: 'datatable',
      component: () => import('./views/datatable/index.vue')
    },
    {
      path: '/datatable/basic',
      name: 'datatablebasic',
      component: () => import('./views/datatable/Basic.vue')
    },
    {
      path: '/datatable/dynamiccolumns',
      name: 'datatabledynamiccolumns',
      component: () => import('./views/datatable/DynamicColumns.vue')
    },
    {
      path: '/datatable/templating',
      name: 'datatabletemplating',
      component: () => import('./views/datatable/Templating.vue')
    },
    {
      path: '/datatable/paginator',
      name: 'datatablepaginator',
      component: () => import('./views/datatable/Paginator.vue')
    },
    {
      path: '/datatable/sort',
      name: 'datatablesort',
      component: () => import('./views/datatable/Sort.vue')
    },
    {
      path: '/datatable/filter',
      name: 'datatablefilter',
      component: () => import('./views/datatable/Filter.vue')
    },
    {
      path: '/datatable/lazy',
      name: 'datatablelazy',
      component: () => import('./views/datatable/Lazy.vue')
    },
    {
      path: '/datatable/selection',
      name: 'datatableselection',
      component: () => import('./views/datatable/Selection.vue')
    },
    {
      path: '/datatable/coltoggle',
      name: 'datatablecoltoggle',
      component: () => import('./views/datatable/ColToggle.vue')
    },
    {
      path: '/datatable/reorder',
      name: 'datatablereorder',
      component: () => import('./views/datatable/Reorder.vue')
    },
    {
      path: '/datatable/rowgroup',
      name: 'datatablerowgroup',
      component: () => import('./views/datatable/RowGroup.vue')
    },
    {
      path: '/datatable/responsive',
      name: 'datatableresponsive',
      component: () => import('./views/datatable/Responsive.vue')
    },
    {
      path: '/datatable/export',
      name: 'datatableexport',
      component: () => import('./views/datatable/Export.vue')
    },
    {
      path: '/datatable/colgroup',
      name: 'datatablecolgroup',
      component: () => import('./views/datatable/ColGroup.vue')
    },
    {
      path: '/datatable/size',
      name: 'datatablesize',
      component: () => import('./views/datatable/Size.vue')
    },
    {
      path: '/datatable/colresize',
      name: 'datatablecolresize',
      component: () => import('./views/datatable/ColResize.vue')
    },
    {
      path: '/datatable/rowexpand',
      name: 'datatablerowexpand',
      component: () => import('./views/datatable/RowExpand.vue')
    },
    {
      path: '/datatable/state',
      name: 'datatablestate',
      component: () => import('./views/datatable/State.vue')
    },
    {
      path: '/datatable/edit',
      name: 'datatableedit',
      component: () => import('./views/datatable/Edit.vue')
    },
    {
      path: '/datatable/crud',
      name: 'datatablecrud',
      component: () => import('./views/datatable/Crud.vue')
    },
    {
      path: '/datatable/scroll',
      name: 'datatablescroll',
      component: () => import('./views/datatable/Scroll.vue')
    },
    {
      path: '/datatable/flexscroll',
      name: 'datatableflexscroll',
      component: () => import('./views/datatable/FlexScroll.vue')
    },
    {
      path: '/datatable/style',
      name: 'datatablestyle',
      component: () => import('./views/datatable/Style.vue')
    },
    {
      path: '/datatable/contextmenu',
      name: 'datatablecontextmenu',
      component: () => import('./views/datatable/ContextMenu.vue')
    },
    {
      path: '/datatable/gridlines',
      name: 'datatablegridlines',
      component: () => import('./views/datatable/GridLines.vue')
    },
    {
      path: '/datatable/striped',
      name: 'datatablestriped',
      component: () => import('./views/datatable/Striped.vue')
    },
    {
      path: '/dataview',
      name: 'dataview',
      component: () => import('./views/dataview/index.vue')
    },
    {
      path: '/deferredcontent',
      name: 'deferredcontent',
      component: () => import('./views/deferredcontent/index.vue')
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: () => import('./views/dialog/index.vue')
    },
    {
      path: '/divider',
      name: 'divider',
      component: () => import('./views/divider/index.vue')
    },
    {
      path: '/dock',
      name: 'Dock',
      component: () => import('./views/dock/index.vue')
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: () => import('./views/dropdown/index.vue')
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('./views/editor/index.vue')
    },
    {
      path: '/fieldset',
      name: 'fieldset',
      component: () => import('./views/fieldset/index.vue')
    },
    {
      path: '/fileupload',
      name: 'fileupload',
      component: () => import('./views/fileupload/index.vue')
    },
    {
      path: '/filterservice',
      name: 'filterservice',
      component: () => import('./views/filterservice/index.vue')
    },
    {
      path: '/fullcalendar',
      name: 'fullcalendar',
      component: () => import('./views/fullcalendar/index.vue')
    },
    {
      path: '/imagePreview',
      name: 'imagePreview',
      component: () => import('./views/imagepreview/index.vue')
    },
    {
      path: '/inplace',
      name: 'inplace',
      component: () => import('./views/inplace/index.vue')
    },
    {
      path: '/inputgroup',
      name: 'inputgroup',
      component: () => import('./views/inputgroup/index.vue')
    },
    {
      path: '/inputswitch',
      name: 'inputswitch',
      component: () => import('./views/inputswitch/index.vue')
    },
    {
      path: '/inputtext',
      name: 'inputtext',
      component: () => import('./views/inputtext/index.vue')
    },
    {
      path: '/inputmask',
      name: 'inputmask',
      component: () => import('./views/inputmask/index.vue')
    },
    {
      path: '/inputnumber',
      name: 'inputnumber',
      component: () => import('./views/inputnumber/index.vue')
    },
    {
      path: '/invalid',
      name: 'invalid',
      component: () => import('./views/invalid/index.vue')
    },
    {
      path: '/scrolltop',
      name: 'scrolltop',
      component: () => import('./views/scrolltop/ScrollTopDemo.vue')
    },
    {
      path: '/skeleton',
      name: 'skeleton',
      component: () => import('./views/skeleton/SkeletonDemo.vue')
    },
    {
      path: '/splitter',
      name: 'splitter',
      component: () => import('./views/splitter/SplitterDemo.vue')
    },
    {
      path: '/knob',
      name: 'knob',
      component: () => import('./views/knob/index.vue')
    },
    {
      path: '/listbox',
      name: 'listbox',
      component: () => import('./views/listbox/index.vue')
    },
    {
      path: '/floatlabel',
      name: 'floatlabel',
      component: () => import('./views/floatlabel/index.vue')
    },
    {
      path: '/megamenu',
      name: 'megamenu',
      component: () => import('./views/megamenu/index.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('./views/menu/index.vue')
    },
    {
      path: '/menubar',
      name: 'menubar',
      component: () => import('./views/menubar/index.vue')
    },
    {
      path: '/menumodel',
      name: 'menumodel',
      component: () => import('./views/menumodel/MenuModel.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('./views/message/index.vue')
    },
    {
      path: '/multiselect',
      name: 'multiselect',
      component: () => import('./views/multiselect/index.vue')
    },
    {
      path: '/orderlist',
      name: 'orderlist',
      component: () => import('./views/orderlist/index.vue')
    },
    {
      path: '/organizationchart',
      name: 'organizationchart',
      component: () => import('./views/organizationchart/index.vue')
    },
    {
      path: '/overlaypanel',
      name: 'overlaypanel',
      component: () => import('./views/overlaypanel/index.vue')
    },
    {
      path: '/paginator',
      name: 'paginator',
      component: () => import('./views/paginator/PaginatorDemo.vue')
    },
    {
      path: '/panel',
      name: 'panel',
      component: () => import('./views/panel/PanelDemo.vue')
    },
    {
      path: '/panelmenu',
      name: 'panelmenu',
      component: () => import('./views/panelmenu/PanelMenuDemo.vue')
    },
    {
      path: '/picklist',
      name: 'picklist',
      component: () => import('./views/picklist/PickListDemo.vue')
    },
    {
      path: '/password',
      name: 'password',
      component: () => import('./views/password/PasswordDemo.vue')
    },
    {
      path: '/progressbar',
      name: 'progressbar',
      component: () => import('./views/progressbar/ProgressBarDemo.vue')
    },
    {
      path: '/progressspinner',
      name: 'progressspinner',
      component: () => import('./views/progressspinner/ProgressSpinnerDemo.vue')
    },
    {
      path: '/radiobutton',
      name: 'radiobutton',
      component: () => import('./views/radiobutton/RadioButtonDemo.vue')
    },
    {
      path: '/rating',
      name: 'rating',
      component: () => import('./views/rating/RatingDemo.vue')
    },
    {
      path: '/ripple',
      name: 'ripple',
      component: () => import('./views/ripple/RippleDemo.vue')
    },
    {
      path: '/scrollpanel',
      name: 'scrollpanel',
      component: () => import('./views/scrollpanel/ScrollPanelDemo.vue')
    },
    {
      path: '/selectbutton',
      name: 'selectbutton',
      component: () => import('./views/selectbutton/SelectButtonDemo.vue')
    },
    {
      path: '/sidebar',
      name: 'sidebar',
      component: () => import('./views/sidebar/SidebarDemo.vue')
    },
    {
      path: '/slider',
      name: 'slider',
      component: () => import('./views/slider/SliderDemo.vue')
    },
    {
      path: '/speeddial',
      name: 'SpeedDial',
      component: () => import('./views/speeddial/SpeedDialDemo.vue')
    },
    {
      path: '/splitbutton',
      name: 'splitbutton',
      component: () => import('./views/splitbutton/SplitButtonDemo.vue')
    },
    {
      path: '/steps',
      component: () => import('./views/steps/StepsDemo.vue'),
      children: [{
        path: '',
        component: () => import('./views/steps/PersonalDemo.vue')
      },
      {
        path: '/steps/seat',
        component: () => import('./views/steps/SeatDemo.vue')
      },
      {
        path: '/steps/payment',
        component: () => import('./views/steps/PaymentDemo.vue')
      },
      {
        path: '/steps/confirmation',
        component: () => import('./views/steps/ConfirmationDemo.vue')
      }]
    },
    {
      path: '/styleclass',
      name: 'styleclass',
      component: () => import('./views/styleclass/StyleClassDemo.vue')
    },
    {
      path: '/tabmenu',
      component: () => import('./views/tabmenu/TabMenuDemo.vue'),
      children: [{
        path: '',
        component: () => import('./views/tabmenu/HomeDemo.vue')
      },
      {
        path: '/tabmenu/calendar',
        component: () => import('./views/tabmenu/CalendarDemo.vue')
      },
      {
        path: '/tabmenu/edit',
        component: () => import('./views/tabmenu/EditDemo.vue')
      },
      {
        path: '/tabmenu/documentation',
        component: () => import('./views/tabmenu/DocumentationDemo.vue')
      },
      {
        path: '/tabmenu/settings',
        component: () => import('./views/tabmenu/SettingsDemo.vue')
      }]
    },
    {
      path: '/tabview',
      name: 'tabview',
      component: () => import('./views/tabview/TabViewDemo.vue')
    },
    {
      path: '/tag',
      name: 'tag',
      component: () => import('./views/tag/TagDemo.vue')
    },
    {
      path: '/textarea',
      name: 'textarea',
      component: () => import('./views/textarea/TextareaDemo.vue')
    },
    {
      path: '/terminal',
      name: 'terminal',
      component: () => import('./views/terminal/TerminalDemo.vue')
    },
    {
      path: '/tieredmenu',
      name: 'tieredmenu',
      component: () => import('./views/tieredmenu/TieredMenuDemo.vue')
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: () => import('./views/timeline/TimelineDemo.vue')
    },
    {
      path: '/toast',
      name: 'toast',
      component: () => import('./views/toast/ToastDemo.vue')
    },
    {
      path: '/togglebutton',
      name: 'togglebutton',
      component: () => import('./views/togglebutton/ToggleButtonDemo.vue')
    },
    {
      path: '/toolbar',
      name: 'toolbar',
      component: () => import('./views/toolbar/ToolbarDemo.vue')
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      component: () => import('./views/tooltip/TooltipDemo.vue')
    },
    {
      path: '/tree',
      name: 'tree',
      component: () => import('./views/tree/TreeDemo.vue')
    },
    {
      path: '/tree/selection',
      name: 'treeselection',
      component: () => import('./views/tree/TreeSelectionDemo.vue')
    },
    {
      path: '/tree/lazy',
      name: 'treelazy',
      component: () => import('./views/tree/TreeLazyDemo.vue')
    },
    {
      path: '/tree/templating',
      name: 'treetemplating',
      component: () => import('./views/tree/TreeTemplatingDemo.vue')
    },
    {
      path: '/tree/filter',
      name: 'treefilter',
      component: () => import('./views/tree/TreeFilterDemo.vue')
    },
    {
      path: '/treetable',
      name: 'treetable',
      component: () => import('./views/treetable/TreeTableDemo.vue')
    },
    {
      path: '/treetable/templating',
      name: 'treetabletemplating',
      component: () => import('./views/treetable/TreeTableTemplatingDemo.vue')
    },
    {
      path: '/treetable/size',
      name: 'treetablesize',
      component: () => import('./views/treetable/TreeTableSizeDemo.vue')
    },
    {
      path: '/treetable/paginator',
      name: 'treetablepaginator',
      component: () => import('./views/treetable/TreeTablePaginatorDemo.vue')
    },
    {
      path: '/treetable/sort',
      name: 'treetablesort',
      component: () => import('./views/treetable/TreeTableSortDemo.vue')
    },
    {
      path: '/treetable/filter',
      name: 'treetablefilter',
      component: () => import('./views/treetable/TreeTableFilterDemo.vue')
    },
    {
      path: '/treetable/selection',
      name: 'treetableselection',
      component: () => import('./views/treetable/TreeTableSelectionDemo.vue')
    },
    {
      path: '/treetable/lazy',
      name: 'treetablelazy',
      component: () => import('./views/treetable/TreeTableLazyDemo.vue')
    },
    {
      path: '/treetable/coltoggle',
      name: 'treetablecoltoggle',
      component: () => import('./views/treetable/TreeTableColToggleDemo.vue')
    },
    {
      path: '/treetable/responsive',
      name: 'treetableresponsive',
      component: () => import('./views/treetable/TreeTableResponsiveDemo.vue')
    },
    {
      path: '/treetable/colresize',
      name: 'treetablecolresize',
      component: () => import('./views/treetable/TreeTableColResizeDemo.vue')
    },
    {
      path: '/tristatecheckbox',
      name: 'tristatecheckbox',
      component: () => import('./views/tristatecheckbox/TriStateCheckboxDemo.vue')
    },
    {
      path: '/galleria',
      name: 'galleria',
      component: () => import('./views/galleria/Galleria.vue')
    },
    {
      path: '/galleria/programmatic',
      name: 'galleriaprogrammatic',
      component: () => import('./views/galleria/Programmatic.vue')
    },
    {
      path: '/galleria/indicator',
      name: 'galleriaindicator',
      component: () => import('./views/galleria/Indicator.vue')
    },
    {
      path: '/galleria/thumbnail',
      name: 'galleriathumbnail',
      component: () => import('./views/galleria/Thumbnail.vue')
    },
    {
      path: '/galleria/navigator',
      name: 'gallerianavigator',
      component: () => import('./views/galleria/Navigator.vue')
    },
    {
      path: '/galleria/responsive',
      name: 'galleriaresponsive',
      component: () => import('./views/galleria/Responsive.vue')
    },
    {
      path: '/galleria/fullscreen',
      name: 'galleriafullscreen',
      component: () => import('./views/galleria/FullScreen.vue')
    },
    {
      path: '/galleria/autoplay',
      name: 'galleriaautoplay',
      component: () => import('./views/galleria/AutoPlay.vue')
    },
    {
      path: '/galleria/caption',
      name: 'galleriacaption',
      component: () => import('./views/galleria/Caption.vue')
    },
    {
      path: '/galleria/advanced',
      name: 'galleriaadvvanced',
      component: () => import('./views/galleria/Advanced.vue')
    }
  ]
})
