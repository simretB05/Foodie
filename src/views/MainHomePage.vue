<template>
    <div>
        <page-header></page-header>
        <home-page-main></home-page-main>
        <page-footer></page-footer>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import HomePageMain from '@/components/HomePageMain.vue';
import PageFooter from '@/components/PageFooter.vue'
    export default {
    components: {
            PageHeader,
            HomePageMain,
            PageFooter,
        }
    }
</script>

<style lang="scss" scoped>

</style>