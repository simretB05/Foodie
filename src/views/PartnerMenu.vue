<template>
    <div>
         <business-page-header></business-page-header>
        <main class="main">
            <h1>this is the partners menu page</h1>
       <menu-input-page></menu-input-page>
        </main>
        <bussiness-page-footer></bussiness-page-footer>
    </div>
</template>

<script>
import BusinessPageHeader from '@/components/BusinessPageHeader.vue';
import BussinessPageFooter from '@/components/BussinessPageFooter.vue';
import MenuInputPage from '@/components/MenuInputPage.vue';
    export default {
    components: {
            MenuInputPage,
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