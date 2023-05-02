<template>
    <div>
       <page-header></page-header>
       <client-login-form></client-login-form>
       <h2>{{ errorMessage }}</h2>
    </div>
</template>

<script>
// import Cookies from "vue-cookies"
    import axios from "axios";
import PageHeader from '@/components/PageHeader.vue';
import ClientLoginForm from '@/components/ClientLoginForm.vue';

    export default {
    components: {
            PageHeader,
            ClientLoginForm,
    },
        data() {
            return {
                errorMessage: undefined,
               
            clientDisplay__Array: [],
            newObjectData: undefined,
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
                    client_id:`number`
                }
            } ).then( ( response ) => {
                console.log(response)
                this.$router.push( `/discovery-page` )
            } ).catch( ( error ) =>
            {
                error;
                this.errorMessage = "Invalid input! Please try again."
            } )
        }
    }
    
</script>

<style scoped>

</style>