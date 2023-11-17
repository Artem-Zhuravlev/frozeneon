<template>
  <v-container>
    <packages-table />
  </v-container>
</template>

<script lang="ts">
import PackagesTable from '@/components/tables/PackagesTable'

export default {
  name: 'HomePage',
  components: {
    PackagesTable
  }
};
</script>
