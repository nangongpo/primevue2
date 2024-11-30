<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Commands are processed using an EventBus implementation called TerminalService.
      Import this service into your component and subscribe to the <i>command</i> event to process the commands by
      sending replies with the <i>response</i> event.</p>
    <DocSectionCode :code="baseCode" />
    <DocSectionCode :code="baseCode2" importCode />

    <h5>Properties</h5>
    <p>Any property as style and class are passed to the main container element. Following are the additional properties
      to configure the component.</p>
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
            <td>welcomeMessage</td>
            <td>string</td>
            <td>null</td>
            <td>Initial text to display on terminal.</td>
          </tr>
          <tr>
            <td>prompt</td>
            <td>string</td>
            <td>null</td>
            <td>Prompt text for each command.</td>
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
            <td>p-terminal</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-terminal-content</td>
            <td>Content of terminal.</td>
          </tr>
          <tr>
            <td>p-terminal-prompt</td>
            <td>Prompt text.</td>
          </tr>
          <tr>
            <td>p-terminal-response</td>
            <td>Command response.</td>
          </tr>
          <tr>
            <td>p-terminal-input</td>
            <td>Input element to enter commands.</td>
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
import Terminal from 'primevue2/terminal';
import TerminalService from 'primevue2/terminalservice';
        `
      },
      baseCode: {
        basic: `
<Terminal welcomeMessage="Welcome to PrimeVue" prompt="primevue $" />
        `
      },
      baseCode2: {
        basic: `
import TerminalService from 'primevue2/terminalservice';

export default {
    methods: {
        commandHandler(text) {
            let response;
            let argsIndex = text.indexOf(' ');
            let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

            switch(command) {
                case "date":
                    response = 'Today is ' + new Date().toDateString();
                    break;

                case "greet":
                    response = 'Hola ' + text.substring(argsIndex + 1);
                    break;

                case "random":
                    response = Math.floor(Math.random() * 100);
                    break;

                default:
                    response = "Unknown command: " + command;
            }

            TerminalService.$emit('response', response);
        }
    },
    mounted() {
        TerminalService.$on('command', this.commandHandler);
    },
    beforeDestroy() {
        TerminalService.$off('command', this.commandHandler);
    }
}
        `
      },
    }
  }
}
</script>
