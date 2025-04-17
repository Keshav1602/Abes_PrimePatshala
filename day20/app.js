const express = require('express')
const fs = require('fs/promises')
const {ulid} = require('ulid')
const app = express()
const PORT = 3000

app.use(express.json())
// app.use((req,res,next)=>{
//     console.log(req.method,req.url);
//     next();
// })
app.get('/',(req,res)=>{
    res.send('hello world');
})

app.post('/products',async (req,res)=>{
    let body = req.body;
    body = {...body , id : ulid()};
    let old = [];
    try{
        await fs.access("./products.json");
    }
    catch(err){
        console.log("file not found");
        await fs.writeFile("./products.json",JSON.stringify(old));
    }
    old = await fs.readFile("./products.json","utf-8");
    old = JSON.parse(old);
    old.push(body);
    await fs.writeFile("./products.json",JSON.stringify(old));
    res.send('product added');

})



app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);

})
