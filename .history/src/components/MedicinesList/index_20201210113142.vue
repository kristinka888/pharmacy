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
              <button id="s" @click="sortByPrice">Сортувати</button>
                за ціною({{sortP}})
                <button id="s" @click="sortByName">Сортувати</button>
                за назвою({{sortN}})
        </div>
    <div class="list-container">
    <medicine-card
    v-for="medicine in filteredMedicines"
    :key="medicine.id"
    :id="medicine.id"
    :name="medicine.name"
    :price="medicine.price"
    :requirements="medicine.requirements"
    :maker="medicine.maker"
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
                sortByNameDir:true,
                sortN:'за алфавітом',
            }
        },
        components: {
        MedicineCard,
        },
        computed: {
            ...mapGetters(['getMedicines']),
            filteredMedicines() {
           return this.getMedicines
             .filter((m) => {
              return (
              m.name.toLowerCase().includes(this.search.toLowerCase()) ||
              m.maker.toLowerCase().includes(this.search.toLowerCase()) ||
              m.requirements.toLowerCase().includes(this.search.toLowerCase())||
              m.price==Number(this.search)
            );})
            .filter((m)=>{
                return(
                   m.price >= Number(this.price)
                )
            })
            }
           },
            methods: {
                sortByPrice() {
                     this.sortByPriceDir = !this.sortByPriceDir
                     if(this.sortByPriceDir)
                     this.sortP = "за зростанням"
                     else
                     this.sortP = "за спаданням"
                     }
                   }
             
            }

//var sortByName = function (d1, d2) {return (d1.name.toLowerCase() > d2.name.toLowerCase()) ? 1 : -1;};
//;
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