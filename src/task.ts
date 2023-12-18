export let nation;
nation = "canada";
nation = 1;

console.log(nation);

export let named: string;
named = "aaa";
// named =9;

export function details(nation: string, code: number) {
  console.log("hello"); // Corrected the log message

  return `your country is ${nation} and your country code is ${code}`;
}

export interface Person {
  name: string;
  age: number;
}
