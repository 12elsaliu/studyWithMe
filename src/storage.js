import AsyncStorage from '@react-native-async-storage/async-storage';
import { previousDates } from './date.js';

function formatDate(date) {
  return date.toJSON().slice(0, 10);
}

export const readCurrentDuration = async () => {
  const currentDate = formatDate(new Date());
  const todayFocus = await AsyncStorage.getItem(currentDate);

  if (!todayFocus) {
    return 0;
  }

  return Number.parseInt(todayFocus, 10);
};


export const addToCurrentDuration = async (value) => {
  const currentDuration = await readCurrentDuration();
  const updatedDuration = currentDuration + value;

  const currentDate = formatDate(new Date());

  await AsyncStorage.setItem(currentDate, String(updatedDuration));
  return updatedDuration;
};

export const loadHistoryDuration = async (numberOfDays) => {

  const daysList = previousDates(numberOfDays);
  let durationList = [];
  for (let i = 0; i < daysList.length; i++) {
    const todayFocus = await AsyncStorage.getItem(daysList[i]);
    console.log(daysList[i], todayFocus);
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

loadHistoryDuration(7).then((data) => { console.log(data) })