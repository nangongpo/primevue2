<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/message"
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
<h5>Severities</h5>
<Message severity="success">Success Message Content</Message>
<Message severity="info">Info Message Content</Message>
<Message severity="warn">Warning Message Content</Message>
<Message severity="error">Error Message Content</Message>

<h5>Custom Icon</h5>
<Message severity="info" icon="pi-send">Info Message Content</Message>

<h5>Dynamic</h5>
<Button label="Show" @click="addMessages()" />
<Button label="Clear" @click="removeMessages()" class="p-button-secondary"/>
<transition-group name="p-messages" tag="div">
    <Message v-for="msg of messages" :severity="msg.severity" :key="msg.content">{{msg.content}}</Message>
</transition-group>

<h5>Auto Dismiss</h5>
<Message severity="warn" :life="10000" :sticky="false">This message will hide in 10 seconds.</Message>

<h5>Validation Message</h5>
<div class="formgroup-inline" style="margin-bottom:.5rem">
    <Label for="username" class="p-sr-only">Username</Label>
    <InputText id="username" placeholder="Username" class="p-invalid" />
    <InlineMessage>Username is required</InlineMessage>
</div>
<div class="formgroup-inline">
    <Label for="email" class="p-sr-only">email</Label>
    <InputText id="email" placeholder="Email" class="p-invalid" />
    <InlineMessage />
</div>
        `
      },
      sourceCode2: {
        basic: `
export default {
	data() {
		return {
			messages: [],
			count: 0
		}
	},
	methods: {
		addMessages() {
			this.messages = [
				{severity: 'info', content: 'Dynamic Info Message'},
				{severity: 'success', content: 'Dynamic Success Message'},
				{severity: 'warn', content: 'Dynamic Warning Message'}
			]
		},
		removeMessages() {
			this.messages = null;
		}
	}
}
        `
      },
      sourceCode3: {
        basic: `
button.p-button {
	margin-right: .5rem;
}

.p-inputtext {
	margin-right: .25rem;
}
        `
      },
    }
  }
}
</script>
