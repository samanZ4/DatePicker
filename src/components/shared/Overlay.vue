<template>
  <div class="datePicker__Overlay">
    <div
      class="datePicker__Overlay--InnerContent"
      @click="props.isActive = false"
    >
      <div>{{ props.isActive }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';

const props = defineProps({
  isActive: Boolean,
});

watch(
  () => props.isActive,
  (newValue) => {}
);
</script>

<style lang="scss">
.datePicker__Overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: -1;
  opacity: 0;
  visibility: hidden;
  transform: scale(1);
  .datePicker__Overlay--InnerContent {
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
    position: fixed;
    top: 0;
    div {
      width: 300px;
      height: 300px;
      background-color: white;
      border-radius: 10px;
      cursor: pointer;
    }
  }
  transition: all 0.3s ease-in-out;
}
</style>
