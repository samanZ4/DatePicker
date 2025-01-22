<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useDateStore } from '../../stores';
import { toGregorian } from '../../utils/time';

const dateStore = useDateStore();

const increamentMonth = () => {
  dateStore.fullDate.shamsi.month === 12
    ? (dateStore.fullDate.shamsi.month = 1)
    : dateStore.fullDate.shamsi.month++;

  const miladi = toGregorian(
    dateStore.fullDate.shamsi.year,
    dateStore.fullDate.shamsi.month,
    dateStore.fullDate.shamsi.day
  );
  dateStore.fullDate.miladi.day = miladi.gd;
  dateStore.fullDate.miladi.month = miladi.gm;
  dateStore.fullDate.miladi.year = miladi.gy;
};
const reducerMonth = () => {
  dateStore.fullDate.shamsi.month === 1
    ? (dateStore.fullDate.shamsi.month = 12)
    : dateStore.fullDate.shamsi.month--;

  const miladi = toGregorian(
    dateStore.fullDate.shamsi.year,
    dateStore.fullDate.shamsi.month,
    dateStore.fullDate.shamsi.day
  );
  dateStore.fullDate.miladi.day = miladi.gd;
  dateStore.fullDate.miladi.month = miladi.gm;
  dateStore.fullDate.miladi.year = miladi.gy;
};

function getMissedDays() {
  const miladi = toGregorian(
    dateStore.fullDate.shamsi.year,
    dateStore.fullDate.shamsi.month,
    1
  );
  switch (new Date(`${miladi.gy}-${miladi.gm}-${miladi.gd}`).getDay()) {
    case 0:
      dateStore.missedDays = 1;
      break;

    case 1:
      dateStore.missedDays = 2;
      break;
    case 2:
      dateStore.missedDays = 3;
      break;
    case 3:
      dateStore.missedDays = 4;
      break;
    case 4:
      dateStore.missedDays = 5;
      break;
    case 5:
      dateStore.missedDays = 6;
      break;
    case 6:
      dateStore.missedDays = 0;
      break;

    default:
      break;
  }
}

onMounted(() => {
  getMissedDays();
});

watch(
  () => dateStore.fullDate.shamsi.month,
  () => {
    getMissedDays();
  }
);
</script>

<template>
  <div @click="reducerMonth()">
    <slot name="pre">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M8.99997 20C8.80222 20 8.60892 19.9413 8.44451 19.8314C8.2801 19.7215 8.15196 19.5653 8.07629 19.3826C8.00062 19.1999 7.98082 18.9989 8.01939 18.805C8.05795 18.611 8.15316 18.4328 8.29297 18.293L14.586 12L8.29297 5.707C8.11081 5.51839 8.01002 5.26579 8.0123 5.00359C8.01457 4.7414 8.11974 4.49058 8.30515 4.30518C8.49056 4.11977 8.74137 4.0146 9.00357 4.01232C9.26577 4.01004 9.51837 4.11084 9.70697 4.293L16.707 11.293C16.8944 11.4805 16.9998 11.7348 16.9998 12C16.9998 12.2652 16.8944 12.5195 16.707 12.707L9.70697 19.707C9.51948 19.8945 9.26516 19.9999 8.99997 20Z"
          fill="#BD3A3C"
        /></svg
    ></slot>
  </div>
  <div @click="increamentMonth()">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 20C14.7348 19.9999 14.4805 19.8946 14.293 19.707L7.29303 12.707C7.10556 12.5195 7.00024 12.2652 7.00024 12C7.00024 11.7348 7.10556 11.4805 7.29303 11.293L14.293 4.29301C14.3853 4.19749 14.4956 4.12131 14.6176 4.0689C14.7396 4.01649 14.8709 3.98891 15.0036 3.98775C15.1364 3.9866 15.2681 4.0119 15.391 4.06218C15.5139 4.11246 15.6255 4.18672 15.7194 4.28061C15.8133 4.3745 15.8876 4.48615 15.9379 4.60905C15.9881 4.73195 16.0134 4.86363 16.0123 4.99641C16.0111 5.12919 15.9835 5.26041 15.9311 5.38241C15.8787 5.50441 15.8025 5.61476 15.707 5.707L9.41403 12L15.707 18.293C15.8468 18.4329 15.942 18.611 15.9806 18.805C16.0192 18.9989 15.9994 19.2 15.9237 19.3827C15.848 19.5654 15.7199 19.7215 15.5555 19.8314C15.3911 19.9413 15.1978 20 15 20Z"
        fill="#BD3A3C"
      />
    </svg>
  </div>
</template>
