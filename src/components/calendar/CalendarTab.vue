<template>
  <div class="calender__Container">
    <div class="calender__Date">
      <span>انتخاب تاریخ</span>
      <span>
        {{ dateStore.fullDate.shamsi?.day || 0 }}
        {{
          monthOfYear.filter(
            (m) => m.value === dateStore.fullDate.shamsi.month
          )[0].title
        }}
        1403
      </span>
    </div>
    <hr />
    <div class="calender__PickingSection">
      <div class="calender__PickingSection--controls">
        <div>
          <div>
            {{
              monthOfYear.filter(
                (m) => m.value === dateStore.fullDate.shamsi.month
              )[0].title
            }}
            1403
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M8.02501 11.55L4.73851 7.65C4.61554 7.50306 4.53713 7.32403 4.51253 7.13401C4.48793 6.944 4.51816 6.7509 4.59966 6.5775C4.68116 6.40409 4.81054 6.25759 4.97254 6.15528C5.13453 6.05296 5.32241 5.99908 5.51401 6H12.489C12.6806 5.99908 12.8685 6.05296 13.0305 6.15528C13.1925 6.25759 13.3219 6.40409 13.4034 6.5775C13.4849 6.7509 13.5151 6.944 13.4905 7.13401C13.4659 7.32403 13.3875 7.50306 13.2645 7.65L9.97501 11.55C9.85489 11.6913 9.70548 11.8049 9.53713 11.8827C9.36877 11.9606 9.1855 12.0009 9.00001 12.0009C8.81452 12.0009 8.63125 11.9606 8.46289 11.8827C8.29454 11.8049 8.14512 11.6913 8.02501 11.55Z"
              fill="#AD0F11"
            />
          </svg>
        </div>
        <div>
          <Month />
        </div>
      </div>
      <div>
        <Days />
      </div>
    </div>
    <hr />
    <div class="calender__ActionBtns">
      <button>تایید</button>
      <button @click="props.closeModal()">انصراف</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Days from '../days/Days.vue';
import Month from '../month/Month.vue';
import monthOfYear from '../month/types';
import { toGregorian, toJalaali } from '../../utils/time';
import { useDateStore } from '../../stores';

const props = defineProps(['closeModal']);
const dateStore = useDateStore();

const shamsi = toJalaali(
  dateStore.currentDate.year,
  dateStore.currentDate.month,
  dateStore.currentDate.day
);

const miladi = toGregorian(shamsi.jy, shamsi.jm, shamsi.jd);

dateStore.fullDate.shamsi.day = shamsi.jd;
dateStore.fullDate.shamsi.month = shamsi.jm;
dateStore.fullDate.shamsi.year = shamsi.jy;

dateStore.fullDate.miladi.day = miladi.gd;
dateStore.fullDate.miladi.month = miladi.gm;
dateStore.fullDate.miladi.year = miladi.gy;

console.log(dateStore.fullDate);
</script>
