<template>
  <h1>Core</h1>
  <div>{{ text }}</div>
  <h1>Components</h1>
  <vueComponent msg="msgFromDemo" />
</template>
<script lang="ts" setup>
import { sum } from '@demo/core';
import { vueComponent } from '@demo/vue-component';

const text = sum(1, 2)
</script>
