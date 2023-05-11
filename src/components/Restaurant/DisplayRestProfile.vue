<template>
    <div class="edit-card" v-if="!is_Editclosed">
        <div class="signup-card">
        <img @click="closeEditForm" class="nav_user_menu_img" src="/images/icons/cross.svg" alt=" login avatar">
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
        <button @click=" editUserData" type="submit">Save changes</button>
        </div>
    </div>
</template>
<script>
import Cookies from "vue-cookies"
import axios from "axios";
export default {
    data() {
        return {
            is_Editclosed: false,
            email:this.email,
            name: this.name,
            address: this.address,
            profile_url: this.profile_url,
            banner_url:this.banner_url,
            phone_number: this.phone_number,
            password: this.password,
            city:this.city,
            bio:this.bio,
            token: Cookies.get( `restaurant_token` ),
            restaurant_id: Cookies.get( `restaurant_id` ),
        }
    },
    mounted(){
        this.$root.$emit(`restInfo`,this.editInfo)

    },
    methods: {
        closeEditForm(){
            this.is_Editclosed = !this.is_Editclosed
        },
        editUserData(){
            axios.request( {
                url: `https://foodie.bymoen.codes/api/restaurant`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`,
                    token: this.token
                },
                method: `PATCH`,
                data: {
                    email: this.email_value,
                    first_name: this.firstName_value,
                    last_name: this.lastName_value,
                    image_url: this.image_url,
                    username: this.UserName_value,
                    password: this.pass_value,
                }
            } ).then( () => {
               
                this.message = `successfully Edited  Your information`
                location.reload();
            } ).catch( ( error ) =>
            {
                error;
                this.errorMessage = "Invalid input! Please try again."
            } )

        },
        }
    }
</script>


<style scoped>
.edit-card{
    width: 100%;

background-color: white;
}
.signup-card {
    display: grid;
  justify-items: center;
  width: 100%;
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
.nav_user_menu_img{
width: 20px;
height: 20px;

}
@media only screen and (min-width: 600px) {
    .signup-card {
        width: 50%;
    }
}
@media only screen and (min-width: 900px) {
    .signup-card {
        width: 100%;
    }
}
</style>