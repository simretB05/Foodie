<template>
    <div>
       <page-header></page-header>
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
    import PageHeader from '@/components/PageHeader.vue';
    export default {
    components: {
            PageHeader
    },
    data() {
        return {
                password: undefined,
                email: undefined,
                token: undefined,
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
                Cookies.set( `client`, response[`data`][`token`])           
                Cookies.set(`restaurant_id`, response[`data`][`restaurantId`])
                //set Cookies with a value of response from axios POST method
                // Cookies.set( `token`, this.token )
                // changing page once successful
                // this.$router.push( `/gamePage` )
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