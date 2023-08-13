<template>
  <button>
    {{ msg }}
  </button>
  {{ text }}
</template>
<script setup lang="ts">
import { sum } from '@demo/core'

interface Props {
  msg?: string
}
withDefaults(defineProps<Props>(), {
  msg: 'default',
})

const text = sum(1, 2)
</script>
