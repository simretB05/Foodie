<template>
    <div>
        <label for="email">Your profile Image</label>
        <input type="text" v-model="image_url" placeholder="enter your picture"> 
        <label for="email">Email</label>
        <input  v-model="email_value" type="text" required placeholder="enter your email">
        <label  for="first name">First Name</label>
        <input  v-model="firstName_value" type="text" required placeholder="first name">
        <label for="first name">Last Name</label>
        <input   v-model="lastName_value" type="text" required placeholder="Last name">
        <label for="first name">User name</label>
        <input   v-model="UserName_value" type="text" required placeholder="enter your User Name">
        <label  for="first name">Pass word</label>
        <input  v-model="pass_value" type="password" required placeholder="enter your User Password">
    <button @click="getResponse" type="submit">submit</button>
    </div>
</template>

<script>
import axios from "axios";
import Cookies from "vue-cookies"


export default {
        data() {
            return {
                firstName_value: undefined,
                lastName_value: undefined,
                pass_value: undefined,
                email_value: undefined,
                UserName_value: undefined,
                image_url: undefined,
                token: undefined,
                client_id:undefined   
            }
        },
    methods: {
        getResponse(){
            axios.request( {
                // Url to send the post Method
                url: `https://foodie.bymoen.codes/api/client`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`
            },
                method: `POST`,
                data: {
                    // data values required to send a POST login
                    email:this.email_value,
                    first_name: this.firstName_value,
                    last_name: this.lastName_value,
                    image_url:this.image_url,
                    username: this.UserName_value,
                    password: this.pass_value,
                
                }
                // on a response, assign a variable to the value of a response  
            } ).then( ( response ) => {
                Cookies.set( `token`, response[`data`][`token`] )
                Cookies.set(`client_id`, response[`data`][`client_id`])
                this.$router.push( `/discovery-page` )
            } ).catch( ( error ) =>
            {
                error;
                this.errorMessage = "Invalid input! Please try again."
            } )
        }
    },
  
    }
</script>

<style scoped>
img{
    width:100px
}
</style>