let money: number = 100;
let honey: string = "Oh! my sweet honey!";
let funny: boolean = true;

function add(first: number, second: number): number {
  const result = first + second;
  return result;
}
const output: number = add(5, 25);

/* function add(first: number | string, second: number | string): number | string {
  const result: string | number = first + second;
  return result;
}
const output: number = add(5, 25);
const fullName = add("Ayesha", "Takia"); */

function doubleConsole(number: number): void {
  console.log(2 * number);
}
