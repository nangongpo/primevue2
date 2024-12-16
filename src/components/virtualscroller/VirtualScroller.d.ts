import Vue, { VNode } from 'vue'

interface VirtualScrollerSlots {
  content: (data: {
    styleClass: string;
    items: any[];
    getItemOptions: (index: number) => any;
    loading: boolean;
    getLoaderOptions: (index: number, options?: any) => any;
    itemSize: number;
    rows: number;
    columns: number;
    contentRef: any;
    spacerStyle: string;
    contentStyle: string;
    vertical: boolean;
    horizontal: boolean;
    both: boolean;
  }) => VNode[];
  item: (data: { item: any; options: any }) => VNode[];
  loader: (data: { options: any }) => VNode[];
  loadingicon: VNode[];
  default: VNode[];
}

export default class VirtualScroller extends Vue {
  // Props
  disabled: boolean
  tabindex: number
  containerClass: string
  contentClass: string
  contentStyle: string
  loaderClass: string
  showSpacer: boolean
  showLoader: boolean
  loaderDisabled: boolean
  d_loading: boolean
  d_numItemsInViewport: { cols: number }
  itemSize: number
  loadedItems: any[]
  loadedRows: number
  loadedColumns: number
  spacerStyle: string
  contentRef: any
  items: any[]
  elementRef: any

  // Methods
  getOptions(index: number): any;
  getLoaderOptions(index: number, options?: any): any;
  isVertical(): boolean;
  isHorizontal(): boolean;
  isBoth(): boolean;

  // Slots
  $slots: VirtualScrollerSlots
}
