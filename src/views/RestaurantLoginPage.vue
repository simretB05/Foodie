<template>
    <div>
<business-page-header></business-page-header>
<main class="main">
    <h2>Login To Your Foodie Account </h2>

    <business-login-form></business-login-form>
</main>
<business-page-footer></business-page-footer>
    </div>
</template>

<script>
import BusinessLoginForm from '@/components/BusinessLoginForm.vue'
import BusinessPageHeader from '@/components/BusinessPageHeader.vue'
import BusinessPageFooter from '@/components/BussinessPageFooter.vue'
    export default {
    components: {
        BusinessLoginForm ,
        BusinessPageHeader,
        BusinessPageFooter
        }
    }
</script>

<style scoped>
.main{
    min-height: 80vh;
}
</style>