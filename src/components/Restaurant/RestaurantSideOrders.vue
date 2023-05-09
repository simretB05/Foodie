<template>
    <div class="main">
            <h1 class="main_title"> Client Orders</h1>
           <div class="main_orders_card">
                <div v-if="orders.length===0" >
                    <h2>No Orders Yet</h2>
                </div>
                <div  class="corders_container"  v-else>
                <div class="orders_card" v-for="(order,i) in orders" :key="i">
                    <h2 class="order_name">{{order[`name`]}}</h2>
                        <p class="order_price"> {{order[`price`] }} $CAD</p>
                        <p class="order_id"> Order  ID {{ order[`order_id`] }}</p>
                        <confirmed-clients-orders :order_id="order[`order_id`]" ></confirmed-clients-orders>
                </div>
            </div>
           </div>
            <div class="card">
                <div class="confirmed_orders">
                    <h2 class="confirmed_orders_title">   Confirmed Client Orders</h2>
                   <confirmed-orders-display></confirmed-orders-display>

                </div>
                <div  class="complet_orders">
                    <h2 class="confirmed_orders_title">Completed Client Orders</h2>
                </div>
            </div>
    </div>
</template>
<script>
  import axios from "axios"
import Cookies from "vue-cookies"
import ConfirmedClientsOrders from "./ConfirmedClientsOrders.vue"
  import ConfirmedOrdersDisplay from "./ConfirmedOrdersDisplay.vue"
export default {
    components: {
        ConfirmedClientsOrders,
            ConfirmedOrdersDisplay
        },
        data() {
            return {
                token: Cookies.get( `restaurant_token` ),
                orders:[],
                confirmed_item:[]
            }
    },
    mounted(){
        this.getClientOrders()
        this.$root.$on( `confOrder`, this.getClientOrders);

    },
    methods: {
        getClientOrders(){
        //    console.log( confOrder)
            axios.request( {
                url: `https://foodie.bymoen.codes/api/restaurant-order`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`,
                     token: this.token
                },
            } ).then( ( response ) =>{
                        this.orders = response[`data`]
                        Cookies.set( `orders`, this.orders)
                        // for ( let i = 0; i < confOrder.length; i++ ){
                        //     for ( let j = 0; j < this.orders.length; j++ ) {
                        //         if ( confOrder[i][`order_id`] === this.orders[j][`order_id`] ) {
                        //             console.log( confOrder[i][`order_id`] )
                        //             console.log( this.orders[j][`order_id`] )

                        //         }                         

                        //     }
                        // }

            } ).catch( ( error ) =>
            {
                error;
            } )
        },
    }
    }
</script>

<style scoped>
.main{
    display: grid;
    place-items: center;
    width: 100%;
}
.main_title{
    color:#7ed957;
    text-decoration: underline;
    margin-bottom: 32px;
    justify-self: center
}
.main_orders_card{
    display: grid;
    place-items: center;
    width: 100%;
}
.card{
    display: grid;
    place-items: center;
    width: 100%;
}
.confirmed_orders_title,.confirmed_orders_title{
    margin: 30px;
}

.orders_card {
    display: grid;
    place-items: center;
    width: 100%;
    border: 1px solid #f0ebeb;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
}
.orders_card > div{
    width: 100%;
}
.status_card{
    width: 90%;
}
.order_name {
    margin: 20px auto;
    font-size: 1rem; 
    font-weight: bold;
    width: 90%;
    text-align: center;
    align-self: end;
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

.order_confirm,.orders_confirm {
  margin-right: 10px;
}
@media only screen and (min-width: 600px) {
    /* .orders_card {
        width: 100%;
    } */
}
 @media only screen and (min-width: 900px) {
    .main{
    width: 60%;
    }
    .main_orders_card{
        grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
        gap :16px;
    }
    .card{
        width: 90%;
        grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    }
}
</style>