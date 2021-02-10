import { DateTime } from 'luxon';
import AsyncStorage from '@react-native-async-storage/async-storage';

const formatDate = date => DateTime.fromJSDate(date).toFormat('yyyy-LL-dd')

export async function readDuration(userId, date) {
  const key = formatDate(date) + userId
  const duration = await AsyncStorage.getItem(key);

  if (!duration) {
    return 0;
  }

  return Number.parseInt(duration, 10);
}


export async function writeDuration(userId, date, duration) {
  const key = formatDate(date) + userId
  await AsyncStorage.setItem(key, String(duration));
};



