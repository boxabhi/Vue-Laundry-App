<template>
  <div>
    <Appbar />

    <div class="text-center mt-5 pt-5 mx-auto" v-if="orders.length <= 0">
      <v-img class="login-img text-center mx-auto" src="@/assets/washing/icons/order.svg"></v-img>
      <h3 class="text--disabled">You don't have any orders yet</h3>
    </div>

    <v-container v-if="orders.length > 0">
      <h2 class="text-center mt-5">Active Orders</h2>


      <v-list>
        <template>
          <v-subheader></v-subheader>

          <v-divider></v-divider>
          <v-list-item v-for="n in 4" v-bind:key="n">

            <v-list-item-avatar>
              <v-img src="@/assets/washing/icons/interface.svg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title> Order No - #199233</v-list-item-title>
              <p class="text-primary" color="red">Order Confirmed</p>
            </v-list-item-content>

            <v-avatar tile color="blue">
              <v-icon dark>mdi-delete</v-icon>
            </v-avatar>

          </v-list-item>
        </template>
      </v-list>

    </v-container>

  </div>
</template>

<script>
  import Appbar from '@/components/utils/Appbar.vue'
  export default {
    components: {
      Appbar
    },
    data() {
      return {
        orders: []
      }
    }
  }
</script>