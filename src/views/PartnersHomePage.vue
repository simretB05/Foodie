<template>
    <div>
        <business-page-header></business-page-header>
                <main class="main">
                    <h2>this is partners home page</h2>
                </main>
        <bussiness-page-footer></bussiness-page-footer>
    </div>
</template>
<script>
import BusinessPageHeader from '@/components/Restaurant/BusinessPageHeader.vue';
import BussinessPageFooter from '@/components/Restaurant/BussinessPageFooter.vue';
    export default {
    components: {
            BusinessPageHeader,
            BussinessPageFooter
        }
    }
</script>

<style scoped>
.main{
    min-height: 80vh;
}
</style>