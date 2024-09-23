<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/avatar"
      class="btn-viewsource"
      target="_blank"
      rel="noopener noreferrer">
      <span>View on GitHub</span>
    </a>

    <DocSectionCode :code="sourceCode1" />
  </div>
</template>

<script>
export default {
  name: 'SourceCode',
  data() {
    return {
      sourceCode1: {
        basic: `
<h5>Numbers</h5>
<Badge value="2" class="mr-2"></Badge>
<Badge value="8" severity="success" class="mr-2"></Badge>
<Badge value="4" severity="info" class="mr-2"></Badge>
<Badge value="12" severity="warning" class="mr-2"></Badge>
<Badge value="3" severity="danger"></Badge>

<h5 class="mb-4">Positioned Badge</h5>
<i class="pi pi-bell mr-4 p-text-secondary" style="font-size: 2rem" v-badge="2"></i>
<i class="pi pi-calendar mr-4 p-text-secondary" style="font-size: 2rem" v-badge.danger="'10+'"></i>
<i class="pi pi-envelope p-text-secondary" style="font-size: 2rem" v-badge.danger></i>

<h5>Button Badge</h5>
<Button type="button" label="Emails" badge="8" class="mr-2" />
<Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" />

<h5>Sizes</h5>
<Badge value="2" class="mr-2"></Badge>
<Badge value="4" class="mr-2" size="large" severity="warning"></Badge>
<Badge value="6" size="xlarge" severity="success"></Badge>
        `
      },
    }
  }
}
</script>
