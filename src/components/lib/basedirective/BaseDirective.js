import BaseStyle from 'primevue2/base/style';
import { ObjectUtils, VueUtils } from 'primevue2/utils';
const { mergeProps } = VueUtils

const BaseDirective = {
    _getMeta: (...args) => [ObjectUtils.isObject(args[0]) ? undefined : args[0], ObjectUtils.getItemValue(ObjectUtils.isObject(args[0]) ? args[0] : args[1])],
    _getConfig: (binding, vnode) => (binding?.instance?.$primevue || vnode?.context?.$primevue)?.config,
    _getOptionValue: (options, key = '', params = {}) => {
        const fKeys = ObjectUtils.toFlatCase(key).split('.');
        const fKey = fKeys.shift();

        return fKey
            ? ObjectUtils.isObject(options)
                ? BaseDirective._getOptionValue(ObjectUtils.getItemValue(options[Object.keys(options).find((k) => ObjectUtils.toFlatCase(k) === fKey) || ''], params), fKeys.join('.'), params)
                : undefined
            : ObjectUtils.getItemValue(options, params);
    },
    _getPTValue: (instance = {}, obj = {}, key = '', params = {}, searchInDefaultPT = true) => {
        const getValue = (...args) => {
            const value = BaseDirective._getOptionValue(...args);

            return ObjectUtils.isString(value) || ObjectUtils.isArray(value) ? { class: value } : value;
        };

        const { mergeSections = true, mergeProps: useMergeProps = false } = instance.binding?.value?.ptOptions || instance.$primevueConfig?.ptOptions || {};
        const global = searchInDefaultPT ? BaseDirective._useDefaultPT(instance, instance.defaultPT(), getValue, key, params) : undefined;
        const self = BaseDirective._usePT(instance, BaseDirective._getPT(obj, instance.$name), getValue, key, { ...params, global: global || {} });
        const datasets = BaseDirective._getPTDatasets(instance, key);

        return mergeSections || (!mergeSections && self) ? (useMergeProps ? BaseDirective._mergeProps(instance, useMergeProps, global, self, datasets) : { ...global, ...self, ...datasets }) : { ...self, ...datasets };
    },
    _getPTDatasets(instance = {}, key = '') {
        const datasetPrefix = 'data-pc-';

        return {
            ...(key === 'root' && { [`${datasetPrefix}name`]: ObjectUtils.toFlatCase(instance.$name) }),
            [`${datasetPrefix}section`]: ObjectUtils.toFlatCase(key)
        };
    },
    _getPT: (pt, key = '', callback) => {
        const getValue = (value) => {
            const computedValue = callback ? callback(value) : value;
            const _key = ObjectUtils.toFlatCase(key);

            return computedValue?.[_key] ?? computedValue;
        };

        return pt && Object.prototype.hasOwnProperty.call(pt, '_usept')
            ? {
                  _usept: pt['_usept'],
                  originalValue: getValue(pt.originalValue),
                  value: getValue(pt.value)
              }
            : getValue(pt);
    },
    _usePT: (instance = {}, pt, callback, key, params) => {
        const fn = (value) => callback(value, key, params);

        if (pt && Object.prototype.hasOwnProperty.call(pt, '_usept')) {
            const { mergeSections = true, mergeProps: useMergeProps = false } = pt['_usept'] || instance.$primevueConfig?.ptOptions || {};
            const originalValue = fn(pt.originalValue);
            const value = fn(pt.value);

            if (originalValue === undefined && value === undefined) return undefined;
            else if (ObjectUtils.isString(value)) return value;
            else if (ObjectUtils.isString(originalValue)) return originalValue;

            return mergeSections || (!mergeSections && value) ? (useMergeProps ? BaseDirective._mergeProps(instance, useMergeProps, originalValue, value) : { ...originalValue, ...value }) : value;
        }

        return fn(pt);
    },
    _useDefaultPT: (instance = {}, defaultPT = {}, callback, key, params) => {
        return BaseDirective._usePT(instance, defaultPT, callback, key, params);
    },
    _hook: (directiveName, hookName, el, binding, vnode, prevVnode) => {
        const name = `on${ObjectUtils.toCapitalCase(hookName)}`;
        const config = BaseDirective._getConfig(binding, vnode);
        const instance = el?.$instance;
        const selfHook = BaseDirective._usePT(instance, BaseDirective._getPT(binding?.value?.pt, directiveName), BaseDirective._getOptionValue, `hooks.${name}`);
        const defaultHook = BaseDirective._useDefaultPT(instance, config?.pt?.directives?.[directiveName], BaseDirective._getOptionValue, `hooks.${name}`);
        const options = { el, binding, vnode, prevVnode };

        selfHook?.(instance, options);
        defaultHook?.(instance, options);
    },
    _mergeProps(instance = {}, fn, ...args) {
        return ObjectUtils.isFunction(fn) ? fn(...args) : mergeProps(...args);
    },
    _extend: (name, options = {}) => {
        const handleHook = (hook, el, binding, vnode, prevVnode) => {
            el._$instances = el._$instances || {};
            const config = BaseDirective._getConfig(binding, vnode);
            const $prevInstance = el._$instances[name] || {};
            const $options = ObjectUtils.isEmpty($prevInstance) ? { ...options, ...options?.methods } : {};

            el._$instances[name] = {
                ...$prevInstance,
                /* new instance variables to pass in directive methods */
                $name: name,
                $host: el,
                $binding: binding,
                $modifiers: binding?.modifiers,
                $value: binding?.value,
                $el: $prevInstance['$el'] || el || undefined,
                $style: { classes: undefined, inlineStyles: undefined, loadStyle: () => {}, ...options?.style },
                $primevueConfig: config,
                /* computed instance variables */
                defaultPT: () => {
                  return BaseDirective._getPT(config?.pt, undefined, (value) => value?.directives?.[name])
                },
                isUnstyled: () => {
                  const instance = el._$instances?.[name]
                  return (instance?.$binding?.value?.unstyled !== undefined ? instance?.$binding?.value?.unstyled : config?.unstyled)
                },
                /* instance's methods */
                ptm: (key = '', params = {}) => {
                  const instance = el._$instances?.[name]
                  return BaseDirective._getPTValue(instance, instance?.$binding?.value?.pt, key, { ...params })
                },
                ptmo: (obj = {}, key = '', params = {}) => {
                  const instance = el._$instances?.[name]
                  return BaseDirective._getPTValue(instance, obj, key, params, false)
                },
                cx: (key = '', params = {}) => {
                  const instance = el._$instances?.[name]
                  return (!instance?.isUnstyled() ? BaseDirective._getOptionValue(instance?.$style?.classes, key, { ...params }) : undefined)
                },
                sx: (key = '', when = true, params = {}) => {
                  const instance = el._$instances?.[name]
                  return (when ? BaseDirective._getOptionValue(instance?.$style?.inlineStyles, key, { ...params }) : undefined)
                },
                ...$options
            };

            el.$instance = el._$instances[name]; // pass instance data to hooks
            el.$instance[hook]?.(el, binding, vnode, prevVnode); // handle hook in directive implementation
            el[`$${name}`] = el.$instance; // expose all options with $<directive_name>
            BaseDirective._hook(name, hook, el, binding, vnode, prevVnode); // handle hooks during directive uses (global and self-definition)
        };

        return {
            bind: (el, binding, vnode, prevVnode) => {
                if (!el._$instances?.[binding.name]) {
                  // 初始化变量
                  handleHook('created', el, binding, vnode, prevVnode);
                }


                // 执行bind方法
                const config = BaseDirective._getConfig(binding, vnode);

                BaseStyle.loadStyle({ nonce: config?.csp?.nonce });
                !el.$instance?.isUnstyled() && el.$instance?.$style?.loadStyle({ nonce: config?.csp?.nonce });
                handleHook('bind', el, binding, vnode, prevVnode);
            },
            inserted: (el, binding, vnode, prevVnode) => {
                const config = BaseDirective._getConfig(binding, vnode);

                BaseStyle.loadStyle({ nonce: config?.csp?.nonce });
                !el.$instance?.isUnstyled() && el.$instance?.$style?.loadStyle({ nonce: config?.csp?.nonce });
                handleHook('inserted', el, binding, vnode, prevVnode);
            },
            update: (el, binding, vnode, prevVnode) => {
                handleHook('update', el, binding, vnode, prevVnode);
            },
            componentUpdated: (el, binding, vnode, prevVnode) => {
                handleHook('componentUpdated', el, binding, vnode, prevVnode);
            },
            unbind: (el, binding, vnode, prevVnode) => {
                handleHook('unbind', el, binding, vnode, prevVnode);
                el._$instances[binding.name] = null
            }
        };
    },
    extend: (...args) => {
        const [name, options] = BaseDirective._getMeta(...args);

        return {
            extend: (..._args) => {
                const [_name, _options] = BaseDirective._getMeta(..._args);

                return BaseDirective.extend(_name, { ...options, ...options?.methods, ..._options });
            },
            ...BaseDirective._extend(name, options)
        };
    }
};

export default BaseDirective;
