import { previousDates } from './date.js';
import { writeDuration, readDuration } from './storage';

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
  let durationList = [];

  for (let i = 0; i < daysList.length; i++) {
    const todayFocus = await readDuration(daysList[i])
    if (!todayFocus) {
      let dataToday = 0;
      durationList.push(dataToday);
    } else {
      let dataToday = Number.parseFloat((todayFocus / 1000 / 60 / 60).toFixed(1));
      durationList.push(dataToday);
    }
  }

  return { daysList, durationList }

}
