<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Message component requires a content to display.</p>
    <DocSectionCode :code="baseCode" />

    <p>Multiple messages can be displayed using the standard v-for directive.</p>
    <DocSectionCode :code="baseCode2" />
    <DocSectionCode :code="baseCode3" importCode />

    <h5>Severities</h5>
    <p>There are four possible values for the severity of a message. Default one is "info".</p>

    <ul>
      <li>success</li>
      <li>info</li>
      <li>warn</li>
      <li>error</li>
    </ul>

    <h5>Closable</h5>
    <p>
      Messages are closable by default resulting in a close icon being displayed on top right corner. In order to
      disable closable messages, set <i>closable</i> to false.
    </p>
    <DocSectionCode :code="closableCode" />

    <h5>Sticky</h5>
    <p>
      Messages are sticky by default, if you require them to be cleared automatically, disable <i>sticky</i> property
      and optionally configure the <i>life</i> property to specify how long the message should be displayed which is
      3000 ms by default.
    </p>
    <DocSectionCode :code="stickyCode" />

    <h5>Inline Message Component</h5>
    <DocSectionCode :code="inlineMessageComponentCode" importCode />

    <p>
      InlineMessage component is useful in cases where a single message needs to be displayed related to an element such
      as forms. It has one property, <i>severity</i> of the message.
    </p>
    <DocSectionCode :code="inlineMessageComponentCode2" />

    <h5>Properties of Message</h5>
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
            <td>info</td>
            <td>Severity level of the message.</td>
          </tr>
          <tr>
            <td>closable</td>
            <td>boolean</td>
            <td>true</td>
            <td>Whether the message can be closed manually using the close icon.</td>
          </tr>
          <tr>
            <td>sticky</td>
            <td>element</td>
            <td>null</td>
            <td>When enabled, message is not removed automatically.</td>
          </tr>
          <tr>
            <td>life</td>
            <td>number</td>
            <td>3000</td>
            <td>Delay in milliseconds to close the message automatically.</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>string</td>
            <td>null</td>
            <td>Display a custom icon for the message.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Properties of InlineMessage</h5>
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
            <td>info</td>
            <td>Severity level of the message.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Events of Message</h5>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Parameters</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>close</td>
            <td>event: Browser event</td>
            <td>Callback to invoke when a message is closed.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Styling</h5>
    <p>
      Following is the list of structural style classes, for theming classes visit
      <router-link to="/theming">theming</router-link> page.
    </p>

    <strong>Message</strong>
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
            <td>p-messages</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-messages-info</td>
            <td>Container element when displaying info messages.</td>
          </tr>
          <tr>
            <td>p-messages-warn</td>
            <td>Container element when displaying warning messages.</td>
          </tr>
          <tr>
            <td>p-messages-error</td>
            <td>Container element when displaying error messages.</td>
          </tr>
          <tr>
            <td>p-messages-success</td>
            <td>Container element when displaying success messages.</td>
          </tr>
          <tr>
            <td>p-messages-close</td>
            <td>Close icon.</td>
          </tr>
          <tr>
            <td>p-messages-icon</td>
            <td>Severity icon.</td>
          </tr>
          <tr>
            <td>p-messages-text</td>
            <td>Content of a message.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <strong>InlineMessage</strong>
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
            <td>p-inline-message</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-inline-message-info</td>
            <td>Container element when displaying info messages.</td>
          </tr>
          <tr>
            <td>p-inline-message-warn</td>
            <td>Container element when displaying warning messages.</td>
          </tr>
          <tr>
            <td>p-inline-message-error</td>
            <td>Container element when displaying error messages.</td>
          </tr>
          <tr>
            <td>p-inline-message-success</td>
            <td>Container element when displaying success messages.</td>
          </tr>
          <tr>
            <td>p-inline-message-icon</td>
            <td>Severity icon.</td>
          </tr>
          <tr>
            <td>p-inline-message-text</td>
            <td>Content of a message.</td>
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
      importCode: {
        basic: `
import Message from 'primevue2/message';
        `
      },
      baseCode: {
        basic: `
<Message>Welcome to PrimeVue</Message>
        `
      },
      baseCode2: {
        basic: `
<Message v-for="msg of messages" :severity="msg.severity" :key="msg.content">{{msg.content}}</Message>
        `
      },
      baseCode3: {
        basic: `
data() {
	return {
		messages: [
			{severity: 'info', content: 'Dynamic Info Message'},
			{severity: 'success', content: 'Dynamic Success Message'},
			{severity: 'warn', content: 'Dynamic Warning Message'}
		]
	}
}
        `
      },
      closableCode: {
        basic: `
<Message severity="success" :closable="false">Order Submitted</Message>
        `
      },
      stickyCode: {
        basic: `
<Message severity="warn" :life="5000" :sticky="false">This message will hide in 5 seconds.</Message>
        `
      },
      inlineMessageComponentCode: {
        basic: `
import InlineMessage from 'primevue2/inlinemessage';
        `
      },
      inlineMessageComponentCode2: {
        basic: `
<InputText placeholder="Username" class="p-invalid" />
<InlineMessage>Field is required</InlineMessage>
        `
      },
    }
  }
}
</script>
