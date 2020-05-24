<template>
  <div class="home">
    <Appbar />
    <Main />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue'
import Appbar from '@/components/utils/Appbar.vue'
import {
    mapGetters,
    mapActions
  } from 'vuex';
export default {
  name: 'Home',
  components: {
    Main,Appbar
  },
   created(){
    this.fetchProducts()
  },
  computed: mapGetters(['allProducts']),
  methods : {
     ...mapActions(['fetchProducts']),
  },
 
}
</script>
