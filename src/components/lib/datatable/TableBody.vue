<template>
      <tbody :ref="bodyRef" :class="cx('tbody')" role="rowgroup" :style="bodyContentStyle" v-bind="ptm('tbody', ptmTBodyOptions)">
        <template v-if="!empty">
            <template v-for="(rowData, rowIndex) of value">
                <tr v-if="templates['groupheader'] && rowGroupMode === 'subheader' && shouldRenderRowGroupHeader(rowData, rowIndex)" :key="getRowKey(rowData, rowIndex) + '_groupheader_' + rowIndex" :class="cx('rowGroupHeader')" :style="rowGroupHeaderStyle" role="row" v-bind="ptm('rowGroupHeader')">
                    <td :colspan="columnsLength - 1" v-bind="{ ...getColumnPT('bodycell'), ...ptm('rowGroupHeaderCell') }">
                        <button v-if="expandableRowGroups" :class="cx('rowGroupToggler')" @click="onRowGroupToggle($event, rowData)" type="button" v-bind="ptm('rowGroupToggler')">
                            <DynamicComponent v-if="templates['rowgrouptogglericon']" :template="templates['rowgrouptogglericon']" :expanded="isRowGroupExpanded(rowData)" />
                            <template v-else>
                                <span v-if="isRowGroupExpanded(rowData) && expandedRowIcon" :class="[cx('rowGroupTogglerIcon'), expandedRowIcon]" v-bind="ptm('rowGroupTogglerIcon')" />
                                <ChevronDownIcon v-else-if="isRowGroupExpanded(rowData) && !expandedRowIcon" :class="cx('rowGroupTogglerIcon')" v-bind="ptm('rowGroupTogglerIcon')" />
                                <span v-else-if="!isRowGroupExpanded(rowData) && collapsedRowIcon" :class="[cx('rowGroupTogglerIcon'), collapsedRowIcon]" v-bind="ptm('rowGroupTogglerIcon')" />
                                <ChevronRightIcon v-else-if="!isRowGroupExpanded(rowData) && !collapsedRowIcon" :class="cx('rowGroupTogglerIcon')" v-bind="ptm('rowGroupTogglerIcon')" />
                            </template>
                        </button>
                        <DynamicComponent :template="templates['groupheader']" :data="rowData" :index="rowIndex" />
                    </td>
                </tr>
                <tr
                    v-if="expandableRowGroups ? isRowGroupExpanded(rowData) : true"
                    :key="getRowKey(rowData, rowIndex)"
                    :class="rowClasses(rowData, rowIndex)"
                    :style="rowStyles(rowData)"
                    :tabindex="rowTabindex(rowIndex)"
                    role="row"
                    :aria-selected="selectionMode ? isSelected(rowData) : null"
                    @click="onRowClick($event, rowData, rowIndex)"
                    @dblclick="onRowDblClick($event, rowData, rowIndex)"
                    @contextmenu="onRowRightClick($event, rowData, rowIndex)"
                    @touchend="onRowTouchEnd($event)"
                    @keydown.self="onRowKeyDown($event, rowData, rowIndex)"
                    @mousedown="onRowMouseDown($event)"
                    @dragstart="onRowDragStart($event, rowIndex)"
                    @dragover="onRowDragOver($event, rowIndex)"
                    @dragleave="onRowDragLeave($event)"
                    @dragend="onRowDragEnd($event)"
                    @drop="onRowDrop($event)"
                    v-bind="getBodyRowPTOptions('bodyRow', rowData, rowIndex)"
                    :data-p-index="rowIndex"
                    :data-p-selectable-row="selectionMode ? true : false"
                    :data-p-highlight="selection && (isSelected(rowData))"
                    :data-p-highlight-contextmenu="contextMenuSelection && isSelectedWithContextMenu(rowData)">
                    <template v-for="(col, i) of columns">
                        <DTBodyCell
                            v-if="shouldRenderBodyCell(col, rowIndex)"
                            :key="rowIndex + '_' + i + '_' + (columnProp(col, 'columnKey') || columnProp(col, 'field') || '')"
                            :rowData="rowData"
                            :column="col"
                            :rowIndex="rowIndex"
                            :index="i"
                            :selected="isSelected(rowData)"
                            :frozenRow="frozenRow"
                            :rowspan="rowGroupMode === 'rowspan' ? calculateRowGroupSize(col, rowIndex) : null"
                            :editMode="editMode"
                            :editing="editMode === 'row' && isRowEditing(rowData)"
                            :editingMeta="editingMeta"
                            :responsiveLayout="responsiveLayout"
                            :virtualScrollerContentProps="virtualScrollerContentProps"
                            :ariaControls="expandedRowId + '_' + rowIndex + '_expansion'"
                            :name="nameAttributeSelector"
                            :isRowExpanded="isRowExpanded(rowData)"
                            :expandedRowIcon="expandedRowIcon"
                            :collapsedRowIcon="collapsedRowIcon"
                            @radio-change="onRadioChange"
                            @checkbox-change="onCheckboxChange"
                            @row-toggle="onRowToggle"
                            @cell-edit-init="onCellEditInit"
                            @cell-edit-complete="onCellEditComplete"
                            @cell-edit-cancel="onCellEditCancel"
                            @row-edit-init="onRowEditInit"
                            @row-edit-save="onRowEditSave"
                            @row-edit-cancel="onRowEditCancel"
                            @editing-meta-change="onEditingMetaChange"
                            :unstyled="unstyled"
                            :pt="pt"
                        />
                    </template>
                </tr>
                <tr v-if="templates['expansion'] && expandedRows && isRowExpanded(rowData)" :key="getRowKey(rowData, rowIndex) + '_expansion' + rowIndex" :id="expandedRowId + '_' + rowIndex + '_expansion'" :class="cx('rowExpansion')" role="row" v-bind="ptm('rowExpansion')">
                    <td :colspan="columnsLength" v-bind="{ ...getColumnPT('bodycell'), ...ptm('rowExpansionCell') }">
                        <DynamicComponent :template="templates['expansion']" :data="rowData" :index="rowIndex" />
                    </td>
                </tr>
                <tr v-if="templates['groupfooter'] && rowGroupMode === 'subheader' && shouldRenderRowGroupFooter(rowData, rowIndex)" :key="getRowKey(rowData, rowIndex) + '_groupfooter_' + rowIndex" :class="cx('rowGroupFooter')" role="row" v-bind="ptm('rowGroupFooter')">
                    <td :colspan="columnsLength - 1" v-bind="{ ...getColumnPT('bodycell'), ...ptm('rowGroupFooterCell') }">
                        <DynamicComponent :template="templates['groupfooter']" :data="rowData" :index="rowIndex" />
                    </td>
                </tr>
            </template>
        </template>
        <tr v-else :class="cx('emptyMessage')" role="row" v-bind="ptm('emptyMessage')">
            <td :colspan="columnsLength" v-bind="{ ...getColumnPT('bodycell'), ...ptm('emptyMessageCell') }">
                <DynamicComponent v-if="templates.empty" :template="templates.empty" />
            </td>
        </tr>
    </tbody>
</template>
<script>
import BaseComponent from 'primevue2/basecomponent';
import ChevronDownIcon from 'primevue2/icons/chevrondown';
import ChevronRightIcon from 'primevue2/icons/chevronright';
import { DomHandler, ObjectUtils, UniqueComponentId, VueUtils } from 'primevue2/utils';
import BodyCell from './BodyCell.vue';
const { mergeProps } = VueUtils

export default {
    name: 'TableBody',
    hostName: 'DataTable',
    extends: BaseComponent,
    emits: [
        'rowgroup-toggle',
        'row-click',
        'row-dblclick',
        'row-rightclick',
        'row-touchend',
        'row-keydown',
        'row-mousedown',
        'row-dragstart',
        'row-dragover',
        'row-dragleave',
        'row-dragend',
        'row-drop',
        'row-toggle',
        'radio-change',
        'checkbox-change',
        'cell-edit-init',
        'cell-edit-complete',
        'cell-edit-cancel',
        'row-edit-init',
        'row-edit-save',
        'row-edit-cancel',
        'editing-meta-change'
    ],
    props: {
        value: {
            type: Array,
            default: null
        },
        columns: {
            type: null,
            default: null
        },
        frozenRow: {
            type: Boolean,
            default: false
        },
        empty: {
            type: Boolean,
            default: false
        },
        rowGroupMode: {
            type: String,
            default: null
        },
        groupRowsBy: {
            type: [Array, String, Function],
            default: null
        },
        expandableRowGroups: {
            type: Boolean,
            default: false
        },
        expandedRowGroups: {
            type: Array,
            default: null
        },
        first: {
            type: Number,
            default: 0
        },
        dataKey: {
            type: [String, Function],
            default: null
        },
        expandedRowIcon: {
            type: String,
            default: null
        },
        collapsedRowIcon: {
            type: String,
            default: null
        },
        expandedRows: {
            type: Array,
            default: null
        },
        expandedRowKeys: {
            type: null,
            default: null
        },
        selection: {
            type: [Array, Object],
            default: null
        },
        selectionKeys: {
            type: null,
            default: null
        },
        selectionMode: {
            type: String,
            default: null
        },
        contextMenu: {
            type: Boolean,
            default: false
        },
        contextMenuSelection: {
            type: Object,
            default: null
        },
        rowClass: {
            type: null,
            default: null
        },
        rowStyle: {
            type: null,
            default: null
        },
        editMode: {
            type: String,
            default: null
        },
        compareSelectionBy: {
            type: String,
            default: 'deepEquals'
        },
        editingRows: {
            type: Array,
            default: null
        },
        editingRowKeys: {
            type: null,
            default: null
        },
        editingMeta: {
            type: Object,
            default: null
        },
        templates: {
            type: null,
            default: null
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        responsiveLayout: {
            type: String,
            default: 'stack'
        },
        virtualScrollerContentProps: {
            type: Object,
            default: null
        },
        isVirtualScrollerDisabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            rowGroupHeaderStyleObject: {}
        };
    },
    mounted() {
        if (this.frozenRow) {
            this.updateFrozenRowStickyPosition();
        }

        if (this.scrollable && this.rowGroupMode === 'subheader') {
            this.updateFrozenRowGroupHeaderStickyPosition();
        }
    },
    updated() {
        if (this.frozenRow) {
            this.updateFrozenRowStickyPosition();
        }

        if (this.scrollable && this.rowGroupMode === 'subheader') {
            this.updateFrozenRowGroupHeaderStickyPosition();
        }
    },
    methods: {
        columnProp(col, prop) {
            return ObjectUtils.getVNodeProp(col, prop);
        },
        getRowKey(rowData, rowIndex) {
            return this.dataKey ? ObjectUtils.resolveFieldData(rowData, this.dataKey) : rowIndex;
        },
        updateFrozenRowStickyPosition() {
            this.$el.style.top = DomHandler.getOuterHeight(this.$el.previousElementSibling) + 'px';
        },
        updateFrozenRowGroupHeaderStickyPosition() {
            let tableHeaderHeight = DomHandler.getOuterHeight(this.$el.previousElementSibling);

            this.rowGroupHeaderStyleObject.top = tableHeaderHeight + 'px';
        },
        getVirtualScrollerProp(option, options) {
            options = options || this.virtualScrollerContentProps;

            return options ? options[option] : null;
        },
        bodyRef(el) {
            // For VirtualScroller
            const contentRef = this.getVirtualScrollerProp('contentRef');

            contentRef && contentRef(el);
        },
        getRowIndex(rowIndex) {
            // For VirtualScroller
            const getItemOptions = this.getVirtualScrollerProp('getItemOptions');

            return getItemOptions ? getItemOptions(rowIndex).index : rowIndex;
        },
        rowStyles(rowData) {
            return this.rowStyle?.(rowData);
        },
        rowClasses(rowData, rowIndex) {
            let rowStyleClass = [];
            let columnSelectionMode = null;

            if (this.rowClass) {
                let rowClassValue = this.rowClass(rowData);

                if (rowClassValue) {
                    rowStyleClass.push(rowClassValue);
                }
            }

            if (this.columns) {
                for (let col of this.columns) {
                    let _selectionMode = this.columnProp(col, 'selectionMode');

                    if (ObjectUtils.isNotEmpty(_selectionMode) && _selectionMode === 'multiple') {
                        columnSelectionMode = _selectionMode;
                        break;
                    }
                }
            }

            return [this.cx('row', { rowData: rowData, index: this.getRowIndex(rowIndex), columnSelectionMode }), rowStyleClass];
        },
        rowTabindex(rowIndex) {
            rowIndex = this.getRowIndex(rowIndex)
            if (this.selection === null && (this.selectionMode === 'single' || this.selectionMode === 'multiple')) {
                return rowIndex === 0 ? 0 : -1;
            }

            return -1;
        },
        isRowEditing(rowData) {
            if (rowData && this.editingRows) {
                if (this.dataKey) return this.editingRowKeys ? this.editingRowKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;
                else return this.findIndex(rowData, this.editingRows) > -1;
            }

            return false;
        },
        isRowExpanded(rowData) {
            if (rowData && this.expandedRows) {
                if (this.dataKey)
                    return this.expandedRowKeys ? this.expandedRowKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;
                else
                    return this.findIndex(rowData, this.expandedRows) > -1;
            }

            return false;
        },
        isRowGroupExpanded(rowData) {
            if (this.expandableRowGroups && this.expandedRowGroups) {
                const groupFieldValue = ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);

                return this.expandedRowGroups.indexOf(groupFieldValue) > -1;
            }

            return false;
        },
        isSelected(rowData) {
            if (rowData && this.selection) {
                if (this.dataKey) {
                    return this.selectionKeys ? this.selectionKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;
                } else {
                    if (this.selection instanceof Array) return this.findIndexInSelection(rowData) > -1;
                    else return this.equals(rowData, this.selection);
                }
            }

            return false;
        },
        isSelectedWithContextMenu(rowData) {
            if (rowData && this.contextMenuSelection) {
                return this.equals(rowData, this.contextMenuSelection, this.dataKey);
            }

            return false;
        },
        shouldRenderRowGroupHeader(rowData, rowIndex) {
            rowIndex = this.getRowIndex(rowIndex)
            const currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);
            const prevRowData = this.value[rowIndex - 1];

            if (prevRowData) {
                const previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, this.groupRowsBy);

                return currentRowFieldData !== previousRowFieldData;
            } else {
                return true;
            }
        },
        shouldRenderRowGroupFooter(rowData, rowIndex) {
            rowIndex = this.getRowIndex(rowIndex)
            if (this.expandableRowGroups && !this.isRowGroupExpanded(rowData)) {
                return false;
            } else {
                let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);
                let nextRowData = this.value[rowIndex + 1];

                if (nextRowData) {
                    let nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.groupRowsBy);

                    return currentRowFieldData !== nextRowFieldData;
                } else {
                    return true;
                }
            }
        },
        getColumnPT(key) {
            //@todo - update this method
            const columnMetaData = {
                parent: {
                    instance: this,
                    props: this.$props,
                    state: this.$data
                }
            };

            return mergeProps(this.ptm(`column.${key}`, { column: columnMetaData }), this.ptm(`column.${key}`, columnMetaData), this.ptmo(this.columnProp({}, 'pt'), key, columnMetaData));
        },
        getBodyRowPTOptions(key, rowData, rowIndex) {
            //@todo - update this method
            const datatable = this.$parentInstance?.$parentInstance;

            return this.ptm(key, {
                context: {
                    index: this.getRowIndex(rowIndex),
                    selectable: datatable?.rowHover || datatable?.selectionMode,
                    selected: this.isSelected(rowData),
                    stripedRows: datatable?.stripedRows || false
                }
            });
        },
        shouldRenderBodyCell(column, rowIndex) {
            const isHidden = this.columnProp(column, 'hidden');

            if (this.rowGroupMode && !isHidden) {
                rowIndex = this.getRowIndex(rowIndex)
                const field = this.columnProp(column, 'field');

                if (this.rowGroupMode === 'subheader') {
                    return this.groupRowsBy !== field;
                } else if (this.rowGroupMode === 'rowspan') {
                    if (this.isGrouped(column)) {
                        let prevRowData = this.value[rowIndex - 1];

                        if (prevRowData) {
                            const currentRowFieldData = ObjectUtils.resolveFieldData(this.value[rowIndex], field);
                            const previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, field);

                            return currentRowFieldData !== previousRowFieldData;
                        } else {
                            return true;
                        }
                    } else {
                        return true;
                    }
                }
            } else {
                return !isHidden;
            }
        },
        calculateRowGroupSize(column, rowIndex) {
            if (this.isGrouped(column)) {
                let index = this.getRowIndex(rowIndex);
                const field = this.columnProp(column, 'field');
                const currentRowFieldData = ObjectUtils.resolveFieldData(this.value[index], field);
                let nextRowFieldData = currentRowFieldData;
                let groupRowSpan = 0;

                while (currentRowFieldData === nextRowFieldData) {
                    groupRowSpan++;
                    let nextRowData = this.value[++index];

                    if (nextRowData) {
                        nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, field);
                    } else {
                        break;
                    }
                }

                return groupRowSpan === 1 ? null : groupRowSpan;
            } else {
                return null;
            }
        },
        isGrouped(column) {
            const field = this.columnProp(column, 'field');

            if (this.groupRowsBy && field) {
                if (Array.isArray(this.groupRowsBy)) return this.groupRowsBy.indexOf(field) > -1;
                else return this.groupRowsBy === field;
            } else {
                return false;
            }
        },
        findIndexInSelection(data) {
            return this.findIndex(data, this.selection);
        },
        findIndex(data, collection) {
            let index = -1;

            if (collection && collection.length) {
                for (let i = 0; i < collection.length; i++) {
                    if (this.equals(data, collection[i])) {
                        index = i;
                        break;
                    }
                }
            }

            return index;
        },
        equals(data1, data2) {
            return this.compareSelectionBy === 'equals' ? data1 === data2 : ObjectUtils.equals(data1, data2, this.dataKey);
        },
        onRowGroupToggle(event, rowData) {
            this.$emit('rowgroup-toggle', { originalEvent: event, data: rowData });
        },
        onRowClick(event, rowData, rowIndex) {
            rowIndex = this.getRowIndex(rowIndex)
            this.$emit('row-click', { originalEvent: event, data: rowData, index: rowIndex });
        },
        onRowDblClick(event, rowData, rowIndex) {
            rowIndex = this.getRowIndex(rowIndex)
            this.$emit('row-dblclick', { originalEvent: event, data: rowData, index: rowIndex });
        },
        onRowRightClick(event, rowData, rowIndex) {
            rowIndex = this.getRowIndex(rowIndex)
            this.$emit('row-rightclick', { originalEvent: event, data: rowData, index: rowIndex });
        },
        onRowTouchEnd(event) {
            this.$emit('row-touchend', event);
        },
        onRowKeyDown(event, rowData, rowIndex) {
            rowIndex = this.getRowIndex(rowIndex)
            this.$emit('row-keydown', { originalEvent: event, data: rowData, index: rowIndex });
        },
        onRowMouseDown(event) {
            this.$emit('row-mousedown', event);
        },
        onRowDragStart(event, rowIndex) {
            rowIndex = this.getRowIndex(rowIndex)
            this.$emit('row-dragstart', { originalEvent: event, index: rowIndex });
        },
        onRowDragOver(event, rowIndex) {
            rowIndex = this.getRowIndex(rowIndex)
            this.$emit('row-dragover', { originalEvent: event, index: rowIndex });
        },
        onRowDragLeave(event) {
            this.$emit('row-dragleave', event);
        },
        onRowDragEnd(event) {
            this.$emit('row-dragend', event);
        },
        onRowDrop(event) {
            this.$emit('row-drop', event);
        },
        onRowToggle(event) {
            this.$emit('row-toggle', event);
        },
        onRadioChange(event) {
            this.$emit('radio-change', event);
        },
        onCheckboxChange(event) {
            this.$emit('checkbox-change', event);
        },
        onCellEditInit(event) {
            this.$emit('cell-edit-init', event);
        },
        onCellEditComplete(event) {
            this.$emit('cell-edit-complete', event);
        },
        onCellEditCancel(event) {
            this.$emit('cell-edit-cancel', event);
        },
        onRowEditInit(event) {
            this.$emit('row-edit-init', event);
        },
        onRowEditSave(event) {
            this.$emit('row-edit-save', event);
        },
        onRowEditCancel(event) {
            this.$emit('row-edit-cancel', event);
        },
        onEditingMetaChange(event) {
            this.$emit('editing-meta-change', event);
        }
    },
    computed: {
        rowGroupHeaderStyle() {
            if (this.scrollable) {
                return { top: this.rowGroupHeaderStyleObject.top };
            }

            return null;
        },
        bodyContentStyle() {
            return this.getVirtualScrollerProp('contentStyle');
        },
        ptmTBodyOptions() {
            return {
                context: {
                    scrollable: this.$parentInstance?.$parentInstance?.scrollable
                }
            };
        },
        expandedRowId() {
            return UniqueComponentId();
        },
        nameAttributeSelector() {
            return UniqueComponentId();
        },
        columnsLength() {
            if (this.columns) {
                let hiddenColLength = 0;

                this.columns.forEach((column) => {
                    if (this.columnProp(column, 'selectionMode') === 'single') hiddenColLength--;
                    if (this.columnProp(column, 'hidden')) hiddenColLength++;
                });

                return this.columns.length - hiddenColLength;
            }

            return 0;
        }
    },
    components: {
        DTBodyCell: BodyCell,
        ChevronDownIcon: ChevronDownIcon,
        ChevronRightIcon: ChevronRightIcon
    }
};
</script>
