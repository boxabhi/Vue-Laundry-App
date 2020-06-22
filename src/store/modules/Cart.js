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
        return state.total
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
               console.log(response)
                commit('setCart',  response.data)
                commit('setTotal' , response.data.cart_size)
               
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
            commit('setTotal' , response.data.cart_size)
    })

    }

}


const mutations ={
  setTotal :(state,total) =>(state.total = total),
  setZero : (state ) =>(state.total = 0),     
  setCart(state,items){
            axios.post('https://kamallaundry.herokuapp.com/cart', {product : items},{
                headers: {
               Authorization: 'Token ' + localStorage.getItem('token')
               }
             })
             .then(response =>{
               console.log("i")
               console.log(response)
            
               state.cart.push(items)

               state.total = ((Object.entries(response.data.result)).length)
               

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
               state.total = ((Object.entries(response.data.result)).length)
               
             
          
         
             })
        }  ,

}

export default{
    state,
    getters,
    actions,
    mutations,

}
