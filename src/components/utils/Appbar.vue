<template>
  <v-app-bar dark color="primary" background="white">
     <Drawer  />
    <v-app-bar-nav-icon  >
     
    </v-app-bar-nav-icon>
  
    <v-toolbar-title>Kamal Washer</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>

    </v-btn>

   
    <v-badge color="green" :content="total"  v-if="total">
    <router-link to="/items">        <v-icon>mdi-cart</v-icon>
    </router-link>
    </v-badge>
         
       
    <v-menu left bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list shaped>

        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>


<script>
import Drawer from '@/components/utils/Drawer.vue'
import {
        mapGetters,
        
    } from 'vuex';
  export default {
    components: {Drawer},
     computed: mapGetters(['total']),

    data: () => ({
      drawer : null,
      item: 1,
      items: [{
          text: 'Real-Time',
          icon: 'mdi-settings'
        },
        {
          text: 'Audience',
          icon: 'mdi-account'
        },
        {
          text: 'Conversions',
          icon: 'mdi-flag'
        },
      ],
    }),
  }
</script>