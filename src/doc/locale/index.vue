<template>
  <div class="content-section documentation">
    <h1>Internationalization and Localization</h1>
    <p>The Locale API allows setting <b>i18n</b> and <b>l7n</b> options globally for the components.</p>

    <h5>Getting Started</h5>
    <p>Locale values are stored in the global configuration that becomes accessible after installing the PrimeVue.</p>
    <DocSectionCode :code="importCode" importCode />

    <p>Second parameter of the <i>use</i> function can be used to initiate the locale during PrimeVue installation.</p>
    <DocSectionCode :code="usageCode" importCode />

    <p>
      The locale configuration is reactive so that any changes are instantly reflected in the UI. Suppose you are doing
      a multi language application and need to change the language dynamically.
    </p>

    <h6>Options API</h6>
    <DocSectionCode :code="optionsCode" importCode />

    <h5>Locale Options</h5>
    <DocSectionCode :code="localeCode" importCode />

    <p>Set Chinese Locale Options</p>
    <DocSectionCode :code="localeCode2" importCode />
  </div>
</template>

<script>
export default {
  data() {
    return {
      importCode: {
        basic: `
import PrimeVue from 'primevue2/config';

Vue.use(PrimeVue);
        `
      },
      usageCode: {
        basic: `
Vue.use(PrimeVue, {
    locale: {
        accept: 'Aceptar',
        reject: 'Rechazar',
        //...
    }
});
        `
      },
      optionsCode: {
        basic: `
export default {
    methods: {
        changeToSpanish() {
            this.$primevue.config.locale.accept = 'Aceptar';
            this.$primevue.config.locale.reject = 'Rechazar';
        }
    }
}
        `
      },
      localeCode: {
        basic: `
locale: {
    startsWith: 'Starts with',
    contains: 'Contains',
    notContains: 'Not contains',
    endsWith: 'Ends with',
    equals: 'Equals',
    notEquals: 'Not equals',
    noFilter: 'No Filter',
    lt: 'Less than',
    lte: 'Less than or equal to',
    gt: 'Greater than',
    gte: 'Greater than or equal to',
    dateIs: 'Date is',
    dateIsNot: 'Date is not',
    dateBefore: 'Date is before',
    dateAfter: 'Date is after',
    clear: 'Clear',
    apply: 'Apply',
    matchAll: 'Match All',
    matchAny: 'Match Any',
    addRule: 'Add Rule',
    removeRule: 'Remove Rule',
    accept: 'Yes',
    reject: 'No',
    choose: 'Choose',
    upload: 'Upload',
    cancel: 'Cancel',
    datePickerTitle: ['date', 'year'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    yearName: '',
    chooseYear: 'Choose Year',
    chooseMonth: 'Choose Month',
    chooseDate: 'Choose Date',
    prevDecade: 'Previous Decade',
    nextDecade: 'Next Decade',
    prevYear: 'Previous Year',
    nextYear: 'Next Year',
    prevMonth: 'Previous Month',
    nextMonth: 'Next Month',
    prevHour: 'Previous Hour',
    nextHour: 'Next Hour',
    prevMinute: 'Previous Minute',
    nextMinute: 'Next Minute',
    prevSecond: 'Previous Second',
    nextSecond: 'Next Second',
    am: 'am',
    pm: 'pm',
    today: 'Today',
    weekHeader: 'Wk',
    firstDayOfWeek: 0,
    dateFormat: 'mm/dd/yy',
    weak: 'Weak',
    medium: 'Medium',
    strong: 'Strong',
    passwordPrompt: 'Enter a password',
    emptyFilterMessage: 'No results found',
    emptyMessage: 'No available options'
}
        `
      },
      localeCode2: {
        basic: `
import PrimeVue from 'primevue2/config';

Vue.use(PrimeVue, {
  locale: {
    startsWith: '开始于', // Starts with
    contains: '包含', // Contains
    notContains: '不包含', // Not contains
    endsWith: '结束于', // Ends with
    equals: '等于', // Equals
    notEquals: '不等于', // Not equals
    noFilter: '无匹配数据', // No Filter
    lt: '小于', // Less than
    lte: '小于等于', // Less than or equal to
    gt: '大于', // Greater than
    gte: '大于等于', // Greater than or equal to
    dateIs: '日期是', // Date is
    dateIsNot: '日期不是', // Date is not
    dateBefore: '日期之前', // Date is before
    dateAfter: '日期之后', // Date is after
    clear: '清空', // Clear
    apply: '应用', // Apply
    matchAll: '全部匹配', // Match All
    matchAny: '任意匹配', // Match Any
    addRule: '添加规则', // Add Rule
    removeRule: '移除规则', // Remove Rule
    accept: '确定',
    reject: '取消',
    choose: '选择',
    upload: '上传',
    cancel: '取消',
    datePickerTitle: ['year', 'date'],
    dayNames: [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六'
    ],
    dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
    monthNames: [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月'
    ],
    monthNamesShort: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月'
    ],
    yearName: '年',
    chooseYear: '选择年份',
    chooseMonth: '选择月份',
    chooseDate: '选择日期',
    prevDecade: '过去十年',
    nextDecade: '未来十年',
    prevYear: '去年',
    nextYear: '明年',
    prevMonth: '上个月',
    nextMonth: '下个月',
    prevHour: '前一小时',
    nextHour: '下一小时',
    prevMinute: '上一分钟',
    nextMinute: '下一分钟',
    prevSecond: '前一秒',
    nextSecond: '下一秒',
    am: '上午', // AM
    pm: '下午', // PM
    today: '今天',
    weekHeader: '周数', // Wk
    firstDayOfWeek: 0,
    dateFormat: 'yy/mm/dd',
    weak: '弱',
    medium: '中',
    strong: '强',
    passwordPrompt: '请输入密码',
    emptyFilterMessage: '未找到结果',
    emptyMessage: '无可用选项'
  }
})
        `
      }
    }
  }
}
</script>

<style scoped>
li {
  line-height: 1.5;
}
</style>
