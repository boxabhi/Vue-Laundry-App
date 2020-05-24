<template>
  <div>
    
    <v-carousel cycle height="150" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item>
        <v-img class="img" src="@/assets/washing/banner.jpg"></v-img>
      </v-carousel-item>
      <v-carousel-item>
        <v-img class="img" src="@/assets/washing/banner2.jpg"></v-img>
      </v-carousel-item>
    </v-carousel>


    <v-container>
      <h4 class="text-muted text-uppercase mb-1 ">Services We offer</h4>
      <hr class="mb-4">
      <v-card class="mx-auto d-flex m-5" elevation="8" style="padding:20px">
        <div class="p-5 d-flex mx-auto">
          <div>
            <v-img class="icon p-3" src="@/assets/washing/electronics.svg"></v-img>
            <p class="text-center">Washing</p>
          </div>
          <div>
            <v-img class="icon p-3" src="@/assets/washing/track-pant.svg"></v-img>
            <p class="text-center">Ironing</p>
          </div>
          <div>
            <v-img class="icon p-3" src="@/assets/washing/home-delivery.svg"></v-img>
            <p class="text-center">Pickup</p>
          </div>
          <div>
            <v-img class="icon p-3" src="@/assets/washing/wallet.svg"></v-img>
            <p class="text-center">Wallet</p>
          </div>
        </div>
      </v-card>
    </v-container>


    <v-container class="mx-auto">


      <h4 class="text-muted text-uppercase mb-1 ">We wash Everything</h4>
      <hr class="mb-4">

      <v-avatar size="52">
        <v-img src="@/assets/washing/jeans.svg"></v-img>
      </v-avatar>


      <v-avatar size="52">
        <v-img src="@/assets/washing/t-shirt.svg"></v-img>
      </v-avatar>


      <v-avatar size="58">
        <v-img src="@/assets/washing/plain-round-neck-t-shirt.svg"></v-img>
      </v-avatar>

      <v-avatar size="52">
        <v-img src="@/assets/washing/track-pant.svg"></v-img>
      </v-avatar>


      <v-avatar size="52" elevation="5">
        <v-img src="@/assets/washing/shorts.svg"></v-img>
      </v-avatar>

      <v-avatar size="52" elevation="5">
        <v-img src="@/assets/washing/garment.svg"></v-img>

      </v-avatar>




    </v-container>


    <v-row dense>
      <v-col cols="12">
        <v-card color="#4485e6" dark>
          <v-card-title>
            <b>We at Kamal Dry Cleaners</b>
          </v-card-title>

          <v-card-subtitle color="white">

            We use better quality of detergents to clean your clothes. We prefer quality over quantity.
          </v-card-subtitle>

          <v-card-actions>
            <p class="container body-2">Pay only 999/- and wash all your clothes for a month.</p>
            <v-btn small class="mx-auto">Buy membership</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>

    <v-container>
      <h2 class="font-weight-bold">Active Orders</h2>


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



    <div class="m-5 p-5"></div>


  </div>


</template>


<script>
  
  export default {
    components: {
     


    },
    data() {
      return {
        Products: {}
      }
    },
    methods: {

    },
    created() {}

  }
</script>


<style scoped>
  .img {
    height: 150px !important;
  }

  .icon {
    padding: 30px;
    height: 80px;
    width: 80px;
  }
</style>