import { h } from 'vue'
import katex from 'katex'

export default defineComponent({
  props: {
    displayMode: {
      type: Boolean,
      default: false
    },
    legno: {
      type: Boolean,
      default: true
    },
    fleqn: {
      type: Boolean,
      default: true
    }
  },
  setup (props, { slots }) {
    return () => {
      let formula: string = slots.default
        ? slots.default().map(node => node.children).join('\n')
        : ''
      return h('span', {
        innerHTML: katex.renderToString(formula, props)
      })
    }
  }
}
)