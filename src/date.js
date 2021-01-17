import { DateTime } from 'luxon';
const now = DateTime.fromJSDate(new Date())
//last 7 days

export const previousDates = (number, weekBack) => {
  let datesView = [];
  for (let i = 0 + 7 * weekBack; i < number + 7 * weekBack; i++) {
    let thisDay = now.minus({ days: i }).toString().slice(0, 10);
    datesView.push(thisDay);
  }
  return datesView
};



// console.log(previousDates(7, 1), 'here')