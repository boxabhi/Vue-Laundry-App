<template>
    <div>
        <Appbar />
        <h2 class="text-center mt-5 mb-4 text-uppercase">Buy our membership</h2>



        <div class="text-center mt-5 pt-5 mx-auto">
            <v-img class="login-img text-center mx-auto" src="@/assets/washing/new/plans.svg"></v-img>
            <h3 class="text--disabled">No Plan found</h3>
        </div>

        <!-- <v-container>
            <v-card class="p-4" elevation="2">
            <v-list-item three-line >
                <v-list-item-content>
                    <div class="overline mb-4">Current Plan</div>
                    <v-list-item-title class="headline mb-1">Student</v-list-item-title>
                        </v-list-item-content>

                <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
                <v-btn tile class="warning">Check Details</v-btn>
            </v-card-actions>
            </v-card>
        </v-container> -->


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

        },
        data() {
            return {
                res: {},

            }
        },


        computed: mapGetters(['allPlans']),
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
                console.log(this.response)

            }
        }
    }
</script>