<template>
    <ul :class="level === 0 ? cx('menu') : cx('submenu')" v-bind="level === 0 ? ptm('menu') : ptm('submenu')">
        <template v-for="(processedItem, index) of items">
            <li
                v-if="isItemVisible(processedItem) && !getItemProp(processedItem, 'separator')"
                :key="getItemKey(processedItem)"
                :id="getItemId(processedItem)"
                :style="getItemProp(processedItem, 'style')"
                :class="[cx('menuitem', { processedItem }), getItemProp(processedItem, 'class')]"
                role="menuitem"
                :aria-label="getItemLabel(processedItem)"
                :aria-disabled="isItemDisabled(processedItem) || undefined"
                :aria-expanded="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"
                :aria-haspopup="isItemGroup(processedItem) && !getItemProp(processedItem, 'to') ? 'menu' : undefined"
                :aria-level="level + 1"
                :aria-setsize="getAriaSetSize()"
                :aria-posinset="getAriaPosInset(index)"
                v-bind="getPTOptions(processedItem, index, 'menuitem')"
                :data-p-highlight="isItemActive(processedItem)"
                :data-p-focused="isItemFocused(processedItem)"
                :data-p-disabled="isItemDisabled(processedItem)">
                <div :class="cx('content')" @click="onItemClick($event, processedItem)" @mouseenter="onItemMouseEnter($event, processedItem)" @mousemove="onItemMouseMove($event, processedItem)" v-bind="getPTOptions(processedItem, index, 'content')">
                    <template v-if="!templates.item">
                        <a v-ripple :href="getItemProp(processedItem, 'url')" :class="cx('action')" :target="getItemProp(processedItem, 'target')" tabindex="-1" aria-hidden="true" v-bind="getPTOptions(processedItem, index, 'action')">
                            <DynamicComponent v-if="templates.itemicon" :template="templates.itemicon" :item="processedItem.item" :className="cx('icon')" />
                            <span v-else-if="getItemProp(processedItem, 'icon')" :class="[cx('icon'), getItemProp(processedItem, 'icon')]" v-bind="getPTOptions(processedItem, index, 'icon')" />
                            <span :id="getItemLabelId(processedItem)" :class="cx('label')" v-bind="getPTOptions(processedItem, index, 'label')">{{ getItemLabel(processedItem) }}</span>
                            <template v-if="getItemProp(processedItem, 'items')">
                                <DynamicComponent v-if="templates.submenuicon" :template="templates.submenuicon" :root="root" :active="isItemActive(processedItem)" :className="cx('submenuIcon')" />
                                <DynamicComponent v-else :template="root ? 'AngleDownIcon' : 'AngleRightIcon'" :className="cx('submenuIcon')" v-bind="getPTOptions(processedItem, index, 'submenuIcon')" />
                            </template>
                        </a>
                    </template>
                    <DynamicComponent v-else :template="templates.item" :item="processedItem.item" :root="root" :hasSubmenu="getItemProp(processedItem, 'items')" :label="getItemLabel(processedItem)" :props="getMenuItemProps(processedItem, index)"></DynamicComponent>
                </div>
                <MenubarSub
                    v-if="isItemVisible(processedItem) && isItemGroup(processedItem)"
                    :menuId="menuId"
                    role="menu"
                    :style="sx('submenu', true, { processedItem })"
                    :focusedItemId="focusedItemId"
                    :items="processedItem.items"
                    :mobileActive="mobileActive"
                    :activeItemPath="activeItemPath"
                    :templates="templates"
                    :level="level + 1"
                    :aria-labelledby="getItemLabelId(processedItem)"
                    :pt="pt"
                    :unstyled="unstyled"
                    @item-click="$emit('item-click', $event)"
                    @item-mouseenter="$emit('item-mouseenter', $event)"
                    @item-mousemove="$emit('item-mousemove', $event)"
                />
            </li>
            <li
                v-if="isItemVisible(processedItem) && getItemProp(processedItem, 'separator')"
                :key="'separator_' + getItemKey(processedItem)"
                :id="getItemId(processedItem)"
                :class="[cx('separator'), getItemProp(processedItem, 'class')]"
                :style="getItemProp(processedItem, 'style')"
                role="separator"
                v-bind="ptm('separator')"
            ></li>
        </template>
    </ul>
</template>

<script>
import BaseComponent from 'primevue2/basecomponent';
import AngleDownIcon from 'primevue2/icons/angledown';
import AngleRightIcon from 'primevue2/icons/angleright';
import Ripple from 'primevue2/ripple';
import { ObjectUtils, VueUtils } from 'primevue2/utils';
const { mergeProps } = VueUtils

export default {
    name: 'MenubarSub',
    hostName: 'Menubar',
    extends: BaseComponent,
    emits: ['item-mouseenter', 'item-click', 'item-mousemove'],
    props: {
        items: {
            type: Array,
            default: null
        },
        root: {
            type: Boolean,
            default: false
        },
        popup: {
            type: Boolean,
            default: false
        },
        mobileActive: {
            type: Boolean,
            default: false
        },
        templates: {
            type: Object,
            default: null
        },
        level: {
            type: Number,
            default: 0
        },
        menuId: {
            type: String,
            default: null
        },
        focusedItemId: {
            type: String,
            default: null
        },
        activeItemPath: {
            type: Array,
            default: null
        }
    },
    list: null,
    methods: {
        getItemId(processedItem) {
            return `${this.menuId}_${processedItem.key}`;
        },
        getItemKey(processedItem) {
            return this.getItemId(processedItem);
        },
        getItemProp(processedItem, name, params) {
            return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name], params) : undefined;
        },
        getItemLabel(processedItem) {
            return this.getItemProp(processedItem, 'label');
        },
        getItemLabelId(processedItem) {
            return `${this.menuId}_${processedItem.key}_label`;
        },
        getPTOptions(processedItem, index, key) {
            return this.ptm(key, {
                context: {
                    item: processedItem,
                    index,
                    active: this.isItemActive(processedItem),
                    focused: this.isItemFocused(processedItem),
                    disabled: this.isItemDisabled(processedItem),
                    level: this.level
                }
            });
        },
        isItemActive(processedItem) {
            return this.activeItemPath.some((path) => path.key === processedItem.key);
        },
        isItemVisible(processedItem) {
            return this.getItemProp(processedItem, 'visible') !== false;
        },
        isItemDisabled(processedItem) {
            return this.getItemProp(processedItem, 'disabled');
        },
        isItemFocused(processedItem) {
            return this.focusedItemId === this.getItemId(processedItem);
        },
        isItemGroup(processedItem) {
            return ObjectUtils.isNotEmpty(processedItem.items);
        },
        onItemClick(event, processedItem) {
            this.getItemProp(processedItem, 'command', { originalEvent: event, item: processedItem.item });
            this.$emit('item-click', { originalEvent: event, processedItem, isFocus: true });
        },
        onItemMouseEnter(event, processedItem) {
            this.$emit('item-mouseenter', { originalEvent: event, processedItem });
        },
        onItemMouseMove(event, processedItem) {
            this.$emit('item-mousemove', { originalEvent: event, processedItem });
        },
        getAriaSetSize() {
            return this.items.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, 'separator')).length;
        },
        getAriaPosInset(index) {
            return index - this.items.slice(0, index).filter((processedItem) => this.isItemVisible(processedItem) && this.getItemProp(processedItem, 'separator')).length + 1;
        },
        getMenuItemProps(processedItem, index) {
            return {
                action: mergeProps(
                    {
                        class: this.cx('action'),
                        tabindex: -1,
                        'aria-hidden': true
                    },
                    this.getPTOptions(processedItem, index, 'action')
                ),
                icon: mergeProps(
                    {
                        class: [this.cx('icon'), this.getItemProp(processedItem, 'icon')]
                    },
                    this.getPTOptions(processedItem, index, 'icon')
                ),
                label: mergeProps(
                    {
                        class: this.cx('label')
                    },
                    this.getPTOptions(processedItem, index, 'label')
                ),
                submenuicon: mergeProps(
                    {
                        class: this.cx('submenuIcon')
                    },
                    this.getPTOptions(processedItem, index, 'submenuIcon')
                )
            };
        }
    },
    components: {
        AngleRightIcon: AngleRightIcon,
        AngleDownIcon: AngleDownIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
