import axios from 'axios';

const state = {
   plans : []
}

const getters  ={
     allPlans : function() {
         console.log("Plans Called")
        return state.plans;
    }
}

const actions = {
    async fetchPlans({commit}){
        const response = await axios.get('http://127.0.0.1:8000/plans');
        
        commit('setPlans',response.data.data)
    },

}


const mutations ={
        setPlans :(state,plans) =>(state.plans = plans),     
}

export default{
    state,
    getters,
    actions,
    mutations,

}
