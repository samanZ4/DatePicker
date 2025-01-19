<template>

    <input
      type="text"
      @click="show = true"
      placeholder="Pick Date ..."
      readonly
    />


  <Overlay :isActive="show" :class="{ showOverlay: show }">

  </Overlay>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Overlay from '../shared/Overlay.vue';

const show = ref(false);
</script>

<style lang="scss">
.showOverlay {
  z-index: 1000 !important;
  opacity: 0.5 !important;
  visibility: visible !important;
  transform: scale(1.3) !important;
}
</style>
