import './utils/polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Code from './directives/CodeHighlight'
import AppInputStyleSwitch from './AppInputStyleSwitch.vue'
import DocSectionCode from './doc/DocSectionCode.vue'

// 生产
// import PrimeVue from './primevue.lib'

// 开发
import PrimeVue from './primevue.js'

import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import './assets/styles/flags.css'

import Vuelidate from 'vuelidate'
import { getPublicUrl } from './utils'

// template中的引用public的资源打包时不会追加公共基础路径base
Vue.prototype.$publicUrl = getPublicUrl

Vue.use(PrimeVue, {
  ripple: true,
  // locale: {
  //   startsWith: '开始于', // Starts with
  //   contains: '包含', // Contains
  //   notContains: '不包含', // Not contains
  //   endsWith: '结束于', // Ends with
  //   equals: '等于', // Equals
  //   notEquals: '不等于', // Not equals
  //   noFilter: '无匹配数据', // No Filter
  //   lt: '小于', // Less than
  //   lte: '小于等于', // Less than or equal to
  //   gt: '大于', // Greater than
  //   gte: '大于等于', // Greater than or equal to
  //   dateIs: '日期是', // Date is
  //   dateIsNot: '日期不是', // Date is not
  //   dateBefore: '日期之前', // Date is before
  //   dateAfter: '日期之后', // Date is after
  //   clear: '清空', // Clear
  //   apply: '应用', // Apply
  //   matchAll: '全部匹配', // Match All
  //   matchAny: '任意匹配', // Match Any
  //   addRule: '添加规则', // Add Rule
  //   removeRule: '移除规则', // Remove Rule
  //   accept: '确定',
  //   reject: '取消',
  //   choose: '选择',
  //   upload: '上传',
  //   cancel: '取消',
  //   datePickerTitle: ['year', 'date'],
  //   dayNames: [
  //     '星期日',
  //     '星期一',
  //     '星期二',
  //     '星期三',
  //     '星期四',
  //     '星期五',
  //     '星期六'
  //   ],
  //   dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  //   dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
  //   monthNames: [
  //     '1月',
  //     '2月',
  //     '3月',
  //     '4月',
  //     '5月',
  //     '6月',
  //     '7月',
  //     '8月',
  //     '9月',
  //     '10月',
  //     '11月',
  //     '12月'
  //   ],
  //   monthNamesShort: [
  //     '一月',
  //     '二月',
  //     '三月',
  //     '四月',
  //     '五月',
  //     '六月',
  //     '七月',
  //     '八月',
  //     '九月',
  //     '十月',
  //     '十一月',
  //     '十二月'
  //   ],
  //   yearName: '年',
  //   chooseYear: '选择年份',
  //   chooseMonth: '选择月份',
  //   chooseDate: '选择日期',
  //   prevDecade: '过去十年',
  //   nextDecade: '未来十年',
  //   prevYear: '去年',
  //   nextYear: '明年',
  //   prevMonth: '上个月',
  //   nextMonth: '下个月',
  //   prevHour: '前一小时',
  //   nextHour: '下一小时',
  //   prevMinute: '上一分钟',
  //   nextMinute: '下一分钟',
  //   prevSecond: '前一秒',
  //   nextSecond: '下一秒',
  //   am: '上午', // AM
  //   pm: '下午', // PM
  //   today: '今天',
  //   weekHeader: '周数', // Wk
  //   firstDayOfWeek: 0,
  //   dateFormat: 'yy/mm/dd',
  //   weak: '弱',
  //   medium: '中',
  //   strong: '强',
  //   passwordPrompt: '请输入密码',
  //   emptyFilterMessage: '未找到结果',  // @deprecated Use 'emptySearchMessage' option instead.
  //   searchMessage: '有 {0} 个结果可用',
  //   selectionMessage: '已选择 {0} 项',
  //   emptySelectionMessage: '无可用选项',
  //   emptySearchMessage: '未找到结果',
  //   emptyMessage: '暂无数据'
  // }
})
Vue.use(Vuelidate)

Vue.prototype.$appState = Vue.observable({ darkTheme: false })

Vue.config.productionTip = false

Vue.directive('code', Code)
Vue.component('AppInputStyleSwitch', AppInputStyleSwitch)
Vue.component('DocSectionCode', DocSectionCode)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
