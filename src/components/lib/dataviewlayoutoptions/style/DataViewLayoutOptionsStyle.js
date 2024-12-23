import BaseStyle from 'primevue2/base/style';

const classes = {
    root: 'p-dataview-layout-options p-selectbutton p-button-group',
    listButton: ({ props }) => [
        'p-button p-button-icon-only',
        {
            'p-highlight': props.value === 'list'
        }
    ],
    gridButton: ({ props }) => [
        'p-button p-button-icon-only',
        {
            'p-highlight': props.value === 'grid'
        }
    ]
};

export default BaseStyle.extend({
    name: 'dataviewlayoutoptions',
    classes
});
