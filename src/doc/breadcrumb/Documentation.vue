<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>MenuModel</h5>
    <p>
      Breadcrumb uses the common MenuModel API to define the items, visit
      <router-link to="/menumodel">MenuModel API</router-link> for details.
    </p>

    <h5>Getting Started</h5>
    <p>
      Breadcrumb requires a collection of menuitems as its model and a home
      item.
    </p>
    <DocSectionCode :code="baseCode" />
    <DocSectionCode :code="baseCode2" importCode />

    <h5>Template</h5>
    <p>Custom content can be placed inside the items using the item template. The divider between the items has its own separator template.</p>
    <DocSectionCode :code="templateCode" />
    <DocSectionCode :code="templateCode2" importCode />

    <h5>Router</h5>
    <p>Items with navigation are defined with templating to be able to use a
      router link component, an external link or programmatic navigation.</p>
    <DocSectionCode :code="routerCode" />
    <DocSectionCode :code="routerCode2" importCode />

    <h5>Properties</h5>
    <p>
      Any property as style and class are passed to the main container element.
      Following are the additional properties to configure the component.
    </p>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>model</td>
            <td>array</td>
            <td>null</td>
            <td>An array of menuitems.</td>
          </tr>
          <tr>
            <td>home</td>
            <td>menuitem</td>
            <td>null</td>
            <td>Configuration for the home icon.</td>
          </tr>
          <tr>
            <td>exact</td>
            <td>boolean</td>
            <td>true</td>
            <td>
              Whether to apply 'router-link-active-exact' class if route exactly
              matches the item path.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Styling</h5>
    <p>
      Following is the list of structural style classes, for theming classes
      visit <router-link to="/theming">theming</router-link> page.
    </p>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Element</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>p-breadcrumb</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-menuitem</td>
            <td>Menuitem element.</td>
          </tr>
          <tr>
            <td>p-menuitem-text</td>
            <td>Label of a menuitem.</td>
          </tr>
          <tr>
            <td>p-breadcrumb-separator</td>
            <td>Chevron element.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Dependencies</h5>
    <p>None.</p>
  </div>
</template>

<script>
export default {
  name: 'Documentation',
  data() {
    return {
      importCode: {
        basic: `
import Breadcrumb from 'primevue2/breadcrumb';
        `
      },
      baseCode: {
        basic: `
<Breadcrumb :home="home" :model="items" />
        `
      },
      baseCode2: {
        basic: `
export default {
    data() {
        return {
            home: {icon: 'pi pi-home'},
            items: [
                {label: 'Computer'},
                {label: 'Notebook'},
                {label: 'Accessories'},
                {label: 'Backpacks'},
                {label: 'Item'}
            ]
        }
    }
}
        `
      },
      templateCode: {
        basic: `
<Breadcrumb :home="home" :model="items">
  <template #item="{ item }">
    <a class="cursor-pointer">
      <span :class="item.icon"></span>
    </a>
  </template>
  <template #separator> / </template>
</Breadcrumb>
        `
      },
      templateCode2: {
        basic: `
export default {
  data() {
    return {
      home: { icon: 'pi pi-home' },
      items: [
        { icon: 'pi pi-sitemap' },
        { icon: 'pi pi-book' },
        { icon: 'pi pi-wallet' },
        { icon: 'pi pi-shopping-bag' },
        { icon: 'pi pi-calculator' }
      ]
    }
  }
}
        `
      },
      routerCode: {
        basic: `
<Breadcrumb :home="home" :model="items">
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
      routerCode2: {
        basic: `
export default {
  data() {
    return {
      home: { icon: 'pi pi-home', to: '/' },
      items: [
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
