<template>
    <div>
        <div class="search-filter">
          <input type="text" placeholder="Знайти..." v-model="search"/><br/>
        </div>
        <div class="price-filter">
          <label>
          Фільтер ціни (з якої ціни відображати товари):
          <input type="number" v-model="price"/>
          </label>
        </div>
        <div class="sort">
              <button id="s">Сортувати</button>
                за ціною()
              <button id="s">Сортувати</button>
                за назвою()
        </div>
    <div class="list-container">
    <medicine-card
    v-for="medicine in getMedicines"
    :key="medicine.id"
    :id="medicine.id"
    :name="medicine.name || undefined"
    :price="medicine.price|| undefined"
    :requirements="medicine.requirements|| undefined"
    :maker="medicine.maker|| undefined"
    />
     </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MedicineCard from "./MedicineCard"
    export default {
        name:"MedicinesList",
        data() {
            return {
                search:"",
                price:0,
                sortByPriceDir:true,
                sortP:'за зростанням',
                
            }
        },
        components: {
        MedicineCard,
        },
        computed: {
            ...mapGetters(['getMedicines']),
              },
            methods: {
                
             
            }
    }
</script>

<style lang="scss" scoped>
  .list-container{
      display: flex;
  }
  .search-filter{
      text-align: center;
      margin:10px;
      padding: 3px;
  }
  .price-filter{
      text-align: center;
      margin:10px;
      padding: 3px;
  }
  .sort{
      text-align: center;
  }
  #s{
      background:rgb(112, 56, 56);
  }
</style>