<template>
    <div>
         <button class="edit_btn">Edit Menu</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.edit_btn {
    width: 80px;
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
.edit_btn:active{
    transform: translateY(3px);
box-shadow: none;
}
</style>