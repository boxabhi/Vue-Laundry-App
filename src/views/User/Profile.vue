<template>
    <div>
        <Appbar />

        <v-container class="mx-auto">
            <v-img class="login-img text-center mx-auto" src="@/assets/washing/man.svg"></v-img>

            <v-container>
                <form @submit.prevent="handleSubmit">
                    <div class="text-center">
                        <v-alert type="warning" v-model="submitted">
                            Profile Updated
                        </v-alert>
                    </div>
                    <v-text-field v-model="profile.result.user.email" prepend-icon="mdi-account-box-outline"
                        type="email" disabled></v-text-field>
                    <v-text-field v-model="profile.result.mobile" prepend-icon="mdi-phone" type="number" disabled>
                    </v-text-field>

                    <!-- <div class="d-flex text-center mx-auto">
                        <v-icon>mdi-human-greeting</v-icon>
                        <v-radio class="ml-5" check label="Male" color="green" value="true"></v-radio>

                        <v-radio class="ml-5" label="Female" color="green" value="female"></v-radio>

                    </div> -->
                    <v-text-field v-model="housenumber" :value="profile.shipping.housenumber"
                        prepend-icon="mdi-google-maps" type="txt" label="House number">
                    </v-text-field>


                    <v-text-field v-model="street" :value="profile.shipping.street" prepend-icon="mdi-home-map-marker"
                        type="txt" label="Street">
                    </v-text-field>

                    <v-select v-model="e1" :items="states" menu-props="auto" label="Select" hide-details
                        prepend-icon="mdi-map" single-line></v-select>


                    <v-text-field v-model="pincode" :value="profile.shipping.pincode" prepend-icon="mdi-yeast"
                        type="txt" label="Pincode">
                    </v-text-field>

                    <v-text-field v-model="alternate" :value="profile.shipping.alternate" prepend-icon="mdi-whatsapp"
                        type="number" label="Alternate mobile">
                    </v-text-field>

                    <v-text-field v-model="wallet" prepend-icon="mdi-credit-card-plus" type="text" label="Share Code">
                    </v-text-field>
                    <v-btn type="submit" tile block color="success" dark>Update</v-btn>

                </form>
                <div class="mb-5 pb-5"></div>
            </v-container>

            <div class="mb-5 pb-5"></div>

        </v-container>
    </div>
</template>

<script>
    import Appbar from '@/components/utils/Appbar.vue'
    import axios from 'axios'
    import {
        mapGetters,
        mapActions
    } from 'vuex';
    export default {
        components: {
            Appbar
        },
        data() {
            return {
                wallet: '',
                street: '',
                housenumber: '',
                alternate: '',
                pincode: '',
                submitted: false,
                states : ['Gorakhpur' , 'Lucknow' , 'Kanpur' , 'Varanasi' , 'Sahjanwa' ]
            }
        },
        computed: mapGetters(['profile', 'code']),
        created() {
            this.getProfile()
        },
        methods: {
            ...mapActions(['getProfile']),
            handleSubmit(e) {
                e.preventDefault()

                axios.post('https://kamallaundry.herokuapp.com/profile', {
                        'wallet': this.code,
                        'street': this.street,
                        'housenumber': this.housenumber,
                        'alternate': this.alternate,
                        'pincode': this.pincode

                    }, {
                        headers: {
                            Authorization: 'Token ' + localStorage.getItem('token')
                        }
                    })
                    .then(res => {
                        console.log(res)
                        this.submitted = true
                        setTimeout(() => {
                            this.$router.push('/')
                        }, 2000)

                    }).catch(err => {
                        console.log(err)
                    })

            }
        },
    }
</script>