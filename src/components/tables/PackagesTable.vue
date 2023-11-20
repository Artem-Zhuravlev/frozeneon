<template>
  <v-data-table
    :loading="store.isLoading"
    :items="tableData"
    :headers="headers"
    :items-per-page="10"
    hover
  >
    <template
      v-slot:item="{ item }"
    >
      <tr
        @click="$emit('row-click', item)"
      >
        <td>{{ item.date }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.version }}</td>
        <td>{{ item.description }}</td>
      </tr>
    </template>
    <template
      v-slot:loading
    >
      <v-row
        class="text-center"
      >
        <v-col>
          <v-progress-circular
            indeterminate
            color="primary"
          />
        </v-col>
      </v-row>
    </template>
  </v-data-table>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { usePackagesStore } from '@/store/packages';
import { IPackage } from '@/types/IPackage';
import { ITableRow } from '@/types/ITableRow';
import { onMounted } from 'vue';

const store = usePackagesStore();

const tableData = computed<ITableRow[]>(() => {
  return (store.packages as IPackage[]).map(item => ({
    date: new Date(item.package.date).toLocaleDateString(),
    name: item.package.name,
    version: item.package.version,
    description: item.package.description,
  }));
});

const headers = ref([
  { text: 'Date', value: 'date', width: '20%'},
  { text: 'Name', value: 'name', width: '20%' },
  { text: 'Version', value: 'version', width: '20%' },
  { text: 'Description', value: 'description', width: '40%' },
])

onMounted(async() => {
  await store.getPackages();
})
</script>


<style lang="scss" scoped>
:deep(.v-table) {
  overflow-x: auto;
}

:deep(table) {
  min-width: 650px;
}
</style>
