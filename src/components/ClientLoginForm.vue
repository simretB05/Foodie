<template>
    <div>
        <label for="email"> Enter Your Email</label>
        <input  v-model="email_value" type="text" required placeholder="enter your email">
        <label  for="first name"> Enter Your Password</label>
        <input  v-model="pass_value" type="password" required placeholder="enter your User Password">
        <button @click="getClientResponse" type="submit">submit</button>
    </div>
</template>

<script>
import axios from "axios";
import Cookies from "vue-cookies"


export default {
        data() {
            return {
                pass_value: undefined,
                email_value: undefined,
                token: undefined,
                client_id:undefined
                
            }
        },
    methods: {
        getClientResponse(){
Cookies.set(`client`, this.token)
            axios.request( {
                // Url to send the post Method
                url: `https://foodie.bymoen.codes/api/client-login`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`
            },
                method: `POST`,
                data: {
                    // data values required to send a POST login
                    email: this.email_value,
                    password: this.pass_value,
                
                }
                // on a response, assign a variable to the value of a response  
            } ).then( ( response ) =>{
               
                
                //set Cookies with a value of response from axios POST method
                Cookies.set( `token`, response[`data`][`token`])
                Cookies.set( `client_id`, response[`data`][`token`])

                // changing page once successful
                this.$router.push( `/discovery-page` )
            } ).catch( ( error ) =>
            {
                error;
                // if not successful displaying a error mssage
                this.errorMessage = "Invalid input! Please try again."
            } )
        }
    }
    }
</script>

<style scoped>
img{
    width:100px
}
</style>