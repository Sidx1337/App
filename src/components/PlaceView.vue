<template>
  <v-container>

    <PlaceInfo></PlaceInfo>
    <CafeMenu></CafeMenu>

  </v-container>
</template>

<script>
import PlaceInfo from './PlaceInfo.vue'
import CafeMenu from './PlaceDiscription/CafeMenu.vue'
export default {
  name: 'CafeView',
  components: {
    PlaceInfo,
    CafeMenu
  }
}
</script>