<template>
    <div>
        <Appbar />

            <div v-if="noitems" class="text-center mt-5 pt-5 mx-auto">
                 
                   <v-img class="login-img text-center mx-auto" src="@/assets/washing/empty.svg"></v-img>
    
                <h3 class="text--disabled">No items in Your cart</h3>
                
            </div>

            <v-container else>
            <v-card class="mx-auto mt-5 " v-for="plans in items.result" :key="plans.id" subheader
                outlined>
                <v-list-item two-line>
                    <v-list-item-content>
        
                        <v-list-item-title class="mb-1 text-uppercase">{{plans.product.product}}</v-list-item-title>
                      

                    </v-list-item-content>
                    <v-list-item-avatar tile size="40" class="mt-4">
                        <v-img :src="`https://kamallaundry.herokuapp.com${plans.product.image}`"></v-img>
                    </v-list-item-avatar>
                     
                </v-list-item>

                <v-card-actions>
<v-btn class="ma-2" outlined  fab x-small color="indigo">
      <v-icon @click="added(plans.id , plans.product)">mdi-plus</v-icon>
    </v-btn>
                    
    <v-btn class="ma-2" outlined  fab x-small color="indigo">
      <v-icon @click="remove(plans.id,plans.product)">mdi-minus</v-icon>
    </v-btn>
    {{plans.quantity}}  x  {{plans.product.price}}
                   
                </v-card-actions>
            </v-card>
<div class="mb-5 pb-5"></div>
    <v-btn rounded v-if="!noitems" @click="buy()" block color="primary" class="mt-4 mb-4" dark tile >
         Proceed to Checkout ₹ {{ items.total}}</v-btn>

<div class="mb-5 pb-5"></div>
            <div class="mb-5 pb-5"></div>
        </v-container>

 <div class="mt-5 pt-5"></div>
        
    </div>
</template>

<script>
import Appbar from '@/components/utils/Appbar.vue'
import axios from 'axios'
export default {
    components: {
      Appbar
    },
    data() {
        return {
            items : {},
            noitems : false,
            total : 0,
        }
    },
    methods: {
        getItems(){
            axios.get('https://kamallaundry.herokuapp.com/cart',{
                headers: {
               Authorization: 'Token ' + localStorage.getItem('token')
               }
             })
             .then(response =>{
               console.log(response.data.result)
               this.items = response.data
               this.total = response.data.total
               if(response.data.result.length == 0){
                   this.noitems = true
               }
             })
        },
         added(id, product) {
        this.snackbar = true
       this.$store.commit('setCart' , product.id)
        console.log(this.carts)
        this.text = product + ' Added to Cart'
        this.getItems()
        setTimeout(() => {
          this.snackbar = false
        }, 500)
      },
      remove(id , product){
        this.snackbar = true
    
        this.$store.commit('removeCart' , product.id)
        this.text = product + ' Removed from Cart'
        this.getItems()
        setTimeout(()=>{
          this.snackbar = false
        } , 500)
      },
       buy(){
           console.log(this.total)
               var  options= {
                    "key_id": "rzp_test_dqCdqfA4kpY2ei",
                    "key": "rzp_test_dqCdqfA4kpY2ei",
                    "currency": "INR",
                    "amount" : this.total * 100,
                    "name": "Kamal Washers",
                    "description": "Buy MemberShip ",
                    "key_secret": "RE3Jlzenl4cfYhfdkKcOkey6",
                    "handler": function (response){
                        this.res = response
                     }
               }

               let rzp = new window.Razorpay(options);
                rzp.open();
            
               
            },
    },
    mounted(){
        this.getItems()
    }
}
</script>