<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/blockui"
      class="btn-viewsource"
      target="_blank"
      rel="noopener noreferrer">
      <span>View on GitHub</span>
    </a>

    <DocSectionCode :code="sourceCode1" />
    <DocSectionCode :code="sourceCode2" importCode />
  </div>
</template>

<script>
export default {
  name: 'SourceCode',
  data() {
    return {
      sourceCode1: {
        basic: `
<h3>Document</h3>
<BlockUI :blocked="blockedDocument" :fullScreen="true"></BlockUI>

<Button type="button" label="Block" @click="blockDocument()"></Button>

<h3>Panel</h3>
<Button type="button" label="Block" @click="blockPanel()"></Button>
<Button type="button" label="Unblock" @click="unblockPanel()"></Button>

<BlockUI :blocked="blockedPanel">
    <Panel header="Godfather I" style="margin-top: 20px">
        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
    </Panel>
</BlockUI>
        `
      },
      sourceCode2: {
        basic: `
export default {
    data() {
        return {
            blockedPanel: false,
            blockedDocument: false
        }
    },
    methods: {
        blockDocument() {
            this.blockedDocument = true;

            setTimeout(() => {
                this.blockedDocument = false;
            }, 3000);
        },
        blockPanel() {
            this.blockedPanel = true;
        },
        unblockPanel() {
            this.blockedPanel = false;
        }
    }
}
        `
      },
    }
  }
}
</script>
