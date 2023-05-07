<template>
    <div>
        <business-page-header></business-page-header>
        <!-- <main class="main">
            <section class="main">
                <div class="info__card_holder"  >
                    <h1>Account Settings</h1>
                        <div  class="info-card" >
                            <h2></h2>
                            <div class="user-info">
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <img  class="profile-img" src="" alt="profile_image">
                            </div>
                            <button><img class="edit-icon" src="/images/icons/pencil.svg" alt="edit icon"> Edite Profile</button>
                            <button><img class="edit-icon" src="/images/icons/trash.svg" alt="edit icon"> Remove Profile</button>
                        </div>
                </div>
                <div>
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
                    <button  type="submit">submit</button>
                </div>
                <div class="remove_user">
                    <label  for="first name">Enter Your password</label>
                    <input  v-model="pass_value" type="password" required placeholder="enter your User Password" aria-required>
                    <button  type="submit"> Remove Profile</button>
                </div>
            <h2>{{ message }}</h2>
                <h2>{{ profileRemovemessage }}</h2> 

            </section>
        </main>  -->
        <bussiness-page-footer></bussiness-page-footer>
    </div>
</template>

<script>
// import Cookies from "vue-cookies"
// import axios from "axios";
import BusinessPageHeader from '@/components/Restaurant/BusinessPageHeader.vue';
import BussinessPageFooter from '@/components/Restaurant/BussinessPageFooter.vue';
    export default {
    components: {
            BusinessPageHeader,
            BussinessPageFooter
    },
        data() {
            return {
            }
    },
    methods: {
        // editePartnersInfo(){
            // axios.request( {
            //     // Url to send the post Method
            //     url: `https://foodie.bymoen.codes/api/client`,
            //     headers: {
            //         'x-api-key': `qUikCEg0vdshWKhbZQKL`,
            //         token: this.getToken
            //     },
            //     method: `PATCH`,
            //     data: {
            //         // data values required to send a PATCH request
            //     }
            //     // on a response, assign a variable to the value of a response  
            // } ).then( () =>{
               
            
            // } ).catch( ( error ) =>
            // {
            //     error;
            //     this.errorMessage = "Invalid input! Please try again."
            // } )
            
            // }
        },
    }
</script>

<style scoped>
main{
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