<template>
    <div>
        <page-header></page-header>
        <div class="main">
                <div class="card">
                    <h1>wellcome to Foodie</h1>
                </div>
        </div>
        <page-footer></page-footer>
    </div>
</template>
<script>
import axios from "axios";
import Cookies from "vue-cookies"
import PageHeader from '@/components/Client/PageHeader.vue';
import PageFooter from '@/components/Client/PageFooter.vue'
    export default {
    components: {
            PageHeader,
            PageFooter,
    },
    data() {
        return {
            getClient_id: Cookies.get(`client_id`),
            userData:undefined,
            userDataArry: [],
        
        }
    },
    methods: {
        getClientData(){
           
        },
    },
    mounted(){
        axios.request( {
                url: `https://foodie.bymoen.codes/api/client`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`
                },
                params: {
                    client_id: this.getClient_id,
                }
            } ).then( ( response ) =>{
                Cookies.set( `client_info`, response[`data`][0] )
                let clientInfo_json = Cookies.get( `client_info` )
                this.userDataArry.push( clientInfo_json )
                this.$root.$emit( `userData`, this.userDataArry )
            } ).catch( ( error ) =>
            {
                error;
            } )
    },
    }
</script>

<style scoped>
.main{
    min-height: 80vh; 
    background-color: #f1f2f4;
    
}
.card{
    display:grid;
    place-items: center;
}
h1{
margin: 32px;
}

</style>