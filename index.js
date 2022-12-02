const express = require('express');
const app=express();
const cors=require('cors');

const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Hello form  form  xy   fg my smrty ')
})
const users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    }]
app.get("/users",(req,res)=>{
  
  if(req.query.name){
    const search=req.query.name.toLowerCase();
    const match=users.filter(user=>user.name.toLocaleLowerCase().includes(search))
    res.send(match)
  }
  else{
    res.send(users)
  }
})
app.get("/user/:id",(req,res)=>{
    console.log(req.params);
    const id=req.params.id;
    const user=users.find(u=>u.id==id);
    res.send(user)
})
app.post('/user',(req,res)=>{
  console.log('request',req.body)
  const user=req.body;
  user.id=users.length+1;
  users.push(user);

  res.send(user)
})
app.get('/fruits',(req,res)=>{
  res.send(['mngo','apple','ornge'])
})
app.get('/fruits/mngo/him',(req,res)=>{
  res.send('sour soud him')
})




app.listen(port,()=>{
    console.log('Listening to port ',port)
})