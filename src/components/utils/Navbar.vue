<template>

  <v-bottom-navigation  style="padding-bottom:20px;padding-top:5px" class="p-5 mt-4" fixed background-color="primary" color="#fff">
    
      <router-link to="/" class="noHover">
       <v-btn class="font-weight-bold noHover"  style="color:#fff !important">
        Home
        <v-icon color="#fff"  medium>mdi-home</v-icon>
        </v-btn>
      </router-link>

   

    
      <router-link to="/cart" class="noHover">
      <v-btn class="font-weight-bold noHover"  style="color:#fff !important">
        Order
        <v-icon color="#fff" class="noHover" medium>mdi-cart</v-icon>
      </v-btn>
      </router-link>
    

    
      <router-link to="/offer">
       <v-btn class="font-weight-bold"  style="color:#fff !important">
        Offers
        <v-icon color="#fff" medium>mdi-label</v-icon>
       </v-btn>
      </router-link>
    

    
      <router-link to="/membership">
       <v-btn class="font-weight-bold"  style="color:#fff !important">
        My Plan
        <v-icon color="#fff" medium>mdi-wallet-membership</v-icon>
       </v-btn>
      </router-link>
   


   
      <router-link to="/login">
 <v-btn class="font-weight-bold"  style="color:#fff !important">
        Account
        <v-icon color="#fff" medium>mdi-account-circle</v-icon>
 </v-btn>
      </router-link>

    
  </v-bottom-navigation>
</template>


<style scoped>
.noHover{
    background: #1976d2 !important;
}
.noHover :hover{
    background: #1976d2 !important;
}
router-link{
  background :none !important;
}
router-link:hover{
  background :none !important;
}
v-btn {
  background : none !important;
}
v-btn :hover {
  background : #1976d2 !important;
}
</style>