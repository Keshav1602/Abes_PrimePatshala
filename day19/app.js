const http = require('http');
const fs = require('fs/promises')
const saveObjinFile = require("./fileHelper.js")

const server = http.createServer((req,res)=>{
    const {url , method} = req;
    console.log(url);
    const [path , queryStr] = url.split("?");
    if(path === "/products" && method === "POST"){
        const Items = queryStr.split("&").map((items)=>{
            const [key ,value] = items.split("=");
            return {key,value}
        })
        const dict = {};
        Items.forEach((item)=>{
            dict[item.key] = item.value;
        })
        saveObjinFile(dict);
    }2
    if(path === "/products" && method === "GET"){
        res.writeHead(200,{'content-type':'application/json'});
        fs.readFile("./data.json","utf-8").then((data)=>{
            res.end(data);
        })
    }
    


    // res.end("Hello");
})

server.listen(3000,()=>{
    console.log("Server is running on port 3000")
    console.log("http://localhost:3000")
})