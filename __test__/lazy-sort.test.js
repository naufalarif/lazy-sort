const lazySort = require('../index');

describe('sort normal number', () => {
  test('by ascending', () => {
    const data = [4, 2, 5, 1, 3];
    expect(lazySort(data)).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test('by descending', () => {
    const data = [4, 2, 5, 1, 3];
    expect(lazySort(data, false)).toStrictEqual([5, 4, 3, 2, 1]);
  });
});

describe('sorted number', () => {
  test('from descending to ascending', () => {
    const data = [12, 11, 10, 9];
    expect(lazySort(data)).toStrictEqual([9, 10, 11, 12]);
  });

  test('from ascending to descending', () => {
    const data = [9, 10, 11, 12];
    expect(lazySort(data, false)).toStrictEqual([12, 11, 10, 9]);
  });
});

describe('duplicate number sort', () => {
  test('by ascending', () => {
    const data = [9, 8, 9, 8, 9, 8];
    expect(lazySort(data)).toStrictEqual([8, 8, 8, 9, 9, 9]);
  });

  test('by descending', () => {
    const data = [9, 8, 9, 8, 9, 8];
    expect(lazySort(data, false)).toStrictEqual([9, 9, 9, 8, 8, 8]);
  });
});
