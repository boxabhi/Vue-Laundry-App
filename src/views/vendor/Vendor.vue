<template>
    <v-container>
        <h2>Vendor Register</h2>

        <v-row class="mt-5">
            <v-col cols="md-5 sm-12">
                <form>
   
    <v-text-field
      v-model="email"
     
      label="E-mail"
      required
    
    ></v-text-field>

     <v-text-field
      v-model="password"
      label="Password"
      type="password"
      required
    
    ></v-text-field>
   
   
   <v-btn
      tile 
      color="red"
      class="ma-2 text-white"
      :loading="loading"
      :disabled="loading"
      
      @click="register()"
    >
     Register
    </v-btn>
    
  </form>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import axios from "axios"
export default {
    data () {
      return {
        loader: null,
        loading: false,
        email : '',
        password : ''
      }
    },
    methods : {
       async register () {
           console.log('click register')
            const l = this.loader
        this[l] = !this[l]

       
           var data = {
               email : this.email,
               password : this.password
           }
             await axios.post('http://127.0.0.1:8000/register',data).then(
                 response => {
                     console.log(response)
                 }
             )
        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
        }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
}
</script>


<style>
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
</style>