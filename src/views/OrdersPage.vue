<template>
    <div>
        <page-header></page-header>
        <main class="main">
            <client-orders></client-orders>
        </main>
       <page-footer></page-footer>
    </div>
</template>
<script>
     import PageHeader from '@/components/PageHeader.vue'
     import PageFooter from '@/components/PageFooter.vue'
     import  ClientOrders from '@/components/ClientOrders.vue'
    export default {
    components: {
            PageHeader,
            ClientOrders,
            PageFooter

    },
    methods: {
        // getClientInfo( userData ){
        //     for ( let i = 0; i < userData.length; i++ ){
        //         this.first_name = userData[i][`first_name`]
        //     }
        // },
        
    },
    mounted(){
        // this.$root.$on( `userData`, this.getClientInfo );
        // console.log( `this` )
        // this.$root.$on('userData', ( userDataArry ) =>{
        //     console.log( 'on user data:', userDataArry );
        // } )
          
    }
    }
</script>

<style scoped>
.main{
    min-height: 80vh;
}
</style>