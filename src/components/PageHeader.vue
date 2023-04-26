<template>
    <header class="header">
        <div class="logo_holder"> 
            <img src="/images/icons/foodie-logo.svg" alt="logo image">
        </div>
       <img src="/images/icons/menu-icon.svg" alt="menu icon image">
    </header>
</template>
<script>
    export default {
        
    }
</script>

<style scoped>
.header{
    display:grid;
    place-items:center;
    min-height:10vh;
}
.logo_holder{
    justify-self: start;
}
img{
    width: 70px;
     height:70px
}
</style>