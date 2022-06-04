interface Player {
  name: string;
  club: string;
  salary: number;
  wife?: string;
  previousClubs?: string[];
}

const messy: Player = {
  name: "Messy",
  club: "Abahoni",
  salary: 5000,
  wife: "Lucy",
};

const tuntuni: Player = {
  name: "Tuntuni",
  club: "Kolabagan",
  salary: 3000,
};

interface Employee {
  name: string;
  designation: string;
  salary: number;
  age?: number;
}

interface Developer extends Employee {
  languages: string[];
  codeEditor: string;
  typingSpeed: number;
}

const Natasha: Developer = {
  name: "Natasha",
  designation: "React Developer",
  salary: 35000,
  languages: ["JavaScript", "Python"],
  codeEditor: "VS Code",
  typingSpeed: 40,
};
