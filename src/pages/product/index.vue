<script setup>
import ProductCard from '@/views/pages/product/product-card.vue'
import ProductList from '@/views/pages/product-list.vue'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const products = ref([])

onMounted(async () => {
  const res = await $api('/products')

  products.value = res
})
</script>

<template>
  <div>
    <h1>{{ t('product-card') }}</h1>
    <VRow>
      <VCol
        v-for="product in products"
        :key="product.id"
        cols="12"
        md="4"
      >
        <ProductCard :data="product" />
      </VCol>
    </VRow>
    <ProductList />
  </div>
</template>
