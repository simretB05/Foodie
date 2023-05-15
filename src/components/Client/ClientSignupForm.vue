<template>
        <div class="signin-container">
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
                <label  for="first name">Pass word</label>
                <input  v-model="pass_value" type="password" required placeholder="enter your User Password">
                <button @click="getResponse" type="submit">submit</button>
            </div>
            <tost-message  v-if="showToast" :title="toastTitle" :message="toastMessage"></tost-message>

        </div>
</template>
<script>
import TostMessage from  '@/components/TostMessage.vue'
import axios from "axios";
import Cookies from "vue-cookies"
export default {
        components: {
            TostMessage
        },
        data(){
            return {
                firstName_value: undefined,
                lastName_value: undefined,
                pass_value: undefined,
                email_value: undefined,
                UserName_value: undefined,
                image_url: undefined,
                token: undefined,
                client_id: undefined,   
                showToast: false,
                toastTitle: undefined,
                toastMessage:undefined
            }
        },
    methods: {
        getResponse(){
            axios.request( {
                url: `https://foodie.bymoen.codes/api/client`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`
            },
                method: `POST`,
                data: {
                    email:this.email_value,
                    first_name: this.firstName_value,
                    last_name: this.lastName_value,
                    image_url:this.image_url,
                    username: this.UserName_value,
                    password: this.pass_value,
                    showToast: false,
                    toastTitle: undefined,
                    toastMessage:undefined  
                }
            } ).then( ( response ) => {
                Cookies.set( `token`, response[`data`][`token`] )
                Cookies.set(`client_id`, response[`data`][`client_id`])
                this.$router.push(`/` )
            } ).catch( ( error ) =>{
                this.toastTitle = `Error`
                this.toastMessage =error[`response`][`data`]
                this.showToast = true
            } )
        }
    },
  
    }
</script>

<style scoped>
.signin-container{
    display: grid;
  justify-items: center;
  width: 100%;
  
}
.signup-card {
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