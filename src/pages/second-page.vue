<script setup >
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>

  <div>

    <VCard :title="t('second page')" class="pa-4">
      <VCardText>
{{ t('second-page-text') }}
      </VCardText>
    </VCard>
  </div>
</template>
