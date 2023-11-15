const compareString = (sample: string, kasus: string): string => {
  let stringSama = "";
  let maximumString = Math.max(sample.length, kasus.length);
  for (let i = 0; i < maximumString; i++) {
    if (sample[i] === kasus[i]) {
      stringSama += sample[i];
    }
  }
  return stringSama;
};
console.log(compareString("AKA", "AKASHI")); // AKA
console.log(compareString("KANGAROO", "KANG")); // KANG
console.log(compareString("KI", "KIJANG")); // KI
console.log(compareString("KUPU-KUPU", "KUPU")); // KUPU
console.log(compareString("ILALANG", "ILA")); // ILA
