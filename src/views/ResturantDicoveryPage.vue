<template>
    <div>
        <business-page-header></business-page-header>
        <main class="main">
            <h2>this is where you find resturans</h2>
            <div class="resturan-card" v-for="(resturant,i) in resturants" :key="i" >
                <div class="image-holder">  
                    <img  class="profile-img" :src="resturant[`profile_url`]" alt="profile image">
                    <img  class="banner-img" :src="resturant[`banner_url`]" alt="profile image">
                </div>
                <div class="resturant-info">
                <p>{{ resturant[`name`] }}</p>
                <p>{{ resturant[`phone_number`] }}</p>
                <p>{{ resturant[`address`] }}</p>
                <p>{{ resturant[`email`] }}</p>
                <p>{{ resturant[`bio`] }}</p>
                <p>{{ resturant[`city`] }}</p>
                </div>
               <button>select</button>
            </div>
        </main>
        <bussiness-page-footer></bussiness-page-footer>
    </div>
</template>
<script>
import axios from "axios";
import Cookies from "vue-cookies"
import BusinessPageHeader from '@/components/BusinessPageHeader.vue';
import BussinessPageFooter from '@/components/BussinessPageFooter.vue';
export default {
    components: {
        BusinessPageHeader,
        BussinessPageFooter
    },
    data()
    {
        return {
            resturants: [],
            getrestaurantsData: undefined,
        }
    },
    mounted(){
        axios.request( {
            url: `https://foodie.bymoen.codes/api/restaurants`,
            headers: {
                'x-api-key': `qUikCEg0vdshWKhbZQKL`
            },
        } ).then( ( response ) =>{
            let responseData = response[`data`]
            console.log(responseData)
            let newArry = []
            for ( let i = 0; i < responseData.length; i++ ){
                newArry.push( responseData[i] )

                Cookies.set( `restaurants_data`, newArry ) 
            }
            console.log(newArry)
            
            let restaurant_json = Cookies.get( `restaurants_data` )
this.resturants=restaurant_json
                console.log( this.resturants )
        } ).catch( ( error ) =>{
            error;
        } )
    }

    
    }
</script>

<style  scoped>
.main{
    min-height: 80vh;
    display: grid;
    place-items: center;
}
.resturan-card{
    display: grid;
    place-items: center;
    margin: 16px;
}
.esturant-info{
    display: grid;
}
.image-holder{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    
}
.profile-img,.banner-img{
width: 400px;
max-height:500px;

}
button{
    width: 200px;
}
</style>