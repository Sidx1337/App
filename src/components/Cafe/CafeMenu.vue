<template>
  <v-row>

    <v-col md="6">
      <v-card>

        <v-img
            height="250"
            src="restik.jpeg"
            class="d-flex align-end"
        >
          <h2 class="ml-4 mb-4 text-h3 white--text">MENU</h2>
        </v-img>

      </v-card>
    </v-col>

    <v-col md="6">
      <v-card>

        <v-card-text>

          <v-list-item-group>

            <v-list-item v-for="item in menu_items" :key="item.id">

              <v-list-item-avatar>

                <img :src="restik.jpeg" fluid />
              </v-list-item-avatar>

              <v-list-item-content>

                <v-list-item-title>

                  <h5 class="text-h5">{{ item.name }}</h5>
                </v-list-item-title>

                <v-list-item-subtitle>

                  <b>{{ item.price }}</b>
                </v-list-item-subtitle>

              </v-list-item-content>

              <v-list-item-action>

                <v-btn icon>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-list-item-action>

            </v-list-item>

          </v-list-item-group>
        </v-card-text>

      </v-card>

    </v-col>

  </v-row>
</template>

<script>
export default {
  name: 'CafeMenu',
  data: () => ({
    menu_items: [
      {
        id: 0,
        name: 'King Burger',
        img: './assets/item.png',
        price: 34.99
      },
      {
        id: 1,
        name: 'Dark Burger',
        img: './assets/item.png' +
            '',
        price: 39.99
      },
    ]
  })
}
</script>