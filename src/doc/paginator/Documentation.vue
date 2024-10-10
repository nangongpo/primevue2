<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p><i>rows</i> and <i>totalRecords</i> are the required properties of the Paginator.</p>
    <DocSectionCode :code="baseCode" />
    <DocSectionCode :code="baseCode2" importCode />

    <h5>Start Index</h5>
    <p><i>first</i> property defines the index of the first item displayed by the paginator.</p>
    <DocSectionCode :code="startIndexCode" />

    <p>
      Use the sync operator to enable two-way binding, this is useful in cases where you need to programmatically
      control the paginator.
    </p>
    <DocSectionCode :code="startIndexCode2" />

    <h5>Rows Per Page</h5>
    <p>
      Number of items per page can be changed by the user using a dropdown with the <i>rowsPerPageOptions</i> property
      which accepts an array of possible values.
    </p>
    <DocSectionCode :code="rowsPerPageCode" />

    <p>
      As <i>rows</i> also change when the dropdown changes, use the optional sync operator if you need two-way binding.
    </p>
    <DocSectionCode :code="rowsPerPageCode2" />

    <h5>Template</h5>
    <p>
      Paginator elements can be customized using the template property using the predefined keys, default value is
      "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown". Here are the available
      elements that can be placed inside a paginator in any order.
    </p>

    <ul>
      <li>FirstPageLink</li>
      <li>PrevPageLink</li>
      <li>PageLinks</li>
      <li>NextPageLink</li>
      <li>LastPageLink</li>
      <li>RowsPerPageDropdown</li>
      <li>JumpToPageDropdown</li>
      <li>JumpToPageInput</li>
      <li>CurrentPageReport</li>
    </ul>

    <h5>CurrentPageReport</h5>
    <p>
      Current page report item in the template displays information about the pagination state. Default value is
      (&#123;currentPage&#125; of &#123;totalPages&#125;) whereas available placeholders are the following;
    </p>
    <ul>
      <li>&#123;currentPage&#125;</li>
      <li>&#123;totalPages&#125;</li>
      <li>&#123;rows&#125;</li>
      <li>&#123;first&#125;</li>
      <li>&#123;last&#125;</li>
      <li>&#123;totalRecords&#125;</li>
    </ul>

    <h5>Custom Content</h5>
    <p>
      There are two templates available named "left" and "right" to add custom content to these locations. Both
      templates get a state object as a slot property to provide the current page, first index and the rows.
    </p>
    <DocSectionCode :code="customContentCode" />

    <h5>Page Change Event</h5>
    <p>Paginator provides only one event called <i>page</i> that passes all the information about the change event.</p>
    <DocSectionCode :code="pageChangeEventCode" />
    <DocSectionCode :code="pageChangeEventCode2" importCode />

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
            <td>totalRecords</td>
            <td>number</td>
            <td>0</td>
            <td>Number of total records.</td>
          </tr>
          <tr>
            <td>rows</td>
            <td>number</td>
            <td>0</td>
            <td>Data count to display per page.</td>
          </tr>
          <tr>
            <td>first</td>
            <td>number</td>
            <td>0</td>
            <td>Zero-relative number of the first row to be displayed.</td>
          </tr>
          <tr>
            <td>pageLinkSize</td>
            <td>number</td>
            <td>5</td>
            <td>Number of page links to display.</td>
          </tr>
          <tr>
            <td>rowsPerPageOptions</td>
            <td>array</td>
            <td>null</td>
            <td>Array of integer values to display inside rows per page dropdown.</td>
          </tr>
          <tr>
            <td>template</td>
            <td>string</td>
            <td>FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown</td>
            <td>Template of the paginator.</td>
          </tr>
          <tr>
            <td>currentPageReportTemplate</td>
            <td>string</td>
            <td>(&#123;currentPage&#125; of &#123;totalPages&#125;)</td>
            <td>
              Template of the current page report element. Available placeholders are
              &#123;currentPage&#125;,&#123;totalPages&#125;,&#123;rows&#125;,&#123;first&#125;,&#123;last&#125; and
              &#123;totalRecords&#125;
            </td>
          </tr>
          <tr>
            <td>alwaysShow</td>
            <td>boolean</td>
            <td>true</td>
            <td>Whether to show the paginator even there is only one page.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Events</h5>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Parameters</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>page</td>
            <td>
              event.page: New page number <br />
              event.first: Index of first record <br />
              event.rows: Number of rows to display in new page <br />
              event.pageCount: Total number of pages
            </td>
            <td>Callback to invoke when page changes, the event object contains information about the new state.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Slots</h5>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Parameters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>left</td>
            <td>state: State of the paginator</td>
          </tr>
          <tr>
            <td>right</td>
            <td>state: State of the paginator</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Styling</h5>
    <p>
      Following is the list of structural style classes, for theming classes visit
      <router-link to="/theming">theming</router-link> page.
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
            <td>p-paginator</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-paginator-first</td>
            <td>First page element.</td>
          </tr>
          <tr>
            <td>p-paginator-prev</td>
            <td>Previous page element.</td>
          </tr>
          <tr>
            <td>p-paginator-pages</td>
            <td>Container of page links.</td>
          </tr>
          <tr>
            <td>p-paginator-page</td>
            <td>A page link.</td>
          </tr>
          <tr>
            <td>p-paginator-next</td>
            <td>Next pge element.</td>
          </tr>
          <tr>
            <td>p-paginator-last</td>
            <td>Last page element.</td>
          </tr>
          <tr>
            <td>p-paginator-rpp-options</td>
            <td>Rows per page dropdown.</td>
          </tr>
        </tbody>
      </table>

      <h5>Dependencies</h5>
      <p>None.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Documentation',
  data() {
    return {
      importCode: {
        basic: `
import Paginator from 'primevue2/paginator';
        `
      },
      baseCode: {
        basic: `
<Paginator :rows="10" :totalRecords="totalItemsCount"></Paginator>
        `
      },
      startIndexCode: {
        basic: `
<Paginator :first="offset" :rows="10" :totalRecords="totalItemsCount"></Paginator>
        `
      },
      startIndexCode2: {
        basic: `
<Paginator :first.sync="offset" :rows="10" :totalRecords="totalItemsCount"></Paginator>
        `
      },
      rowsPerPageCode: {
        basic: `
<Paginator :first.sync="offset" :rows="rows" :totalRecords="totalItemsCount" :rowsPerPageOptions="[10,20,30]"></Paginator>
        `
      },
      rowsPerPageCode2: {
        basic: `
<Paginator :first.sync="offset" :rows.sync="rows" :totalRecords="totalItemsCount" :rowsPerPageOptions="[10,20,30]"></Paginator>
        `
      },
      customContentCode: {
        basic: `
<Paginator :first.sync="offset" :rows="10" :totalRecords="totalItemsCount">
    <template #start="slotProps">
        Page: {{slotProps.state.page}}
        First: {{slotProps.state.first}}
        Rows: {{slotProps.state.rows}}
    </template>
    <template #end>
        <Button type="button" icon="pi pi-search" />
    </template>
</Paginator>
        `
      },
      pageChangeEventCode: {
        basic: `
<Paginator :rows="10" :totalRecords="totalItemsCount" @page="onPage($event)"></Paginator>
        `
      },
      pageChangeEventCode2: {
        basic: `
onPage(event) {
    //event.page: New page number
    //event.first: Index of first record
    //event.rows: Number of rows to display in new page
    //event.pageCount: Total number of pages
}
        `
      },
    }
  }
}
</script>
