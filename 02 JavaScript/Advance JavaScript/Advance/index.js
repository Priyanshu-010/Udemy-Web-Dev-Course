// Constructor Function

function BellBoy(name, age, hasWorkPermit, languages){
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.clean = function(){
    console.log("Cleaning in progress");
  }
}

// const bellBoy1 = new BellBoy("John", 25, true, ["Engish", "French"]);
const bellBoy1 = new BellBoy("John", 25, true, ["Engish", "French"]);
console.log(bellBoy1.name);
bellBoy1.clean();