import { Service } from './service.js'

const storage = {
  writeDuration() {

  },
  readDuration() {
    return 800000
  }
} //mock storage

const service = new Service(storage)

describe('Service layer', () => {
  test('addToCurrentDuration method', async () => {
    const duration = await service.addToCurrentDuration(500);

    expect(duration).toBe(800500);

    // if (duration !== 800500) {
    //   throw Error('error with addToCurrentDuration function')
    // }
  })

  test('loadHistoryDuration method', async () => {
    const gotHistory = await service.loadHistoryDuration(7, 1)
    const expectedDurationList = [
      '0.2', '0.2',
      '0.2', '0.2',
      '0.2', '0.2',
      '0.2'
    ]

    expect(gotHistory.durationList).toEqual(expectedDurationList)
    expect(gotHistory.daysList).toHaveLength(7)

    gotHistory.daysList.forEach(day => {
      expect(day).toEqual(expect.any(Date))
    })

    // console.log(gotHistory)
    // console.log(expectedHistory)
    // if (String(gotHistory.durationList) !== String(expectedHistory.durationList)) {
    //   throw Error('Error with loadHistoryDuration function')
    // }
  })
})