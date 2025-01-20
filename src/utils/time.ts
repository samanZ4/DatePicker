function isLeapYear(year) {
  // چک کردن سال کبیسه میلادی
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function shamsiToGregorian(shamsiYear, shamsiMonth, shamsiDay) {
  const monthsLengths = [31, 31, 31, 30, 31, 30, 31, 31, 30, 31, 30, 30]; // طول ماه‌ها در سال شمسی
  const offset = 621; // تفاوت سال شمسی و میلادی

  // محاسبه تعداد روزهای گذشته از شروع سال شمسی تا تاریخ داده شده
  let totalDays = 0;
  for (let i = 0; i < shamsiMonth - 1; i++) {
    totalDays += monthsLengths[i];
  }
  totalDays += shamsiDay;

  // تبدیل سال شمسی به میلادی
  let gregorianYear = shamsiYear - offset;

  // تعداد روزهای سپری شده از سال میلادی
  let daysInGregorianYear = 0;
  let gregorianMonth = 0;
  let gregorianDay = 0;

  // شروع محاسبه روزهای میلادی از 1 ژانویه سال میلادی
  while (totalDays > 0) {
    if (isLeapYear(gregorianYear) && gregorianMonth === 1) {
      // در سال‌های کبیسه فوریه 29 روز است
      daysInGregorianYear = 366;
    } else {
      daysInGregorianYear = 365;
    }

    if (totalDays > daysInGregorianYear) {
      totalDays -= daysInGregorianYear;
      gregorianYear++;
      gregorianMonth = 0;
    } else {
      break;
    }
  }

  // پیدا کردن ماه میلادی
  const gregorianMonthLengths = [
    31,
    isLeapYear(gregorianYear) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  for (let i = 0; i < 12; i++) {
    if (totalDays <= gregorianMonthLengths[i]) {
      gregorianMonth = i;
      gregorianDay = totalDays;
      break;
    } else {
      totalDays -= gregorianMonthLengths[i];
    }
  }

  return {
    year: gregorianYear,
    month: gregorianMonth + 1, // ماه میلادی از صفر شروع می‌شود
    day: gregorianDay,
  };
}
