<template>
    <div class="signup-card">
        <label for="email">Your Bussiness profile Image</label>
        <input type="text" v-model=" banner_url" placeholder="enter your picture"> 
        <label for="email">Your Bussiness Banner Image</label>
        <input type="text" v-model=" profile_url" placeholder="enter your picture"> 
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
                profile_url: undefined,
                banner_url:undefined,
                restaurant_token: undefined,
                restaurant_id:undefined
            }
        },
    methods: {
        getResponseToken(){
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
            } ).then( ( response ) => {
                this.restaurant_token = response[`data`][`token`]
                this.restaurant_id = response[`data`][`restaurantId`]
                //set Cookies with a value of response from axios POST method
                Cookies.set( `restaurant_token`, this.restaurant_token )
                Cookies.set( `restaurant_id`, this.restaurant_id )
                this.$router.push(`/partner-home`) 
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
signup-card {
    display: grid;
  justify-items: center;
  width: 70%;
  margin: 32px auto;
  padding: 20px;
  background-color: #fcfcfb;
  border: 1px solid #7ed957;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}

label {
    display: block;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: .9rem;
  justify-self: start;
  color: #7ed957;
}

input{
width: 90%;
padding: 10px;
margin-bottom: 20px;
border: none;
border-radius: 5px;
background-color: #f5f3f1;
font-size: .8rem;
justify-self: start;
}


button{
display: block;
  width: 40%;
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color:  #7ed957;;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

@media only screen and (min-width: 600px) {
    .signup-card {
        width: 50%;
    }
}
@media only screen and (min-width: 900px) {
    .signup-card {
        width: 30%;
    }
}
</style>