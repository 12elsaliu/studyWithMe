import { Service } from './service.js'
const storage = {
  writeDuration() {

  },
  readDuration() {
    return 800000
  }
} //mock storage

const service = new Service(storage)

//test method addToCurrentDuration
const resultDuration = async () => {
  const duration = await service.addToCurrentDuration(500);

  if (duration !== 800500) {
    throw Error('error with addToCurrentDuration function')
  }

}
resultDuration()

//test method loadHistory
const history = async () => {
  const gotHistory = await service.loadHistoryDuration(7, 1)
  const expectedHistory = {
    durationList: [
      '0.2', '0.2',
      '0.2', '0.2',
      '0.2', '0.2',
      '0.2'
    ]
  }
  // console.log(gotHistory)
  // console.log(expectedHistory)
  if (String(gotHistory.durationList) !== String(expectedHistory.durationList)) {
    throw Error('Error with loadHistoryDuration function')
  }
}
history()
//|| gotHistory.daysList.length !== 7

