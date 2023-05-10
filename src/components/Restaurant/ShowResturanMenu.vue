<template>
    <div>
        <div class="main">
           <single-menu-item  v-for="(menu,i) in menuArry" :key="i" :single_menu="menu"></single-menu-item>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import Cookies from "vue-cookies"
import singleMenuItem from '@/components/Restaurant/singleMenuItem.vue'
export default {
    components: {
            singleMenuItem,
         },
      data(){
        return {
            get_resId: Cookies.get( 'restaurant_id' ),
            menuArry:[]
        }
    },
    mounted(){
        this.getItems()
    },
    methods: {
        getItems() {
        axios.request( {
        url: `https://foodie.bymoen.codes/api/menu`,
        headers: {
            'x-api-key': `qUikCEg0vdshWKhbZQKL`,
        },
        params: {
        restaurant_id: this.get_resId
        }
        } ).then( ( response ) => { 
        this.menuArry = response[`data`]
        } ).catch( ( error ) =>{
        error;
        } ) 
    },
      }
    }
</script>
<style scoped>
.main{
display: grid;
place-items: center;
width: 100%;
}

</style>