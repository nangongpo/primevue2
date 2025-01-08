// teleport.d.ts

import Vue from 'vue'

export interface TeleportChildNode {
  com?: Vue.VNode[]
  multiSlot: boolean
  setCom(slots: Vue.VNode[] | undefined, multiSlot: boolean | undefined): void
}

export interface TeleportProps {
  to: string | HTMLElement
  disabled?: boolean
  multiSlot?: boolean
}

declare const Teleport: Vue.ComponentOptions<Vue> & {
  new (): Vue
}

export default Teleport
