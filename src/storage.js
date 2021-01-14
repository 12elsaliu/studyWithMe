import AsyncStorage from '@react-native-async-storage/async-storage';

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
}