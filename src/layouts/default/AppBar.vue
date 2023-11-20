<template>
  <v-app-bar
    flat
  >
    <v-col
      cols="5"
      class="align-center d-flex"
    >
      <router-link
        to="/"
        class="d-inline-flex"
      >
        <img
          src="@/assets/logo.svg"
          alt="Frozeneon"
          title="Frozeneon"
          class="d-flex"
          :style="{
            maxWidth: '150px',
            width: '100%',
          }"
        >
      </router-link>
    </v-col>
    <v-spacer />
    <v-col
      md="3"
      cols="7"
    >
      <v-text-field
        v-model="store.searchResult"
        density="compact"
        variant="solo"
        label="Search packages"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
      />
    </v-col>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import { usePackagesStore } from '@/store/packages';

const store = usePackagesStore();

watch(() => store.searchResult, async () => {
  await store.getPackages();
});
</script>
