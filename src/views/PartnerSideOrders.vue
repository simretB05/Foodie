<template>
    <div>
        <business-page-header></business-page-header>
            <main class="main">
               <partner-side-orders> </partner-side-orders>
            </main>
        <bussiness-page-footer></bussiness-page-footer>

    </div>
</template>

<script>
import BusinessPageHeader from '@/components/Restaurant/BusinessPageHeader.vue';
import BussinessPageFooter from '@/components/Restaurant/BussinessPageFooter.vue';
import PartnerSideOrders from '@/components/Restaurant/RestaurantSideOrders.vue'
    export default {
    components: {
            BusinessPageHeader,
            PartnerSideOrders,
            BussinessPageFooter

        }
    }
</script>

<style scoped>
  .main{
    min-height: 80vh;
  }

</style>