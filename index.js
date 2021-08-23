const test = [12, 11, 10, 9];

const lazySort = (payload = [], asc = true) => {
  // Duplicate array
  const data = payload.slice(0);
  let x;

  // Bubble Sort
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < data.length; j++) {
      if (asc) {
        if (data[j] > data[j + 1]) {
          x = data[j];
          data[j] = data[j + 1];
          data[j + 1] = x;
        }
      } else {
        if (data[j] < data[j + 1]) {
          x = data[j];
          data[j] = data[j + 1];
          data[j + 1] = x;
        }
      }
    }
  }

  // It will return a new array
  return data;
};

console.log(lazySort(test));

module.exports = lazySort;
