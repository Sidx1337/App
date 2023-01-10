<template>
  <v-container>

    <CafeInfo></CafeInfo>
    <CafeMenu></CafeMenu>

  </v-container>
</template>

<script>
import CafeInfo from './CafeInfo.vue'
import CafeMenu from './Cafe/CafeMenu.vue'
export default {
  name: 'CafeView',
  components: {
    CafeInfo,
    CafeMenu
  }
}
</script>