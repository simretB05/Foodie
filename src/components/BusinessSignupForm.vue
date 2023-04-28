<template>
    <div>
        <!-- <img :src="profile_url" alt="profile image">
        <img :src="banner_url" alt="banner image"> -->
        <label for="email">Email</label>
        <input  v-model="email" type="text" required placeholder="enter your email">
        <label  for="Business name">Business Name</label>
        <input  v-model="name" type="text" required placeholder="name">
        <label for="address">Address</label>
        <input   v-model="address" type="text" required placeholder="address">
        <label for="phone number">Phone Number</label>
        <input   v-model="phone_number" type="text" required placeholder="phone-number">
        <label for="Bio">Bio</label>
        <input   v-model="bio" type="text" required placeholder="Bio">
        <label for="city">City</label>
        <input   v-model="city" type="text" required placeholder="City">
        <label  for="password">Password</label>
        <input  v-model="password" type="password" required placeholder="Password">
        <button @click="getResponseToken" type="submit">submit</button>
    </div>
</template>

<script>
import axios from "axios";
import Cookies from "vue-cookies"


export default {
        data() {
            return {
                name: undefined,
                phone_number: undefined,
                address: undefined,
                email: undefined,
                password:undefined,
                bio: undefined,
                city:undefined,
                profile_url: `https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
                banner_url:`https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
                token: undefined,
                client_id: undefined
            }
        },
    methods: {
        getResponseToken(){
Cookies.set(`client`, this.token)
            axios.request( {
                // Url to send the post Method
                url: `https://foodie.bymoen.codes/api/restaurant`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`
            },
                method: `POST`,
                data: {
                    // data values required to send a POST login
                    email: this.email,
                    name: this.name,
                    address: this.address,
                    phone_number: this.phone_number,
                    bio: this.bio,
                    city: this.city,
                    profile_url: this.profile_url,
                    banner_url:this.banner_url,
                    password: this.password,
                
                 
                
                }
                // on a response, assign a variable to the value of a response  
            } ).then( ( response ) =>
            {
                // this.token = response[`data`][`token`]
                // this.client_id = response[`data`][`token`]

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