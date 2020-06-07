<template>
  <v-app>
    
    <router-view/>
   
    <Navbar />
    
  </v-app>
</template>


<script>
import Navbar from './components/utils/Navbar'


export default {
  components:{
    Navbar,
  
  }
}
</script>