<template>
  <div>
    <a href="https://github.com/nangongpo/primevue2/tree/main/src/views/tabview" class="btn-viewsource" target="_blank"
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
<div class="card">
    <h5>Default</h5>
    <TabView>
        <TabPanel header="Header I">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </TabPanel>
        <TabPanel header="Header II">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
        </TabPanel>
        <TabPanel header="Header III">
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
        </TabPanel>
    </TabView>
</div>

<div class="card">
    <h5>Programmatic</h5>
    <div class="py-2">
        <Button @click="active1 = 0" class="p-button-text" label="Activate 1st" />
        <Button @click="active1 = 1" class="p-button-text mr-2" label="Activate 2nd" />
        <Button @click="active1 = 2" class="p-button-text mr-2" label="Activate 3rd" />
    </div>

    <TabView ref="tabview2" :activeIndex="active1">
        <TabPanel header="Header I">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </TabPanel>
        <TabPanel header="Header II">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
        </TabPanel>
        <TabPanel header="Header III">
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
        </TabPanel>
    </TabView>
</div>

<div class="card">
    <h5>Disabled</h5>
    <TabView>
        <TabPanel header="Header I">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </TabPanel>
        <TabPanel header="Header II">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
        </TabPanel>
        <TabPanel header="Header III">
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
        </TabPanel>
        <TabPanel header="Header IV" :disabled="true"></TabPanel>
    </TabView>
</div>

<div class="card">
    <h5>Custom Headers</h5>
    <TabView class="tabview-custom">
        <TabPanel>
            <template #header>
                <i class="pi pi-calendar"></i>
                <span>Header I</span>
            </template>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </TabPanel>
        <TabPanel>
            <template #header>
                <span>Header II</span>
                <i class="pi pi-user"></i>
            </template>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
        </TabPanel>
        <TabPanel>
            <template #header>
                <i class="pi pi-search"></i>
                <span>Header III</span>
                <i class="pi pi-cog"></i>
            </template>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
        </TabPanel>
    </TabView>
</div>

<div class="card">
    <h5>Scrollable</h5>
    <div class="py-2">
        <Button @click="active2 = 0" class="p-button-text" label="Activate 1st" />
        <Button @click="active2 = 29" class="p-button-text mr-2" label="Activate 30th" />
        <Button @click="active2 = 49" class="p-button-text mr-2" label="Activate 50th" />
    </div>

    <TabView :activeIndex.sync="active2" :scrollable="true">
        <TabPanel v-for="tab in scrollableTabs" :key="tab.title" :header="tab.title">
            <p>{{tab.content}}</p>
        </TabPanel>
    </TabView>
</div>
        `
      },
      sourceCode2: {
        basic: `
export default {
    data() {
        return {
            active1: 0,
            active2: 0,
            tabs: [
                {
                    title: 'Header I',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    title: 'Header II',
                    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt.Consectetur, adipisci velit, sed quia non numquam eius modi.'
                },
                {
                    title: 'Header III',
                    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.'
                }
            ],
            scrollableTabs: Array.from({ length: 50 }, (_, i) => ({ title: \`Tab \${ i + 1 } \`, content: \`Tab \${ i + 1 } Content\` }))
        }
    }
        `
      },
      sourceCode3: {
        basic: `
.tabview-custom {
	i, span {
		vertical-align: middle;
	}

	span {
		margin: 0 .5rem;
	}
}
        `
      },
    }
  }
}
</script>
