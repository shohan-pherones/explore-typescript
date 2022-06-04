const salary: number = 15000;
const friendSalaries: number[] = [7500, 12000, 8000, 6500];
const friends: string[] = ["Ayesha", "Rimmi", "Sadia", "Nisha", "Maria"];

friendSalaries[0] = 10500;
friendSalaries.push(25000);

let max = 0;
for (const salary of friendSalaries) {
  if (salary > max) {
    max = salary;
  }
}
