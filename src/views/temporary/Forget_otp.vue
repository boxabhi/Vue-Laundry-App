<template>
<div>
   <Appbar />
    <v-container>
        <div class="text-center">
        <v-img class="login-img mx-auto" src="@/assets/washing/icons/water.svg"></v-img>
        </div>

         <v-alert type="error" class="mt-5 mb-5" v-model="submitted" small>
     Wrong OTP
    </v-alert>

     <v-alert type="success" class="mt-5 mb-5" v-model="success" small>
     Otp Verified
    </v-alert>
        <v-text-field label="Enter Otp" v-model="otp" class="mt-4" ></v-text-field>

<div class="text-center">
        <v-btn :loading="loading"
      :disabled="loading" @click="check()"     color="success">
      <v-icon left>mdi-phone</v-icon> Verify Otp
    </v-btn>

    <v-btn class="ml-5" :disabled="loading" @click="resend()"  color="primary">
      <v-icon left>mdi-key-minus</v-icon> Resend Otp
    </v-btn>
</div>


    </v-container>
</div>
</template>


<script>
import Appbar from '@/components/utils/Appbar.vue'
import axios from 'axios'

    export default {
        components: {Appbar
        },
        data() {
            return {
                Products: {},
                dialog: false,
                loader: null,
                loading: false,
                otp : '',
                submitted: false,
                success : false
            }
        },
        methods: {
          check(){
            
            axios.post('http://127.0.0.1:8000/forget-otp',{otp : this.otp},{
                 headers: {
                Authorization: 'Token ' + localStorage.getItem('ftoken')
                }
              })
              .then(response =>{
              
                if(response.data.status == true){
                  this.success = true
                  setTimeout(()=>{
                    this.$router.push('/password')
                  },2000)
                  
                }
                
                if(response.data.status == false){
                  this.submitted = true
                  setTimeout(() =>{
                    this.submitted = false
                  },3000)
                }

              }).catch(err => console.log(err))

          },
            resend(){
            
              axios.get('https://kamallaundry.herokuapp.com/otp',{
                 headers: {
                Authorization: 'Token ' + localStorage.getItem('ftoken')
                }
              })
              .then(response =>{
                console.log(response)
              })
            }
        },
        created() {}
        , watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },

    }
</script>


<style scoped>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .login-img {
        height:  100px;
    width: 100px;
    margin-top : 80px;
    }
</style>

