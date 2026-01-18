<script setup>
import productList from '@/views/pages/product-list.vue'
import productCard from '@/views/pages/product/product-card.vue'
import { onMounted, ref } from 'vue'

const products = ref([])

onMounted(async () => {
  const res = await $api("/products")
  products.value = res
})
</script>

<template>
  <div>
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
  </div>
</template>

<style lang="scss">

</style>
