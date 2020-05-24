<template>

  <v-bottom-navigation  style="padding-bottom:20px;padding-top:5px" class="p-5 mt-4" fixed background-color="primary" color="#fff">
    <v-btn class="mr-5">
      <router-link to="/">
        <v-icon color="#fff" medium>mdi-home</v-icon>
      </router-link>
    </v-btn>

    <v-btn>
      <router-link to="/cart">
        <v-icon color="#fff" medium>mdi-cart</v-icon>
      </router-link>
    </v-btn>

    <v-btn>
      <router-link to="/offer">
        <v-icon color="#fff" medium>mdi-label</v-icon>
      </router-link>
    </v-btn>

     <v-btn>
      <router-link to="/membership">
        <v-icon color="#fff" medium>mdi-wallet-membership</v-icon>
      </router-link>
    </v-btn>


    <v-btn>
      <router-link to="/login">

        <v-icon color="#fff" medium>mdi-account-circle</v-icon>
      
      </router-link>

    </v-btn>
  </v-bottom-navigation>
</template>