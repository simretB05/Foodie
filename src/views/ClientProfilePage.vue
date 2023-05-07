<template>
    <div class="main-section">
        <page-header></page-header>
        <section class="main">
            <div class="info__card_holder"  >
                <h1>Account Settings</h1>
                    <div  class="info-card" >
                        <h2>{{savedUser[`username`] }}</h2>
                        <div class="user-info">
                            <p>{{savedUser[`first_name`] }}</p>
                            <p>{{savedUser[`last_name`]}}</p>
                            <p>{{savedUser[`email`]}}</p>
                            <p> {{savedUser[`passward`] }}</p>
                            <img  class="profile-img" :src="savedUser[`image_url`]" alt="profile_image">
                        </div>
                        <div class="buttin-holder">
                            <button><img class="edit-icon" src="/images/icons/pencil.svg" alt="edit icon"> Edite Profile</button>
                            <button><img class="edit-icon" src="/images/icons/trash.svg" alt="edit icon"> Remove Profile</button></div>
                    </div>
            </div>
            <div class="remove_user">
                <label  for="first name">Enter Your password</label>
                <input  v-model="pass_value" type="password" required placeholder="enter your User Password" aria-required>
                <button @click="removeUserProfile" type="submit"> Remove Profile</button>
            </div>
            <div class="signup-edite_card">
                <client-signup-form></client-signup-form>
            </div>
          <h2>{{ message }}</h2>
          <h2>{{ profileRemovemessage }}</h2>

        </section>
      <page-footer></page-footer>
    </div>
</template>
<script>
import ClientSignupForm from "@/components/Client/ClientSignupForm.vue";
import Cookies from "vue-cookies"
import axios from "axios";

  import PageHeader from '@/components/Client/PageHeader.vue';
  import PageFooter from "@/components/Client/PageFooter.vue";
export default {
    components: {
        PageHeader,
        PageFooter,
        ClientSignupForm
    },
    data()
    {
        return {
            getToken: undefined,
            getUserInfo: undefined,
            firstName_value: undefined,
            lastName_value: undefined,
            pass_value: undefined,
            email_value: undefined,
            UserName_value: undefined,
            image_url: undefined,
            token: undefined,
            client_id: undefined,
            message: undefined,
            profileRemovemessage: undefined,
            updatedUserInfo: undefined,
            savedUser: {},
            userDataArry: []

        }
    },
    methods: {
        editUserData(){
            axios.request( {
                url: `https://foodie.bymoen.codes/api/client`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`,
                    token: this.getToken
                },
                method: `PATCH`,
                data: {
                    email: this.email_value,
                    first_name: this.firstName_value,
                    last_name: this.lastName_value,
                    image_url: this.image_url,
                    username: this.UserName_value,
                    password: this.pass_value,
                    getClient_id: Cookies.get( `client_id` ),

                }
            } ).then( () => {
                let updatedUserObject = {
                    email: this.email_value,
                    first_name: this.firstName_value,
                    last_name: this.lastName_value,
                    image_url: this.image_url,
                    username: this.UserName_value,
                    password: this.pass_value,
                }
                this.message = `successfully Edited  Your information`
                this.updatedUserInfo = Cookies.set( `client_info`, updatedUserObject )
                location.reload();

            } ).catch( ( error ) =>
            {
                error;
                this.errorMessage = "Invalid input! Please try again."
            } )

        },
        setUpdatedValue(){
            axios.request( {
                // Url to send the post Method
                url: `https://foodie.bymoen.codes/api/client`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`
                },
                params: {
                    client_id: this.getClient_id,
                }
            } ).then( ( response ) =>{
                Cookies.set( `updatedClient_info`, response[`data`][0] )
                let clientInfo_json = Cookies.get( `updatedClient_info` )
                this.userData = clientInfo_json
                this.userDataArry.push( this.userData )
            } ).catch( ( error ) =>
            {
                error;
            } )
        },
        removeUserProfile(){
            this.savedUser = undefined

            axios.request( {
                // Url to send the post Method
                url: `https://foodie.bymoen.codes/api/client`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`,
                     token: this.getToken
                },
                method: `DELETE`,
                data: {
                    password: this.pass_value,
                }
            } ).then( () =>{
                Cookies.remove( `client_id` )
                Cookies.remove( `client_info` )
                Cookies.remove( `token` )
                this.profileRemovemessage = `scussefully deleted your information`

                this.$router.push( `/` )

            } ).catch( ( error ) =>{

                error;
                this.errorMessage = "Invalid input! Please try again."
            } )
        },
    },
    mounted(){
        this.getUserInfo = Cookies.get( `client_info` )
        this.getToken = Cookies.get( `token` )
        if ( this.getUserInfo !== undefined ){
            this.savedUser = this.getUserInfo
        } else{
            this.savedUser = {
                username: '',
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                image_url: ''
            }
        }
    }
}
</script>

<style  scoped>
.main-section{
    background-color:#fcfcfb ;
}
.main{
width:100%;
display:grid;
place-items:center;
min-height: 80vh;
}
.info__card_holder {
  max-width: 100%;
  display:grid;
  place-items:center;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
}
h1 {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.info-card {
    width: 100%;
  display: grid;
  place-items: center;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
}
h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.user-info p {
  margin-bottom: 10px;
  font-weight: 100;
  justify-self: start;
  width: 90%;
}
.profile-img {
  max-width: 150px;
  margin-top: 20px;
}

button {
  display: block;
  margin-top: 20px;
  padding: 8px;
  border: none;
  border-radius: 5px;
  justify-self: center;
  color: #7ed957;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
}

button img {
  width: 20px;
  margin-right: 10px;
  fill:#7ed957;
}
.user-info{
    display: grid;
    place-items: center;
    width: 100%;
    min-height: 20vh;
    
}
.user-info>p{
    font-size: 1rem;
    justify-self: start;
}

.profile-img{
    width: 90px;
}
.edit-icon{
        width: 20px;
        height: 20px;

}
.signup-edite_card{
    display:none
}
.remove_user{
    display: none;
}
@media only screen and (min-width: 600px) {
    .info__card_holder{
        width: 80%;   
    }
    .info-card{

    }
    .user-info{
   
    grid-template-columns:repeat(auto-fit, minmax(105px, 1fr));
    
}
.buttin-holder{
    display: grid;
    place-items: center;
    width: 60%;
    grid-template-columns:repeat(auto-fit, minmax(105px, 1fr));

}
}
@media only screen and (min-width: 900px) {
    .info__card_holder{
        width: 40%;   
    }
    .user-info{

    grid-template-columns:repeat(auto-fit, minmax(105px, 1fr));
    
}
}
</style>