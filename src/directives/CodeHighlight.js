import DomHandler from '@/components/utils/DomHandler.js'

const CodeHighlight = {
  inserted(el, binding) {
    highlightCode(el, binding)
  },
  componentUpdated(el, binding) {
    highlightCode(el, binding)
  }
}

function highlightCode(el, binding) {
  const { modifiers, value } = binding

  if (modifiers.script || value === 'script')
    el.className = 'language-javascript'
  else if (modifiers.css || value === 'css') el.className = 'language-css'
  else el.className = 'language-markup'

  if (DomHandler.isClient()) {
    window.Prism.highlightElement(el.children[0])
    el.parentElement.setAttribute('tabindex', '-1')
  }
}

export default CodeHighlight
