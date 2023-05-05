<template>
    <div>
       <div>
            <label for="email"> Enter Your Email</label>
            <input  v-model="email" type="text" required placeholder="enter your email">
            <label  for="first name"> Enter Your Password</label>
            <input  v-model="password" type="password" required placeholder="enter your User Password">
            <button @click="getLogInResponse" type="submit">submit</button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import Cookies from "vue-cookies"
    export default {
    components: {
    },
    data() {
        return {
                password: undefined,
                email: undefined,
                restaurant_token: undefined,
                restaurant_id:undefined
        }
    },
    methods: {
        getLogInResponse(){

            axios.request( {
                // Url to send the post Method
                url: `https://foodie.bymoen.codes/api/restaurant-login`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`
            },
                method: `POST`,
                data: {
                    // data values required to send a POST login
                    email: this.email,
                    password: this.password,
                
                }
                // on a response, assign a variable to the value of a response  
            } ).then( ( response ) =>{
                Cookies.set( `restaurant_token`, response[`data`][`token`])           
                Cookies.set(`restaurant_id`, response[`data`][`restaurantId`])
                this.$router.push(`/partner-home`) 
            } ).catch( ( error ) =>{
                error;
                // if not successful displaying a error mssage
                this.errorMessage = "Invalid input! Please try again."
            } )
        }
    }
    }
</script>

<style scoped>

</style>