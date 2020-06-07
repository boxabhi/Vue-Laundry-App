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
        axios.get('https://kamallaundry.herokuapp.com/cart',{
                headers: {
               Authorization: 'Token ' + localStorage.getItem('token')
               }
             })
             .then(response =>{
                commit('setCart',  response.data)
        })
        
    },
    async allCarts({commit}){
        axios.get('https://kamallaundry.herokuapp.com/cart',{
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
            axios.post('https://kamallaundry.herokuapp.com/cart', {product : items},{
                headers: {
               Authorization: 'Token ' + localStorage.getItem('token')
               }
             })
             .then(response =>{
               console.log(response)
               state.cart.push(items)
             }).catch(err => console.log(err))
           

            
        },   
        removeCart(state, items){
            axios.delete('https://kamallaundry.herokuapp.com/cart', {
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
