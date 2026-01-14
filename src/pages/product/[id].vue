<script setup>
  import { onMounted, ref } from 'vue'
const route=useRoute()
const product=ref({})
onMounted(async()=>{
  const res=await $api(`products/${route.params.id}`)
product.value=res
})
</script>

<template>
  <h1>{{ product.title }}</h1>
  
  <div>
    <p class="text-h4 text-start bg-secondary pa-2 d-inline-block mt-5 cursor-pointer">
      {{ product.category }}
    </p>
  </div>

  <VRow class="mt-7">
    <!-- Product Image -->
    <VCol cols="12" md="6">
      <VCard  class="pa-2 rounded">
        <VImg
          width="400"
          height="400"
          contain
          :src="product.image"
        />
      </VCard>
    </VCol>

    <!-- Product Details -->
    <VCol cols="12" md="6">
      <div class="d-flex flex-column">
        <p class="text-h3 mb-3">{{ product.price }} $</p>
        <p class="text-h3 mb-5">{{ product.rating?.rate }}⭐</p>
        <p class="text-h5 text-justify">{{ product.description }}</p>
      </div>
    </VCol>
  </VRow>

</template>

<style lang="scss">

</style>

