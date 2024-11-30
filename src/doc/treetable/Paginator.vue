<template>
  <div class="content-section documentation">
    <TabView>
      <TabPanel header="Source">
        <DocSectionCode :code="sourceCode1" />
        <DocSectionCode :code="sourceCode2" importCode />
      </TabPanel>
    </TabView>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sourceCode1: {
        basic: `
<TreeTable :value="nodes" :paginator="true" :rows="10">
    <Column field="name" header="Name" :expander="true"></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `
      },
      sourceCode2: {
        basic: `
export default {
    data() {
        return {
            nodes: null
        }
    },
    created() {
        let files = [];
        for(let i = 0; i < 50; i++) {
            let node = {
                key: i,
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        key: i + ' - 0',
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            files.push(node);
        }

        this.nodes = files;
    }
}
        `
      },
    }
  }
}
</script>
