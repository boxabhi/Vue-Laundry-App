import axios from 'axios'

const state = {
   cart : [],
   total :0
}

const getters  ={
     carts : function() {
        return state.cart;
    },
    total : function() {   
        return state.cart.length
    }
}

const actions = {
    async addCart({commit}){
        axios.get('http://127.0.0.1:8000/cart',{
                headers: {
               Authorization: 'Token ' + localStorage.getItem('token')
               }
             })
             .then(response =>{
                commit('setCart',  response.data)
        })
        
    },
    async allCarts({commit}){
        axios.get('http://127.0.0.1:8000/cart',{
            headers: {
           Authorization: 'Token ' + localStorage.getItem('token')
           }
         })
         .then(response =>{
            commit('setCart',  response.data.result);
    })

    }

}


const mutations ={
        setCart(state,items){
            axios.post('http://127.0.0.1:8000/cart', {product : items},{
                headers: {
               Authorization: 'Token ' + localStorage.getItem('token')
               }
             })
             .then(response =>{
               console.log(response)
             })
           

            state.cart.push(items)
        },   
        removeCart(state, items){
            axios.delete('http://127.0.0.1:8000/cart', {
                data : {product : items},
                headers: {
               Authorization: 'Token ' + localStorage.getItem('token')
               }
             })
             .then(response =>{
               console.log(response)
               
             })

           
        }  
}

export default{
    state,
    getters,
    actions,
    mutations,

}
