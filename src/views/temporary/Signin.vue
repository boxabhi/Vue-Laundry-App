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
     Wrong Password
    </v-alert>
     </div>
        <v-text-field v-model="email" prepend-icon="mdi-account-box-outline" type="email" label="Enter email"></v-text-field>
        <v-text-field v-model="password" prepend-icon="mdi-account-key" type="password" label="Enter password"></v-text-field>
        <p v-show="submitted && !password" type="error" class="text-red">Password is required</p>
        
       <router-link to="/forget"> <p>Foget Password?</p></router-link>

        <v-btn type="submit" block color="secondary" dark>Login</v-btn>

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
               
                email : '',
                password : '',
                submitted : false,
            }
        },
        methods: {
            handleSubmit(e){
                e.preventDefault()
                if(this.password != '' && this.email != '' ){
                    console.log('Form submitted lets see!')
               var data = {
                   
                    'username' : this.email,
                
                    'password' : this.password
                }
    console.log(data)
   
                axios.post('https://kamallaundry.herokuapp.com/token',data)
                .then(res => {
                    this.$router.push('/')
                this.$router.go(0);
                    localStorage.setItem('token' , res.data.token)
                }).catch(err => {
                    if(err.response.status){
                            this.submitted = true
                    setTimeout(() =>{
                    this.submitted = false
                    },2000)
                    }
                    console.log(err.response.status)
                })

                }else{
                    this.submitted = true
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