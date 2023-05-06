<template>
    <div>
<h1> client orders are here</h1>
    </div>
</template>

<script>
  import axios from "axios";
  import Cookies from "vue-cookies"
    export default {
    data() {
    return {
        token: Cookies.get( `token` ),
        is_confirmed: true,
        is_complete:true
    }
    },
    mounted(){
       this.getOrders()
    },
    methods: {
        getOrders(){
            axios.request( {
                url: `https://foodie.bymoen.codes/api/client-order`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`,
                    token:this.token 

                },
                params: {
                    is_confirmed: this.is_confirmed,
                    is_complete:this.is_complete
                }
            } ).then( ( response ) => { 
           response

            } ).catch( ( error ) =>{
                error;
            } ) 
        }
    },
       
    }
</script>

<style scoped>

</style>