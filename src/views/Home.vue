<template>
  <v-container>
    <packages-table
      @row-click="handleRowClick"
    />
  </v-container>
</template>

<script lang="ts" setup>
import PackagesTable from '@/components/tables/PackagesTable.vue';
import { usePackagesStore } from '@/store/packages';
import { IPackage } from '@/types/IPackage';
import { ITableRow } from '@/types/ITableRow';

const store = usePackagesStore();

const handleRowClick = (selectedItem: ITableRow) => {
  const idx = (store.packages as IPackage[]).findIndex(
    (item) => item.package.description === selectedItem.description
  );
  console.log(idx);
};
</script>
