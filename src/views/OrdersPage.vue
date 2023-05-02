<template>
    <div>
       <page-header></page-header>
       <client-orders></client-orders>
       <p>Login Page oooo</p>
    </div>
</template>

<script>
     import PageHeader from '@/components/PageHeader.vue'
     import  ClientOrders from '@/components/ClientOrders.vue'
    export default {
    components: {
            PageHeader,
            ClientOrders
    },
    methods: {
        getClientInfo( userData ){
            for ( let i = 0; i < userData.length; i++ ){
                this.first_name = userData[i][`first_name`]
            }
        },
        
    },
    mounted(){
        this.$root.$on( `userData`, this.getClientInfo );
        console.log( `this` )
        this.$root.$on('userData', ( userDataArry ) =>{
            console.log( 'on user data:', userDataArry );
        } )
          
    }
    }
</script>

<style scoped>

</style>