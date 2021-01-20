import { DateTime } from 'luxon';
const now = DateTime.fromJSDate(new Date())
//last 7 days

export const previousDates = (number, weekBack) => {
  let datesView = [];
  for (let i = 0 + number * weekBack; i < number + number * weekBack; i++) {
    let thisDay = now.minus({ days: i }).toJSDate()
    datesView.push(thisDay);
  }
  return datesView
};

