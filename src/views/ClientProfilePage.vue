<template>
    <div>
        <page-header></page-header>
        <client-info></client-info>
    </div>
</template>

<script>
import ClientInfo from '@/components/ClientInfo.vue';
import PageHeader from '@/components/PageHeader.vue';
    export default {
    components: {
        PageHeader,
            ClientInfo
        }
    }
</script>

<style lang="scss" scoped>

</style>