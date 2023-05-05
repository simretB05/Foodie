<template>
    <div>
        <main class="main">
            <div class="menu_card">
                <label for=" menu item description">Menu item discription</label>
                <input v-model="description" type="text" required placeholder="Item description">
                <label for="menu item image">Menu item Image</label>
                <input type="text" v-model="image_url" placeholder="Item Image"> 
                <label for="menu item name">Menu item name</label>
                <input v-model="name" type="text" required placeholder="Item name">
                <label for="menu item price">Menu item price</label>
                <input v-model="price" type="text" required placeholder="Item Price">
                <button @click="saveMenu">save</button> <button>Edite</button>
            </div>
            <div>{{ succsses_message }}</div>
        </main>
    </div>
</template>
<script>
import axios from "axios";
import Cookies from "vue-cookies"
export default {

    data() {
        return {
            description: undefined,
            image_url: undefined,
            name: undefined,
            price: undefined,
            restaurant_token: Cookies.get(`restaurant_token` ),
            succsses_message:undefined
        }
    },
    methods: {
        saveMenu(){

            axios.request( {
                // Url to send the post Method
                url: `https://foodie.bymoen.codes/api/menu`,
                headers: {
                    'x-api-key': `qUikCEg0vdshWKhbZQKL`,
                    token:this.restaurant_token
                },
                method: `POST`,
                data: {
                    // data values required to send a POST login
                    description:this.description,
                    image_url:this.image_url,
                    name:this.name,
                    price:this.price

                }

            } ).then( ( ) =>{
               this.succsses_message=`menu item is posted succesfully`
                      
              
            } ).catch( ( error ) =>
            {
                error;
                this.errorMessage = "Invalid input! Please try again."
            } )
        }
    }
    
    }

</script>

<style scoped>

</style>