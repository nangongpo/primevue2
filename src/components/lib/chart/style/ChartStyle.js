import BaseStyle from 'primevue2/base/style';

const inlineStyles = {
    root: { position: 'relative' }
};

const classes = {
    root: 'p-chart'
};

export default BaseStyle.extend({
    name: 'chart',
    inlineStyles,
    classes
});
