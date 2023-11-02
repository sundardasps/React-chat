const express = require("express");
const dotenv = require('dotenv')
const { chats } = require("./data");
const app = express();
dotenv.config()

app.get("/", (req, res) => {
  res.send("hii");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get('/api/chat/:id',(req,res)=>{
     
      const data = chats.find((chat)=>
         chat._id === req.params.id
      )
      res.send(data)
})

 const port = process.env.port || 5000

app.listen(port, console.log(`server running at port ${port}`));
