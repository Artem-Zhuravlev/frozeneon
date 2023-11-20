<template>
  <v-dialog
    width="400"
    v-model="localVisible"
  >
    <v-card>
      <v-card-text>
        <h3
          v-if="item?.package?.name"
        >{{ item?.package?.name }}</h3>
        <h4
          v-if="item?.package?.author?.name | item?.package?.author?.email"
          class="mb-3"
        >
          {{ item?.package?.author?.name  }} | {{ item?.package?.author?.email }}
        </h4>
        <p
          v-if="item?.package?.description"
          class="mb-3"
        >{{ item?.package?.description }}</p>
        <div
          v-if="item.package.keywords"
          class="d-flex flex-wrap ga-2 mb-3"
        >
          <div
            v-for="(keyword, index) in item?.package?.keywords"
            :key="index"
            class="pa-1 bg-deep-purple"
          >
            {{ keyword }}
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue';

const emit = defineEmits<{
  (event: 'modelValue:visible', value: boolean): void
}>();

const { value, item } = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  value: {
    type: Boolean,
    default: false,
  },
});

const localVisible = computed({
  get: () => value,
  set: (value) => {
    emit('modelValue:visible', value);
  },
});

</script>
