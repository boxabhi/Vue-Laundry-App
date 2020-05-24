import axios from 'axios';

const state = {
   products : [],
   plans : [],
}

const getters  ={
     allProducts : function() {
        return state.products;
    },
    allPlans : function() {
        return state.plans;
    }
}

const actions = {
    async fetchProducts({commit}){
        const response = await axios.get('http://127.0.0.1:8000/product');
        commit('setProducts',response.data.data)
    },

    async fetchPlans({commit}){
        const response = await axios.get('http://127.0.0.1:8000/plans');
        console.log(response.data.plans)
        commit('setPlans',response.data.plans)
    }

}


const mutations ={
        setProducts :(state,products) =>(state.products = products),   
        setPlans : (state , plans)=>(state.plans = plans)  
}

export default{
    state,
    getters,
    actions,
    mutations,

}
