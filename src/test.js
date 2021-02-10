// import { DateTime } from 'luxon';
const { DateTime } = require('luxon');

const getDatesList = (startDate, endDate) => {
  const dateList = [];
  let thisDay = DateTime.fromJSDate(startDate).startOf('day')

  while (thisDay >= DateTime.fromJSDate(endDate).startOf('day')) {
    dateList.push(thisDay.toJSDate());
    thisDay = thisDay.minus({ days: 1 })
  }

  return dateList

}

// console.log(getDatesList(new Date(), new Date('2020-12-04'))