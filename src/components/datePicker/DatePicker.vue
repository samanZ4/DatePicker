<template>
  <slot name="activator"></slot>
  <div
    class="datePicker__Overlay"
    :class="{ showOverlay: isVisible }"
  >
    <div
      class="datePicker__Overlay--InnerContent"
      @click="(e) => handleFocus(e.target)"
    >
      <CalendarTab :class="{ animate__Calender: isVisible }" />
    </div>
  </div>
</template>

<script setup>
import CalendarTab from '../calendar/CalendarTab.vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits();

const closeModal = () => {
  emit('update:isVisible', false);
};

const handleFocus = (event) => {
  const overlay = document.querySelector('.datePicker__Overlay--InnerContent');
  event === overlay ? closeModal() : null;
};
</script>
