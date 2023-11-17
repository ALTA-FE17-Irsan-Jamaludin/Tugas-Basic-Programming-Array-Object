const removeDuplicates = (arr: number[]): number => {
  let copyArray = [...arr];
  let dataResult: number[] = [];
  for (let i = 0; i < copyArray.length; i++) {
    if (!dataResult.includes(copyArray[i])) {
      dataResult.push(copyArray[i]);
    }
  }
  return dataResult.length;
};

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])); // 4
console.log(removeDuplicates([2, 3, 4, 5, 6, 9, 9])); // 6
console.log(removeDuplicates([2, 2, 2, 11])); // 2
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4])); // 4
