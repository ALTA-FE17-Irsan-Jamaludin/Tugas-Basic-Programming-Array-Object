const meanMedian = (arrayInput: number[]): number | string => {
  let mean: number = 0;
  let median: number = 0;
  let countMedian: number = 0;
  for (let i = 0; i < arrayInput.length; i++) {
    mean += arrayInput[i];
    if (arrayInput.length % 2 !== 0) {
      countMedian = Math.round(arrayInput.length / 2);
      median = arrayInput[countMedian - 1];
    } else {
      countMedian = Math.floor(arrayInput.length / 2);
      median = arrayInput[countMedian - 1] + arrayInput[countMedian + 1] - 1;
    }
  }
  return `${mean / arrayInput.length} ${arrayInput.length % 2 !== 0 ? median : median / 2}`;
};

console.log(meanMedian([1, 2, 3, 4])); // 2.5 2.5
console.log(meanMedian([1, 2, 3, 4, 5])); // 3 3
console.log(meanMedian([7, 8, 9, 13, 15])); // 10.4 9
console.log(meanMedian([10, 20, 30, 40, 50])); // 30 30
console.log(meanMedian([15, 20, 30, 60, 120])); // 49 30
