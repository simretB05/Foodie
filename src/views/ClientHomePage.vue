<template>
    <div>
        <page-header></page-header>
    </div>
</template>
<script>
    import PageHeader from '@/components/PageHeader.vue';
    export default {
    components: {
        
        PageHeader,
    },
    data() {
        return {
             
        }
    },
    methods: {
       
    },
    mounted(){
        this.$root.$on(`userData`, this.getClientInfo);

    }
}
    
</script>
<style scoped>

</style>