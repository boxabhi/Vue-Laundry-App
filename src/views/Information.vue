<template>
    <div>
        <Appbar />

       
        <v-container class="mt-5" v-show="$route.params.service == 'delivery'">
            <div class="mx-auto text-center">
                 <v-img class=" p-3" src="@/assets/washing/images/delivery.jpeg"></v-img>
              
            </div>

              <h3 class="mt-5  text-center">Delivery</h3>

        <p class="container mt-5">
		1. We take utmost care of your clothes, segregating based on the cloth type and giving you instant clothes to make a statement.
        </p>					

        <p class="container"> 
            2. Free pick-up and delivery at your doorsteps so that you can enjoy hassle-free laundry services.
							
        </p>

        </v-container>

          <v-container class="mt-5" v-show="$route.params.service == 'ironing'">
            <div class="mx-auto text-center">
            
              <v-img class=" p-3" src="@/assets/washing/images/cloth-ironing.jpeg"></v-img>
              
            </div>

    <h3 class="mt-5  text-center">Ironing</h3>

        <p class="container mt-5">
		1. We use top quality press to give you wrinkle free ironing.
        </p>					

        <p class="container"> 
        2. We use the best in class products, to assure that your favorite clothes are always there for you to wear.				
        </p>

        <p class="container">
            3. Tired of doing laundry process? if so you are going to love our  service.
        </p>

        </v-container>



          <v-container class="mt-5" v-show="$route.params.service == 'washing'">
            <div class="mx-auto text-center">
            
              <v-img class=" p-3" src="@/assets/washing/images/cloth-washing.jpeg"></v-img>
              
            </div>

    <h3 class="mt-5  text-center">Washing</h3>

        <p class="container mt-5">
		1. We use top quality detergents to wash your clothes.
        </p>					

        <p class="container"> 
        2. We use the best in class products, to assure that your favorite clothes are always there for you to wear.				
        </p>

        <p class="container">
            3. Tired of doing laundry process? if so you are going to love our wash and fold service.
        </p>

        <p class="container">
            4. We use various best available technology and machines for your favourite garments.
        </p>

        </v-container>



        <v-container class="mt-5" v-show="$route.params.service == 'wallet'">
            <div class="mx-auto text-center">
            
              <v-img class=" p-3" src="@/assets/washing/images/earn.jpeg"></v-img>
              
            </div>

    <h3 class="mt-5  text-center">Wallet</h3>

        <p class="container mt-5">
		1. Refer and earn.
        </p>					

        <p class="container"> 
        2. When you refer you get 50rs. in your wallet.				
        </p>

       
        </v-container>

        <div class="mt-5 mb-5 pt-5 pb-5"></div>


    </div>
</template>


<script>
 import Appbar from '../components/utils/Appbar'
export default {
    components: { Appbar}
}
</script>