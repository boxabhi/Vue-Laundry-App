<template>
  <nav>
    <v-app-bar dark color="primary" background="white">
      <Drawer />
      <v-app-bar-nav-icon @click="drawer = !drawer">

      </v-app-bar-nav-icon>

      <v-toolbar-title>Kamal Wash</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>

      </v-btn>


      <v-badge color="green" :content="total" v-if="total" class="mr-5 ">
        <router-link to="/items">
          <v-icon>mdi-cart</v-icon>
        </router-link>
      </v-badge>


      <v-avatar size="50" tile>
        <v-img class="pt-5" src="@/assets/kamal.jpeg"></v-img>
      </v-avatar>



      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>


      </v-menu>
    </v-app-bar>
    <v-navigation-drawer app v-bind:value="drawer" color="primary" fixed>
      <div class="mx-auto text-center mt-5">
        <v-avatar class="mt-5" size="80">
          <v-img class="pt-5" src="@/assets/washing/man.svg"></v-img>
        </v-avatar>
        <p class="font-weight-bold text-center text-white mt-3 text-uppercase" style="color: #fff">{{username}}</p>
      </div>



      <div v-show="logged">
        <v-container class="mt-5 pt-5">
          <div>
            <router-link to="/wallet">
              <v-btn block tile outlined color="white">
                <v-icon>mdi-wallet</v-icon> Wallet
              </v-btn>
            </router-link>

          </div>

          <div class="mt-3">
            <router-link to="/profile">
              <v-btn block tile outlined color="white">
                <v-icon>mdi-account-circle</v-icon> Profile
              </v-btn>
            </router-link>
          </div>
          <div class="mt-3">
            <router-link to="/offer">
              <v-btn block tile outlined color="white">
                <v-icon>mdi-bell</v-icon> Offers
              </v-btn>
            </router-link>
          </div>



          <div class="mt-3">
            <router-link to="/orders">
              <v-btn block tile outlined color="white">
                <v-icon>mdi-shopping</v-icon> Orders
              </v-btn>
            </router-link>
          </div>


          <div class="mt-3">

         
              <v-btn block tile outlined color="white" @click.stop="dialog = true">
                <v-icon>mdi-share</v-icon> Share
              </v-btn>
          

            <v-dialog v-model="dialog" max-width="290">
              <v-card>
                <v-card-title >Share on</v-card-title>
    <v-container class="mx-auto text-center pb-5">
    <a :href="whatsapp" data-action="share/whatsapp/share" class="ml-5">
                 <v-avatar size="50">
                <v-icon class="success" dark>mdi-whatsapp</v-icon> 
            </v-avatar>
                </a>

                <a href="https://www.facebook.com/sharer.php?u=https://kamalwash.com/" class="ml-5">
                <v-avatar size="50">
                <v-icon class="primary" tile dark>mdi-facebook</v-icon> 
            </v-avatar>
                </a>

                
                  </v-container>
                
              </v-card>
            </v-dialog>




          </div>

          <div class="mt-3">
            <router-link to="/about">
              <v-btn block tile outlined color="white">
                <v-icon>mdi-coffee</v-icon> About
              </v-btn>
            </router-link>
          </div>


          <div class="text-center mt-5 t-5">
            <v-icon dark @click="drawer = !drawer">mdi-window-close</v-icon>
          </div>


          <v-btn block class="mt-5" @click="logout()">Logout</v-btn>
          <v-container class="text-center">
            <v-icon dark class="pr-1 mr-1">mdi-facebook</v-icon>
            <v-icon dark class="pr-1 mr-1">mdi-whatsapp</v-icon>
            <v-icon dark class="pr-1 mr-1">mdi-instagram</v-icon>
            <v-icon dark class="pr-1 mr-1">mdi-youtube</v-icon>


          </v-container>


        </v-container>

      </div>


      <v-container class="mt-5 pt-5" v-show="!logged">
        <router-link to="/login">
          <v-btn block class="mt-5">Login</v-btn>
        </router-link>
        <div class="text-center mt-5 t-5">
          <v-icon dark @click="drawer = !drawer">mdi-window-close</v-icon>
        </div>
      </v-container>


    </v-navigation-drawer>
  </nav>
</template>


<script>
  import Drawer from '@/components/utils/Drawer.vue'
  import {
    mapGetters,
    mapActions
  } from 'vuex';

  export default {
    components: {
      Drawer
    },
    computed: mapGetters(['total', 'name', 'logged', 'code']),

    data: () => ({
      drawer: false,
      item: 1,

      username: '',
      loggedIn: false,
      whatsapp: '',
      dialog: false

    }),

    methods: {
      ...mapActions(['getProfile']),
      logout() {
        this.$router.go(0);
        localStorage.removeItem('token');

      },
      check() {
        if (this.name) {
          this.username = this.name
        }
        if (localStorage.getItem('token') == null) {
          console.log('Not log')
          this.logged = false
        }
      },
      checkToken() {
        console.log("Calling checkToken")
        var token = localStorage.getItem("token")
        console.log(token)
        if (token != null) {
          this.loggedIn = true
        }
        console.log(this.loggedIn)
      },
      setWhatsapp() {
        var str = `whatsapp://send?text= Use my coupon code '${this.code}' of Kamal Wash to get 50rs. Instant cash back. 
        Kamal wash is the best laundry service provider
        Apply the above code to get 50rs in your wallet.
        link https://kamalwash.com/
        My code '${this.code}'`
        console.log(str)
        this.whatsapp = str
      }
    },
    created() {
      this.check()
      this.checkToken()
      this.getProfile()
      this.setWhatsapp();
    },

    watch: {
      logged: function () {

      }
    }

  }
</script>