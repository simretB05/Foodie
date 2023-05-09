<template>
    <div>
        <main class="main">  
            <button @click="updateStatus"  :orderId="order_id" class="confirm_button" >Confirm</button>        
        </main>
    </div>
</template>
<script>
import Cookies from "vue-cookies"
import axios from "axios";
export default {
    props: {

        order_id:Number
    },
    data() {
        return {
            token: Cookies.get( `restaurant_token` ),
            orders: Cookies.get( `orders` ),
            confirmedArray:[],
            is_confirmed:true,
            }
    },
    mounted(){
    },
    methods: {
        updateStatus( details ) {
            let getOrder_item = details[`target`].getAttribute( `orderId` )
            for ( let i = 0; i < this.orders.length; i++ ) {
                if ( this.orders[i]['order_id'] === Number( getOrder_item ) ){
                    let confirmed_item = this.orders.splice( i, 1 )
                    let conf_Json = JSON.stringify( confirmed_item[0] )
                    this.confirmedArray.push( conf_Json )
                    Cookies.set( `confirmed_orders`, this.confirmedArray )
                    let itemCard = details.target.closest( `.orders_card` )
                    itemCard.remove()
                    axios.request( {
                url: `https://foodie.bymoen.codes/api/restaurant-order`,
                    headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`,
                    token: this.token,
                    method: `PATCH`,
                    data: {
                        is_confirmed: this.is_confirmed,
                          order_id:this.order_id
                    }
                },
            } ).then( (  ) =>{
                    console.log(`its confirmed`)
            } ).catch( ( error ) =>
            {
                error;
            } )
                
                }
            }
        },
    },
   
    }
</script>

<style  scoped>

.confirm_button {
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
.confirm_button:active{
    transform: translateY(3px);
box-shadow: none;
}
</style>