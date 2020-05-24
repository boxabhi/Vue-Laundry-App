<template>
    <div>
        <Appbar />
        <h2 class="text-center mt-5 mb-4 text-uppercase">Buy our membership</h2>
        <v-container>
          
            <v-card class="mx-auto mt-4" v-for="plans in allPlans" :key="plans.id" max-width="400" height="200"
                outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="overline mb-4">Membership</div>
                        <v-list-item-title class=" mb-1">{{plans.name}}</v-list-item-title>
                        <v-list-item-subtitle>{{plans.description}}.</v-list-item-subtitle>


                    </v-list-item-content>
                    <v-list-item-avatar tile size="80">
                        <v-img src="@/assets/washing/icons/membership/fashion.svg"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-card-actions>

                    <v-btn small color="success" @click="buy(plans.id)">
                        Buy now
                    </v-btn>
                    
                        <v-btn color="orange" dark small>
                            &#8377; {{plans.price}}
                            <v-icon>mdi-star</v-icon>
                        </v-btn>
                   
                </v-card-actions>
            </v-card>
            <div class="mb-5 pb-5"></div>
        </v-container>
    </div>
</template>

<script>
    import Appbar from '../components/utils/Appbar'
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
            this.fetchPlans()
        },
        data() {
            return {
                res : {},
               
            }
        },
        

        computed: mapGetters(['allPlans']),
        methods: {
            ...mapActions(['fetchPlans']),

            buy(){
               var  options= {
                    "key_id": "rzp_test_dqCdqfA4kpY2ei",
                    "key": "rzp_test_dqCdqfA4kpY2ei",
                    "currency": "INR",
                    "amount" : 49900,
                    "name": "Kamal Washers",
                    "description": "Buy MemberShip ",
                    "key_secret": "RE3Jlzenl4cfYhfdkKcOkey6",
                    "handler": function (response){
                        this.res = response
                     }
               }

               let rzp = new window.Razorpay(options);
                rzp.open();
                
                this.verifySignature();
               
            },

            verifySignature : function(){
                console.log(this.response)
            
            }
        }
    }
</script>