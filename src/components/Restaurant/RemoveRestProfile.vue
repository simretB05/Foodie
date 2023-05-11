<template>
    <div>
        <div class="remove_user">
            <label for="first name">Enter Your Password</label>
            <input v-model="pass_value" type="password" required placeholder="Enter your User Password" aria-required>
            <button @click="removeUserProfile" type="submit">Remove Profile</button>
            <h2>{{ profileRemovemessage}}</h2>
            <h2>{{ errorMessage }}</h2>
        </div>
</div>
</template>
<script>
import Cookies from "vue-cookies"
import axios from "axios";
export default {
    data() {
        return {
            profileRemovemessage: undefined,
            errorMessage: undefined,
            pass_value: undefined,
            token: Cookies.get( `restaurant_token` ),
        }
},
mounted() {
},
methods: {
    removeUserProfile(){
        this.savedUser = undefined

        axios.request( {
            url: `https://foodie.bymoen.codes/api/restaurant`,
            headers: {
                'x-api-key': `qUikCEg0vdshWKhbZQKL`,
                 token: this.token
            },
            method: `DELETE`,
            data: {
                password: this.pass_value,
            }
        } ).then( () =>{
            Cookies.remove( `restaurant_id` )
            Cookies.remove( `rest_info` )
            Cookies.remove( `restaurant_token` )
            this.profileRemovemessage = `scussefully deleted your information`

            this.$router.push( `/` )

        } ).catch( ( error ) =>{

            error;
            this.errorMessage = "Invalid input! Please try again."
        } )
    },
},
    }

</script>

<style  scoped>
.remove_user {
display: grid;
place-items: center;
margin-top: 20px;

}

label {
font-size: 16px;
font-weight: bold;
}

input {
padding: 10px;
margin: 10px 0;
border: 1px solid #ccc;
border-radius: 4px;
}

button {
padding: 10px 20px;
background-color: #4CAF50;
color: white;
font-size: 16px;
border: none;
border-radius: 4px;
cursor: pointer;
}

button:hover {
background-color: #45a049;
}

button:active {
background-color: #3e8e41;
}
</style>