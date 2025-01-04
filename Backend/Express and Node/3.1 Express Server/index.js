import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res) =>{
  res.send("Hello World!");
})

app.listen(port, () => {
 try {
  console.log(`Server running on port ${port}.`);
 } catch (error) {
  console.log(error);
 }
});
