<template>
     <v-bottom-navigation
    v-model="bottomNav"
    
    class="p-5"
    fixed
    background-color="#1976d2"
    color="#fff"
  >
    <v-btn class="mr-5">
    
     <v-icon color="#fff">mdi-home</v-icon>
    </v-btn>

    <v-btn>
     
      <v-icon color="#fff">mdi-cart</v-icon>
    </v-btn>

    <v-btn>
      
      <v-icon color="#fff">mdi-label</v-icon>
    </v-btn>

    <v-btn>
     
      <v-icon color="#fff">mdi-google</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>