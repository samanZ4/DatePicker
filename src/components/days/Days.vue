<template>
  <div class="calender__DaysContainer">
    <div class="calender__WeekDays">
      <div v-for="day in daysOfWeek">{{ day.title }}</div>
    </div>
    <div class="calender__Days">
      <div
        v-for="day in new Date().getDay()"
        :key="day"
      >
        -
      </div>
      <div
        class="isValidDay"
        :class="{ selectedDay: dateStore.fullDate.shamsi.day === index + 1 }"
        @click="day ? (dateStore.fullDate.shamsi.day = day) : null"
        v-for="(day, index) in days.daysCount"
      >
        <span>{{ day }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue';
import daysOfWeek from './types';
import { toGregorian, toJalaali } from '../../utils/time';
import { useDateStore } from '../../stores';

const dateStore = useDateStore();

const days = {
  cabise: () => {
    1403 % 4 === 3 ? true : false;
  },
  daysCount: 30,
};

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
    console.log(dateStore.fullDate, result);
  }
);
</script>
