<template>
  <div>
    <Appbar />
    <v-container>
      <h4 class="text-center mt-5 mb-2 text-uppercase">Add to Cart</h4>
    
      <v-list subheader class="mt-5" v-for="product in allProducts" :key="product.id">

        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="`https://kamallaundry.herokuapp.com${product.image}`"></v-img>

          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-capitalize">{{product.product}}</v-list-item-title>
            <p>{{product.price}}/-</p>
          </v-list-item-content>

          <v-list-item-icon>

            <v-btn icon color="pink">
              <v-icon @click="added(product.id , product.product)">mdi-plus</v-icon>
            </v-btn>
            <v-btn color="pink" dark @click="added(product.id,product.product)">
              Add
            </v-btn>
             <v-snackbar v-model="snackbar">
      {{ text }}
      <v-btn color="pink" text >
        Close
      </v-btn>
    </v-snackbar>
            <v-btn icon color="pink" @click="remove(product.id, product.product)" v-if="total" >
              <v-icon>mdi-minus</v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

    </v-container>



    <v-bottom-sheet v-model="sheet" persistent>

      <v-sheet class="text-center" height="200px">

        <v-list-item-avatar tile size="100">
          <v-img class="login-img" src="@/assets/washing/iron.svg"></v-img>
        </v-list-item-avatar>
        <p>Item Added to Cart</p>

      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>



<script>
  // @ is an alias to /src

  import Appbar from '@/components/utils/Appbar.vue'
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  
  export default {
    name: 'Home',
    components: {
      Appbar
    },
    data: () => ({
      sheet: false,
      snackbar: false,
      text : '',
  
    }),
    created() {
      this.fetchProducts()
      this.allCarts()
    },
    computed: mapGetters(['allProducts' , 'carts' ,'total']),
    methods: {
      ...mapActions(['fetchProducts', 'allCarts']),

      added(id, product) {
        this.snackbar = true
        console.log(id , product)
        this.$store.commit('setCart' , id)
        console.log(this.carts)
        this.text = product + ' Added to Cart'
        setTimeout(() => {
          this.snackbar = false
        }, 500)
      },

      remove(id , product){
       
        this.snackbar = true
        this.$store.commit('removeCart' , id)
        this.text = product + ' Removed from Cart'
        setTimeout(()=>{
          this.snackbar = false
        } , 500)
      }
    },

  }
</script>