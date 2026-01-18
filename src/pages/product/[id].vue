<script setup>
import { onMounted, ref } from 'vue'

const route = useRoute()
const product = ref({})
onMounted(async() => {
const res = await $api(`products/${route.params.id}`)
product.value = res
})
</script>

<template>
  <v-container>
    <v-card-title class="text-h2 pa-0 mb-2">
      {{ product.title }}
    </v-card-title>

    <div class="mb-6">
      <v-chip
        color="secondary"
        label
        class="text-uppercase"
      >
        {{ product.category }}
      </v-chip>
    </div>

    <v-row class="mt-7">
      <!-- Product Image -->
      <v-col cols="12" md="6">
        <v-card class="pa-2 rounded" elevation="2">
          <v-img
            width="100%"
            height="400"
            contain
            :src="product.image"
          />
        </v-card>
      </v-col>

      <!-- Product Details -->
      <VCol
        cols="12"
        md="6"
      >
        <v-card
          flat
          class="bg-transparent"
        >
          <v-card-text class="d-flex flex-column pa-0">
            <div class="text-h3 mb-3 text-primary font-weight-bold">
              {{ product.price }} $
            </div>     
            <div class="d-flex align-center mb-5">
              <v-rating
                :model-value="product.rating?.rate"
                color="warning"
                density="compact"
                half-increments
                readonly
                size="small"
              />
              <span class="text-subtitle-1 ms-2">({{ product.rating?.rate }} / 5)</span>
            </div>

            <div class="text-h5 text-justify">
              {{ product.description }}
            </div>
          </v-card-text>
        </v-card>
      </VCol>
    </v-row>
  </v-container>
</template>

<style lang="scss">
  

</style>

