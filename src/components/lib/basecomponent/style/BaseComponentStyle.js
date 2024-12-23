import BaseStyle from 'primevue2/base/style'
import { useStyle } from 'primevue2/usestyle'

export default BaseStyle.extend({
  name: 'common',
  loadGlobalStyle: (globalCSS, options = {}) => useStyle(globalCSS, { name: 'global', ...options })
})
