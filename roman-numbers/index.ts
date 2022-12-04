const romanValues: any = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
function solution(roman: string) {
  let result = 0;
  //IV
  const characters = roman.split("");

  characters.forEach((character: string, index: number) => {
    if (character !== "I" && characters[index - 1] === "I") {
      result = romanValues[character] - result;
    } else {
      result += romanValues[character];
    }
  });

  return result;
}

console.log(solution("XXI"), 21);
console.log(solution("VIII"), 8);
console.log(solution("I"), 1);
console.log(solution("IV"), 4);
console.log(solution("MMVIII"), 2008);
console.log(solution("MDCLXVI"), 1666);
