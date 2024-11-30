<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>StyleClass has two modes, <i>toggleClass</i> to simply add-remove a class and enter/leave animations.</p>

    <p><b>ToggleClass</b></p>
    <DocSectionCode :code="baseCode" />

    <p><b>Enter/Leave Animation</b></p>
    <DocSectionCode :code="baseCode2" />

    <h5>Target</h5>
    <p>Target element is defined with the <i>v-styleclass</i> attribute that can either be a valid css query or one of
      the keywords below.</p>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>@next</td>
            <td>Next element.</td>
          </tr>
          <tr>
            <td>@prev</td>
            <td>Previous element.</td>
          </tr>
          <tr>
            <td>@parent</td>
            <td>Parent element.</td>
          </tr>
          <tr>
            <td>@grandparent</td>
            <td>Parent element of the parent.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Properties</h5>
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
            <td>selector</td>
            <td>string</td>
            <td>selector</td>
            <td>Selector to define the target element.</td>
          </tr>
          <tr>
            <td>enterClass</td>
            <td>string</td>
            <td>null</td>
            <td>Class to add when item begins to get displayed.</td>
          </tr>
          <tr>
            <td>enterActiveClass</td>
            <td>string</td>
            <td>null</td>
            <td>Class to add during enter animation.</td>
          </tr>
          <tr>
            <td>enterToClass</td>
            <td>string</td>
            <td>null</td>
            <td>Class to add when enter animation is completed.</td>
          </tr>
          <tr>
            <td>leaveClass</td>
            <td>string</td>
            <td>null</td>
            <td>Class to add when item begins to get hidden.</td>
          </tr>
          <tr>
            <td>leaveActiveClass</td>
            <td>string</td>
            <td>null</td>
            <td>Class to add during leave animation</td>
          </tr>
          <tr>
            <td>leaveToClass</td>
            <td>string</td>
            <td>null</td>
            <td>Class to add when leave animation is completed.</td>
          </tr>
          <tr>
            <td>hideOnOutsideClick</td>
            <td>string</td>
            <td>null</td>
            <td>Whether to trigger leave animation when outside of the element is clicked.</td>
          </tr>
          <tr>
            <td>toggleClass</td>
            <td>string</td>
            <td>null</td>
            <td>Adds or removes a class when no enter-leave animation is required.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Events</h5>
    <p>Directive has no events.</p>

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
import StyleClass from 'primevue2/styleclass';
        `
      },
      baseCode: {
        basic: `
<Button label="Toggle p-disabled" v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" />
<InputText class="block mt-3" />
        `
      },
      baseCode2: {
        basic: `
<Button label="Show" class="mr-2" v-styleclass="{ selector: '.box', enterClass: 'hidden', enterActiveClass: 'my-fadein' }" />
<Button label="Hide" v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'hidden' }" />
<div class="box hidden">Content</div>
        `
      },
    }
  }
}
</script>
