<template>
    <div>
        <!-- <page-header v-for="(data,i) in userDataArry" :key="i" :data="userDataArry[i]"></page-header> -->
                <page-header></page-header>

        <h1>clients will come to the discovery page after logging in</h1>
        <p>this is discovery page</p>
        <div></div>
    </div>
</template>

<script>
import axios from "axios";
import Cookies from "vue-cookies"
    import PageHeader from '@/components/PageHeader.vue'
    export default {
    components: {
            PageHeader,
    },
    data() {
        return {
            getClient_id: Cookies.get( `client_id` ),
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
                this.$root.$emit(`userData`, this.userDataArry )

            } ).catch( ( error ) =>{
                error;
                // this.errorMessage = "Invalid input! Please try again."
            } ) 
    },

    
    }
</script>

<style scoped>

</style>