<template>
    <main class="main" >
        <div class="menu_container">
        <div class="menu_card" v-for="(menu,i) in menuArry" :key="i">
          <div class="menu_img_card">           
            <img  class="menu_image" :src="menu[`image_url`]" alt="">
          </div>
          <div class="menu_details">
           <h3 class="menu_name">{{menu[`name`]}}</h3> 
           <p class="menu_description">{{menu[`description`]}}</p>
           <p class="menu_price">{{menu[`price`]}}$CAD</p>
           <button class="addto_order">Add to Orders</button>
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
                restaurant_id: undefined,
                menuArry:[]
            }
    },
    methods: {
        getId(idData){
            axios.request( {
                url: `https://foodie.bymoen.codes/api/menu`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`,
                },
                params: {
                    restaurant_id:idData
                }
            } ).then( ( response ) => { 
                this.menuArry = response[`data`]
            } ).catch( ( error ) =>{
                error;
            } ) 
        },
    },
    mounted(){
        let restaurant_id = Cookies.get(`restaurant_id` )
             this.getId(restaurant_id)  
    },   
    }
</script>
<style scoped>
.main{
    min-height: 30vh;
}
.menu_container {
  display: grid;
  place-items: center;
  width: 100%;
  justify-content: center;
  gap: 20px;
}
 .menu_card {
  width: 80%;
  background-color: #fff;
  display: grid;
  place-items: center;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  /* grid-template-columns:repeat(auto-fit, minmax(50px, 1fr)); */
}
.menu_img_card{
width: 100%;
}
.menu_image {
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
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
  color: #fff;
  border: none;
  border-radius: 0 0 10px 10px;
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
  width: 40%;
}
}
@media only screen and (min-width: 900px) {
  .menu_card {
  grid-template-columns:repeat(auto-fit, minmax(50px, 1fr));
}
}

</style>