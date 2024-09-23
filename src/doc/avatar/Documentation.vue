<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>Avatar has three built-in display modes; "label", "icon" and "image".</p>
    <DocSectionCode :code="baseCode" />

    <h5>Sizes</h5>
    <p>
      <i>size</i> property defines the size of the Avatar with "large" and
      "xlarge" as possible values.
    </p>
    <DocSectionCode :code="sizesCode" />

    <h5>AvatarGroup</h5>
    <p>
      A set of Avatars can be displayed together using the
      <i>AvatarGroup</i> component.
    </p>
    <DocSectionCode :code="avatarGroupCode" />

    <h5>Shape</h5>
    <p>
      Avatar comes in two different styles specified with the
      <i>shape</i> property, "square" is the default and "circle" is the
      alternative.
    </p>
    <DocSectionCode :code="shapeCode" />

    <h5>Badge</h5>
    <p>
      A badge can be added to an Avatar with the
      <router-link to="/badge">Badge</router-link> directive.
    </p>
    <DocSectionCode :code="badgeCode" />

    <h5>Templating</h5>
    <p>
      Content can easily be customized with the default slot instead of using
      the built-in modes.
    </p>
    <DocSectionCode :code="templatingCode" />

    <h5>Properties of Avatar</h5>
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
            <td>label</td>
            <td>string</td>
            <td>null</td>
            <td>Defines the text to display.</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>string</td>
            <td>null</td>
            <td>Defines the icon to display.</td>
          </tr>
          <tr>
            <td>image</td>
            <td>string</td>
            <td>null</td>
            <td>Defines the image to display.</td>
          </tr>
          <tr>
            <td>size</td>
            <td>string</td>
            <td>null</td>
            <td>
              Size of the element, valid options are "large" and "xlarge".
            </td>
          </tr>
          <tr>
            <td>shape</td>
            <td>string</td>
            <td>square</td>
            <td>
              Shape of the element, valid options are "square" and "circle".
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Properties of AvatarGroup</h5>
    <p>
      Any property as style and class are passed to the main container element.
      There are no additional properties.
    </p>

    <h5>Styling of Avatar</h5>
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
            <td>p-avatar</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-avatar-image</td>
            <td>Container element in image mode.</td>
          </tr>
          <tr>
            <td>p-avatar-circle</td>
            <td>Container element with a circle shape.</td>
          </tr>
          <tr>
            <td>p-avatar-text</td>
            <td>Text of the Avatar.</td>
          </tr>
          <tr>
            <td>p-avatar-icon</td>
            <td>Icon of the Avatar.</td>
          </tr>
          <tr>
            <td>p-avatar-lg</td>
            <td>Container element with a large size.</td>
          </tr>
          <tr>
            <td>p-avatar-xl</td>
            <td>Container element with an xlarge size.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Styling of AvatarGroup</h5>
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
            <td>p-avatar-group</td>
            <td>Container element.</td>
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
import Avatar from 'primevue2/avatar';
import AvatarGroup from 'primevue2/avatargroup';
        `
      },
      baseCode: {
        basic: `
<Avatar label="P" />
<Avatar icon="pi pi-search" />
<Avatar image="user.png" />
        `
      },
      sizesCode: {
        basic: `
<Avatar label="P" size="large"/>
        `
      },
      avatarGroupCode: {
        basic: `
<AvatarGroup>
	<Avatar label="P" />
	<Avatar icon="pi pi-search" />
	<Avatar image="user.png" />
	<Avatar label="+2" />
</AvatarGroup>
        `
      },
      shapeCode: {
        basic: `
<Avatar label="P" shape="circle"/>
        `
      },
      badgeCode: {
        basic: `
<Avatar image="user.png" size="xlarge" v-badge.danger="4" />
        `
      },
      templatingCode: {
        basic: `
<Avatar>
   Content
</Avatar>
        `
      }
    }
  }
}
</script>
