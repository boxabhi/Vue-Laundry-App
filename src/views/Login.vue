<template>
    <v-container>
        <h2>Login here </h2>


    <div class="p-10">

<v-img class="login-img" src="@/assets/washing/standing-woman.png"></v-img>

     
     <v-text-field label="Email"  class="my-3" prepend-icon="mdi-cellphone" v-icon="place"></v-text-field>

        <v-text-field label="Password" prepend-icon="mdi-key" ></v-text-field>

    <p class="text-center">Don't have account <router-link to="/register" class="text-primary">Register</router-link></p>

    </div>


    <v-btn class="ma-2" block  tile color="primary" dark>Login</v-btn>

    
    <p class="mt-5 text-center">Or continue with </p>
   

   
    <v-btn class="ma-2"  tile color="error" dark><v-icon>mdi-google</v-icon>Google</v-btn>


       

    </v-container>
</template>

<style scoped>
.login-img{
    height:  250px;
    width: 200px;
    margin: 0px auto;
}
</style>