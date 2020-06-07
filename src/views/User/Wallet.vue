<template>
    <div>
        <Appbar />
        <v-container class="mx-auto">
             <v-img  class="login-img text-center mx-auto" src="@/assets/washing/wall.svg"></v-img>
        
         <div class="text-center mt-3">
             <v-btn tile  color="success" outlined><v-icon>mdi-gas-station</v-icon> {{wallet}} ₹ </v-btn> 
         </div>
            <h3 class="text--disabled text-center mt-4">Every reffral gives you 50 ₹ <br> refer more and earn more.</h3>
            
            <div class="text-center">
          <p>Your Unique code</p>


          <v-btn tile  color="indigo" outlined>{{code}}</v-btn> 
            </div>
          
    <div class="text-center mt-5">
        <a href="whatsapp://send?text=Use My coupon code of Kamal Wash to get 50rs. instant cash back. Kamal wash is the best laundry service provider. 
          link https://kamalwash.com/
        " data-action="share/whatsapp/share">
        <v-btn  tile  color="success" class="p-5">
  
   <v-icon>mdi-share</v-icon> Share
   </v-btn>
        </a>
    </div>


        </v-container>
    </div>
</template>

<script>
 import Appbar from '@/components/utils/Appbar.vue'
   import {
    mapGetters,
    mapActions
  } from 'vuex';
export default {
    components: {Appbar},
    computed: mapGetters([ 'wallet', 'code' ]),
    created() {
        this.getProfile()
    },
    methods: {
       ...mapActions(['getProfile']),
    },
}
</script>