<template>
  <div>
  </div>
</template>
<template>
  <v-container>

    <v-row class="list__places-title">
      <v-col>
        <h2 class="text-center text-h3 py-3">List of places</h2>
      </v-col>
    </v-row>

    <v-row class="list__places-content">
      <v-col md="4" v-for="item in items_list" :key="item.id">

        <v-card>

          <v-img
              height="250"
              :src="item.img"
          ></v-img>

          <v-card-title>
            <router-link to="/place/view">
              <h3 class="text-h4">{{ item.title }}</h3>
            </router-link>
          </v-card-title>

          <v-card-text>
            <p class="text-body-1">{{ item.description }}</p>
          </v-card-text>

        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'MainList',
  data: () => ({
    items_list: [
      {
        id: 0,
        title: 'RIBIZA BEACH CLUB',
        description: 'Хочешь спустить свою зарплату тебе сюда!',
        img: './assets/ribiza.jpg'
      },
      {
        id: 1,
        title: 'Заведение 2',
        description: 'Lorem ipsum',
        img: './assets/restik.jpeg'
      }
    ]
  })
}
</script>
