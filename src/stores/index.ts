import { defineStore } from 'pinia';
import { type dateTypes } from '../models/interfaces';

export const useDateStore = defineStore('date', {
  state: () => ({
    fullDate: {
      shamsi: {
        day: new Date().getDay(),
      },
    } as dateTypes,
  }),
  actions: {},
});
