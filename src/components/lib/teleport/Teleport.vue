<script>
const getTargetElement = (to) => {
  let target

  if (typeof to === 'string') {
    target = to ? document.querySelector(to) : document.body
  } else if (to instanceof HTMLElement) {
    target = to
  } else {
    target = document.body
  }

  return target
}

export default {
  name: 'Teleport',
  abstract: true,
  props: {
    to: {
      type: String,
      required: true
    }
  },
  render(h) {
    if (this.$isServer) {
      return null
    }

    const targetSelector = this.to
    let target = getTargetElement(targetSelector)

    if (!target) {
      console.error(`Teleport target "${targetSelector}" not found.`)
      return null
    }

    const children = this.$slots.default
    if (!children || children.length === 0) return null

    const teleportId = `teleport-${this._uid}-${this.$vnode.key || 0}`
    let teleportedElement = target.querySelector(`#${teleportId}`)

    if (!teleportedElement) {
      teleportedElement = document.createElement('div')
      teleportedElement.id = teleportId
      target.appendChild(teleportedElement)
    }

    teleportedElement.innerHTML = '' // 清空原有内容

    children.forEach((child) => {
      if (!child) {
        console.warn('Teleport: Child is null or undefined.');
        return;
      }

      if (child.elm && child.elm.nodeType === Node.ELEMENT_NODE) {
        teleportedElement.appendChild(child.elm);
      } else if (child.text) { // Vue 2.x 文本 VNode
        teleportedElement.appendChild(document.createTextNode(child.text));
      } else if (typeof child === 'string') {
        teleportedElement.appendChild(document.createTextNode(child));
      } else if (child.nodeType === Node.TEXT_NODE) { // 直接处理文本节点
        teleportedElement.appendChild(child);
      } else if (child.nodeType === Node.COMMENT_NODE) { // 直接处理注释节点
        teleportedElement.appendChild(child);
      } else {
        console.warn('Teleport: Invalid child type:', child);
      }
    })

    this.$once('hook:destroyed', () => {
      if (teleportedElement && teleportedElement.parentNode) {
        teleportedElement.parentNode.removeChild(teleportedElement)
      }
    })

    return null
  }
}
</script>
