<template>
    <div
        :id="id"
        :class="cx('stepper.content', { stepperpanel, index })"
        role="tabpanel"
        :aria-labelledby="ariaLabelledby"
        v-bind="{ ...getStepPT(stepperpanel, 'root', index), ...getStepPT(stepperpanel, 'content', index) }"
        data-pc-name="stepperpanel"
        :data-pc-index="index"
        :data-p-active="active">
        <DynamicComponent
            v-if="template"
            :template="template"
            :index="index"
            :active="active"
            :highlighted="highlighted"
            :clickCallback="(event) => onItemClick(event, index)"
            :prevCallback="(event) => prevCallback(event, index)"
            :nextCallback="(event) => nextCallback(event, index)">
        </DynamicComponent>
        <DynamicComponent v-else :template="stepperpanel"></DynamicComponent>
    </div>
</template>

<script>
import BaseComponent from 'primevue2/basecomponent';

export default {
    name: 'StepperContent',
    hostName: 'Stepper',
    extends: BaseComponent,
    props: {
        id: null,
        template: null,
        ariaLabelledby: null,
        stepperpanel: null,
        index: null,
        active: null,
        highlighted: null,
        clickCallback: null,
        prevCallback: null,
        nextCallback: null,
        getStepPT: null
    }
};
</script>
