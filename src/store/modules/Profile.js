import axios from 'axios'


const state = {
    profile : {}
}



const getters = {
    profile(){
        return state.profile
    },
    wallet(){
        const amount = state.profile.result.wallet
        return amount
    },
    code(){
        return state.profile.result.code
    },

    name(){
        if (state.profile.result.name){
        return state.profile.result.name
        }
        return ''
    },

    logged(){
        if(localStorage.getItem('token') != null){
            console.log("token present")
            return true
        }
        return false
    }
    
}

const actions = {
    async getProfile({commit}){
            const response = await axios.get('https://kamallaundry.herokuapp.com/profile',{
                headers: {
                    Authorization: 'Token ' + localStorage.getItem('token')
                    }
            })
            console.log(response.data)
            commit('setProfile', response.data)
    }
}


const mutations = {
    setProfile : (state , profile) => (state.profile = profile),
    setLogged : (state , logged) => (state.logged = logged)
}




export default {
    state , getters , actions , mutations
}