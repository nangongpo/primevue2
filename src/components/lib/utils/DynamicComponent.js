// DynamicComponent
export default {
  functional: true,
  props: {
    template: {
      type: null,
      default: null
    },
    props: Object,
    className: {
      type: null,
      default: null
    },
    styleName: {
      type: null,
      default: null
    }
  },
  render(h, context) {
    const { template, props, attrs, className, styleName } = context.props
    if (!template) return null

    const VNode = h().constructor

    // 处理 template 为数组或 VNode 的情况
    if (Array.isArray(template)) {
      if (template[0] instanceof VNode) {
        return template
      }
    } else if (template instanceof VNode) {
      return [template]
    }

    const { data } = context

    const options = {
      class: className,
      style: styleName,
      props: props || {},
      attrs: attrs || {},
      on: context.listeners
    }

    let slotProps = data.attrs || {}


    if (typeof (template) === 'function') {
      slotProps.className = className
      slotProps.styleName = styleName
      slotProps.props = options.props
      return template(slotProps)
    }

    if (typeof (template) === 'string') {
      const components = context.parent.$options.components
      return h(components[template] || template, options, context.children)
    }

    if (typeof (template) === 'object') {
      return h(template, options, context.children)
    }

    console.log('DynamicComponent', context)

    return null
  }
}
