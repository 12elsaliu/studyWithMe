import { writeDuration, readDuration } from './storage';
import { DateTime, Duration } from 'luxon';

const previousDates = (number, weekBack) => {
  const now = DateTime.fromJSDate(new Date())
  const datesView = [];
  for (let i = 0 + number * weekBack; i < number + number * weekBack; i++) {
    const thisDay = now.minus({ days: i }).toJSDate()
    datesView.push(thisDay);
  }
  return datesView //in JSformat
};


export const readCurrentDuration = async (userId) => {
  return await readDuration(userId, new Date())
};


export const addToCurrentDuration = async (userId, value) => {
  const currentDuration = await readCurrentDuration(userId);
  const updatedDuration = currentDuration + value;

  await writeDuration(userId, new Date(), updatedDuration)
  return updatedDuration;
};

export const loadHistoryDuration = async (userId, numberOfDays, pageBack) => {

  const daysList = previousDates(numberOfDays, pageBack);
  const durationListPromises = daysList.map(async day => {
    const todayFocus = await readDuration(userId, day)
    return Duration.fromMillis(todayFocus).as('hours').toFixed(1)
  })

  const durationList = await Promise.all(durationListPromises)
  return { daysList, durationList }

}

