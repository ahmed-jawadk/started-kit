<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const route = useRoute()
const router = useRouter()
const products = ref([])
const { t } = useI18n()
const handleRowClick = (event, { item }) => {
  router.push({ name: 'product-id', params: { id: item.id } })
}

onMounted(async() => {
    const endpoint = route.params.id ? `products/${route.params.id}` : 'products'
    const res = await $api(endpoint)
    products.value = Array.isArray(res) ? res : [res]
})

const headers = ref([
  { title: 'avatar', key: 'image' },
  { title: 'Index', key: 'id' },
  { title: 'Title', key: 'title' },
  { title: 'Price', key: 'price' },
  { title: 'Category', key: 'category' },
  { title: 'Rating', key: 'rating.rate' },
])
</script>

<template>
  <h1>{{ t('produt-list-title') }}</h1>
  <VDataTable
    :headers="headers"
    :items="products"
    show-expand
    @click:row="handleRowClick"
  >
    <!-- Image Slot -->
    <template #[`item.image`]="{ item }">
      <VImg
        :src="item.image"
        height="70"
        width="70"
        class="rounded ma-2"
        contain
      />
    </template>

    <template v-slot:expanded-row="{ columns, item }">
      <tr>
        <td :colspan="columns.length">
          <VCard flat class="my-2">
            <VCardTitle class="text-subtitle-1 font-weight-bold">
              Description:
            </VCardTitle>
            <VCardText>
              {{ item.description }}
            </VCardText>
          </VCard>
        </td>
      </tr>
    </template>
  </VDataTable>
</template>

<style lang="scss">

</style>
