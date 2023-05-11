<template>
    <div>
        <div class="menu_card">
                <label for=" menu item description">Menu item discription</label>
                <input v-model="description" type="text" required placeholder="Item description">
                <label for="menu item image">Menu item Image</label>
                <input type="text" v-model="image_url" placeholder="Item Image"> 
                <label for="menu item name">Menu item name</label>
                <input v-model="name" type="text" required placeholder="Item name">
                <label for="menu item price">Menu item price</label>
                <input v-model="price" type="text" required placeholder="Item Price">
                <button @click="saveMenu">Save</button>
            </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style scoped>
h1{
    margin-top: 32px;
}
.main{
    min-height: 30vh; 
    margin: 32px;
    
}
.menu_card {
  display: grid;
  justify-items: center;
  width: 80%;
  margin: 32px auto;
  padding: 20px;
  background-color: #fcfcfb;
  border: 1px solid #7ed957;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}
label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: .9rem;
  justify-self: start;
  color: #7ed957;
}
input {
    width: 90%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
   background-color: #f5f3f1;
   font-size: .8rem;
   justify-self: start;
}
button {
  display: block;
  width: 50%;
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color:  #7ed957;;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}
@media only screen and (min-width: 600px) {
    .menu_card{
        width: 50%;
    }
    button {
        width: 40%;
    }
}
@media only screen and (min-width: 900px) {
    .menu_card{
        width: 50%;
    }
    button {
        width: 20%;
    }
}

</style>