<template>
    <div>
        <div v-if="getMedicinesInCart.length>0">
            <div class="item-container" v-for="item in getMedicinesInCart"
            :key="item.id"
            >
           <div class="cart-item">
           <b> Назва медичного препарату:</b>
            {{ item.name }} <br/>
           <b> Ціна за одиницю:</b>
            {{item.price}} грн.<br/>
            <b>Кількість:</b>
            {{ item.quantity }} шт.<br/>
            <b>Ціна:</b>
            {{ item.totalPrice }} грн.<br/>
           </div> 
           <div class="cart-item">
            <button @click="onDeleteItemFromCart(item)">Видалити</button>
           </div>
            </div>
           <b> Всього:{{total}} грн.</b>
        </div>
        <div v-else>
         Кошик порожній
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
 export default {
        name:"CartForm",
        computed: {
            ...mapGetters(['getMedicinesInCart']),
            total(){
                let sum=0
                for(let medicine of this.getMedicinesInCart){
                    sum+=Number(medicine.totalPrice)
                }
                return sum.toFixed(2)
            }
         },
         methods: {
             onDeleteItemFromCart(medicine) {
                 this.$store.dispatch('deleteItemFromCart',medicine)
             }
         },
       

    }
</script>

<style lang="scss" scoped>
.item-container {
  width: 400px;
  height: 100px;
  border: 2px solid rgb(89, 97, 89);
  border-radius: 5px;
  background: #ccc;
  padding: 5px;
  margin: 5px;
  text-align: left;
}
.cart-item{
    display:left
}
</style>