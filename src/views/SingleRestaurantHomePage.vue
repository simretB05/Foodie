<template>
    <div>
        <page-header></page-header>
        <main class="main">
            <div><h4>Name of resturant</h4></div>
          <restaurant-menu></restaurant-menu>
        </main>
        <page-footer></page-footer>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import RestaurantMenu from '@/components/RestaurantMenu.vue';
import PageFooter from '@/components/PageFooter.vue';
    export default {
    components: {
            PageHeader,
            RestaurantMenu,
            PageFooter
    },
    data() {
        return {
        }
    },
    methods: {
            
    },
    mounted(){
        
    }
    }
</script>

<style scoped>
.main{
    min-height: 80vh;
    background-color: #f5f3f1;

}
</style>