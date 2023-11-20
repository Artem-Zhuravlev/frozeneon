<template>
  <v-footer
    class="bg-indigo-lighten-1 footer"
  >
    <v-container>
      <div class="pt-2 pb-2 d-flex  ga-3">
        <v-avatar
          color="grey"
          size="100"
          rounded="0"
        >
          <v-img cover src="https://avatars.githubusercontent.com/u/24191610?v=4"></v-img>
        </v-avatar>
        <div class="d-flex flex-column">
          <a
            class="text-h5 text-decoration-none"
            :style="{color: 'white'}"
            href="https://github.com/Artem-Zhuravlev"
            target="_blank"
          >Zhuravlev Artem</a>
          <a
            href="https://www.linkedin.com/in/artem-zhuravlev-97063712a/"
            class="text-h6 text-decoration-none"
            :style="{color: 'white'}"
          >LinkedIn</a>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<style lang="scss" scoped>
.footer {
  max-height: 165px;
}
</style>
