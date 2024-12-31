// Constructor Function

function BellBoy(name, age, hasWorkPermit, languages){
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}

const bellBoy1 = new BellBoy("John", 25, true, ["Engish", "French"]);
console.log(bellBoy1)