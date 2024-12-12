<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>Breadcrumb</h1>
        <p>Breadcrumb provides contextual information about page hierarchy.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <h5>Basic</h5>
        <Breadcrumb :home="home" :model="basicItems" />

        <h5>Template</h5>
        <p>
          Custom content can be placed inside the items using the item template.
          The divider between the items has its own separator template.
        </p>
        <Breadcrumb :home="home" :model="templateItems">
          <template #item="{ item }">
            <a class="cursor-pointer">
              <span :class="item.icon"></span>
            </a>
          </template>
          <template #separator> / </template>
        </Breadcrumb>

        <h5>Router</h5>
        <p>
          Items with navigation are defined with templating to be able to use a
          router link component, an external link or programmatic navigation.
        </p>
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
      </div>
    </div>

    <BreadcrumbDoc />
  </div>
</template>

<script>
import BreadcrumbDoc from '@/doc/breadcrumb/index.vue'

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
  },
  components: {
    BreadcrumbDoc: BreadcrumbDoc
  }
}
</script>
