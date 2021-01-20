import { DateTime } from 'luxon';
import AsyncStorage from '@react-native-async-storage/async-storage';

const formatDate = date => DateTime.fromJSDate(date).toFormat('yyyy-LL-dd')

export async function readDuration(date) {
  const duration = await AsyncStorage.getItem(formatDate(date));

  if (!duration) {
    return 0;
  }

  return Number.parseInt(duration, 10);
}

export async function writeDuration(date, duration) {

  await AsyncStorage.setItem(formatDate(date), String(duration));


};

