<template>
    <header class="header">
        <div class="logo_holder"> 
         <router-link to="/"> <img src="/images/icons/foodie-logo.svg" alt="logo image">  </router-link>
        </div>
       <nav class="nav">
            <h2 class="nav_title">Welcome!</h2>
            <ul v-if="!getClient_id" class="main_nav">
                <li class="nav_user_login_card">
                    <img  class="nav_user_login_img" src="/images/icons/enter.svg" alt="enter icon">
                    <router-link to="/user-login" ><p class="nav_login_text">Log In</p> </router-link>
                </li>
                <li class="nav_user_signup_card">
                    <div class="nav_user_avatar_card" >    
                    <img class="nav_user_signup_img" src="/images/icons/user.svg" alt=" login avatar">
                    </div>
                   <router-link to="/user-signup"><p class="nav_singup_text">Sing Up</p> </router-link> 
                </li>
            </ul> 
            <div v-else>
            <div class="nav_user_avatar_card" >    
                    <img class="nav_user_signup_img" src="/images/icons/user.svg" alt=" login avatar">
            </div>
            <nav class="secondary-nav">
                <h3 class="title">Welcome! client-name</h3>
                <ul class="secondery-main_nav">
                    <li class="nav_user_login_card">
                        <img  class="nav_user_login_img" src="/images/icons/enter.svg" alt="enter icon">
                        <router-link to="/client-profile-page" ><p @click="getClientInfo" class="nav_login_text">View Account</p> </router-link>
                    </li>
                    <li class="nav_user_signup_card">
                        <!-- <div class="nav_user_avatar_card" >    
                        <img class="nav_user_signup_img" src="/images/icons/user.svg" alt=" login avatar">
                        </div> -->
                    <router-link to="/client-orders"><p class="nav_singup_text">Orders</p> </router-link> 
                    </li>
                    <li class="nav_business_login_card">
                   <router-link to="/" ><img   src="/images/icons/shop.svg" alt="enter icon"></router-link> 
                    </li>
                </ul>
            </nav>
            </div>
        </nav>
    </header>
</template>
<script>
    import axios from "axios";
    import Cookies from "vue-cookies"
export default {

    data() {
        return {
            getClient_id: Cookies.get( `client_id` )


        }
    },      methods: {
            getClientInfo(){

                axios.request( {
                    // Url to send the post Method
                    url: `https://foodie.bymoen.codes/api/client`,
                    headers: {
                        'x-api-key': `qUikCEg0vdshWKhbZQKL`
                    },
                    params: {
                        client_id: this.getClient_id

                    }
                } ).then( ( response ) =>{

                    let client_info_json = JSON.stringify(response[`data`])
                    Cookies.set(`client_info`, client_info_json )


                    this.$router.push( `/client-profile-page` )
                } ).catch( ( error ) =>
                {
                    error;
                    this.errorMessage = "Invalid input! Please try again."
                } )
            }
        }
    }
    
    
    
</script>

<style scoped>
.header{
    display:grid;
    place-items:center;
    position: sticky;
    min-height:10vh;
    padding: 16px;
    grid-template-columns:repeat(auto-fit, minmax(50px, 1fr));
}
.logo_holder{
    justify-self: start;
}
img{
    width: 68px;
    height:68px
}
.nav{
    display:grid;
    place-items:center;
    position: absolute;
	top: 100%;
	right: 0;
	height: 80vh;
    width: 80%;
    border: 1px solid #7ed957;

    
}
.nav_title{
    justify-self:start;
    align-self: start;
    padding:16px;
    width: 90%;
    text-align: start;

}
.main_nav,.main_business_nav{
    display:grid;
    place-items:center;
    height: 10vh;
    align-self: start;
    justify-self: end;
    list-style: none;
    width: 90%;
}

.nav_user_login_card,.nav_user_signup_card{
    display: grid;
    place-items: start;
    width:116px;
    grid-template-columns:repeat(auto-fit, minmax(50px, 1fr));
    justify-self: start;
}
.nav_login_text,.nav_singup_text{
    text-align: start;
    font-size:1rem ;
    font-weight: 700;

}
.nav_user_avatar_card{
  display: grid;
  place-items: center;
  width:40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f1f2f4;
  border: 2px solid #7ed957;
  justify-self: start;
}
.nav_user_signup_img{
    width: 20px;
    height: 20px;
    align-self: center;
    justify-self: center;
    grid-template-columns:repeat(auto-fit, minmax(50px, 1fr));

}
.nav_user_login_img{
    width: 26px;
    height: 26px;
    align-self: center;
    justify-self: center;
    grid-template-columns:repeat(auto-fit, minmax(50px, 1fr));
    justify-self: start;

}

.nav_business_login_card,.nav_business_signup_card{
    display: grid;
    place-items: start;
    width:146px;
    grid-template-columns:repeat(auto-fit, minmax(73px, 1fr));
    justify-self: start;
}

.secondary-nav{
    display:grid;
    place-items:center;
    position: absolute;
	top: 100%;
	right: 0;
	height: 80vh;
    width: 80%;
    border: 1px solid #7ed957;
}
@media only screen and (min-width: 999px) {
    img{
    width: 98px;
    height:98px
}
.nav{
    position: static;
    width: 40%;
    place-items: end;
    position: static;
    padding-left: 0;
    transform: translateX(0);
    height: 120px;
    border: none;
    justify-self:end;
    grid-template-columns:repeat(auto-fit, minmax(43px, 1fr));

}
.nav_title{
    display:none;
}
.main_nav,.main_business_nav{
    justify-self: end;
    list-style: none;
    width: 100%;
    align-self: center;
    grid-template-columns:repeat(auto-fit, minmax(63px, 1fr));

}
.nav_user_login_card{
place-items: end;
gap:16px;
width: 174px;

}
.nav_user_signup_card{
place-items: center;
gap:16px;
width: 134px;

}
.nav_singup_text{
    text-align: end;
    font-size:.8rem ;
    font-weight: 600;
    background-color: #f1f2f4;
    text-align: center;
    width: 80px;
    padding: 8px;
    border-radius:25px ;


}
.nav_login_text{
    text-align: end;
    /* font-size:.8rem ;
    font-weight: 600;
    background-color: #f1f2f4;
    text-align: center;
    width: 80px;
    padding: 8px;
    border-radius:25px ; */


}
.main_business_nav{
display: none;
}
.nav_user_login_img{
 display: none;
}

}

</style>