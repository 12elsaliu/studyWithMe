import {Service} from './service.js';

describe('Service layer', () => {
  test('addToCurrentDuration method', async () => {
    const storage = {
      writeDuration() {},
      readDuration() {
        return 800000;
      },
    }; //mock storage

    const service = new Service(storage);

    const duration = await service.addToCurrentDuration(500);

    expect(duration).toBe(800500);
  });

  test('loadHistoryDuration method', async () => {
    const storage = {
      readDuration: jest
        .fn()
        .mockReturnValueOnce(800000)
        .mockReturnValueOnce(900000)
        .mockReturnValueOnce(1000000)
        .mockReturnValueOnce(4000000)
        .mockReturnValueOnce(1800000)
        .mockReturnValueOnce(7800000)
        .mockReturnValueOnce(0),
    }; //mock storage

    const service = new Service(storage);

    const gotHistory = await service.loadHistoryDuration(7, 1);

    expect(storage.readDuration).toBeCalledTimes(7);

    expect(gotHistory.durationList).toMatchInlineSnapshot(`
      Array [
        "0.2",
        "0.3",
        "0.3",
        "1.1",
        "0.5",
        "2.2",
        "0.0",
      ]
    `);
    expect(gotHistory.daysList).toHaveLength(7);

    gotHistory.daysList.forEach((day) => {
      expect(day).toEqual(expect.any(Date));
    });
  });
});
