<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/breadcrumb"
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
<Breadcrumb :home="home" :model="items" />

<Breadcrumb :home="home" :model="templateItems">
  <template #item="{ item }">
    <a class="cursor-pointer">
      <span :class="item.icon"></span>
    </a>
  </template>
  <template #separator> / </template>
</Breadcrumb>

<Breadcrumb :home="routerHome" :model="routerItems">
  <template #item="{ item, props }">
    <router-link
      v-if="item.to"
      v-slot="{ href, navigate }"
      :to="item.to"
      custom>
      <a :href="href" v-bind="props.action" @click="navigate">
        <span :class="[item.icon, 'text-color']" />
        <span class="text-primary font-semibold">{{ item.label }}</span>
      </a>
    </router-link>
    <a
      v-else
      :href="item.url"
      :target="item.target"
      v-bind="props.action">
      <span class="text-color">{{ item.label }}</span>
    </a>
  </template>
</Breadcrumb>
        `
      },
      sourceCode2: {
        basic: `
export default {
  data() {
    return {
      home: { icon: 'pi pi-home' },
      basicItems: [
        { label: 'Computer' },
        { label: 'Notebook' },
        { label: 'Accessories' },
        { label: 'Backpacks' },
        { label: 'Item' }
      ],
      templateItems: [
        { icon: 'pi pi-sitemap' },
        { icon: 'pi pi-book' },
        { icon: 'pi pi-wallet' },
        { icon: 'pi pi-shopping-bag' },
        { icon: 'pi pi-calculator' }
      ],
      routerHome: { icon: 'pi pi-home', to: '/' },
      routerItems: [
        { label: 'Components' },
        { label: 'Form' },
        { label: 'InputText', to: '/inputtext' }
      ]
    }
  }
}
        `
      },
    }
  }
}
</script>
