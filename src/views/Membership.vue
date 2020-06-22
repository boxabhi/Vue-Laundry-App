<template>
    <div>
        <Appbar />
        <h2 class="text-center mt-5 mb-4 text-uppercase">Buy our membership</h2>



        <div class="text-center mt-5 pt-5 mx-auto" v-show="!found">
            <v-img class="login-img text-center mx-auto" src="@/assets/washing/new/plans.svg"></v-img>
            <h3 class="text--disabled">No Plan found</h3>
        </div>

        <v-container>
            <v-card class="p-4" elevation="2" v-if="plans" >
            <v-list-item three-line >
                <v-list-item-content>
                    <div class="overline mb-4">Current Plan</div>
                    <v-list-item-title class="headline mb-1">{{plans.plans.name}}</v-list-item-title>
                        </v-list-item-content>

               

                <v-list-item-avatar tile size="80" >
                    <v-img src="@/assets/washing/new/plans.svg" ></v-img>
                </v-list-item-avatar>
            </v-list-item>
            <v-container>
 <v-btn tile class="success mt-3"  small>Purchase Date : {{getDate(plans.purchaseDate)}}</v-btn><br>
    <v-btn tile class="error mt-3"  small>Expiry Date : {{getDate(plans.validity)}} </v-btn><br>
            </v-container>
            <v-card-actions>
            
                
                <!-- <v-btn tile class="warning">Check Details</v-btn> -->
            </v-card-actions>
            </v-card>
        </v-container>


    </div>
</template>

<script>
    import Appbar from '../components/utils/Appbar'
    import axios from 'axios'
    //  import axios from 'axios'
    import {
        mapGetters,
        mapActions
    } from 'vuex';
    export default {
        components: {
            Appbar
        },
        created() {
this.getActivePlans()
        },
        data() {
            return {
                res: {},
                plans : [],
                found : false

            }
        },


        computed: {
            ...mapGetters(['allPlans']), 
            
           
        },
        methods: {
            ...mapActions(['fetchPlans']),
            buy() {
                var options = {
                    "key_id": "rzp_test_dqCdqfA4kpY2ei",
                    "key": "rzp_test_dqCdqfA4kpY2ei",
                    "currency": "INR",
                    "amount": 49900,
                    "name": "Kamal Washers",
                    "description": "Buy MemberShip ",
                    "key_secret": "RE3Jlzenl4cfYhfdkKcOkey6",
                    "handler": function (response) {
                        this.res = response
                    }
                }

                let rzp = new window.Razorpay(options);
                rzp.open();

                this.verifySignature();

            },

            verifySignature: function () {
              

            },

            getActivePlans(){
                if(localStorage.getItem('token')){
 axios.get('https://kamallaundry.herokuapp.com/userplan',{
            headers: {
           Authorization: 'Token ' + localStorage.getItem('token')
           }
         })
         .then(response =>{
          
             if(response.data.status == true){
                 this.found  = true
                  this.plans = response.data.result
             }
         
          
    })
                }

            },
             getDate(date){
                var d = new Date(date);
                var real_date = d.getDate() +'-' + d.getMonth() + '-' +d.getFullYear()
                 return real_date
            }

        }
    }
</script>