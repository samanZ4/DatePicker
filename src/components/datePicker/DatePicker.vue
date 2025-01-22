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
        :update
        :class="{ animate__Calender: isVisible }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CalendarTab from '../calendar/CalendarTab.vue';
import { useDateStore } from '../../stores';

const dateStore = useDateStore();

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
  modelValue: {
    type: Object,
  },
});
const emit = defineEmits(['update:isVisible', 'update:modelValue']);

const closeModal = () => {
  emit('update:isVisible', false);
};

function update() {
  emit('update:modelValue', dateStore.fullDate);
}
const handleFocus = (event: any) => {
  const overlay = document.querySelector('.datePicker__Overlay--InnerContent');
  event === overlay ? closeModal() : null;
};
</script>
