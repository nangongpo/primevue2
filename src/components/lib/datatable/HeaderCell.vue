<template>
    <th
        :style="containerStyle"
        :class="containerClass"
        :tabindex="columnProp('sortable') ? '0' : null"
        role="columnheader"
        :colspan="columnProp('colspan')"
        :rowspan="columnProp('rowspan')"
        :aria-sort="ariaSort"
        @click="onClick"
        @keydown="onKeyDown"
        @mousedown="onMouseDown"
        @dragstart="onDragStart"
        @dragover="onDragOver"
        @dragleave="onDragLeave"
        @drop="onDrop"
        v-bind="{ ...getColumnPT('root'), ...getColumnPT('headerCell') }"
        :data-p-sortable-column="columnProp('sortable')"
        :data-p-resizable-column="resizableColumns"
        :data-p-highlight="isColumnSorted()"
        :data-p-filter-column="filterColumn"
        :data-p-frozen-column="columnProp('frozen')"
        :data-p-reorderable-column="reorderableColumns">
        <span v-if="resizableColumns && !columnProp('frozen')" :class="cx('columnResizer')" @mousedown="onResizeStart" v-bind="getColumnPT('columnResizer')"></span>
        <div :class="cx('headerContent')" v-bind="getColumnPT('headerContent')">
            <DynamicComponent v-if="column.$scopedSlots && column.$scopedSlots.header" :template="column.$scopedSlots.header" :column="column" />
            <span v-if="columnProp('header')" :class="cx('headerTitle')" v-bind="getColumnPT('headerTitle')">{{ columnProp('header') }}</span>
            <span v-if="columnProp('sortable')" v-bind="getColumnPT('sort')">
                <DynamicComponent :template="(column.$scopedSlots && column.$scopedSlots.sorticon) || sortableColumnIcon" :sorted="sortState.sorted" :sortOrder="sortState.sortOrder" :className="cx('sortIcon')" v-bind="getColumnPT('sorticon')" />
            </span>
            <span v-if="isMultiSorted()" :class="cx('sortBadge')" v-bind="getColumnPT('sortBadge')">{{ getBadgeValue() }}</span>
            <DTHeaderCheckbox
                v-if="columnProp('selectionMode') === 'multiple' && filterDisplay !== 'row'"
                :checked="allRowsSelected"
                @change="onHeaderCheckboxChange"
                :disabled="empty"
                :headerCheckboxIconTemplate="column.$scopedSlots && column.$scopedSlots.headercheckboxicon"
                :column="column"
                :unstyled="unstyled"
                :pt="pt"
            />
            <DTColumnFilter
                v-if="filterDisplay === 'menu' && column.$scopedSlots && column.$scopedSlots.filter"
                :field="columnProp('filterField') || columnProp('field')"
                :type="columnProp('dataType')"
                display="menu"
                :showMenu="columnProp('showFilterMenu')"
                :filterElement="column.$scopedSlots && column.$scopedSlots.filter"
                :filterHeaderTemplate="column.$scopedSlots && column.$scopedSlots.filterheader"
                :filterFooterTemplate="column.$scopedSlots && column.$scopedSlots.filterfooter"
                :filterClearTemplate="column.$scopedSlots && column.$scopedSlots.filterclear"
                :filterApplyTemplate="column.$scopedSlots && column.$scopedSlots.filterapply"
                :filterIconTemplate="column.$scopedSlots && column.$scopedSlots.filtericon"
                :filterAddIconTemplate="column.$scopedSlots && column.$scopedSlots.filteraddicon"
                :filterRemoveIconTemplate="column.$scopedSlots && column.$scopedSlots.filterremoveicon"
                :filterClearIconTemplate="column.$scopedSlots && column.$scopedSlots.filterclearicon"
                :filters="filters"
                :filtersStore="filtersStore"
                :filterInputProps="filterInputProps"
                @filter-change="$emit('filter-change', $event)"
                @filter-apply="$emit('filter-apply')"
                :filterMenuStyle="columnProp('filterMenuStyle')"
                :filterMenuClass="columnProp('filterMenuClass')"
                :showOperator="columnProp('showFilterOperator')"
                :showClearButton="columnProp('showClearButton')"
                :showApplyButton="columnProp('showApplyButton')"
                :showMatchModes="columnProp('showFilterMatchModes')"
                :showAddButton="columnProp('showAddButton')"
                :matchModeOptions="columnProp('filterMatchModeOptions')"
                :maxConstraints="columnProp('maxConstraints')"
                @operator-change="$emit('operator-change', $event)"
                @matchmode-change="$emit('matchmode-change', $event)"
                @constraint-add="$emit('constraint-add', $event)"
                @constraint-remove="$emit('constraint-remove', $event)"
                @apply-click="$emit('apply-click', $event)"
                :column="column"
                :unstyled="unstyled"
                :pt="pt"
            />
        </div>
    </th>
</template>

<script>
import BaseComponent from 'primevue2/basecomponent';
import SortAltIcon from 'primevue2/icons/sortalt';
import SortAmountDownIcon from 'primevue2/icons/sortamountdown';
import SortAmountUpAltIcon from 'primevue2/icons/sortamountupalt';
import { DomHandler, ObjectUtils, VueUtils } from 'primevue2/utils';
import ColumnFilter from './ColumnFilter.vue';
import HeaderCheckbox from './HeaderCheckbox.vue';
const { mergeProps } = VueUtils

export default {
    name: 'HeaderCell',
    hostName: 'DataTable',
    extends: BaseComponent,
    emits: [
        'column-click',
        'column-mousedown',
        'column-dragstart',
        'column-dragover',
        'column-dragleave',
        'column-drop',
        'column-resizestart',
        'checkbox-change',
        'filter-change',
        'filter-apply',
        'operator-change',
        'matchmode-change',
        'constraint-add',
        'constraint-remove',
        'filter-clear',
        'apply-click'
    ],
    props: {
        column: {
            type: Object,
            default: null
        },
        index: {
            type: Number,
            default: null
        },
        resizableColumns: {
            type: Boolean,
            default: false
        },
        groupRowsBy: {
            type: [Array, String, Function],
            default: null
        },
        sortMode: {
            type: String,
            default: 'single'
        },
        groupRowSortField: {
            type: [String, Function],
            default: null
        },
        sortField: {
            type: [String, Function],
            default: null
        },
        sortOrder: {
            type: Number,
            default: null
        },
        multiSortMeta: {
            type: Array,
            default: null
        },
        allRowsSelected: {
            type: Boolean,
            default: false
        },
        empty: {
            type: Boolean,
            default: false
        },
        filterDisplay: {
            type: String,
            default: null
        },
        filters: {
            type: Object,
            default: null
        },
        filtersStore: {
            type: Object,
            default: null
        },
        filterColumn: {
            type: Boolean,
            default: false
        },
        reorderableColumns: {
            type: Boolean,
            default: false
        },
        filterInputProps: {
            type: null,
            default: null
        }
    },
    data() {
        return {
            styleObject: {}
        };
    },
    mounted() {
        if (this.columnProp('frozen')) {
            this.updateStickyPosition();
        }
    },
    updated() {
        if (this.columnProp('frozen')) {
            this.updateStickyPosition();
        }
    },
    methods: {
        columnProp(prop) {
            return ObjectUtils.getVNodeProp(this.column, prop);
        },
        getColumnPT(key) {
            const columnMetaData = {
                props: this.column.$props,
                parent: {
                    instance: this,
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    index: this.index,
                    sortable: this.columnProp('sortable') === '' || this.columnProp('sortable'),
                    sorted: this.isColumnSorted(),
                    resizable: this.resizableColumns,
                    size: this.$parentInstance?.$parentInstance?.size,
                    showGridlines: this.$parentInstance?.$parentInstance?.showGridlines || false
                }
            };

            return mergeProps(this.ptm(`column.${key}`, { column: columnMetaData }), this.ptm(`column.${key}`, columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
        },
        getColumnProp() {
          return this.column?.pt //@todo:
        },
        onClick(event) {
            this.$emit('column-click', { originalEvent: event, column: this.column });
        },
        onKeyDown(event) {
            if ((event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 'Space') && event.currentTarget.nodeName === 'TH' && DomHandler.getAttribute(event.currentTarget, 'data-p-sortable-column')) {
                this.$emit('column-click', { originalEvent: event, column: this.column });
                event.preventDefault();
            }
        },
        onMouseDown(event) {
            this.$emit('column-mousedown', { originalEvent: event, column: this.column });
        },
        onDragStart(event) {
            this.$emit('column-dragstart', { originalEvent: event, column: this.column });
        },
        onDragOver(event) {
            this.$emit('column-dragover', { originalEvent: event, column: this.column });
        },
        onDragLeave(event) {
            this.$emit('column-dragleave', { originalEvent: event, column: this.column });
        },
        onDrop(event) {
            this.$emit('column-drop', { originalEvent: event, column: this.column });
        },
        onResizeStart(event) {
            this.$emit('column-resizestart', event);
        },
        getMultiSortMetaIndex() {
            return this.multiSortMeta.findIndex((meta) => meta.field === this.columnProp('field') || meta.field === this.columnProp('sortField'));
        },
        getBadgeValue() {
            let index = this.getMultiSortMetaIndex();

            return this.groupRowsBy && this.groupRowsBy === this.groupRowSortField && index > -1 ? index : index + 1;
        },
        isMultiSorted() {
            return this.sortMode === 'multiple' && this.columnProp('sortable') && this.getMultiSortMetaIndex() > -1;
        },
        isColumnSorted() {
            return this.sortMode === 'single' ? this.sortField && (this.sortField === this.columnProp('field') || this.sortField === this.columnProp('sortField')) : this.isMultiSorted();
        },
        updateStickyPosition() {
            if (this.columnProp('frozen')) {
                let align = this.columnProp('alignFrozen');

                if (align === 'right') {
                    let right = 0;
                    let next = DomHandler.getNextElementSibling(this.$el, '[data-p-frozen-column="true"]');

                    if (next) {
                        right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
                    }

                    this.styleObject.right = right + 'px';
                } else {
                    let left = 0;
                    let prev = DomHandler.getPreviousElementSibling(this.$el, '[data-p-frozen-column="true"]');

                    if (prev) {
                        left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
                    }

                    this.styleObject.left = left + 'px';
                }

                let filterRow = this.$el.parentElement.nextElementSibling;

                if (filterRow) {
                    let index = DomHandler.index(this.$el);

                    if (filterRow.children[index]) {
                        filterRow.children[index].style.left = this.styleObject.left;
                        filterRow.children[index].style.right = this.styleObject.right;
                    }
                }
            }
        },
        onHeaderCheckboxChange(event) {
            this.$emit('checkbox-change', event);
        }
    },
    computed: {
        containerClass() {
            return ObjectUtils.toFlattenArray(
              this.cx('headerCell'),
              this.filterColumn ? this.columnProp('filterHeaderClass') : this.columnProp('headerClass'), 
              this.columnProp('className')
            )
        },
        containerStyle() {
            let headerStyle = this.filterColumn ? this.columnProp('filterHeaderStyle') : this.columnProp('headerStyle');
            let columnStyle = this.columnProp('styleName');

            return this.columnProp('frozen') 
              ? ObjectUtils.toFlattenArray(columnStyle, headerStyle, this.styleObject) 
              : ObjectUtils.toFlattenArray(columnStyle, headerStyle)
        },
        sortState() {
            let sorted = false;
            let sortOrder = null;

            if (this.sortMode === 'single') {
                sorted = this.sortField && (this.sortField === this.columnProp('field') || this.sortField === this.columnProp('sortField'));
                sortOrder = sorted ? this.sortOrder : 0;
            } else if (this.sortMode === 'multiple') {
                let metaIndex = this.getMultiSortMetaIndex();

                if (metaIndex > -1) {
                    sorted = true;
                    sortOrder = this.multiSortMeta[metaIndex].order;
                }
            }

            return {
                sorted,
                sortOrder
            };
        },
        sortableColumnIcon() {
            const { sorted, sortOrder } = this.sortState;

            if (!sorted) return SortAltIcon;
            else if (sorted && sortOrder > 0) return SortAmountUpAltIcon;
            else if (sorted && sortOrder < 0) return SortAmountDownIcon;

            return null;
        },
        ariaSort() {
            if (this.columnProp('sortable')) {
                const { sorted, sortOrder } = this.sortState;

                if (sorted && sortOrder < 0) return 'descending';
                else if (sorted && sortOrder > 0) return 'ascending';
                else return 'none';
            } else {
                return null;
            }
        }
    },
    components: {
        DTHeaderCheckbox: HeaderCheckbox,
        DTColumnFilter: ColumnFilter,
        SortAltIcon: SortAltIcon,
        SortAmountUpAltIcon: SortAmountUpAltIcon,
        SortAmountDownIcon: SortAmountDownIcon
    }
};
</script>
