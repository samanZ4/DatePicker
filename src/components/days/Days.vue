<template>
  <div class="calender__DaysContainer">
    <div class="calender__WeekDays">
      <div v-for="day in daysOfWeek">{{ day.title }}</div>
    </div>
    <div class="calender__Days">
      <div
        v-for="day in dateStore.missedDays"
        :key="day"
      >
        -
      </div>
      <div
        class="isValidDay"
        :class="{ selected: dateStore.fullDate.shamsi.day === index + 1 }"
        @click="day ? (dateStore.fullDate.shamsi.day = day) : null"
        v-for="(day, index) in daysCount"
      >
        <span>{{ day }}</span>
      </div>
    </div>
    {{ daysCountGenerating }}
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import daysOfWeek from './types';
import { toGregorian } from '../../utils/time';
import { useDateStore } from '../../stores';

const dateStore = useDateStore();

const daysCount = ref(30);

const daysCountGenerating = computed(() => {
  const cabise = dateStore.fullDate.shamsi.year % 4 === 3 ? true : false;

  if (cabise && dateStore.fullDate.shamsi.month === 12) {
    daysCount.value = 30;
  } else if (!cabise && dateStore.fullDate.shamsi.month === 12) {
    daysCount.value = 29;
  } else if (dateStore.fullDate.shamsi.month <= 6) {
    daysCount.value = 31;
  }
});

watch(
  () => dateStore.fullDate.shamsi.day,
  () => {
    const result = toGregorian(
      dateStore.fullDate.shamsi.year,
      dateStore.fullDate.shamsi.month,
      dateStore.fullDate.shamsi.day
    );
    dateStore.fullDate.miladi.day = result.gd;
    dateStore.fullDate.miladi.month = result.gm;
    dateStore.fullDate.miladi.year = result.gy;
  }
);
</script>
