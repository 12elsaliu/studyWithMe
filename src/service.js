import { writeDuration, readDuration } from './storage';
import { DateTime, Duration } from 'luxon';

const previousDates = (number, weekBack) => {
  const now = DateTime.fromJSDate(new Date())
  const datesView = [];
  for (let i = 0 + number * weekBack; i < number + number * weekBack; i++) {
    const thisDay = now.minus({ days: i }).toJSDate()
    datesView.push(thisDay);
  }
  return datesView
};


export const readCurrentDuration = async () => {
  return await readDuration(new Date())
};


export const addToCurrentDuration = async (value) => {
  const currentDuration = await readCurrentDuration();
  const updatedDuration = currentDuration + value;

  await writeDuration(new Date(), updatedDuration)
  return updatedDuration;
};

export const loadHistoryDuration = async (numberOfDays, pageBack) => {

  const daysList = previousDates(numberOfDays, pageBack);
  const durationListPromises = daysList.map(async day => {
    const todayFocus = await readDuration(day)
    return Duration.fromMillis(todayFocus).as('hours').toFixed(1)
  })

  const durationList = await Promise.all(durationListPromises);

  return { daysList, durationList }

}
