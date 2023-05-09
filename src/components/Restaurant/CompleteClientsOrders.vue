<template>
    <div>
        <main class="main">  
            <button @click="updateStatus"  :orderId="order_id" class="confirm_button" >Complete</button>        
        </main>
    </div>
</template>
<script>
import Cookies from "vue-cookies"
// import axios from "axios";
export default {
    props: {

        order_id:Number
    },
    data() {
        return {
            
            orders: Cookies.get( `orders` ),
            // confirmedArray:[]
            }
    },
    mounted(){
    },
    methods: {
        updateStatus(details){
            let getOrder_item = details[`target`].getAttribute( `orderId` )
            for ( let i = 0; i < this.orders.length; i++ ) {
                if ( Number( this.orders[i]['order_id'] ) === Number( getOrder_item ) ){
                    this.orders[i][`is_confirmed`] =1
                    let confirmed_item = this.orders.splice( i, 1 )
                    Cookies.set( `confirmed_orders`, confirmed_item )
                    this.$root.$emit(`confiOrder` ,confirmed_item)
                    let itemCard = details.target.closest( `.orders_card` )
                 
                    itemCard.remove()
                    break;
                }
            }
        },
    },
   
    }
</script>

<style  scoped>

.confirm_button {
    width: 160px;
    background-color:lightcoral;;
    border: none;
    border-radius: 15px;
    color: white;
    font-weight: 700;
    padding: 10px;
    transition: background-color 0.5s ease;
    box-shadow: 0 1px 0 #afcce7;
    margin:16px ;
}
.confirm_button:active{
    transform: translateY(3px);
box-shadow: none;
}
</style>