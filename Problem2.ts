const joinArrayRemoveDuplicate = (arrayA: string[], arrayB: string[]) => {
  let fruitFactory: string[] = [...arrayA, ...arrayB];
  let fruitDatas: string[] = [];

  for (let i = 0; i < fruitFactory.length; i++) {
    if (!fruitDatas.includes(fruitFactory[i])) {
      fruitDatas.push(fruitFactory[i]);
    }
  }

  return fruitDatas;
};

console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]));
// ["apel", "anggur", "lemon", "leci", "nanas"]

console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]));
// ["samsung", "apple", "sony", "xiaomi"];

console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]));
// // [“football”, “basketball”]
