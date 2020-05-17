<template>
  <v-container>
        <h1>Product Page</h1>
        <h1>{{$route.params.slug}}</h1>

    <v-row>
        <v-col cols="md-5">

               <v-card class="p-4" >
                <v-img :src="item.image" ></v-img>
               </v-card>

        </v-col>
    <v-col cols="md-2"></v-col>

        <v-col cols="md-5">
            <h1>{{item.product}}</h1>

            

           <v-btn  color="success" dark> Add to Cart</v-btn>
           <br/>
           <v-btn color="primary" class="mt-4"  @click.stop="dialog = true" dark><v-icon>mdi-cart</v-icon>Buy Now</v-btn>

           <p class="text-justify mt-2">{{item.description}}</p>
        </v-col>

    </v-row>


     <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


  </v-container>

</template>

<script>
import axios from 'axios'
export default {
  
    data(){
        return{
           item : {},
           dialog : false,
        }
    },
    mounted(){
        this.product()
    },
    methods : {
       async product(){
            var slug = this.$route.params.slug
            
         const result =await axios.get(`http://127.0.0.1:8000/api/product/${slug}`)
        this.item  = result.data
         console.log(result.data)

        }
    },

     watch: {
    $route(to, from) {
       console.log(to)
       console.log(from)
    }
  }
}
</script>