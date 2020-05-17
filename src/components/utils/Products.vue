<template>

    <v-responsive>
        <h2>Product</h2>

    
        <v-row>
            <v-col cols="12" sm="3" v-for="product in products" :key="product.id">
                <v-card class="mx-auto my-4" width="300" height="350" elevation="8">
                    <v-img :src="product.image" height="200px"></v-img>

                    <v-card-title>
                        <h5> {{product.product}}</h5>

                        <h5>Quantity -
                            {{product.quanity}}

                        </h5>


                        <div class="my-2">
                            <v-btn small color="primary" dark> Price - {{product.price}} | Discount -
                                {{product.discount}} </v-btn>

                        </div>


                        <div class="text-center">
                            <v-btn depressed color="success" v-on:click="addtoCart(product.id)">Add to cart</v-btn>
                        </div>
                    </v-card-title>

                </v-card>
            </v-col>
        </v-row>

    </v-responsive>

</template>

<script>
    import axios from "axios"
    export default {
        props: ['products'],
        data() {
            return {
                
            }
        },
        computed: {

        },
        methods: {

            async addtoCart(id) {
                var data = {
                    product: id,

                }
                const headers = {
                    'Authorization': 'Token ' + localStorage.getItem('user')
                }
                console.log(headers)
                const res = await axios.post('http://127.0.0.1:8000/api/cart', data, {
                    headers: headers,

                })

                console.log(res.data)

                // console.log(localStorage.getItem('user'))

            }
        }
    }
</script>