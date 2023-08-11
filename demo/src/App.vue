<template>
    {{ text }}
</template>
<script setup>
import { sum } from "@demo/core";
const text = sum(1, 2)
</script>