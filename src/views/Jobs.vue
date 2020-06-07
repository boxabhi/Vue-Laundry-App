<template>
    <div>
        <Appbar />
        <p class="text-center mt-5">Jobs at Kamal Washers</p>

        <v-container>
         <v-list>
        <template>
        

         
<v-card tile elevation="1">
          <v-list-item>

            <v-list-item-avatar tile elevation="3">
              <v-img src="@/assets/washing/new/taxi.svg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="font-weight-bold"> Driver</v-list-item-title>
            </v-list-item-content>

          </v-list-item>
</v-card>

<v-card tile elevation="1">
             <v-list-item>

            <v-list-item-avatar tile>
              <v-img src="@/assets/washing/new/washer.svg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="font-weight-bold"> Cloth Washer</v-list-item-title>
            </v-list-item-content>


          </v-list-item>
</v-card>


<v-card tile elevation="1">
          
             <v-list-item>

            <v-list-item-avatar tile>
              <v-img src="@/assets/washing/new/delivery.svg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="font-weight-bold"> Delivery boy</v-list-item-title>
            </v-list-item-content>

          </v-list-item>
</v-card>





<v-card tile elevation="1">
          
             <v-list-item>

            <v-list-item-avatar tile>
              <v-img src="@/assets/washing/new/iron.svg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">Ironing</v-list-item-title>
            </v-list-item-content>

          </v-list-item>
</v-card>

<v-card tile elevation="1">
          
             <v-list-item>

            <v-list-item-avatar tile>
              <v-img src="@/assets/washing/new/accounting.svg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">Accounting</v-list-item-title>
            </v-list-item-content>

          </v-list-item>
</v-card>

<v-card tile elevation="1">
          
             <v-list-item>

            <v-list-item-avatar tile>
              <v-img src="@/assets/washing/new/calling.svg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">Caller</v-list-item-title>
            </v-list-item-content>

          </v-list-item>
</v-card>


<v-card tile elevation="1">
          
             <v-list-item>

            <v-list-item-avatar tile>
              <v-img src="@/assets/washing/new/others.svg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">Others</v-list-item-title>
            </v-list-item-content>

          </v-list-item>
</v-card>
        </template>
      </v-list>

    <div class="text-center mt-5">
      <h5>Contact us at </h5>
      <p class="">+91 95-6533-0614</p>

    </div>


        </v-container>
    </div>
</template>

<script>
import Appbar from '../components/utils/Appbar'
export default {
    components: {Appbar}
}
</script>