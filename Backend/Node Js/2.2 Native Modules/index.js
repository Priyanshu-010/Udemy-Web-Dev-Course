const fs = require("fs");
fs.writeFile("message.txt", "Hello From Node!!",(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("The file has been saved!");
  }
})

fs.readFile("message.txt", "utf8", (err,data)=>{
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
})