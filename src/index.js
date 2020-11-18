import http from 'http';
import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const server = http.createServer(app);

app.use(cookieParser());

app.get('/', (req, res)=>{
    console.log('Cookies: ', req.cookies);
    if(req.cookies.whoisit === 'me'){
        res.status(200).json({status: 'Authorized'});
    }else{
        res.status(401).json({status: 'Unauthorized'});
    }   
})

app.post('/', (req, res) =>{
    if(req.cookies.whoisit === 'me'){
        res.status(200).json({status: 'created'});
    }else{
        res.status(401).json({status: 'Unauthorized'});   
    }
})

app.put('/', (req, res) =>{
    if(req.cookies.whoisit === 'me'){
        res.status(200).json({status: "updated"});
    }else{
        res.status(401).json({status: 'Unauthorized'});   
    }
})



server.listen(4000,() => { 
    console.log(`app is listening to port 4000`); 
})