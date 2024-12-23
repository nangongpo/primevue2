<script>
import BaseComponent from 'primevue2/basecomponent';
import TerminalStyle from 'primevue2/terminal/style';

export default {
    name: 'BaseTerminal',
    extends: BaseComponent,
    props: {
        welcomeMessage: {
            type: String,
            default: null
        },
        prompt: {
            type: String,
            default: null
        }
    },
    style: TerminalStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
