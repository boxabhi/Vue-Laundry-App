<template>
    <div>
        <Appbar />

            <div class="container text-center">

                <div class="panel pricing-table">
                    <h3 class="text-center mb-5 mt-5">School Plan</h3>
                    
                    <p class="text-uppercase"> 1. {{description}} </p>
                    

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
   
    export default {
         props: ['msg'],
       name: 'Home',
        components: {
            Appbar
        },
        data() {
            return {
              description: '',
                options: {
                    "key_id": "rzp_live_XE4YGCnGDU5OWX",
                    "key": "Lh5cC4o2qVVVEV7kH89R49jj",
                    "amount": "50000",
                    "currency": "INR",
                    "name": "Kamal Wash",
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
            this.description = this.$route.query.description
            
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
                    "amount": 0,
                    "name": "Kamal Washers",
                    "description": "Buy MemberShip ",
                    "key_secret": "RE3Jlzenl4cfYhfdkKcOkey6",
                    "handler": function (response) {
                        this.res = response
                    }
                }
                options['amount'] = this.$route.query.price * 100
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
