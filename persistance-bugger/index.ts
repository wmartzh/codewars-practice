function recursiveMultiplication(numbers: number[]) {
  return numbers.reduce((prev, current) => prev * current, 1);
}

function numberToArray(num: number) {
  return Array.from(String(num), (value) => Number(value));
}

export function persistence(num: number, cnt = 1): number {
  let counter: number = cnt;
  const numbers: number[] = numberToArray(num);

  if (num > 9) {
    const result = recursiveMultiplication(numbers);

    if (result > 9) {
      return persistence(result, counter + 1);
    }
    return counter;
  }
  return 0;
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);
