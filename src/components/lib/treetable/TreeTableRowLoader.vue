<script>
import TreeTableRow from './TreeTableRow.vue';
import { ObjectUtils } from 'primevue2/utils'

const getNodeKey = (node, dataKey) => {
  return ObjectUtils.resolveFieldData(node, dataKey);
}

const TreeTableRowLoader = {
    functional: true,
    props: {
        node: {
            type: null,
            default: null
        },
        dataKey: {
            type: [String, Function],
            default: 'key'
        },
        columns: {
            type: null,
            default: null
        },
        expandedKeys: {
            type: null,
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
        level: {
            type: Number,
            default: 0
        },
        indentation: {
            type: Number,
            default: 1
        },
        tabindex: {
            type: Number,
            default: -1
        },
        ariaSetSize: {
            type: Number,
            default: null
        },
        ariaPosInset: {
            type: Number,
            default: null
        },
        loadingMode: {
          type: String,
          default: 'mask'
        },
        templates: {
            type: Object,
            default: null
        }
    },
    render(h, context) {
        let element = []

        const node = context.props.node
        const nodeKey = getNodeKey(node, context.props.dataKey)
        const expanded = context.props.expandedKeys && context.props.expandedKeys[nodeKey] === true

        element.push(
          h(TreeTableRow, {
              key: nodeKey,
              props: context.props,
              on: {
                  'node-toggle': context.listeners['node-toggle'],
                  'node-click': context.listeners['node-click'],
                  'checkbox-change': context.listeners['checkbox-change']
              }
          })
        )

        if (expanded && node.children && node.children.length) {
            for (let childNode of node.children) {
                let childNodeProps = {...context.props};
                childNodeProps.node = childNode;
                childNodeProps.parentNode = node;
                childNodeProps.level = context.props.level + 1;
                childNodeProps.indentation = context.props.indentation;
                childNodeProps.ariaPosInset = node.children.indexOf(childNode) + 1
                childNodeProps.ariaSetSize = node.children.length

                let childNodeElement = h(TreeTableRowLoader, {
                    key: getNodeKey(childNode, context.props.dataKey),
                    props: childNodeProps,
                    on: {
                        'node-toggle': context.listeners['node-toggle'],
                        'node-click': context.listeners['node-click'],
                        'checkbox-change': (event) => {
                            let check = event.check;
                            let _selectionKeys = {...event.selectionKeys};
                            let checkedChildCount = 0;
                            let childPartialSelected = false;

                            for(let child of node.children) {
                              const childKey = getNodeKey(child, context.props.dataKey)
                                if(_selectionKeys[childKey] && _selectionKeys[childKey].checked)
                                    checkedChildCount++;
                                else if(_selectionKeys[childKey] && _selectionKeys[childKey].partialChecked)
                                    childPartialSelected = true;
                            }

                            if(check && checkedChildCount === node.children.length) {
                                _selectionKeys[nodeKey] = {checked: true, partialChecked: false};
                            }
                            else {
                                if (!check) {
                                    delete _selectionKeys[nodeKey];
                                }

                                if(childPartialSelected || (checkedChildCount > 0 && checkedChildCount !== node.children.length))
                                    _selectionKeys[nodeKey] = {checked: false, partialChecked: true};
                                else
                                    _selectionKeys[nodeKey] = {checked: false, partialChecked: false};
                            }

                            context.listeners['checkbox-change']({
                                node: event.node,
                                check: event.check,
                                selectionKeys: _selectionKeys
                            });
                        }
                    }
                });

                element.push(childNodeElement);
            }
        }

        return element;
    }
};

export default TreeTableRowLoader;
</script>
