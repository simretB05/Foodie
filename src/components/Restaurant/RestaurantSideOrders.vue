<template>
    <div>
        <div class="main">
       <h1 class="orders_title"> Client Orders</h1>
        <div class="orders_card" v-for="(order,i) in orders" :key="i">
            <div >
                <h2 class="order_name">{{order[`name`]}}</h2>
                    <p class="order_price"> {{order[`price`] }} $CAD</p>
                    <p class="order_id"> Order  ID {{ order[`order_id`] }}</p>
                     <order-status-page></order-status-page>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
  import axios from "axios"
  import Cookies from "vue-cookies"
  import OrderStatusPage from '@/components/Restaurant/OrderStatusPage.vue'  
export default {
    components: {
            OrderStatusPage,
        },
        data() {
            return {
                token: Cookies.get( `restaurant_token` ),
                // is_confirmed:`true`,
                // is_complete:'true',
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
.orders_title{
    color:#7ed957;
    text-decoration: underline;
    margin-bottom: 32px;
}
.main{
    display: grid;
    place-items: center;
    width: 100%;
}
.orders_card {
    display: grid;
    place-items: center;
    width: 80%;
    border: 1px solid #f0ebeb;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
}
.order_name {
    font-size: 1rem; 
    font-weight: bold;
}
.order_id,.order_price  {
  display: grid;
  place-items: center;
  color: black;
  margin: 15px;
  justify-self: start;
}
.order_price  {
  color: #7ed957;
  font-weight:700;
}
.confirm-card {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.order_confirm,
.orders_confirm {
  margin-right: 10px;
}
.select_button {
    width: 160px;
    background-color:#7ed957;;
    border: none;
    border-radius: 15px;
    color: white;
    font-weight: 700;
    padding: 10px;
    transition: background-color 0.5s ease;
    box-shadow: 0 1px 0 #afcce7;
    margin:16px ;
}
.select_button:active{
    transform: translateY(3px);
box-shadow: none;
}
@media only screen and (min-width: 600px) {
    .orders_card {
        width: 80%;
    }
}
 @media only screen and (min-width: 900px) {
    .orders_card {
        width: 100%;
    }
}
</style>