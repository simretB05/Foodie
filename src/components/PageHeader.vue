<template>
    <header class="header">
        <img src="/images/icons/logo.svg" alt="logo image">
        <h2>Foodie</h2>
        <nav class="nav">
            <router-link to="/">Login Page</router-link>
            <router-link to="/client-profile page">Proile Page</router-link>
            <router-link to="/discover page">Discover Page</router-link>
            <router-link to="/orders page">Orders Page</router-link>
            <router-link to="/restaurant login page">Restaurant Login</router-link>
            <router-link to="/restaurant profile page">Restaurant Profile</router-link>
            <router-link to="/restaurant public page">Restaurant Page</router-link>
            <router-link to="/shopping cart">shopping Cart</router-link>
        </nav>
    </header>
</template>
<script>
    export default {
        
    }
</script>

<style scoped>
img{
    width: 50px;
}
</style>