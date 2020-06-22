<template>
    <div>
        <Appbar/>
        <v-container>
        <div class="text-center">
        <v-img class="login-img mx-auto" src="@/assets/washing/icons/man.svg"></v-img>
        </div>

<v-container>
 <form @submit.prevent="handleSubmit">
     <div class="text-center">
   <v-alert type="error"  v-model="submitted">
      {{message}}
    </v-alert>
     </div>
        <v-text-field v-model="name" prepend-icon="mdi-account-circle" type="text" label="Enter name"></v-text-field>
        <v-text-field v-model="email" prepend-icon="mdi-account-box-outline" type="email" label="Enter email"></v-text-field>
        <v-text-field v-model="mobile" prepend-icon="mdi-whatsapp" type="number" label="Enter mobile"></v-text-field>
        <v-text-field v-model="password" prepend-icon="mdi-account-key" type="password" label="Enter password"></v-text-field>
        <v-text-field v-model="wallet" prepend-icon="mdi-credit-card-plus" type="text" label="Share Code"></v-text-field>
        <p v-show="submitted && !password" type="error" class="text-red">Password is required</p>
        <v-btn type="submit" block color="secondary" dark>Sign Up</v-btn>

 </form>
</v-container>
        </v-container>
    </div>
</template>

<script>
    import Appbar from '@/components/utils/Appbar.vue'
    import axios from 'axios'
    export default {
        components: {
            Appbar,
        },
        data() {
            return {
                name : '',
                mobile : '',
                email : '',
                password : '',
                wallet : '',
                submitted : false,
                message : ''
            }
        },
        methods: {
            handleSubmit(e){
              
                e.preventDefault()
                

                if(this.name != '' && this.password != '' && this.email != '' && this.mobile != ''){
                 
               var data = {
                    'name' : this.name,
                    'email' : this.email,
                    'mobile' : this.mobile,
                    'password' : this.password,
                    'code' : this.wallet
                }
 
                axios.post('https://kamallaundry.herokuapp.com/register',data)
                .then(res => {

                    if(res.data.status == false){
                        this.submitted = true
                        this.message = "Invalid code"
                         setTimeout(() =>{
                    this.submitted = false
                    },2000)
                    }else{

                    this.$router.push('/otp')
                    console.log(res.data)
                    localStorage.setItem('token' , res.data.token)
                    }
                })

                }else{
                    this.submitted = true
                    this.message = "Fill all the fields"
                    setTimeout(() =>{
                    this.submitted = false
                    },2000)
                }

            }
        }
    }
</script>

<style >
.login-img {
    height:  150px;
    width: 150px;
    margin-top : 25px;
    }
</style>