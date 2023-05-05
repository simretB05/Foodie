<template>

    <div class="login_card">
        <label for="email"> Enter Your Email</label>
        <input v-model="email_value" type="text" required placeholder="enter your email">
        <label for="first name"> Enter Your Password</label>
        <input v-model="pass_value" type="password" required placeholder="enter your User Password">
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
                client_id: undefined,
                client_info_json: Cookies.get(`client_info`),
                clientDisplay__Array: [],
                newObjectData:undefined,
            }
        },
    methods: {
        getClientResponse(){
            axios.request({
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
            } ).then( ( response ) => {
                //set Cookies with a value of response from axios POST method
                Cookies.set( `token`, response[`data`][`token`])
                Cookies.set( `client_id`, response[`data`][`client_id`] )
                // changing page once successful
                this.$router.push(`/`)
            } ).catch((error) =>{
                error;
                // if not successful displaying a error mssage
                this.errorMessage = "Invalid input! Please try again."
            } )
        },
    }, 
}
</script>
<style scoped>
.login_card{
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


button {
  display: block;
  width: 30%;
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
    .login_card{
        width: 40%;
    }
}
@media only screen and (min-width: 900px) {
    .login_card{
        width: 30%;
    }
}

</style>