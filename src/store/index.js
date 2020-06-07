import Vue from 'vue';
import Vuex from 'vuex';
import Products from './modules/Products';
import Cart from './modules/Cart.js'
import Profile from './modules/Profile'


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Products,
        Cart,
        Profile
        
    }
})