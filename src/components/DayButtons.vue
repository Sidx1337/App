<template>
      <v-tabs
          fixed-tabs
          background-color="white"
          color="blue"
          dark
      >
      <v-tab v-for="item in menu_items" :key="item.id">
          <router-link :to="item.url">{{ item.name }}</router-link>
      </v-tab>
      </v-tabs>
</template>

<script>
export default {
  name: 'DayButtons',
  data: () => ({
    drawer: false,
    menu_items: [
      {
        id: 0,
        name: 'Популярные',
        url: '/login'
      },
      {
        id: 1,
        name: '1 День',
        url: '#'
      },
      {
        id: 2,
        name: '2 Дня',
        url: '#'
      },
      {
        id: 3,
        name: '3 Дня',
        url: '#'
      },
      {
        id: 4,
        name: '4 Дня',
        url: '#'
      }
    ]
  })
}
</script>