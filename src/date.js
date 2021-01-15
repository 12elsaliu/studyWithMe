import { DateTime } from 'luxon';
const now = DateTime.fromJSDate(new Date())
//last 7 days

export const previousDates = (number) => {
  let datesView = [];
  for (let i = 0; i < number; i++) {
    let thisDay = now.minus({ days: i }).toString().slice(0, 10);
    datesView.push(thisDay);
  }
  return datesView
};



