<script setup>
import { ref } from 'vue';

defineProps({
  data: {
    type: Object,
    required: true,
  },
})

const show = ref(false)
const router = useRouter()
const goToProduct = (id) => {
  router.push(`/product/${id}`)

}

</script>

<template>
  <v-card
    class="mx-auto"
    max-width="344"
    @click="goToProduct(data.id)"
  >
    <v-img
      height="150"
      :src="data.image"
      contain
    ></v-img>

    <v-card-title>
{{ data.title }}  
  </v-card-title>

    <v-card-subtitle class="d-flex justify-space-between">
      <span>{{ data.price }} $</span>
      <span>{{ data.rating?.rate }} ⭐️</span>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        text="Explore"
        @click.stop="show = !show"
      ></v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ data.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>










</template>

<style lang="scss">
</style>
