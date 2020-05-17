<template>
     <v-bottom-navigation
    v-model="bottomNav"
    shift
    class="p-5"
  >
    <v-btn class="mr-5">
    
    <v-img src="@/assets/washing/icons/home.png"></v-img>
    </v-btn>

    <v-btn>
     
      <v-icon>mdi-cart</v-icon>
    </v-btn>

    <v-btn>
      
      <v-icon>mdi-label</v-icon>
    </v-btn>

    <v-btn>
     
      <v-icon>mdi-google</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>