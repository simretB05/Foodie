<template>
    <div>
        <page-header></page-header>
        <main class="main">
            <h2>{{ title }}</h2>
            <div class="resturan-card" v-for="(restaurant,i) in getrestaurantsdata" :key="i" >
                <div class="image-holder">  
                    <img  class="profile-img" :src="restaurant[`profile_url`]" alt="profile image">
                    <img  class="banner-img" :src="restaurant[`banner_url`]" alt="profile image">
                </div>
                <div class="resturant-info">
                <p>{{ restaurant[`name`] }}</p>
                <p>{{ restaurant[`phone_number`] }}</p>
                <p>{{ restaurant[`address`] }}</p>
                <p>{{ restaurant[`email`] }}</p>
                <p>{{ restaurant[`bio`] }}</p>
                <p>{{ restaurant[`city`] }}</p>
                </div>
               <button @click="selectrestaurant" :restaurant_id="restaurant[`restaurant_id`]">select</button>
            </div>
        </main>
    <page-footer></page-footer>
    </div>
</template>

<script>
import axios from "axios";
import Cookies from "vue-cookies"
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
    export default {
    components: {
            PageHeader,
            PageFooter,
    },
    data() {
        return {
            title: undefined,
            getRestaurant_id: undefined,
            getrestaurantsdata: undefined,
           
        }
    },
    methods: {
        selectrestaurant(details){
            this.getRestaurant_id = details[`target`].getAttribute(`restaurant_id` )
            Cookies.set(`restaurant_id`,this.getRestaurant_id)
            this.$router.push(`single-restaurant-home`)
        }
    },
    mounted(){
            axios.request( {
                // Url to send the post Method
                url: `https://foodie.bymoen.codes/api/restaurants`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`
                },
            } ).then( ( response ) => { 
                this.getrestaurantsdata = response[`data`]
            } ).catch( ( error ) =>{
                error;
            } ) 
    },   
    }
</script>

<style  scoped>
.main{
    min-height: 40vh;
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
width: 300px;
max-height:300px;
}
button{
    width: 200px;
}
</style>