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
       
        <v-btn  tile  color="success" class="p-5" @click.stop="dialog = true">
  
   <v-icon>mdi-share</v-icon> Share
   </v-btn>
      
    </div>


            <v-dialog v-model="dialog" max-width="290">
              <v-card>
                <v-card-title >Share on</v-card-title>
    <v-container class="mx-auto text-center pb-5">
    <a :href="whatsapp" data-action="share/whatsapp/share" class="ml-5">
                 <v-avatar size="50">
                <v-icon class="success" dark>mdi-whatsapp</v-icon> 
            </v-avatar>
                </a>

                <a href="https://www.facebook.com/sharer.php?u=https://kamalwash.com/" class="ml-5">
                <v-avatar size="50">
                <v-icon class="primary" tile dark>mdi-facebook</v-icon> 
            </v-avatar>
                </a>

                
                  </v-container>
                
              </v-card>
            </v-dialog>

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
  data() {
    return {
       whatsapp: '',
      dialog: false
    }
  },
    components: {Appbar},
    computed: mapGetters([ 'wallet', 'code' ]),
    created() {
        this.getProfile()
         this.setWhatsapp();
    },
    methods: {
       ...mapActions(['getProfile']),
        setWhatsapp() {
        var str = `whatsapp://send?text= Use my coupon code '${this.code}' of Kamal Wash to get 50rs. Instant cash back. 
        Kamal wash is the best laundry service provider
        Apply the above code to get 50rs in your wallet.
        link https://kamalwash.com/
        My code '${this.code}'`
        console.log(str)
        this.whatsapp = str
      }
    },
}
</script>