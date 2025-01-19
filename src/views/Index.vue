<template>
  <DatePicker />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const DatePicker = defineAsyncComponent(
  () => import('../components/datePicker/DatePicker.vue')
);
</script>
