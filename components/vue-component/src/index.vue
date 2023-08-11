<template>
    <button>
        {{ text }}
    </button>
</template>
<script setup lang="ts">
import { sum } from '@demo/core'
const text = sum(1, 2)
</script>