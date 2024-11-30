<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/terminal"
      class="btn-viewsource"
      target="_blank"
      rel="noopener noreferrer">
      <span>View on GitHub</span>
    </a>

    <DocSectionCode :code="sourceCode1" />
    <DocSectionCode :code="sourceCode2" importCode />
    <DocSectionCode :code="sourceCode3" importStyle />
  </div>
</template>

<script>
export default {
  name: 'SourceCode',
  data() {
    return {
      sourceCode1: {
        basic: `
<p>Enter "date" to display the current date, "greet {0}" for a message and "random" to get a random number.</p>
<Terminal welcomeMessage="Welcome to PrimeVue" prompt="primevue $" class="dark-demo-terminal" />
        `
      },
      sourceCode2: {
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

            TerminalService.emit('response', response);
        }
    },
    mounted() {
        TerminalService.on('command', this.commandHandler);
    },
    beforeDestroy() {
        TerminalService.off('command', this.commandHandler);
    }
}
        `
      },
      sourceCode3: {
        basic: `
p {
    margin-top: 0;
}

:deep(.dark-demo-terminal) {
    background-color: #212121;
    color: #ffffff;

    .p-terminal-command {
        color: #80CBC4;
    }

    .p-terminal-prompt {
        color: #FFD54F;
    }

    .p-terminal-response {
        color: #9FA8DA;
    }
}
        `
      },
    }
  }
}
</script>
