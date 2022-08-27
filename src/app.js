import express, { json } from "express";

const app=express()
app.use(express.json())
const users=[{
    "username": "Gatoo1",
    "avatar": "https://static.poder360.com.br/2020/10/gato-animal-covid-19-450x563.jpg"
    
  },{
    "username": "Gatoo2",
    "avatar": "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg"
    
  },{
    "username": "Gatoo3",
    "avatar": "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
    
  },{
    "username": "Gatoo4",
    "avatar": "https://cdn.pixabay.com/photo/2018/07/13/10/20/kittens-3535404_960_720.jpg"
    
  },{
    "username": "Gatoo5",
    "avatar": "https://cdn.pixabay.com/photo/2018/01/04/18/58/cats-3061372_960_720.jpg"
    
  },{
    "username": "Gatoo6",
    "avatar": "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_960_720.png"
    
  },{
    "username": "Gatoo7",
    "avatar": "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg"
    
  },{
    "username": "Gatoo8",
    "avatar": "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_960_720.jpg"
    
  },{
    "username": "Gatoo9",
    "avatar": "https://cdn.pixabay.com/photo/2014/12/22/10/04/lions-577104_960_720.jpg"
    
  },{
    "username": "Gatoo10",
    "avatar": "https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_960_720.jpg"
    
  },{
    "username": "Gatoo11",
    "avatar": "https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_960_720.jpg"
    
  }];
const tweets=[{
    "username": "Gatoo1",
    "tweet": "adoro bolo"
  },{
    "username": "Gatoo2",
    "tweet": "adoro bolo"
  },{
    "username": "Gatoo3",
    "tweet": "adoro bolo"
  },{
    "username": "Gatoo4",
    "tweet": "adoro bolo"
  },{
    "username": "Gatoo5",
    "tweet": "adoro bolo"
  },{
    "username": "Gatoo6",
    "tweet": "adoro bolo"
  },{
    "username": "Gatoo7",
    "tweet": "adoro bolo"
  },{
    "username": "Gatoo8",
    "tweet": "adoro bolo"
  },{
    "username": "Gatoo9",
    "tweet": "adoro bolo"
  },{
    "username": "Gatoo10",
    "tweet": "adoro bolo"
  },{
    "username": "Gatoo11",
    "tweet": "adoro bolo"
  }];

function getLastTen(array){
    const list=[]
    const obj={}
    for(let i=array.length-1;i>=array.length-10;i--){
        let avatar=getAvatar(array[i].username)
        obj={username:array[i].username,tweet:array[i].tweet,avatar:avatar}
        list.push(array[i]);
    }
    return list;
}
function getAvatar(username){
    users.

}
app.get("/tweets",(req,res)=>{
    
    const list=getLastTen(tweets);
    res.send(list)
})
app.post("/sign-up",(req,res)=>{
    users.push({
        username:req.body.username,
        avatar:req.body.avatar
    })
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