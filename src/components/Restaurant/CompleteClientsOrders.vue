<template>
    <div>
        <main class="main">  
            <button @click="updateStatus"  :orderId="order_id" class="confirm_button" >Complete</button>        
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
            confiArray:[],
            is_complete:1,
            }
    },
    mounted(){
    },
    methods: {
        updateStatus( details ){
                if ( this.is_complete === 0 ){
                    this.is_complete=`false`
                } else {
                    this.is_complete=`true`
                }
            let getOrder_item = details[`target`].getAttribute(`orderId` )
            this.$root.$emit(`compOrder_id`, getOrder_item )   
            axios.request( {
                url: `https://foodie.bymoen.codes/api/restaurant-order`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`,
                    token: this.token,
                },
                    method: `PATCH`,
                    data: {
                        is_complete:this.is_complete ,
                        order_id: this.order_id
                    }
            } ).then( () =>{
            } ).catch( ( error ) =>
            {
                error;
            } ) 
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