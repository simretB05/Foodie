<template>
    <div>
       <page-header></page-header>
       <client-login-form></client-login-form>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import ClientLoginForm from '@/components/ClientLoginForm.vue';

    export default {
    components: {
            PageHeader,
            ClientLoginForm,
        }
    }
</script>

<style scoped>

</style>