<template>
    <div>
        <Appbar />



      

            <div class="container text-center">

                <div class="panel pricing-table">
                    <h3 class="text-center mb-5 mt-5">School Plan</h3>
                    
                    <p> 1. Free shipping </p>
                    

                    <div class="text-center mx-auto">
                    <v-btn small class="mt-5" color="success" @click="buy(1)">
                        Buy now
                    </v-btn>

</div>
                </div>

            </div>
        </div>
    
</template>


<script>
    import Appbar from '@/components/utils/Appbar.vue'
    //  import Razorpay from 'razorpay'
    export default {
        name: 'Home',
        components: {
            Appbar
        },
        data() {
            return {

                options: {
                    "key_id": "rzp_test_dqCdqfA4kpY2ei",
                    "key": "rzp_test_dqCdqfA4kpY2ei",
                    "amount": "50000",
                    "currency": "INR",
                    "name": "Acme Corp",
                    "description": "Test Transaction",
                    "key_secret": "RE3Jlzenl4cfYhfdkKcOkey6",
                    "handler": function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
                }

            }
        },
        created() {

        },
        methods: {
            async razor() {
                let rzp = new window.Razorpay(this.options);
                rzp.open();

            },
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
