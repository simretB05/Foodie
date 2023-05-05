<template>
    <header class="header">
        <div class="logo_holder"> 
            <router-link to="/"><img src="/images/icons/foodie-logo.svg" alt="logo image"></router-link>
        </div>
        <div @click="primaryToggleHandler"  class="nav_user_menu_card">    
            <img v-if="!getRestaurant_id" class="nav_user_menu_img" src="/images/icons/shop.svg" alt=" login shop avatar">
        </div>
        <div v-if="getRestaurant_id">
            <div class="nav_user_login_menu" >
                <router-link to="/partner-discovery"><img src="/images/icons/shop.svg" alt="enter icon"></router-link> 
                <router-link to="/partner-menu">
                    <img class="nav_user_signup_img" src="/images/icons/clipboard-list-check.svg" alt=" login avatar"></router-link> 
                    <div @click="secondaryToggleHandler" class="nav_user_menu_card">    
                    <img class="nav_user_menu_img" src="/images/icons/shop.svg" alt=" login avatar">
            </div>
            <h3>{{ first_name }}</h3>
            </div>
        </div>
        <nav v-if="is_primaryNavOpen" class="primary-nav">
            <div class="primary_nav_card">
                <h2 class="nav_title">Welcome Partners!</h2>
                <ul  class="main_nav">
                    <li class="nav_user_login_card">
                        <img  class="nav_user_login_img" src="/images/icons/enter.svg" alt="enter icon">
                        <router-link to="/partner-login" ><p class="nav_login_text"> Partner Log In</p> </router-link>
                    </li>
                    <li class="nav_user_signup_card">
                        <div class="nav_user_avatar_card" >    
                            <img class="nav_user_signup_img" src="/images/icons/shop.svg" alt=" shop image icon">
                        </div>
                        <router-link to="/partner-signup"><p class="nav_singup_text"> Partner Sing Up</p> </router-link> 
                    </li>
                </ul>
            </div>
        </nav>
        <nav  v-if="is_scondaryNavOpen" class="secondary-nav">
            <div  class="secondary_nav_card"  >
                <h3 class="title">Welcome Partner name</h3>
                <ul class="secondery-main_nav">
                    <li class="nav_user_login_card">
                        <router-link to="/partner-profile"><img class="nav_user_signup_img" src="/images/icons/shop.svg" alt=" login avatar"><p  class="nav_login_text">View Account</p></router-link>
                    </li>
                    <li class="nav_user_signup_card">
                        <router-link to="/partner-menu">
                            <img class="nav_user_signup_img" src="/images/icons/clipboard-list-check.svg" alt=" login avatar"><p class="nav_singup_text">Your Menu</p></router-link> 
                    </li>
                    <li class="nav_user_signup_card">
                        <button @click="logoutHandler">Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
<script>
    // import axios from "axios";
    import Cookies from "vue-cookies"
export default {
    data() {
        return {
            // username:undefined,
            getRestaurant_id: Cookies.get(`restaurant_id` ),
            clientInfo_json:undefined,
            is_primaryNavOpen: false,
            is_scondaryNavOpen: false,
            first_name: undefined,
            userArray:[]
        }
    },
    methods: {
        primaryToggleHandler(){
            this.is_primaryNavOpen = !this.is_primaryNavOpen
           
            
        },
        secondaryToggleHandler(){
            this.is_scondaryNavOpen = !this.is_scondaryNavOpen
         
        },
        logoutHandler(){
            Cookies.remove( `client_id` )
            Cookies.remove( `client_info` )
            Cookies.remove( `token` )
            this.$router.push(`/`)
        },
        getClientInfo( userData ){
            if ( this.first_name !== undefined ) {
                this.first_name=this,this.first_name
            } else{
                this.first_name = userData[`first_name`]
                this.$root.$on( `userData`, this.getClientInfo );
            }
            location.reload();
        }
    },

    mounted(){
        if ( this.first_name !== undefined ) {
                this.first_name=this,this.first_name
            } else{
                this.clientInfo_json= Cookies.get(`client_info`)
               this.first_name=this.clientInfo_json[`first_name`]
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
    background-color: white;
}
.logo_holder{
    justify-self: start;
}
img{
    width: 68px;
    height:68px
}
.primary-nav,.secondary-nav{
    display:grid;
    place-items:center;
    position: absolute; 
    top: 100%;
	right: 0;
    width: 20%;
    height: 80vh;
    border: 1px solid #0c0d0c;
    background-color:#ffffff;
	
}
/* .primary_nav_card,.secondary_nav_card{ */
    /* display:grid;
    place-items:center;
    position: absolute;
	
    width: 20%;
    border: 1px solid #7ed957;
    background-color:#ffffff; */
/* } */
/* .nav_title{
    justify-self:start;
    align-self: start;
    padding:16px;
    width: 90%;
    text-align: start;
    margin-top:40px;
    color:#5e6b77

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

.nav_user_login_card,.nav_user_signup_card,.nav_user_menu{
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
.nav_user_avatar_card,.nav_user_menu_card{
  display: grid;
  place-items: center;
  width:40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f1f2f4;
  border: 2px solid #7ed957;
  justify-self: start;
}
.nav_user_signup_img,.nav_user_menu_img{
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
.nav_user_menu{
    display:grid;
    place-items:center;
    justify-self: end;

}
.nav_user_menu_card{
    justify-self:end;
} */


</style>