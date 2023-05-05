<template>
    <div>
        <page-header></page-header>
        <div class="main">

                <div>
                    <h3>wellcome to Foodie</h3>
                </div>

        </div>
        <page-footer></page-footer>
    </div>
</template>

<script>
import axios from "axios";
import Cookies from "vue-cookies"
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue'
    export default {
    components: {
            PageHeader,
            PageFooter,
    },
    data() {
        return {
            getClient_id: Cookies.get(`client_id`),
            userData:undefined,
            userDataArry:[]
        }
    },
    mounted(){
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
                Cookies.set( `client_info`, response[`data`][0])
                let  clientInfo_json= Cookies.get(`client_info`)
                this.userData = clientInfo_json
                this.userDataArry.push( this.userData )
                this.$root.$emit( `userData`, this.userDataArry )
            } ).catch( ( error ) =>{
                error;
                // this.errorMessage = "Invalid input! Please try again."
            } ) 
    },
    }
</script>

<style scoped>
.main{
    min-height: 80vh; 
    background-color: #f1f2f4;
    
}
  .home-img{
  width: 90%;
  height: 100%;
  }

</style>