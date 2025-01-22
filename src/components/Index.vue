<template>
  <DatePicker
    v-model="dates"
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

  <div class="result">
    {{ dates }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DatePicker from './datePicker/DatePicker.vue';

const dates = ref();

const show = ref(false);
</script>