<template>
  <DatePicker
    :isVisible="show"
    @update:isVisible="show = $event"
  >
    <template #activator>
      <input
        type="text"
        @click="show = true"
        placeholder="Pick Date ..."
        readonly
      />
      <br />
      <button @click="show = true">Open DatePicker</button>
    </template>
  </DatePicker>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DatePicker from './datePicker/DatePicker.vue';

const show = ref(true);
</script>
