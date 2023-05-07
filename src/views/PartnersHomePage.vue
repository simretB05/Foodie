<template>
    <div>
        <business-page-header></business-page-header>
                <main class="main">
                    <h2>this is partners home page</h2>
                </main>
        <bussiness-page-footer></bussiness-page-footer>
    </div>
</template>
<script>
import axios from "axios";
import Cookies from "vue-cookies"
import BusinessPageHeader from '@/components/Restaurant/BusinessPageHeader.vue';
import BussinessPageFooter from '@/components/Restaurant/BussinessPageFooter.vue';
    export default {
    components: {
            BusinessPageHeader,
            BussinessPageFooter
        },
    data() {
        return {
            getRest_id:Cookies.get(`restaurant_id`),
            restData:undefined,
            restDataArry: [],
        }
    },
    methods: {
        getClientData(){
        },
    },
    mounted(){
        axios.request( {
                url: `https://foodie.bymoen.codes/api/restaurant`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`
                },
                params: {
                    restaurant_id: this.getRest_id,
                }
            } ).then( ( response ) =>{
                Cookies.set( `rest_info`, response[`data`][0] )
                let restInfo_json = Cookies.get(`rest_info` )
                this.$root.$emit( `restData`, restInfo_json )
            } ).catch( ( error ) =>
            {
                error;
            } )
    },    }
</script>

<style scoped>
.main{
    min-height: 80vh;
}
</style>