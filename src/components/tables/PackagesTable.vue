<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Color
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in items"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.color }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const items = ref([
      {
        name: 'John',
        color: 'red'
      },
      {
        name: 'Doe',
        color: 'orange'
      }
    ])

    return {
      items
    }
  }
})
</script>
