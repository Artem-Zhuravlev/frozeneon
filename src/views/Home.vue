<template>
  <v-container>
    <packages-table
      @row-click="handleRowClick"
    />
    <package-details-modal
      v-model="modalVisible"
      :item="store.packages[index]"
    />
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import PackagesTable from '@/components/tables/PackagesTable.vue';
import PackageDetailsModal from '@/components/modals/PackageDetailsModal.vue';
import { usePackagesStore } from '@/store/packages';
import { IPackage } from '@/types/IPackage';
import { ITableRow } from '@/types/ITableRow';

const store = usePackagesStore();
const index = ref<number>(0);
const modalVisible = ref<boolean>(false);

const handleRowClick = (selectedItem: ITableRow) => {
  const idx = (store.packages as IPackage[]).findIndex(
    (item) => item.package.description === selectedItem.description
  );
  index.value = idx;
  modalVisible.value = true;
};
</script>
