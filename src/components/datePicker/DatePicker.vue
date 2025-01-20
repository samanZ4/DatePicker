<template>
  <slot name="activator"></slot>
  <div
    class="datePicker__Overlay"
    :class="{ showOverlay: props.isVisible }"
  >
    <div
      class="datePicker__Overlay--InnerContent"
      @click="(e) => handleFocus(e.target)"
    >
      <CalendarTab
        :closeModal
        :class="{ animate__Calender: isVisible }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
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

const handleFocus = (event: any) => {
  const overlay = document.querySelector('.datePicker__Overlay--InnerContent');
  event === overlay ? closeModal() : null;
};
</script>
