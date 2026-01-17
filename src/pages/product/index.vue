<script setup>
import productCard from '@/views/pages/product/product-card.vue'
</script>

<template>
  <productCard />
</template>

<style lang="scss">

</style>


<script setup >
import productCard from '@/views/pages/product/product-card.vue'
import { onMounted, ref } from 'vue'
import productList from '@/views/pages/product-list.vue'
const products = ref([])

onMounted(async () => {
  const res = await $api("/products")
  products.value =  res
})
</script>

<template>
  <v-row>
    <v-col
      v-for="product in products"
      :key="product.id"
      cols="12"
      md="4"
    >
      <productCard :data="product" />
    </v-col>
  </v-row>
  <productList />
</template>

<style lang="scss">

</style>

