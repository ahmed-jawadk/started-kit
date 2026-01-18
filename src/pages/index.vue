<script setup>
import { onMounted, ref } from 'vue'
import {useI18n} from 'vue-i18n'

import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleDarkMode() {
  theme.global.name.value =
    theme.global.name.value === 'light' ? 'dark' : 'light'
}
const { t } = useI18n()
const data=ref([])
async function getData(){
  const result= await $api('/products')
  data.value=result
}

onMounted(()=>{
  getData()
})

</script>
<template>
    <v-btn @click="toggleDarkMode">
    Toggle Dark Mode
    
  </v-btn>
  <h1>{{ t('home-page') }}</h1>
  <div>
    <VCard
      class="mb-6"
      title="Kick start your project 🚀"
    >
      <VCardText>{{t('home-page-text')}}</VCardText>
<VCardText>
  <span v-html="t('docs.read')"></span>
</VCardText>

    </VCard>
<div v-for="item in data " :key="item.id">
<p>{{item.title}}</p>
</div>
    <VCard title="Want to integrate JWT? 🔒">
      <VCardText>We carefully crafted JWT flow so you can implement JWT with ease and with minimum efforts.</VCardText>
      <VCardText>Please read our  JWT Documentation to get more out of JWT authentication.</VCardText>
    </VCard>
  </div>
</template>
