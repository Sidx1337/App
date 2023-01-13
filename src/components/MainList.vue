
<template>
  <v-container>
    <!--button type="submit" class="btn mt-4" v-on:click="oneDay">1 День</button-->
    <hr class="hr-circle">

      <!--v-btn type="submit" class="mt-4" color="white">Популярные</v-btn-->


    <DayButtons></DayButtons>

    <hr class="hr-circle">

    <v-row class="list__places-title">
      <v-col>
        <h2 class="text-center text-h3 py-3">ГОРОДА</h2>
      </v-col>
    </v-row>

    <hr class="hr-circle">

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
import DayButtons from "./DayButtons.vue";

export default {
  name: 'MainList',
  components: {
    DayButtons
  },
  data: () => ({
    items_list: [
      {
        id: 0,
        title: 'CИМФЕРОПОЛЬ',
        description: 'ГОРОД СОБИРАТЕЛЬ',
        img: './assets/simferopol.jpg'
      },
      {
        id: 0,
        title: 'СЕВАСТОПОЛЬ',
        description: 'ГОРОД ГЕРОЙ',
        img: './assets/sevastopol.jpg'
      },
      {
        id: 1,
        title: 'ЕВПАТОРИЯ',
        description: 'ГОРОД',
        img: './assets/evpatoria.jpg'
      },
      {
        id: 2,
        title: 'ЯЛТА',
        description: 'ГОРОД СЧАСТЬЯ',
        img: './assets/yalta.jpg'
      },
      {
        id: 3,
        title: 'КЕРЧЬ',
        description: 'ГОРОД ГЕРОЙ',
        img: './assets/kerch.jpg'
      },
      {
        id: 4,
        title: 'CУДАК',
        description: 'ГОРОД',
        img: './assets/sudak.jpg'
      },
    ]
  })
}
</script>

<style>
.hr-circle {
  margin: 20px 0;
  padding: 0;
  height: 0;
  border: none;
  border-width: 0 0 5px;
  border-style: solid;
  border-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 1" width="8" height="4"><circle fill="orange" cx="1" cy="0.5" r="0.5"></circle></svg>') 0 0 100% repeat;
  background-position: 50%;
  box-sizing: border-box;
  color: orange;
}
</style>
