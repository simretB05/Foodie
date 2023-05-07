<template>
    <div>
        <page-header></page-header>
        <main class="main">
            <div class="restaurant"><h1>Your Selected Restaurant Menu</h1></div>
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
    display: grid;
    place-items: center;
    min-height: 80vh;
    background-color: #f5f3f1;
    margin-top: 40px;
}
.restaurant{
    margin-top: 40px;
    display: grid;
    place-items: center;
    justify-self: start;
    width:30%;
    color: #7ed957;
    text-decoration: underline;
}
</style>