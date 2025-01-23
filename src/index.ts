import DatePicker from './components/datePicker/DatePicker.vue';

export default {
  install: (app: any) => {
    app.component('DatePicker', DatePicker);
  },
};
