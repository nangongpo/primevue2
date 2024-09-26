<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>PrimeFlex</h5>
    <p>
      DataView utilizes PrimeFlex library so it needs to be installed before getting started. Refer to
      <a href="https://www.primefaces.org/primeflex/gridsystem">PrimeFlex</a> documentation for details.
    </p>

    <h5>Getting Started</h5>
    <p>
      DataView requires a collection of items as its value and one or more templates depending on the layout mode e.g.
      list and grid. Throughout the samples, a car interface having vin, brand, year and color properties are used to
      define an object to be displayed by the dataview. Cars are loaded by a CarService that connects to a server to
      fetch the cars.
    </p>
    <DocSectionCode :code="baseCode" importCode />

    <h5>Layouts</h5>
    <p>
      DataView has two layout modes; <i>list</i> and <i>grid</i> where a separate template is used to render an item in
      each mode. In list mode name of the template is "list" whereas in grid mode it is "grid".
    </p>
    <p>
      Note that there is no restriction to use both layouts at the same time, you may configure only one layout using
      the layout property with the corresponding template.
    </p>
    <DocSectionCode :code="layoutsCode" />

    <h5>Sections</h5>
    <p>Header and Footer are the two templates that are capable of displaying custom content.</p>
    <DocSectionCode :code="sectionsCode" />

    <h5>Empty Message</h5>
    <p>Where there is no data to display, the optional <i>empty</i> template can be used to display information.</p>
    <DocSectionCode :code="emptyMessageCode" />

    <h5>DataViewLayoutOptions</h5>
    <p>
      When both layout modes are enabled in DataView, a UI element would be necessary to let the user toggle between the
      view. DataViewLayoutOptions is a helper component to display a buttonset to choose the layout mode in DataView.
      Location of the DataViewLayoutOptions should be inside the DataView component. If you prefer a different UI
      element you can create your own that updates the layout property of the DataView.
    </p>
    <DocSectionCode :code="dataViewLayoutOptionsCode" />

    <h5>Paginator</h5>
    <p>
      Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page
      and pageLinks specify the the number of page links to display. To customize the left and right side of the
      paginators, use <i>paginatorstart</i> and <i>paginatorend</i> templates.
    </p>
    <DocSectionCode :code="paginatorCode" />

    <h5>Sorting</h5>
    <p>
      <i>sortField</i> and <i>sortOrder</i> properties are available for the sorting functionality, for flexibility
      there is no built-in UI available so that a custom UI can be used for the sorting element. Here is an example that
      uses a dropdown where simply updating the sortField-sortOrder bindings of the DataView initiates sorting.
    </p>
    <DocSectionCode :code="sortingCode" />
    <DocSectionCode :code="sortingCode2" importCode />

    <h5>Lazy Loading</h5>
    <p>
      Lazy loading is useful to deal with huge datasets, in order to implement lazy loading use the pagination and
      utilize the <i>page</i> callback to load your data from the backend. Pagination in this case needs to display the
      logical number of records bound to the <i>totalRecords</i> property so that paginator can display itself according
      to the total records although you'd only need to load the data of the current page.
    </p>
    <DocSectionCode :code="lazyLoadingCode" />
    <DocSectionCode :code="lazyLoadingCode2" importCode />

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
            <td>value</td>
            <td>array</td>
            <td>null</td>
            <td>An array of objects to display.</td>
          </tr>
          <tr>
            <td>layout</td>
            <td>string</td>
            <td>list</td>
            <td>Layout of the items, valid values are "list" and "grid".</td>
          </tr>
          <tr>
            <td>rows</td>
            <td>number</td>
            <td>0</td>
            <td>Number of rows to display per page.</td>
          </tr>
          <tr>
            <td>first</td>
            <td>number</td>
            <td>0</td>
            <td>Index of the first record to render.</td>
          </tr>
          <tr>
            <td>totalRecords</td>
            <td>number</td>
            <td>null</td>
            <td>Number of total records, defaults to length of value when not defined.</td>
          </tr>
          <tr>
            <td>paginator</td>
            <td>boolean</td>
            <td>false</td>
            <td>When specified as true, enables the pagination.</td>
          </tr>
          <tr>
            <td>paginatorPosition</td>
            <td>string</td>
            <td>bottom</td>
            <td>Position of the paginator, options are "top","bottom" or "both".</td>
          </tr>
          <tr>
            <td>alwaysShowPaginator</td>
            <td>boolean</td>
            <td>true</td>
            <td>Whether to show it even there is only one page.</td>
          </tr>
          <tr>
            <td>paginatorTemplate</td>
            <td>string</td>
            <td>FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown</td>
            <td>Template of the paginator.</td>
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
            <td>currentPageReportTemplate</td>
            <td>string</td>
            <td>({currentPage} of {totalPages})</td>
            <td>Template of the current page report element.</td>
          </tr>
          <tr>
            <td>sortField</td>
            <td>string</td>
            <td>null</td>
            <td>Property name or a getter function of data to use in sorting by default.</td>
          </tr>
          <tr>
            <td>sortOrder</td>
            <td>number</td>
            <td>null</td>
            <td>Order to sort the data by default.</td>
          </tr>
          <tr>
            <td>lazy</td>
            <td>boolean</td>
            <td>false</td>
            <td>Defines if data is loaded and interacted with in lazy manner.</td>
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
            <td>header</td>
            <td>-</td>
          </tr>
          <tr>
            <td>paginatorstart</td>
            <td>-</td>
          </tr>
          <tr>
            <td>paginatorend</td>
            <td>-</td>
          </tr>
          <tr>
            <td>list</td>
            <td>
              data: Value of the component <br />
              index: Index of the list
            </td>
          </tr>
          <tr>
            <td>grid</td>
            <td>
              data: Value of the component <br />
              index: Index of the grid
            </td>
          </tr>
          <tr>
            <td>empty</td>
            <td>-</td>
          </tr>
          <tr>
            <td>footer</td>
            <td>-</td>
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
            <td>p-dataview</td>
            <td>Container element.</td>
          </tr>
          <tr>
            <td>p-dataview-list</td>
            <td>Container element in list layout.</td>
          </tr>
          <tr>
            <td>p-dataview-grid</td>
            <td>Container element in grid layout.</td>
          </tr>
          <tr>
            <td>p-dataview-header</td>
            <td>Header section.</td>
          </tr>
          <tr>
            <td>p-dataview-footer</td>
            <td>Footer section.</td>
          </tr>
          <tr>
            <td>p-dataview-content</td>
            <td>Container of items.</td>
          </tr>
          <tr>
            <td>p-dataview-emptymessage</td>
            <td>Empty message element.</td>
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
import DataView from 'primevue2/dataview';
        `
      },
      baseCode: {
        basic: `
export default {
    data() {
        return {
            cars: null,
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.carService.getCarsLarge().then(data => this.cars = data);
    }
}
        `
      },
      layoutsCode: {
        basic: `
<template #list="slotProps">
	<div class="col-12">
        <div class="car-details">
            <div>
                <img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"/>
                <div class="grid">
                    <div class="col-12">Vin: <b>{{slotProps.data.vin}}</b></div>
                    <div class="col-12">Year: <b>{{slotProps.data.year}}</b></div>
                    <div class="col-12">Brand: <b>{{slotProps.data.brand}}</b></div>
                    <div class="col-12">Color: <b>{{slotProps.data.color}}</b></div>
                </div>
            </div>
            <Button icon="pi pi-search"></Button>
        </div>
    </div>
</template>
<template #grid="slotProps">
	<div style="padding: .5em" class="col-12 md:col-3">
		<Panel :header="slotProps.data.vin" style="text-align: center">
			<img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"/>
			<div class="car-detail">{{slotProps.data.year}} - {{slotProps.data.color}}</div>
			<Button icon="pi pi-search"></Button>
		</Panel>
	</div>
</template>
        `
      },
      sectionsCode: {
        basic: `
<template #header>Header Content</template>
<template #footer>Footer Content</template>
        `
      },
      emptyMessageCode: {
        basic: `
<template #empty>No records found.</template>
        `
      },
      dataViewLayoutOptionsCode: {
        basic: `
<DataView :value="cars" :layout="layout">
	<template #header>
		<DataViewLayoutOptions v-model="layout"></DataViewLayoutOptions>
	</template>
	<template #list="slotProps" >
		<div>Vin: <b>{{slotProps.data.vin}}</b></div>
	</template>
	<template #grid="slotProps">
		<div>Vin: <b>{{slotProps.data.vin}}</b></div>
	</template>
</DataView>
        `
      },
      paginatorCode: {
        basic: `
<DataView :value="cars" :layout="layout" paginatorPosition="both" :paginator="true" :rows="20">
	<template #paginatorstart>
		<Button type="button" icon="pi pi-refresh"/>
	</template>
	<template #paginatorend>
		<Button type="button" icon="pi pi-search" />
	</template>
	<template #list="slotProps" >
		<div>Vin: <b>{{slotProps.data.vin}}</b></div>
	</template>
	<template #grid="slotProps">
		<div>Vin: <b>{{slotProps.data.vin}}</b></div>
	</template>
</DataView>
        `
      },
      sortingCode: {
        basic: `
<DataView :value="cars" :layout="layout" :sortOrder="sortOrder" :sortField="sortField">
    <template #header>
        <div class="grid grid-nogutter">
            <div class="col-6" style="text-align: left">
                <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By" @change="onSortChange($event)"/>
            </div>
            <div class="col-6" style="text-align: right">
                <DataViewLayoutOptions v-model="layout" />
            </div>
        </div>
    </template>
	<template #list="slotProps" >
		<div>Vin: <b>{{slotProps.data.vin}}</b></div>
	</template>
	<template #grid="slotProps">
		<div>Vin: <b>{{slotProps.data.vin}}</b></div>
	</template>
</DataView>
        `
      },
      sortingCode2: {
        basic: `
export default {
    data() {
        return {
            cars: null,
            layout: 'list',
            sortKey: null,
            sortOrder: null,
            sortField: null,
            sortOptions: [
                {label: 'Newest First', value: '!year'},
                {label: 'Oldest First', value: 'year'},
                {label: 'Brand', value: 'brand'}
            ]
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    mounted() {
        this.carService.getCarsLarge().then(data => this.cars = data);
    },
    methods: {
        onSortChange(event){
            const value = event.value.value;
            const sortValue = event.value;

            if (value.indexOf('!') === 0) {
                this.sortOrder = -1;
                this.sortField = value.substring(1, value.length);
                this.sortKey = sortValue;
            }
            else {
                this.sortOrder = 1;
                this.sortField = value;
                this.sortKey = sortValue;
            }
        }
    }
}
        `
      },
      lazyLoadingCode: {
        basic: `
<DataView :value="cars" :layout="layout" :paginator="true" :rows="20" :lazy="true" @page="onPage($event)">
	<template #list="slotProps" >
		<div>Vin: <b>{{slotProps.data.vin}}</b></div>
	</template>
	<template #grid="slotProps">
		<div>Vin: <b>{{slotProps.data.vin}}</b></div>
	</template>
</DataView>
        `
      },
      lazyLoadingCode2: {
        basic: `
export default {
    data() {
        return {
            cars: null,
            layout: 'list'
        }
    },
    carService: null,
    mounted() {
        this.cars = //initialize the first chunk of data between 0 and 20
    },
    methods: {
        onPage(event){
            this.cars = //load the data between (event.first) and (event.first + event.rows) from a remote datasource
        }
    }
}
        `
      },
    }
  }
}
</script>
