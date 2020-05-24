<template>
  <div>
    <Appbar />



    <div class="p-10">
      <v-img class="login-img" src="@/assets/washing/img.jpg"></v-img>
    

     

      <v-card elevation="5" class="p-5">
         <v-container v-if="loggedIn" class="mt-5 pt-5"> 
        <v-btn  block color="primary" dark @click="logout()"  >Logout</v-btn>
        </v-container>

        <v-container v-if="!loggedIn">

          <v-img class="google mx-auto mb-4 mt-4" src="@/assets/washing/icons/google.png"></v-img>

  <router-link to="/signin">
          <v-btn class="ma-2" @click.stop="dialog = true" block outlined color="primary">Login</v-btn>
  </router-link>
      <router-link to="/signup">
      <v-btn class="ma-2" block color="primary" dark>Register</v-btn>
      </router-link>
        </v-container>

      </v-card>
    </div>

  </div>
</template>


<script>
  import Appbar from '@/components/utils/Appbar.vue'

  export default {
    components: {
      Appbar,
    },
    data() {
      return {
        Products: {},
        dialog: false,
        loggedIn : false,
      }
    },
    methods: {
      logout(){
          localStorage.removeItem("token")
          this.loggedIn = false
      },
        checkToken(){
          console.log("Calling checkToken")
          var token = localStorage.getItem("token")
          console.log(token)
          if(token != null){
              this.loggedIn = true
          }
          console.log(this.loggedIn)
        }
    },
    created(){
        this.checkToken()
    }

  }
</script>



<style scoped>
  .google {
    height: 35px;
    width: 180px
  }

  .login-img {
    /* height:  250px;
    width: 200px;
    margin: 0px auto; */
  }
</style>