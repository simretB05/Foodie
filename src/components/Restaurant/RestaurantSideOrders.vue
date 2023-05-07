<template>
    <div>
        <div class="main">
       <h1 class="orders_title"> client orders are here</h1>
        <div class="orders_card" v-for="(order,i) in orders" :key="i">
            <div >
                <h2 class="order_name">{{order[`name`]}}</h2>
                    <p class="order_price">{{order[`price`] }}</p>
                    <p class="order_id">{{ order[`order_id`] }}</p>
                <div class="confirm-card">
                    <p class="order_confirm">{{order[`is_complete`] }}</p>
                    <p class="orders_confirm">{{order[`is_confirmed`]}}</p>
                </div>
                <button  class="select_button" >Add to Foodie Cart</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
  import axios from "axios";
  import Cookies from "vue-cookies"
    export default {

        data() {
            return {
                token: Cookies.get( `restaurant_token` ),
                // is_confirmed:`true`,
                is_complete:'true',
                orders:undefined
                
            }
    },
    mounted(){
        this.getClientOrders()
    },
    methods: {
        getClientOrders(){
            axios.request( {
                url: `https://foodie.bymoen.codes/api/restaurant-order`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`,
                    token:this.token 
                },
                // params: {
                //     is_confirmed: this.is_confirmed,
                    is_complete:this.is_complete
                // }
            } ).then( ( response ) => { 
                this.orders = response[`data`]
              
            } ).catch( ( error ) =>{
                error;
            } ) 
            
            }
        },
    }
</script>

<style scoped>

</style>