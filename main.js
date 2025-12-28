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
let random = new RandomNoGen();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('t');
})

app.get('/generate', async (req, res) => {
    let a1 = Math.ceil(0+Math.random()*4 );
let a2 = Math.ceil(0+Math.random()*4 );
let a3 = Math.ceil(0+Math.random()*4 );
let a4 = Math.ceil(0+Math.random()*4 );
let a5 = Math.ceil(0+Math.random()*2 );

await RandomNoGen.deleteMany({});
for(let i=0;i<10;i++){
random = await RandomNoGen.create({
    name: `${b1[a1-1]}`,
    salary: `${b4[a4-1]}`,
    language: `${b2[a2-1]}`,
    city: `${b3[a3-1]}`,
    isManager: `${b5[a5-1]}`
}
)}
await random.save();
res.render('index');



})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})