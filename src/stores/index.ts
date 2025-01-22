import { defineStore } from 'pinia';
import { type dateTypes } from '../models/interfaces';

export const useDateStore = defineStore('date', {
  state: () => ({
    currentDate: {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    },

    fullDate: {
      shamsi: {},
      miladi: {},
    } as dateTypes,

    isPickingYear: false,

    missedDays: 0,
  }),
  actions: {},
});
