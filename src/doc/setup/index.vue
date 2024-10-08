<template>
  <div class="content-section documentation">
    <Message severity="warn"
      >This guide is for Vue 2 and PrimeVue 2, visit <a href="https://v3.primevue.org">PrimeVue 3.x website</a> if you
      are using Vue 3.</Message
    >

    <h1>Setup</h1>
    <p>PrimeVue is a rich set of open source native components for Vue.</p>

    <h5>Download</h5>
    <p>
      PrimeVue is available at <a href="https://www.npmjs.com/package/primevue">npm</a>, if you have an existing
      application run the following commands to download PrimeVue and PrimeIcons to your project.
    </p>

    <DocSectionCode :code="npmCode" importCode />

    <h5>Module Loader</h5>
    <p>
      This is the recommended way if your application uses <a href="https://cli.vuejs.org/">vue-cli</a> or has a webpack
      based build with <a href="https://github.com/vuejs/vue-loader">vue-loader</a> configured.
    </p>

    <p>
      Begin with installing PrimeVue. This command only sets up the core configuration like locale and does not register
      any component.
    </p>

    <DocSectionCode :code="importCode" importCode />

    <p>
      Then import and register a component from the library. Import path is available in the documentation of the
      corresponding component.
    </p>

    <DocSectionCode :code="importDialogCode" importCode />

    <p>Finally you'll be able to utilize the component in your application.</p>

    <DocSectionCode :code="dialogCode" />

    <h5>Script Tag</h5>
    <p>Other alternative is utilizing the components directly within the browser with UMD packages.</p>

    <DocSectionCode :code="scriptTagCode" importHTML />

    <h5>Dependencies</h5>
    <p>
      Majority of PrimeVue components (95%) are native and there are some exceptions having 3rd party dependencies such
      as Quill for Editor.
    </p>
    <p>In addition, components require PrimeIcons library for icons.</p>

    <h6>Mandatory</h6>

    <DocSectionCode :code="mandatoryCode" importCode />

    <h6>Optional</h6>
    <p>Here is the list of components with 3rd party dependencies.</p>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Dependency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charts</td>
            <td>Charts.js 3.3.2</td>
          </tr>
          <tr>
            <td>Editor</td>
            <td>Quill.js 1.3.3+</td>
          </tr>
          <tr>
            <td>PrimeFlex</td>
            <td>DataView</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Styles</h5>
    <p>
      The css dependencies are as follows, note that you may change the theme with another one of your choice. If you
      are using a bundler such as webpack with a css loader you may import them to your main application component.
    </p>

    <DocSectionCode :code="stylesCode" />

    <h5>Free Themes</h5>
    <p>PrimeVue ships with 35 free themes to choose from.</p>

    <DocSectionCode :code="freeThemesCode" />

    <h5>PrimeFlex</h5>
    <p>
      PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation
      and more. Although it is not required, it is highly recommended to add PrimeFlex as it is likely to need such
      utilities when developing applications. View the <router-link to="/primeflex">PrimeFlex</router-link> section for
      the installation.
    </p>

    <h5>Ripple</h5>
    <p>
      Ripple is an optional animation for the supported components such as buttons. It is disabled by default and needs
      to be enabled at while installing PrimeVue.
    </p>

    <DocSectionCode :code="rippleCode" importCode />

    <h5>Quickstart</h5>
    <p>
      An <a href="https://github.com/primefaces/primevue-quickstart">example application</a> based on vue-cli is
      available at github.
    </p>

    <h5>Typescript</h5>
    <p>
      Typescript is fully supported as type definition files are provided in the npm package of PrimeVue. A sample
      <a href="https://github.com/primefaces/primevue-typescript-quickstart">typescript-primevue</a> application is
      available as well at github.
    </p>

    <h5>Nuxt.js Integration</h5>
    <p>
      PrimeVue has a built-in nuxt module. Open <strong>nuxt.config.js</strong> and add <i>primevue2/nuxt</i> to the
      modules section along with your configuration.
    </p>

    <DocSectionCode :code="nuxtCode1" importCode />

    <p>Here is an example configuration.</p>

    <DocSectionCode :code="nuxtCode2" importCode />

    <p>An alternative configuration is possible using the <i>primevue</i> property.</p>

    <DocSectionCode :code="nuxtCode3" importCode />

    <p>
      Component and Directive names are same as the default export names stated in the import section of each
      documentation section. For example, <router-link to="/datatable">DataTable</router-link> documentation begins with
      the following statement which means the key to be used in the components configuration is
      <strong>DataTable</strong>. Refer to the import section of a corresponding component or directive for more
      information.
    </p>

    <DocSectionCode :code="nuxtCode4" importCode />

    <DocSectionCode :code="nuxtCode5" importCode />

    <DocSectionCode :code="nuxtCode6" />

    <p>
      That is all, for a complete example please refer to the
      <a href="https://github.com/primefaces/primevue-nuxtjs-quickstart">primevue-nuxtjs-quickstart</a> sample.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      npmCode: {
        basic: `
npm install primevue2 --save
npm install primeicons --save
        `
      },
      importCode: {
        basic: `
import PrimeVue from 'primevue2/config';

Vue.use(PrimeVue);
        `
      },
      importDialogCode: {
        basic: `
import Dialog from 'primevue2/dialog';

Vue.component('Dialog', Dialog);
        `
      },
      dialogCode: {
        basic: `
<Dialog></Dialog>
        `
      },
      scriptTagCode: {
        basic: `
&lt;meta charset="utf-8"&gt;
&lt;title&gt;calendar demo&lt;/title&gt;
&lt;link href="https://unpkg.com/primevue2/resources/themes/saga-blue/theme.css " rel="stylesheet"&gt;
&lt;link href="https://unpkg.com/primevue2/resources/primevue.min.css " rel="stylesheet"&gt;
&lt;link href="https://unpkg.com/primeicons/primeicons.css " rel="stylesheet"&gt;
&lt;script src="https://unpkg.com/vue"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue^2/calendar/calendar.umd.min.js"&gt;&lt;/script&gt;

&lt;div id="app"&gt;
    &lt;p-calendar&gt;&lt;/p-calendar&gt;
&lt;/div&gt;

&lt;script&gt;
new Vue({
    components: {
        'p-calendar': calendar
    }
}).$mount('#app')
&lt;/script&gt;
        `
      },
      mandatoryCode: {
        basic: `
dependencies: {
    "vue": "^2.7.0",
    "primeicons": "^6.0.0"
}
        `
      },
      stylesCode: {
        basic: `
primevue2/resources/themes/saga-blue/theme.css       // theme
primevue2/resources/primevue.min.css                 // core css
primeicons/primeicons.css                            // icons
        `
      },
      freeThemesCode: {
        basic: `
primevue2/resources/themes/bootstrap4-light-blue/theme.css
primevue2/resources/themes/bootstrap4-light-purple/theme.css
primevue2/resources/themes/bootstrap4-dark-blue/theme.css
primevue2/resources/themes/bootstrap4-dark-purple/theme.css
primevue2/resources/themes/md-light-indigo/theme.css
primevue2/resources/themes/md-light-deeppurple/theme.css
primevue2/resources/themes/md-dark-indigo/theme.css
primevue2/resources/themes/md-dark-deeppurple/theme.css
primevue2/resources/themes/mdc-light-indigo/theme.css
primevue2/resources/themes/mdc-light-deeppurple/theme.css
primevue2/resources/themes/mdc-dark-indigo/theme.css
primevue2/resources/themes/mdc-dark-deeppurple/theme.css
primevue2/resources/themes/tailwind-light/theme.css
primevue2/resources/themes/fluent-light/theme.css
primevue2/resources/themes/lara-light-indigo/theme.css
primevue2/resources/themes/lara-dark-indigo/theme.css
primevue2/resources/themes/lara-light-purple/theme.css
primevue2/resources/themes/lara-dark-purple/theme.css
primevue2/resources/themes/lara-light-blue/theme.css
primevue2/resources/themes/lara-dark-blue/theme.css
primevue2/resources/themes/lara-light-teal/theme.css
primevue2/resources/themes/lara-dark-teal/theme.css
primevue2/resources/themes/saga-blue/theme.css
primevue2/resources/themes/saga-green/theme.css
primevue2/resources/themes/saga-orange/theme.css
primevue2/resources/themes/saga-purple/theme.css
primevue2/resources/themes/vela-blue/theme.css
primevue2/resources/themes/vela-green/theme.css
primevue2/resources/themes/vela-orange/theme.css
primevue2/resources/themes/vela-purple/theme.css
primevue2/resources/themes/arya-blue/theme.css
primevue2/resources/themes/arya-green/theme.css
primevue2/resources/themes/arya-orange/theme.css
primevue2/resources/themes/arya-purple/theme.css
primevue2/resources/themes/nova/theme.css
primevue2/resources/themes/nova-alt/theme.css
primevue2/resources/themes/nova-accent/theme.css
primevue2/resources/themes/nova-vue/theme.css
primevue2/resources/themes/luna-amber/theme.css
primevue2/resources/themes/luna-blue/theme.css
primevue2/resources/themes/luna-green/theme.css
primevue2/resources/themes/luna-pink/theme.css
primevue2/resources/themes/rhea/theme.css
        `
      },
      rippleCode: {
        basic: `
import PrimeVue from 'primevue2/config';

Vue.use(PrimeVue, {ripple: true});
        `
      },
      nuxtCode1: {
        basic: `
modules: [
    [
        'primevue2/nuxt', {
            theme: string,      //name of the theme, defaults to saga-blue
            ripple: boolean,    //whether the ripple animation is enabled, defaults to false
            components: [],     //an array of components to be registered
            directives: []      //an array of directives to be registered
        }
    ]
],
        `
      },
      nuxtCode2: {
        basic: `
modules: [
    [
        'primevue2/nuxt', {
            theme: 'md-light-indigo',
            ripple: true,
            components: ['InputText','Button','DataTable','Dialog'],
            directives: ['Tooltip','Badge']
        }
    ]
],
        `
      },
      nuxtCode3: {
        basic: `
modules: ['primevue2/nuxt'],
primevue: {
    theme: 'md-light-indigo',
    ripple: true,
    components: ['InputText','Button','DataTable','Dialog'],
    directives: ['Tooltip','Badge']
}
        `
      },
      nuxtCode4: {
        basic: `
import DataTable from 'primevue2/datatable';
import Column from 'primevue2/column';
        `
      },
      nuxtCode5: {
        basic: `
modules: ['primevue2/nuxt'],
primevue: {
    theme: 'md-light-indigo',
    ripple: true,
    components: ['DataTable','Column']
}
        `
      },
      nuxtCode6: {
        basic: `
<DataTable></DataTable> 
        `
      }
    }
  }
}
</script>
