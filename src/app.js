import express, { json } from "express";
import cors from 'cors';
const app=express()
app.use(cors());
app.use(express.json())
const users=[];
const tweets=[];

function getLastTen(array){
    const list=[]
    let obj={}
    let size
    array.length>10?(size=array.length-10):((size=0))
    for(let i=array.length-1;i>=size;i--){
        let avatar=users.find(user=>user.username===array[i].username);
        obj={...avatar,tweet:array[i].tweet}
        list.push(obj);
    }
    return list;
}

app.get("/tweets",(req,res)=>{
  let list=[]  ;
  list=getLastTen(tweets);
    res.send(list);
})
app.post("/sign-up",(req,res)=>{
    users.push(req.body)
    res.send("OK")

})
app.post("/tweets",(req,res)=>{
    tweets.push({
        username:req.body.username,
        tweet:req.body.tweet
    })
    res.send("OK")

})
app.listen(5000)