<template>
    <thead :class="cx('thead')" :style="sx('thead')" role="rowgroup" v-bind="columnGroup ? { ...ptm('thead', ptmTHeadOptions), ...getColumnGroupPT('root') } : ptm('thead', ptmTHeadOptions)" data-pc-section="thead">
        <template v-if="!columnGroup">
            <tr role="row" v-bind="ptm('headerRow')">
                <template v-for="(col, i) of columns">
                    <DTHeaderCell
                        v-if="!columnProp(col, 'hidden') && (rowGroupMode !== 'subheader' || groupRowsBy !== columnProp(col, 'field'))"
                        :key="columnProp(col, 'columnKey') + i || columnProp(col, 'field') + i || i"
                        :column="col"
                        :index="i"
                        @column-click="$emit('column-click', $event)"
                        @column-mousedown="$emit('column-mousedown', $event)"
                        @column-dragstart="$emit('column-dragstart', $event)"
                        @column-dragover="$emit('column-dragover', $event)"
                        @column-dragleave="$emit('column-dragleave', $event)"
                        @column-drop="$emit('column-drop', $event)"
                        :groupRowsBy="groupRowsBy"
                        :groupRowSortField="groupRowSortField"
                        :reorderableColumns="reorderableColumns"
                        :resizableColumns="resizableColumns"
                        @column-resizestart="$emit('column-resizestart', $event)"
                        :sortMode="sortMode"
                        :sortField="sortField"
                        :sortOrder="sortOrder"
                        :multiSortMeta="multiSortMeta"
                        :allRowsSelected="allRowsSelected"
                        :empty="empty"
                        @checkbox-change="$emit('checkbox-change', $event)"
                        :filters="filters"
                        :filterDisplay="filterDisplay"
                        :filtersStore="filtersStore"
                        :filterInputProps="filterInputProps"
                        :first="first"
                        @filter-change="$emit('filter-change', $event)"
                        @filter-apply="$emit('filter-apply')"
                        @operator-change="$emit('operator-change', $event)"
                        @matchmode-change="$emit('matchmode-change', $event)"
                        @constraint-add="$emit('constraint-add', $event)"
                        @constraint-remove="$emit('constraint-remove', $event)"
                        @apply-click="$emit('apply-click', $event)"
                        :unstyled="unstyled"
                        :pt="pt"
                    />
                </template>
            </tr>
            <tr v-if="filterDisplay === 'row'" role="row" v-bind="ptm('headerRow')">
                <template v-for="(col, i) of columns">
                    <th
                        v-if="!columnProp(col, 'hidden') && (rowGroupMode !== 'subheader' || groupRowsBy !== columnProp(col, 'field'))"
                        :key="columnProp(col, 'columnKey') || columnProp(col, 'field') || i"
                        :style="getFilterColumnHeaderStyle(col)"
                        :class="getFilterColumnHeaderClass(col)"
                        v-bind="{ ...getColumnPT(col, 'root', i), ...getColumnPT(col, 'headerCell', i) }">
                        <DTHeaderCheckbox v-if="columnProp(col, 'selectionMode') === 'multiple'" :checked="allRowsSelected" :disabled="empty" @change="$emit('checkbox-change', $event)" :column="col" :unstyled="unstyled" :pt="pt" />
                        <DTColumnFilter
                            v-if="col.$scopedSlots && col.$scopedSlots.filter"
                            :field="columnProp(col, 'filterField') || columnProp(col, 'field')"
                            :type="columnProp(col, 'dataType')"
                            display="row"
                            :showMenu="columnProp(col, 'showFilterMenu')"
                            :filterElement="col.$scopedSlots && col.$scopedSlots.filter"
                            :filterHeaderTemplate="col.$scopedSlots && col.$scopedSlots.filterheader"
                            :filterFooterTemplate="col.$scopedSlots && col.$scopedSlots.filterfooter"
                            :filterClearTemplate="col.$scopedSlots && col.$scopedSlots.filterclear"
                            :filterApplyTemplate="col.$scopedSlots && col.$scopedSlots.filterapply"
                            :filterIconTemplate="col.$scopedSlots && col.$scopedSlots.filtericon"
                            :filterAddIconTemplate="col.$scopedSlots && col.$scopedSlots.filteraddicon"
                            :filterRemoveIconTemplate="col.$scopedSlots && col.$scopedSlots.filterremoveicon"
                            :filterClearIconTemplate="col.$scopedSlots && col.$scopedSlots.filterclearicon"
                            :filters="filters"
                            :filtersStore="filtersStore"
                            :filterInputProps="filterInputProps"
                            @filter-change="$emit('filter-change', $event)"
                            @filter-apply="$emit('filter-apply')"
                            :filterMenuStyle="columnProp(col, 'filterMenuStyle')"
                            :filterMenuClass="columnProp(col, 'filterMenuClass')"
                            :showOperator="columnProp(col, 'showFilterOperator')"
                            :showClearButton="columnProp(col, 'showClearButton')"
                            :showApplyButton="columnProp(col, 'showApplyButton')"
                            :showMatchModes="columnProp(col, 'showFilterMatchModes')"
                            :showAddButton="columnProp(col, 'showAddButton')"
                            :matchModeOptions="columnProp(col, 'filterMatchModeOptions')"
                            :maxConstraints="columnProp(col, 'maxConstraints')"
                            @operator-change="$emit('operator-change', $event)"
                            @matchmode-change="$emit('matchmode-change', $event)"
                            @constraint-add="$emit('constraint-add', $event)"
                            @constraint-remove="$emit('constraint-remove', $event)"
                            @apply-click="$emit('apply-click', $event)"
                            :column="col"
                            :unstyled="unstyled"
                            :pt="pt"
                        />
                    </th>
                </template>
            </tr>
        </template>
        <template v-else>
            <tr v-for="(row, i) of columnGroup.$scopedSlots.default()" role="row" v-bind="{ ...ptm('headerRow'), ...getRowPT(row, 'root', i) }">
                <template v-for="(col, j) of getHeaderColumns(row)">
                    <DTHeaderCell
                        v-if="(!columnProp(col, 'hidden') && (rowGroupMode !== 'subheader' || groupRowsBy !== columnProp(col, 'field')) && typeof col.$scopedSlots !== 'string')"
                        :key="i + '_' + j + (columnProp(col, 'columnKey') ||columnProp(col, 'field') || '')"
                        :column="col"
                        @column-click="$emit('column-click', $event)"
                        @column-mousedown="$emit('column-mousedown', $event)"
                        :groupRowsBy="groupRowsBy"
                        :groupRowSortField="groupRowSortField"
                        :sortMode="sortMode"
                        :sortField="sortField"
                        :sortOrder="sortOrder"
                        :multiSortMeta="multiSortMeta"
                        :allRowsSelected="allRowsSelected"
                        :empty="empty"
                        @checkbox-change="$emit('checkbox-change', $event)"
                        :filters="filters"
                        :filterDisplay="filterDisplay"
                        :filtersStore="filtersStore"
                        @filter-change="$emit('filter-change', $event)"
                        @filter-apply="$emit('filter-apply')"
                        @operator-change="$emit('operator-change', $event)"
                        @matchmode-change="$emit('matchmode-change', $event)"
                        @constraint-add="$emit('constraint-add', $event)"
                        @constraint-remove="$emit('constraint-remove', $event)"
                        @apply-click="$emit('apply-click', $event)"
                        :unstyled="unstyled"
                        :pt="pt"
                    />
                </template>
            </tr>
        </template>
    </thead>
</template>

<script>
import BaseComponent from 'primevue2/basecomponent';
import { ObjectUtils, VueUtils } from 'primevue2/utils';
import ColumnFilter from './ColumnFilter.vue';
import HeaderCell from './HeaderCell.vue';
import HeaderCheckbox from './HeaderCheckbox.vue';
const { mergeProps } = VueUtils

export default {
    name: 'TableHeader',
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
        columnGroup: {
            type: null,
            default: null
        },
        columns: {
            type: null,
            default: null
        },
        rowGroupMode: {
            type: String,
            default: null
        },
        groupRowsBy: {
            type: [Array, String, Function],
            default: null
        },
        resizableColumns: {
            type: Boolean,
            default: false
        },
        allRowsSelected: {
            type: Boolean,
            default: false
        },
        empty: {
            type: Boolean,
            default: false
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
        reorderableColumns: {
            type: Boolean,
            default: false
        },
        first: {
            type: Number,
            default: 0
        },
        filterInputProps: {
            type: null,
            default: null
        }
    },
    methods: {
        columnProp(col, prop) {
            return ObjectUtils.getVNodeProp(col, prop);
        },
        getColumnGroupPT(key) {
            const columnGroupMetaData = {
                props: this.getColumnGroupProps(),
                parent: {
                    instance: this,
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    type: 'header',
                    scrollable: this.$parentInstance?.$parentInstance?.scrollable
                }
            };

            return mergeProps(this.ptm(`columnGroup.${key}`, { columnGroup: columnGroupMetaData }), this.ptm(`columnGroup.${key}`, columnGroupMetaData), this.ptmo(this.getColumnGroupProps(), key, columnGroupMetaData));
        },
        getColumnGroupProps() {
            return this.columnGroup?.pt //@todo
        },
        getRowPT(row, key, index) {
            const rowMetaData = {
                props: row.$props,
                parent: {
                    instance: this,
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    index
                }
            };

            return mergeProps(this.ptm(`row.${key}`, { row: rowMetaData }), this.ptm(`row.${key}`, rowMetaData), this.ptmo(this.getRowProp(row), key, rowMetaData));
        },
        getRowProp(row) {
          return row?.pt //@todo
        },
        getColumnPT(column, key, index) {
            const columnMetaData = {
                props: column.$props,
                parent: {
                    instance: this,
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    index
                }
            };

            return mergeProps(this.ptm(`column.${key}`, { column: columnMetaData }), this.ptm(`column.${key}`, columnMetaData), this.ptmo(this.getColumnProp(column), key, columnMetaData));
        },
        getColumnProp(column) {
          return column?.pt //@todo
        },
        getFilterColumnHeaderClass(column) {
            return ObjectUtils.toFlattenArray(
              this.cx('headerCell', { column }), 
              this.columnProp(column, 'filterHeaderClass'), 
              this.columnProp(column, 'className')
            )
        },
        getFilterColumnHeaderStyle(column) {
            return ObjectUtils.toFlattenArray(
              this.columnProp(column, 'filterHeaderStyle'), 
              this.columnProp(column, 'styleName')
            )
        },
        getHeaderColumns(row){
            let cols = [];

            if (row.child && row.child.$scopedSlots.default) {
                row.child.$scopedSlots.default().forEach(child => {
                    if (child.child && child.child.children && child.child.children instanceof Array)
                        cols = [...cols, ...child.child.children];
                    else if (child.componentOptions && child.componentOptions.tag === 'Column')
                        cols.push(child);
                });

                return cols;
            }
        }
    },
    computed: {
        ptmTHeadOptions() {
            return {
                context: {
                    scrollable: this.$parentInstance?.$parentInstance?.scrollable
                }
            };
        }
    },
    components: {
        DTHeaderCell: HeaderCell,
        DTHeaderCheckbox: HeaderCheckbox,
        DTColumnFilter: ColumnFilter
    }
};
</script>
