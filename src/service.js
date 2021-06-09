import {DateTime, Duration} from 'luxon';

export class Service {
  constructor(storage) {
    this.storage = storage;
  }

  previousDates = (number, weekBack) => {
    const now = DateTime.fromJSDate(new Date());
    const datesView = [];
    for (let i = 0 + number * weekBack; i < number + number * weekBack; i++) {
      const thisDay = now.minus({days: i}).toJSDate();
      datesView.push(thisDay);
    }
    return datesView; //in JSformat
  };

  readCurrentDuration = async () => {
    return await this.storage.readDuration(new Date());
  };

  addToCurrentDuration = async (value) => {
    const currentDuration = await this.readCurrentDuration();
    const updatedDuration = currentDuration + value;

    await this.storage.writeDuration(new Date(), updatedDuration);
    return updatedDuration;
  };

  loadHistoryDuration = async (numberOfDays, pageBack) => {
    const daysList = this.previousDates(numberOfDays, pageBack);
    const durationListPromises = daysList.map(async (day) => {
      const todayFocus = await this.storage.readDuration(day);
      return Duration.fromMillis(todayFocus).as('hours').toFixed(1);
    });

    const durationList = await Promise.all(durationListPromises);
    return {daysList, durationList};
  };
}
