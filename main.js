import express from 'express';
import {RandomNoGen} from "../models/random_no_gen.js";
import mongoose from 'mongoose';

let b1 = ["harry","tanvi","surender","priyanka"]
let b2 = ["python","java","ruby","C++"]
let b3 = ["Newyork","Alwar","Paris","London"]
let b4 = [2300000,4500000,9000000,20000000]
let b5 = ["true","false"]
const app = express()
const port = 3010
await mongoose.connect("mongodb://localhost:27017/random")

app.set('view engine', 'ejs');

app.get('/generate', async (req, res) => {
   
await RandomNoGen.deleteMany({});
for(let i=0;i<10;i++){
  const a1 = Math.floor(Math.random() * b1.length);
    const a2 = Math.floor(Math.random() * b2.length);
    const a3 = Math.floor(Math.random() * b3.length);
    const a4 = Math.floor(Math.random() * b4.length);
    const a5 = Math.floor(Math.random() * b5.length);
await RandomNoGen.create({
    name: `${b1[a1]}`,
    salary: `${b4[a4]}`,
    language: `${b2[a2]}`,
    city: `${b3[a3]}`,
    isManager: `${b5[a5]}`
}
)}

res.render('index');



})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
