<template>
    <div>
       <page-header></page-header>
       <main class="main">
        <div class="main-card">
            <h2>Login To Your Foodie Account </h2>

            <client-login-form></client-login-form>
            <h2>{{ errorMessage }}</h2>
        </div>
      
     
       </main>
       <page-footer></page-footer>
    </div>
</template>

<script>
// import Cookies from "vue-cookies"
    import axios from "axios";
import PageHeader from '@/components/Client/PageHeader.vue';
import ClientLoginForm from '@/components/Client/ClientLoginForm.vue';
import PageFooter from "@/components/Client/PageFooter.vue";

    export default {
    components: {
            PageHeader,
            ClientLoginForm,
            PageFooter

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

.main{
min-height: 80vh;
background-color:#f5f3f1 ;
display:grid;
place-items:center
}
.main-card{
    margin-top:32px;
    width: 100%;
    display:grid;
    place-items:center;
    align-self: start;

}
</style>