<template>
    <div class="edit-card" v-if="!is_Editclosed">
        <img @click="closeEditForm" class="nav_user_menu_img" src="/images/icons/cross.svg" alt=" login avatar">
        <div class="signup-card">
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
        <label  for="password">Pass word</label>
        <input  v-model="pass_value" type="password" required placeholder="enter your User Password">
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
            email:this.email_value,
            first_name: this.firstName_value,
            last_name: this.lastName_value,
            image_url: this.image_url,
            username: this.UserName_value,
            password: this.pass_value,
            token: Cookies.get( `token` ),
            getClient_id: Cookies.get( `client_id` ),
        }
    },
    mounted(){
        this.$root.$emit(`userInfo`,this.editInfo)
    },
    methods: {
        closeEditForm(){
            this.is_Editclosed = !this.is_Editclosed
                console.log(this.is_Editclosed)
        },
        editUserData(){
            axios.request( {
                url: `https://foodie.bymoen.codes/api/client`,
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
    width: 80%;
    /* background-color: #f2f2f2; */

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