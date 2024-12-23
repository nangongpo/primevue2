import { mount } from '@vue/test-utils';
import DataViewLayoutOptions from './DataViewLayoutOptions.vue';

describe('DataViewLayoutOptions.vue', () => {
    it('should exist', async () => {
        const wrapper = mount(DataViewLayoutOptions, {
            props: {
                value: 'grid'
            }
        });

        expect(wrapper.find('.p-dataview-layout-options').exists()).toBe(true);

        wrapper.vm.$emit('input', 'list');

        expect(wrapper.emitted()['input'][0]).toEqual(['list']);
    });
});
