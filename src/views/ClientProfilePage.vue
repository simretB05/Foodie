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
                        <button><img class="edit-icon" src="/images/icons/pencil.svg" alt="edit icon"> Edit Profile</button>
                        <button><img class="edit-icon" src="/images/icons/trash.svg" alt="edit icon"> Remove Profile</button>
                    </div>
            </div>
            <div class="remove_user">
                <label  for="first name">Enter Your password</label>
                <input  v-model="pass_value" type="password" required placeholder="enter your User Password" aria-required>
                <button @click="removeUserProfile" type="submit"> Remove Profile</button>
            </div>
            <div class="user_edit">
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
                <button  @click="editUserData"  type="submit">save changes</button>
            </div>
          <h2>{{ message }}</h2>
          <h2>{{ profileRemovemessage }}</h2>

        </section>
      <page-footer></page-footer>
    </div>
</template>
<script>
import Cookies from "vue-cookies"
import axios from "axios";

  import PageHeader from '@/components/PageHeader.vue';
  import PageFooter from "@/components/PageFooter.vue";
export default {
    components: {
        PageHeader,
        PageFooter
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
            updatedUserInfo:undefined,
            savedUser: {}
        }
    },
    methods: {
        editUserData(){
            axios.request( {
                // Url to send the post Method
                url: `https://foodie.bymoen.codes/api/client`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`,
                    token: this.getToken
                },
                method: `PATCH`,
                data: {
                    // data values required to send a PATCH request
                    email: this.email_value,
                    first_name: this.firstName_value,
                    last_name: this.lastName_value,
                    image_url: this.image_url,
                    username: this.UserName_value,
                    password: this.pass_value,

                }
                // on a response, assign a variable to the value of a response  
            } ).then( () =>{
                let userObject = {
                    email: this.email_value,
                    first_name: this.firstName_value,
                    last_name: this.lastName_value,
                    image_url: this.image_url,
                    username: this.UserName_value,
                    password: this.pass_value,
}
                this.message = `successfully Edited  Your information`
                this.updatedUserInfo = Cookies.set(`client_info`, userObject )
                let updatedUserInfo_json = Cookies.get(`client_info`);

                for ( let i in userObject ){
                    if ( userObject[i] !== this.savedUser[i] ){
                         this.savedUser[i]=userObject[i]
                    } else{
                        this.savedUser[i]= updatedUserInfo_json[i]
                    }
                }
              
                location.reload();
            
            
            } ).catch( ( error ) =>
            {
                error;
                this.errorMessage = "Invalid input! Please try again."
            } )
            
        },
        removeUserProfile() {
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
                    // data values required to send a DELETE request
                    password: this.pass_value,
                }
                // on a response, assign a variable to the value of a response  
            } ).then( () =>
            {
                Cookies.remove( `client_id` )
                Cookies.remove( `client_info` )
                Cookies.remove( `token` )
                this.profileRemovemessage = `scussefully deleted your information`

                this.$router.push( `/` )

            } ).catch( ( error ) =>
            {

                error;
                this.errorMessage = "Invalid input! Please try again."
            } )
        },
    },
    mounted(){
        this.getUserInfo=Cookies.get(`client_info`)
        this.getToken = Cookies.get( `token` )
        if ( this.getUserInfo !== undefined ) {
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
.main{
display:grid;
place-items:center;
min-height: 80vh;


}
.main-section{
    background-color:#fcfcfb ;
}
.info__card_holder{
    align-self: start;
    /* margin:60px; */
}
.info-card{
  display: grid;
  place-items: center;
  border: 1px solid rgb(226, 230, 233);
  margin-top: 60px ;

}
.user-info{
    display: grid;
    place-items: center;
    width: 100%;
    min-height: 20vh;
    grid-template-columns:repeat(auto-fit, minmax(105px, 1fr));
    
}

.profile-img{
    width: 90px;
}
.edit-icon{
        width: 20px;
        height: 20px;

}
</style>