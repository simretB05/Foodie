<template>
    <div>
        <img :src="image_url" alt="profile image">
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
                image_url: `images/profile-img.jpg`,
                token: undefined,
                client_id:undefined
                
            }
        },
    methods: {
        getResponse(){
Cookies.set(`client`, this.token)
            axios.request( {
                // Url to send the post Method
                url: `https://foodie.bymoen.codes/api/client`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`
            },
                method: `POST`,
                data: {
                    // data values required to send a POST login
                    email: this.email_value,
                    first_name: this.firstName_value,
                    last_name: this.lastName_value,
                    image_url:`/images/profile-img.jpg`,
                    username: this.UserName_value,
                    password: this.pass_value,
                
                }
                // on a response, assign a variable to the value of a response  
            } ).then( ( response ) =>
            {
                this.token = response[`data`][`token`]
                this.client_id = response[`data`][`token`]

                console.log(response)
                //set Cookies with a value of response from axios POST method
                // Cookies.set( `token`, this.token )
                // changing page once successful
                // this.$router.push( `/gamePage` )
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