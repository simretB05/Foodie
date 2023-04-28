<template>
    <div>
        <div v-for="(info,i) in clientDisplay__Info" :key="i">
            <p>{{ info[i][`username`] }}</p>
            <p>{{ info[i][`first_name`] }}</p>
            <p>{{ info[i][`last_name`] }}</p>
      </div>
    </div>
</template>

<script>
    // import axios from "axios";
    import Cookies from "vue-cookies"
    export default {
        components: {
    },
    data() {
            return {
                name: this.name,
                client_info: Cookies.get( `client_info` ),
                clientDisplay__Info:undefined
            }
    },
    methods: {
        displayClientInfo(){

            this.clientDisplay__Info=JSON.parse(this.client_info)
       }
    }
    }
</script>

<style scoped>

</style>