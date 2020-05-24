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
      Fill all the fields
    </v-alert>
     </div>
        <v-text-field v-model="name" prepend-icon="mdi-account-circle" type="text" label="Enter name"></v-text-field>
        <v-text-field v-model="email" prepend-icon="mdi-account-box-outline" type="email" label="Enter email"></v-text-field>
        <v-text-field v-model="mobile" prepend-icon="mdi-whatsapp" type="number" label="Enter mobile"></v-text-field>
        <v-text-field v-model="password" prepend-icon="mdi-account-key" type="password" label="Enter password"></v-text-field>
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
                submitted : false,
            }
        },
        methods: {
            handleSubmit(e){
                console.log("submit")
                e.preventDefault()
                

                if(this.name != '' && this.password != '' && this.email != '' && this.mobile != ''){
                    console.log('Form submitted lets see!')
               var data = {
                    'name' : this.name,
                    'email' : this.email,
                    'mobile' : this.mobile,
                    'password' : this.password
                }
    console.log(data)
                axios.post('http://127.0.0.1:8000/register',data)
                .then(res => {
                    this.$router.push('/otp')
                    console.log(res.data)
                    localStorage.setItem('token' , res.data.token)
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