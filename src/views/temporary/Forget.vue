<template>
  <div>
    <Appbar />
    <v-container>
      <div class="text-center">
        <v-img class="login-img mx-auto" src="@/assets/washing/icons/man.svg"></v-img>
      </div>

      <v-alert type="error" class="mt-5 mb-5" v-model="submitted" small>
        {{message}}
      </v-alert>

      <v-alert type="success" class="mt-5 mb-5" v-model="success" small>
        Otp Verified
      </v-alert>
      <v-text-field label="Enter registered mobile" prepend-icon="mdi-whatsapp" type="number"
       v-model="phone"
        class="mt-4"></v-text-field>

      <div class="text-center">
        <v-btn  @click="reset()" color="success">
          <v-icon left>mdi-phone</v-icon> Verify
        </v-btn>

      </div>


    </v-container>
  </div>
</template>


<script>
  import Appbar from '@/components/utils/Appbar.vue'
  import axios from 'axios'

  export default {
    components: {
      Appbar
    },
    data() {
      return {
        Products: {},
        dialog: false,
        loader: null,
        phone : '',
        submitted: false,
        success: false,
        message: ''
      }
    },
    methods: {

      reset(){
        console.log('export')
          axios.post('http://127.0.0.1:8000/forget' , {'phone' : this.phone})
          .then(res => {
            if (res.data.status == false){
               
                this.submitted = true
                this.message = "Your aren' t resgistered with us"
                 setTimeout(() =>{
                    this.submitted = false
                    },2000)
                    
            }else{
              
               localStorage.setItem('ftoken' , res.data.token)
               this.$router.push('/forget-otp')
            }
          }).catch(err => console.log(err))

      }



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
    height: 100px;
    width: 100px;
    margin-top: 80px;
  }
</style>