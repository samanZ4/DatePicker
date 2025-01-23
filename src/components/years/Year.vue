<template>
  <div class="calender__YearsContainer">
    <div
      :class="{ selected: dateStore.fullDate.shamsi.year === year }"
      @click="year ? (dateStore.fullDate.shamsi.year = year) : null"
      v-for="year in reversedYearsCount"
    >
      <span>{{ year }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { toGregorian, toJalaali } from '../../utils/time';
import { useDateStore } from '../../stores';

const dateStore = useDateStore();

const yearsCount = computed(() => {
  const result = toJalaali(
    dateStore.currentDate.year,
    dateStore.currentDate.month,
    dateStore.currentDate.day
  );

  return Array.from(
    { length: result.jy - 1320 },
    (_, index) => 1320 + index + 1
  );
});
const reversedYearsCount = yearsCount.value.reverse();

watch(
  () => dateStore.fullDate.shamsi.year,
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
