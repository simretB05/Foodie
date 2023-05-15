<template>
    <div class="edit-card" v-if="!is_Editclosed">
        <img @click="is_Editclosed = !is_Editclosed" class="nav_user_menu_img" src="/images/icons/cross.svg" alt=" login avatar">
        <div class="signup-card">
        <label for="email">Your profile Image</label>
        <input type="text" v-model="image_url" placeholder="enter your picture"> 
        <label for="email">Email</label>
        <input  v-model="email" type="text" required placeholder="enter your email">
        <label  for="first name">First Name</label>
        <input  v-model="first_name" type="text" required placeholder="first name">
        <label for="first name">Last Name</label>
        <input   v-model="last_name" type="text" required placeholder="Last name">
        <label for="first name">Username</label>
        <input   v-model="username" type="text" required placeholder="enter your User Name">
        <label  for="password">Password</label>
        <input  v-model="password" type="password" required placeholder="enter your User Password">
        <button @click="editUserData" type="submit">Save changes</button>
    </div>
    <tost-message  v-if="showToast" :title="toastTitle" :message="toastMessage"></tost-message>

    </div>
</template>
<script>
import Cookies from "vue-cookies"
import TostMessage from  '@/components/TostMessage.vue'
import axios from "axios";
export default {
    components: {
            TostMessage
        },
    data() {
        return {
            is_Editclosed: false,
            email:undefined,
            first_name: undefined,
            last_name: undefined,
            image_url: undefined,
            username: undefined,
            password: undefined,
            showToast: false,
            toastTitle: undefined,
            toastMessage:undefined,
            token: Cookies.get( `token` ),
            getClient_id: Cookies.get( `client_id` ),
        }
    },
    mounted(){
        this.$root.$emit(`userInfo`,this.editInfo)
    },
    methods: {
        editUserData(){
            axios.request( {
                url: `https://foodie.bymoen.codes/api/client`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`,
                    token: this.token
                },
                method: `PATCH`,
                data: {
                    email: this.email,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    image_url: this.image_url,
                    username: this.Username,
                    password: this.password,
                }
            } ).then( () =>{
                this.toastTitle = `Success`
                this.toastMessage = `successfully Edited  Your information`
                this.showToast = true
            } ).catch( ( error ) =>{
                this.toastTitle = `Error`
                this.toastMessage =error[`response`][`data`][`error`]
                this.showToast = true
            } )
        },
        }
    }
</script>


<style scoped>
.edit-card{
    width: 100%;

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