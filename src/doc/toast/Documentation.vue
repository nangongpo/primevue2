<template>
  <div>
    <h5>ToastService</h5>
    <p>Toast messages are dynamically created using a <i>ToastService</i> that needs to be installed globally before the
      application
      instance is created.</p>
    <DocSectionCode :code="toastServiceCode" importCode />

    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Ideal location of a Toast is the main application template so that it can be used by any component within the
      application.</p>

    <p>A single message is represented by the Message interface in PrimeVue that defines various properties such as
      severity,
      summary and detail. Messages are displayed by using the <i>add</i> method of the <b>$toast</b> property of the
      application.</p>
    <DocSectionCode :code="baseCode" importCode />

    <h5>Message API</h5>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>severity</td>
            <td>string</td>
            <td>null</td>
            <td>Severity of the message.</td>
          </tr>
          <tr>
            <td>summary</td>
            <td>element</td>
            <td>null</td>
            <td>Summary content of the message.</td>
          </tr>
          <tr>
            <td>detail</td>
            <td>element</td>
            <td>null</td>
            <td>Detail content of the message.</td>
          </tr>
          <tr>
            <td>closable</td>
            <td>boolean</td>
            <td>true</td>
            <td>Whether the message can be closed manually using the close icon.</td>
          </tr>
          <tr>
            <td>life</td>
            <td>number</td>
            <td>null</td>
            <td>Delay in milliseconds to close the message automatically.</td>
          </tr>
          <tr>
            <td>group</td>
            <td>string</td>
            <td>null</td>
            <td>Key of the Toast to display the message.</td>
          </tr>
          <tr>
            <td>styleClass</td>
            <td>string</td>
            <td>null</td>
            <td>Style class of the message.</td>
          </tr>
          <tr>
            <td>contentStyleClass</td>
            <td>string</td>
            <td>null</td>
            <td>Style class of the content.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>MessageService API</h5>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>add</td>
            <td>message: Message instance</td>
            <td>Displays the message in a suitable Toast component.</td>
          </tr>
          <tr>
            <td>removeGroup</td>
            <td>group: Name of the message group</td>
            <td>Clears the messages that belongs to the group.</td>
          </tr>
          <tr>
            <td>removeAllGroup</td>
            <td>-</td>
            <td>Clears all the messages.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Severities</h5>
    <p>There are four possible values for the severity of a message. Info is the default.</p>

    <ul>
      <li>success</li>
      <li>info</li>
      <li>warn</li>
      <li>error</li>
    </ul>

    <h5>Position</h5>
    <p>There are four positions available for the toast container defined by the <i>position</i> property that defaults
      to "top-right". Other
      valid values are "top-left", "top-center", "bottom-left", "botton-center", "bottom-right" and "center".
    </p>
    <DocSectionCode :code="positionCode" />

    <h5>Groups</h5>
    <p>A message can be targeted to a specific Toast component if their group properties match. Messages without a group
      are forwarded to the default Toast component that does not have a group defined.
    </p>
    <DocSectionCode :code="groupsCode" />
    <DocSectionCode :code="groupsCode2" importCode />

				<h5>Clearing Messages</h5>
				<p><i>removeGroup(group)</i> clears the messages for a specific Toast whereas <i>removeAllGroups()</i> method clears all messages.</p>
    <DocSectionCode :code="clearingMessagesCode" importCode />

    <h5>Templating</h5>
    <p>Templating allows customizing the content where the message instance is available as the implicit variable.</p>
    <DocSectionCode :code="templatingCode" />

    <h5>Responsive</h5>
    <p>Toast styling can be adjusted per screen size with the <i>breakpoints</i> option. The value of <i>breakpoints</i>
      should be an object literal whose keys are the maximum screen sizes and values are the styles per screen. In
      example below, width of the toast messages cover the whole page on screens whose widths is smaller than 921px.</p>
    <DocSectionCode :code="responsiveCode" />

    <h5>Constants</h5>
    <p>ToastSeverity constants API is provided to easily choose a severity of the message with typescript.</p>
    <DocSectionCode :code="constantsCode" importCode />

    <h5>Properties</h5>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>group</td>
            <td>string</td>
            <td>null</td>
            <td>Unique identifier of a message group.</td>
          </tr>
          <tr>
            <td>position</td>
            <td>string</td>
            <td>top-right</td>
            <td>Position of the toast in viewport.</td>
          </tr>
          <tr>
            <td>autoZIndex</td>
            <td>boolean</td>
            <td>true</td>
            <td>Whether to automatically manage layering.</td>
          </tr>
          <tr>
            <td>baseZIndex</td>
            <td>number</td>
            <td>0</td>
            <td>Base zIndex value to use in layering.</td>
          </tr>
          <tr>
            <td>breakpoints</td>
            <td>object</td>
            <td>null</td>
            <td>Object literal to define styles per screen size.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Slots</h5>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Parameters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>message</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Styling</h5>
    <p>Following is the list of structural style classes, for theming classes visit <router-link
        to="/theming">theming</router-link> page.</p>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Element</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>p-toast</td>
            <td>Main container element.</td>
          </tr>
          <tr>
            <td>p-toast-message</td>
            <td>Container of a message item.</td>
          </tr>
          <tr>
            <td>p-toast-icon-close</td>
            <td>Close icon of a message.</td>
          </tr>
          <tr>
            <td>p-toast-icon</td>
            <td>Severity icon.</td>
          </tr>
          <tr>
            <td>p-toast-message-content</td>
            <td>Container of message texts.</td>
          </tr>
          <tr>
            <td>p-toast-summary</td>
            <td>Summary of the message.</td>
          </tr>
          <tr>
            <td>p-toast-detail</td>
            <td>Detail of the message.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Dependencies</h5>
    <p>None.</p>
  </div>
</template>

<script>
export default {
  name: 'Documentation',
  data() {
    return {
      toastServiceCode: {
        basic: `
import ToastService from 'primevue2/toastservice';
Vue.use(ToastService);

//example application instance
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
        `
      },
      importCode: {
        basic: `
import Toast from 'primevue2/toast';
        `
      },
      baseCode: {
        basic: `
this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000});
        `
      },
      positionCode: {
        basic: `
<Toast />
<Toast position="top-left" />
<Toast position="top-center" />
<Toast position="top-right" />
<Toast position="center" />
<Toast position="bottom-left" />
<Toast position="bottom-center" />
<Toast position="bottom-right" />
        `
      },
      groupsCode: {
        basic: `
<Toast />
<Toast group="mykey" />
        `
      },
      groupsCode2: {
        basic: `
this.$toast.add({severity:'success', summary: 'Default Message'});
this.$toast.add({severity:'success', summary: 'Specific Message', group: 'mykey'});
        `
      },
      clearingMessagesCode: {
        basic: `
this.$toast.removeAllGroups();
        `
      },
      templatingCode: {
        basic: `
<Toast position="bottom-center" group="bc">
    <template #message="slotProps">
        <div class="flex flex-column">
            <div class="text-center">
                <i class="pi pi-exclamation-triangle" style="font-size: 3rem"></i>
                <h4>{{slotProps.message.summary}}</h4>
                <p>{{slotProps.message.detail}}</p>
            </div>
            <div class="grid p-fluid">
                <div class="col-6">
                    <Button class="p-button-success" label="Yes" @click="onConfirm" />
                </div>
                <div class="col-6">
                    <Button class="p-button-secondary" label="No" @click="onReject" />
                </div>
            </div>
        </div>
    </template>
</Toast>
        `
      },
      responsiveCode: {
        basic: `
<Toast :breakpoints="{'920px': {width: '100%', right: '0', left: '0'}}"></Toast>
        `
      },
      constantsCode: {
        basic: `
import {ToastSeverity} from 'primevue2/api';

export default {
    methods: {
        showInfo() {
            this.$toast.add({severity: ToastSeverity.INFO, summary: 'Info Message', detail:'Message Content', life: 3000});
        }
    }
}
        `
      },
    }
  }
}
</script>
