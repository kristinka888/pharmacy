<template>
    <div>
     <div class="list-container">
    <medicine-card
    v-for="medicine in getMedicines"
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
        components: {
       MedicineCard,
        },
        computed: {
            ...mapGetters(['getProductsList']),
        },
    }
</script>

<style lang="scss" scoped>
  .list-container{
      display: flex;
  }
</style>