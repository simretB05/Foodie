<template>
    <div>
        <main class="main">  
            <button  class="select_button" >Confirm</button>
            <button  class="select_button" >Complete</button>
        </main>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>

.select_button {
    width: 160px;
background-color:#7ed957;;
border: none;
border-radius: 15px;
color: white;
font-weight: 700;
padding: 10px;
transition: background-color 0.5s ease;
box-shadow: 0 1px 0 #afcce7;
margin:16px ;
}
.select_button:active{
    transform: translateY(3px);
box-shadow: none;
}
</style>