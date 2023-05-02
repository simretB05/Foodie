<template>
    <div>
       <page-header></page-header>
       <client-signup-form></client-signup-form>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import ClientSignupForm from '@/components/ClientSignupForm.vue'
    export default {
    components: {
            PageHeader,
            ClientSignupForm
            
    },
        data() {
            return {
            }
    },
    
    methods: {
            
    },
        
    }
</script>

<style scoped>

</style>