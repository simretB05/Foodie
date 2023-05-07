<template>
    <main class="main" >
      <div class="rest_info_card">
          <h1 class="rest_name">{{ restaurant_name}} Restaurant Menu </h1>
          <p class="rest_address"> Address:{{restaurant_address }}</p>
          <p class="rest_address">Phone-number:{{restaurant_phone}}</p>
      </div>
      <div class="main_card">
        <div class="menu_container">
          <div class="menu_card" v-for="(menu,i) in menuArry" :key="i">
            <div class="menu_img_card">           
              <img  class="menu_image" :src="menu[`image_url`]" alt="">
            </div>
          <div class="menu_details">
              <h3 class="menu_name">{{menu[`name`]}}</h3> 
              <p class="menu_description">{{menu[`description`]}}</p>
              <p class="menu_price">{{menu[`price`]}}$CAD</p>
                <button @click="addtoOrders" :menu_item="menu[`id`]" class="addto_order"> Add To Orders</button>
          </div>  
        </div>
      </div>
  </div>
    </main>
</template>
<script>
import axios from "axios";
import Cookies from "vue-cookies"
    export default {
        data() {
            return {
              restaurantId: undefined,
              menuArry: [],
              token: Cookies.get( `token` ),
              menu_items: [],
              restInfo: undefined,
              restaurant_address: undefined,
              restaurant_name: undefined,
              restaurant_phone:undefined
            }
    },
    methods: {
      getId( restaurant_id ){
            axios.request( {
                url: `https://foodie.bymoen.codes/api/menu`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`,
                },
                params: {
                  restaurant_id: restaurant_id
                }
            } ).then( ( response ) => { 
              this.menuArry = response[`data`]

            } ).catch( ( error ) =>{
                error;
            } ) 
      },
      addtoOrders( details ){
        let menu_item = details[`target`].getAttribute( `menu_item` )
        this.menu_items.push( menu_item )
        axios.request( {
                url: `https://foodie.bymoen.codes/api/client-order`,
                headers: {
                  'x-api-key': `qUikCEg0vdshWKhbZQKL`,
                    token:this.token
            },
                method: `POST`,
                data: {
                  menu_items:this.menu_items,
                  restaurant_id:this.restaurantId
                }
            } ).then( ( response) => {
             response
            } ).catch( ( error ) =>{
                error;
            } )
      }
    },
    mounted(){
      let restaurant_id = Cookies.get( `restaurant_id` )
      this.restInfo = Cookies.get( `restData` )
      this.restaurant_name = this.restInfo[`name`]
      this.restaurant_address = this.restInfo[`address`]
      this.restaurant_phone = this.restInfo[`phone_number`]
        this.restaurantId=restaurant_id
             this.getId(restaurant_id)  
    },   
    }
</script>
<style scoped>
.rest_name{
  
}
.rest_address{
  font: 1rem; 

}
.main{
    min-height: 30vh;
    margin: 32px;
}
.main_card{
  display: grid;
  place-items: center;
  width: 100%;
}
.menu_container {
  display: grid;
  place-items: center;
  width: 100%;
  justify-content: center;
  gap: 20px;
  margin: 50px;
}
 .menu_card {
  width: 80%;
  background-color: #fff;
  display: grid;
  place-items: center;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
.menu_img_card{
width: 100%;
min-height: 100%;
align-self: start;

}
.menu_image {
  width: 100%;
  height: auto;
  border-radius: 10px 0 0 10px;
  align-self: start;
}
.menu_details {
  padding: 14px;
  display: grid;
  place-items: center;
  min-height: 25vh;
  width:90%;

} 
.menu_name {
  font-size: .91rem;
  font-weight: bold;
  margin-bottom: 10px;
  width: 100%;
}
.menu_description {
  font-size: .8rem;
  margin-bottom: 10px;
  color: #787676;
}
.menu_price {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
.addto_order {
  display: block;
  width: 60%;
  padding: 10px 0;
  font-size: .9rem;
  font-weight: bold;
  text-align: center;
  background-color:#7ed957;;
  color: black;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

@media only screen and (min-width: 600px) {
  .menu_card{
    width:70% ;
  }
  .menu_details {
  min-height: 23vh;
  width:68%;
}
.menu_name{
  font-size: 1rem;
}
.menu_description {
  font-size: 1rem;
}
.addto_order {
  width: 70%;
}
}
@media only screen and (min-width: 900px) {
  .main_card{
  grid-template-columns:repeat(auto-fit, minmax(50px, 1fr));

 }
  .menu_card {
  grid-template-columns:repeat(auto-fit, minmax(50px, 1fr));
  width: 100%;
}
.menu_container{
  width: 60%;
  grid-template-columns:repeat(auto-fit, minmax(500px, 1fr));

} 

}

</style>