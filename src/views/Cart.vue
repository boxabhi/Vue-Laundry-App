<template>
  <v-container>

    <h2>This is a Cart Page</h2>

    <v-card class="mt-5">
      <v-row v-for="cart in carts" v-bind:key="cart.id">
        <v-col cols="md-1">

        </v-col>
        <v-col cols="md-2">
          <router-link :to="`/product/${cart.product.slug}`">
            <v-img :src="cart.product.image" height="200" width="100"></v-img>
          </router-link>
        </v-col>
        <v-col cols="md-2">
          <h2>{{cart.product.product}}</h2>
          <v-btn small color="error">Rs.{{cart.product.price}}</v-btn>
          <v-btn color="success" small>
            <v-icon>mdi-cart</v-icon>{{cart.product.discount}}
          </v-btn>
          <p>{{cart.product.description}}</p>
        </v-col>
        <v-col cols="md-2"></v-col>
        <v-col cols="md-4 mt-5">
          <v-btn color="primary" small>Buy Now</v-btn>
          <v-btn color="dark" small class="ml-3" @click="remove(cart.product.id)" :data-product="cart.product.id">Remove
          </v-btn>
        </v-col>

      </v-row>
    </v-card>

  </v-container>
</template>



<script>
  import axios from "axios";

  export default {
    data() {
      return {

        carts: {},
        total: 0

      }
    },
    created() {
      this.getCart()
    },
    methods: {
      async getCart() {
        const carts = await axios.get('http://127.0.0.1:8000/api/cart', {
          headers: {
            Authorization: 'Token ' + localStorage.getItem('user')
          }
        })
        this.carts = carts.data
      },
      async remove(id) {
        var data = {
          product: id
        }
        const headers = {
          Authorization: 'Token ' + localStorage.getItem('user')
        }
        const removeItem = await axios.delete('http://127.0.0.1:8000/api/cart', {
          data,
          headers
        })
        console.log(removeItem)
      }

    }
  }
</script>