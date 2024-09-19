import DomHandler from '@/components/utils/DomHandler.js'

const CodeHighlight = {
  inserted(el, binding) {
    const { modifiers, value } = binding

    let lang = 'markup'
    if (value) lang = value
    else if (modifiers.script) lang = 'javascript'
    else if (modifiers.css) lang = 'css'
    
    el.className = `language-${lang}`

    // if (modifiers.script || value === 'script')
    //   el.className = 'language-javascript'
    // else if (modifiers.css || value === 'css') el.className = 'language-css'
    // else el.className = 'language-markup'

    if (DomHandler.isClient() && el.children.length > 0) {
      window.Prism.highlightElement(el.children[0])
      el.children[0].parentElement.setAttribute('tabindex', '-1')
    }
  }
}

export default CodeHighlight
