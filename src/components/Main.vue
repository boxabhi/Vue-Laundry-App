<template>
  <div>

    <v-carousel cycle height="150" hide-delimiter-background show-arrows-on-hover>
       

      <v-carousel-item>
        <v-img class="img" src="@/assets/washing/banner.jpg"></v-img>
      </v-carousel-item>
      
      <v-carousel-item>
        <v-img class="img" src="@/assets/washing/refer.jpg"></v-img>
      </v-carousel-item>
        

         
      
       
       <router-link v-if="logged" to="/wallet">
        <v-carousel-item>
        <v-img class="img" src="@/assets/washing/banner2.jpg"></v-img>
      </v-carousel-item>
       </router-link>

        <router-link v-if="!logged" to="/login">
        <v-carousel-item>
        <v-img class="img" src="@/assets/washing/banner2.jpg"></v-img>
      </v-carousel-item>
       </router-link>
       
    </v-carousel>

  


    <v-container>
      <h4 class="text-muted text-uppercase mb-1 ">Our Plans </h4>
      <hr class="mb-4">
             <v-card light class="mx-auto mt-4  pt-5" max-width="500" 
                tile elevation="5">
            <v-row class="m-5 mx-auto pt-5 pl-5 pr-5">

                <v-col cols="4" class="p-4" v-for="plans in allPlans" :key="plans.id" >
                    <router-link :to="{path : `/offer-detail/${plans.id}` ,
                     query: { price : plans.price , description: plans.description}}" >
                    <v-avatar size="60" tile>
                    <v-img  :src="plans.image"></v-img>
                    </v-avatar>
                    <p class="overline mt-2 font-weight-bold">{{plans.name}}</p>
                    </router-link>
                </v-col>

            </v-row>
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

     <v-container>
      <h4 class="text-muted text-uppercase mb-1 ">Special Plan </h4>
      <hr class="mb-4">
      <v-card class="mx-auto d-flex m-5" elevation="8" style="padding:20px">
        <div class="p-5 d-flex mx-auto">

            <div class="p-5 d-flex mx-auto">
            <div class="ml-3">
               <v-avatar size="45" tile>
            <v-img class=" p-3" src="@/assets/washing/new/w.svg"></v-img>
               </v-avatar>
            <p class="text-center mt-1 font-weight-bold overline">Washing</p>
          </div>
           </div>
           
          <div class="mt-5 ml-2">
            <v-avatar size="15" tile class="mt-5">
            <v-img  src="@/assets/washing/new/plus.svg"></v-img>
            </v-avatar>
          </div>

 <div class="ml-3">
               <v-avatar size="45" tile>
            <v-img class=" p-3" src="@/assets/washing/new/iron.svg"></v-img>
               </v-avatar>
            <p class="text-center mt-1 font-weight-bold overline">Free Ironing</p>
          </div>
         

          <div class="mt-5 ml-2">
            <v-avatar size="15" tile class="mt-5">
            <v-img  src="@/assets/washing/new/plus.svg"></v-img>
            </v-avatar>
          </div>
            <div class="mr-1  pr-4 pl-4">
               <v-avatar size="45" tile>
            <v-img class=" p-3" src="@/assets/washing/new/wrench.svg"></v-img>
               </v-avatar>
           <p class="text-center mt-1 font-weight-bold overline">Free Services</p>
          </div>
              <div class="mt-5 mr-1">
            <v-avatar size="15" tile class="mt-5">
            <v-img  src="@/assets/washing/new/plus.svg"></v-img>
            </v-avatar>
          </div>
          <div class="m-1">
             <v-avatar size="45" tile>
            <v-img class=" p-1" src="@/assets/washing/new/water.svg"></v-img>
             </v-avatar>
           <p class="text-center mt-1 font-weight-bold overline">Free Tank Wash</p>
          </div>
         
        </div>
      </v-card>

      <div class="text-center mt-4 mb-5">
        <router-link to="/membership">
        <v-btn tile color="success"  small>Know more</v-btn>
        </router-link>
      </div>
   


   
    <v-row class="row  mb-5">


      <v-col cols="6" class="warning  text-center mx-auto">
        <v-avatar class="mx-auto text-center" tile size="80">
          <v-img class=" text-center mx-auto pt-5" src="@/assets/washing/new/job.svg"></v-img>
        </v-avatar>
        <router-link to="/jobs">
          <p class="font-weight-bold ml-2 overline mt-2 white">Job with us</p>
        </router-link>
      </v-col>


      <v-col cols="6" class="info  text-center mx-auto">
        <v-avatar class="mx-auto" tile size="80">
          <v-img class="" src="@/assets/washing/new/virus.svg"></v-img>
        </v-avatar>
        <p class="font-weight-bold mr-2 overline mt-2 white">Live Corona Cases</p>
      </v-col>
    </v-row>




 <v-container>
      <h4 class="text-muted text-uppercase mb-1 ">Services We offer </h4>
      <hr class="mb-4">
      <v-card class="mx-auto d-flex m-5" elevation="8" style="padding:20px">
        <div class="p-5 d-flex mx-auto">
          <div>
            <router-link to="/info/washing">
            <v-img class="icon p-3" src="@/assets/washing/electronics.svg"></v-img>
            <p class="text-center overline">Washing</p>
            </router-link>
          </div>
          <div class=" mr-2"></div>
          <div>
             <router-link to="/info/ironing">
            <v-img class="icon p-3" src="@/assets/washing/track-pant.svg"></v-img>
            <p class="text-center overline">Ironing</p>
             </router-link>
          </div>
           <div class="ml-2 mr-2"></div>
          <div>
             <router-link to="/info/delivery">
            <v-img class="icon p-3" src="@/assets/washing/home-delivery.svg"></v-img>
            <p class="text-center overline">Pickup</p>
             </router-link>
          </div>
           <div class="ml-2 "></div>
          <div>
             <router-link to="/info/wallet">
            <v-img class="icon p-3" src="@/assets/washing/wallet.svg"></v-img>
            <p class="text-center overline">Wallet</p>
             </router-link>
          </div>
        </div>
      </v-card>
    </v-container>

     <v-row dense>
  <v-col cols="12">
        <v-card color="#32a86f" dark>
        
          <v-card-subtitle color="white">

           One month free for all services
           Laundry + Ironing + Tank Wash
          </v-card-subtitle>

          <v-card-actions>
            <p class="container body-2">Get wash all your clothes for a month.</p>
           
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>

     <v-row dense>
      <v-col cols="12">
        <v-card color="#4485e6" dark>
          <v-card-title>
            <b>We at Kamal Wash</b>
          </v-card-title>

          <v-card-subtitle color="white" class="text-white ">

            We use better quality of detergents to clean your clothes. We prefer quality over quantity.
          </v-card-subtitle>

          <v-card-actions>
            <p class="container body-2">Get wash all your clothes for a month.</p>
            <v-btn small class="mx-auto">Buy membership</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>




 <v-card height="150">
      <v-footer absolute class="font-weight-medium">
        <v-col class="text-center" cols="12">
          <strong>Kamal Wash</strong>
        </v-col>
      </v-footer>
    </v-card>


 </v-container>

  </div>


</template>


<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  export default {
    components: {

    },
    data() {
      return {
        Products: {}
      }
    },
    created() {
      this.getProfile()
       this.fetchPlans()
    },
    computed: mapGetters(['allProducts', 'wallet', 'allPlans' , 'logged', 'total', 'carts']),
    methods: {
      ...mapActions(['getProfile' , 'fetchPlans', 'allCarts' ]),

      getImage(image){
        var str = `/assets/plan/${image}`
        return str;
      }

    },


  }
</script>


<style scoped>
  .img {
    height: 150px !important;
  }

  .icon {
    padding: 30px;
    height: 10px !important;
    width: 10px !important;
  }
</style>