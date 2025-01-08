<template>
    <tfoot v-if="hasFooter" :class="cx('tfoot')" :style="sx('tfoot')" role="rowgroup" v-bind="columnGroup ? { ...ptm('tfoot', ptmTFootOptions), ...getColumnGroupPT('root') } : ptm('tfoot', ptmTFootOptions)" data-pc-section="tfoot">
        <tr v-if="!columnGroup" role="row" v-bind="ptm('footerRow')">
            <template v-for="(col, i) of columns">
                <DTFooterCell v-if="!columnProp(col, 'hidden')" :key="columnProp(col, 'columnKey') || columnProp(col, 'field') || i" :column="col" :pt="pt" />
            </template>
        </tr>
        <template v-else>
            <tr v-for="(row, i) of columnGroup.$scopedSlots.default()" :key="i" role="row" v-bind="{ ...ptm('footerRow'), ...getRowPT(row, 'root', i) }">
                <template v-for="(col, j) of getFooterColumns(row)">
                    <DTFooterCell v-if="!columnProp(col, 'hidden')" :key="i + '_' + j + '_' + (columnProp(col, 'columnKey') || columnProp(col, 'field') || '')" :column="col" :index="i" :pt="pt" />
                </template>
            </tr>
        </template>
    </tfoot>
</template>

<script>
import BaseComponent from 'primevue2/basecomponent';
import { ObjectUtils, VueUtils } from 'primevue2/utils';
import FooterCell from './FooterCell.vue';

const { mergeProps } = VueUtils

export default {
    name: 'TableFooter',
    hostName: 'DataTable',
    extends: BaseComponent,
    props: {
        columnGroup: {
            type: null,
            default: null
        },
        columns: {
            type: [Object, Array],
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
                    type: 'footer',
                    scrollable: this.ptmTFootOptions.context.scrollable
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
        getFooterColumns(row){
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
        hasFooter() {
            let hasFooter = false;

            if (this.columnGroup) {
                hasFooter = true;
            } else if (this.columns) {
                for (let col of this.columns) {
                    if (this.columnProp(col, 'footer') || (col.$scopedSlots && col.$scopedSlots.footer)) {
                        hasFooter = true;
                        break;
                    }
                }
            }

            return hasFooter;
        },
        ptmTFootOptions() {
            return {
                context: {
                    scrollable: this.$parentInstance?.$parentInstance?.scrollable
                }
            };
        }
    },
    components: {
        DTFooterCell: FooterCell
    }
};
</script>
