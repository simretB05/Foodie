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
        }
    }
</script>

<style scoped>

</style>