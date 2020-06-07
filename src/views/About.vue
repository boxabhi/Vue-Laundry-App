<template>
    <div>
        <Appbar />
        <v-container class="mt-5">
            <div class="mx-auto text-center">
                <v-avatar size="80" tile>
              <v-img class=" p-3" src="@/assets/washing/new/w.svg"></v-img>
                </v-avatar>
            </div>
        <p class="container mt-5">
          KamalWashers.com is an Online Laundry portal which is destined to meet your day today's Laundry needs. The portal is started by two aspiring entrepreneurs. The desire to facilitate flexible, easy and comfortable services to our customers has given the birth of the idea of having an online laundry portal. We are committed to deliver best services to our customers.

Our aim is to help the women, men and working ladies who have to spend lots of their time in purchasing daily Laundry, now they can order it only in a click. We love to serve you, so just hit our website and order your first laundry from us.

    </p>					

        
     
          <div class="text-center">
          <v-btn tile color="success"  small>View T & C</v-btn>
          </div>

        </v-container>
    </div>
</template>


<script>
 import Appbar from '../components/utils/Appbar'
export default {
    components: { Appbar}
}
</script>