import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();


const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, './src/views'));

app.use(express.static(path.join(__dirname, './src/public')));

app.use(bodyParser.json());

app.get("/",(req, res)=>{
    res.render("streamer");
})
app.get("/play-audio",(req,res)=>{
   const filePath = path.join(__dirname, './src/public/audio/sajni_320.mp3');
   res.sendFile(filePath);
   
})

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})