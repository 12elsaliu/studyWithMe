import {DateTime} from 'luxon';
import AsyncStorage from '@react-native-async-storage/async-storage';

const formatDate = (date) => DateTime.fromJSDate(date).toFormat('yyyy-LL-dd');

export class Storage {
  constructor(userId) {
    this.userId = userId;
  }
  async readDuration(date) {
    const key = formatDate(date) + this.userId;
    const duration = await AsyncStorage.getItem(key);

    if (!duration) {
      return 0;
    }

    return Number.parseInt(duration, 10);
  }

  async writeDuration(date, duration) {
    const key = formatDate(date) + this.userId;
    await AsyncStorage.setItem(key, String(duration));
  }
}

//const storage = new Storage(userId);
// storage.readDuration(new Date())
// storage.writeDuration(date, duration)
