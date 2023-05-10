<template>
    <div>
         <button class="remove_btn"  @click="removeRestMenu" :menu_id="menu_id">Remove Menu</button>
    </div>
</template>
<script>
    import axios from "axios"
    import Cookies from "vue-cookies" 
export default {
    props: {
        menu_id:Number
        },
        data() {
            return {
            token: Cookies.get( `restaurant_token` ),
            menuArry:undefined
            }
        },
    mounted(){
        },
        methods: {
            removeRestMenu( details)  {
                let getMenuId = details[`target`].getAttribute( `menu_id` )
                this.$root.$emit(`menuId`,getMenuId)
                axios.request( {
                    url: `https://foodie.bymoen.codes/api/menu`,
                    headers: {
                        'x-api-key': `qUikCEg0vdshWKhbZQKL`,
                        token: this.token
                    },
                    method: `DELETE`,
                    data: {
                        menu_id:this.menu_id
                    }
                } ).then( () =>{
                 console.log( `scussefully deleted your information`)
                } ).catch( ( error ) =>{
                    error;
                console.log( "Invalid input! Please try again.")
                } )
            },
        },
    }
</script>

<style scoped>
.remove_btn {
    width: 70px;
    background-color:#dfe4de;;
    border: none;
    border-radius: 15px;
    color: rgb(230, 70, 70);
    font-weight: 700;
    padding: 10px;
    transition: background-color 0.5s ease;
    box-shadow: 0 1px 0 #afcce7;
    margin:16px ;
}
.remove_btn:active{
    transform: translateY(3px);
box-shadow: none;
}
</style>