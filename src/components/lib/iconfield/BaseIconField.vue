<script>
import BaseComponent from 'primevue2/basecomponent'
import IconFieldStyle from 'primevue2//iconfield/style'

export default {
  name: 'BaseIconField',
  extends: BaseComponent,
  props: {
    iconPosition: {
      type: String,
      default: 'right'
    }
  },
  style: IconFieldStyle,
  provide() {
    return {
      $parentInstance: this
    }
  }
}
</script>
