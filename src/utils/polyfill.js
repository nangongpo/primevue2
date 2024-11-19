// polyfill fetch、ResizeObserver

// import 'whatwg-fetch'
import ResizeObserver from 'resize-observer-polyfill'

if (typeof window !== 'undefined') {
  window.global = window
}

if (!global.ResizeObserver) {
  global.ResizeObserver = ResizeObserver
}
