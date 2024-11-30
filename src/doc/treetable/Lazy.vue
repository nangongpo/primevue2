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
<TreeTable :value="nodes" :lazy="true" :paginator="true" :rows="rows" :loading="loading"
    @node-expand="onExpand" @page="onPage" :totalRecords="totalRecords">
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
            nodes: null,
            rows: 10,
            loading: false,
            totalRecords: 0
        }
    },
    mounted() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false;
            this.nodes = this.loadNodes(0, this.rows);
            this.totalRecords = 1000;
        }, 1000);
    },
    methods: {
        onExpand(node) {
            if (!node.children) {
                this.loading = true;

                setTimeout(() => {
                    let lazyNode = {...node};

                    lazyNode.children = [
                        {
                            data: {
                                name: lazyNode.data.name + ' - 0',
                                size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                                type: 'File'
                            },
                        },
                        {
                            data: {
                                name: lazyNode.data.name + ' - 1',
                                size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                                type: 'File'
                            }
                        }
                    ];

                    let nodes = this.nodes.map(n => {
                        if (n.key === node.key) {
                            n = lazyNode;
                        }

                        return n;
                    });

                    this.loading = false;
                    this.nodes = nodes;
                }, 250);
            }
        },
        onPage(event) {
            this.loading = true;

            //imitate delay of a backend call
            setTimeout(() => {
                this.loading = false;
                this.nodes = this.loadNodes(event.first, this.rows);
            }, 1000);
        },
        loadNodes(first, rows) {
            let nodes = [];

            for(let i = 0; i < rows; i++) {
                let node = {
                    key: (first + i),
                    data: {
                        name: 'Item ' + (first + i),
                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        type: 'Type ' + (first + i)
                    },
                    leaf: false
                };

                nodes.push(node);
            }

            return nodes;
        }
    }
}
        `
      },
    }
  }
}
</script>
