<template>
    <div>
<p>{{ message }}</p>
    </div>
</template>

<script>
  import axios from "axios";
//  import Cookies from "vue-cookies"
    export default {
 data() {
            return {
                message: undefined,
        
    }
 },
    methods: {
            
    },
        mounted(){
            axios.request({
                url: `https://foodie.bymoen.codes/api/validate`,
                headers: {
        'x-api-key': `qUikCEg0vdshWKhbZQKL`
    }
        } ).then( ( response ) =>{
            this.message=response.data.message
        } ).catch((error) =>{
            error;
            this.errorMessage="please try again"
        } )
            
        }
    }
</script>

<style scoped>

</style>