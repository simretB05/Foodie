<template>
    <div>
        <page-header></page-header>

        <main class="main"> 
            <p>Login Page oooo</p>
       </main>
       <page-footer></page-footer>
    </div>

</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
    import PageFooter from '@/components/PageFooter.vue'
    export default {
    components: {
            PageHeader,
            PageFooter

        }
    }
</script>

<style scoped>
.main{
    min-height: 80vh;
}
</style>