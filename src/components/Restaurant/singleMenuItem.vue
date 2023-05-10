<template>
    <div class="main">
        <div class="main_card">
            <div class="menu_card" >
                <div class="menu_img_card">           
                <img  class="menu_image" :src="single_menu[`image_url`]" alt="food image">
                </div>
                <div class="menu_details">
                <h3 class="menu_name"> Name:{{single_menu[`name`]}}</h3> 
                <p class="menu_description"> Description{{single_menu[`description`]}}</p>
                <p class="menu_price"> Price {{single_menu[`price`]}}$CAD</p>
                </div>  
            </div>
    </div>
    </div>
</template>

<script>
    export default {
        props: {
            single_menu:Object
            },
    components: {
          
    },
    mounted(){
        console.log(this.single_menu)
    }
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
    width: 40%;
}
.main_card{
  display: grid;
  place-items: center;
  width: 100%;
  gap:20px
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
  border-radius: 10px 10px 0 0;
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
.order_label{
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 0.8rem; 
  padding:10px ;
}

.order_number {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 60px;
  margin-bottom: 10px;
}
.addto_cart {
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
  width: 40%;
}
.menu_container{
  width: 60%;
  grid-template-columns:repeat(auto-fit, minmax(500px, 1fr));

} 

}
</style>