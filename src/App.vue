<template>
  <v-app>

    <v-navigation-drawer
        app
        left
        absolute
        temporary
        v-model="drawer"
    >

      <v-list-item-group>

        <v-list-item v-for="item in menu_items" :key="item.id">
          <v-list-item-title>
            <router-link :to="item.url">{{ item.name }}</router-link>
          </v-list-item-title>
        </v-list-item>

      </v-list-item-group>

    </v-navigation-drawer>

    <v-app-bar
        app
        color="red"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <h3 class="text-h4 white--text">CrimeaBadTrip</h3>
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

  </v-app>
</template>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    menu_items: [
      {
        id: 0,
        name: 'Логин',
        url: '/login'
      },
      {
        id: 1,
        name: 'Список мест',
        url: '/'
      },
      {
        id: 2,
        name: 'О нас',
        url: '#'
      },
      {
        id: 3,
        name: 'Контакты',
        url: '#'
      },
      {
        id: 4,
        name: 'Помощь',
        url: '#'
      }
    ]
  })
}
</script>
