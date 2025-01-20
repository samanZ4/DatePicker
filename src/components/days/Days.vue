<template>
  <div class="calender__DaysContainer">
    <div class="calender__WeekDays">
      <div v-for="day in daysOfWeek">{{ day.title }}</div>
    </div>
    <div class="calender__Days">
      <div
        v-for="day in new Date().getDay() > 0
          ? new Date().getDay() + 1
          : new Date().getDay()"
        :key="day"
      >
        -
      </div>
      <div
        class="isValidDay"
        :class="{ selectedDay: dateStore.fullDate.shamsi.day === index + 1 }"
        @click="
          day ? (dateStore.fullDate.shamsi.day = day) : null,
            console.log(dateStore.fullDate)
        "
        v-for="(day, index) in 30"
      >
        <span>{{ day }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import daysOfWeek from './types';
import { shamsiToGregorian } from '../../utils/time';
import { useDateStore } from '../../stores';

const dateStore = useDateStore();

// مثال استفاده
const shamsiDate = { year: 782, month: 10, day: 4 };
const gregorianDate = shamsiToGregorian(
  shamsiDate.year,
  shamsiDate.month,
  shamsiDate.day
);

console.log(gregorianDate); // خروجی تاریخ میلادی
</script>
