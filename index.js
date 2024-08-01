//Import NPM Packages
import express from "express";
import bodyParser from "body-parser";

//Create an express object to initialise the Server
const app = express();
// Allow Express to use the body-parser middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
// Define a variable to store variable to store 
let d = new Date();
let todayDate = d.getMonth() + " " +  d.getDate() + " " + d.getFullYear();

//-------------------------------HTTP Requests and Routing-------------------------------//

// GET Request to render the landing page
app.get("/", (req, res) =>{
    res.render("index.ejs");
});

//Get request to route to the Create Page
app.get("/create", (req, res) =>{
    res.render("create.ejs");

});

//GET Request to get the Articles Page
app.get("/article", (req, res) =>{
    res.render("article.ejs");
});

//GET Requst to render the Read Page
app.get("/read", (req, res)=>{
    res.render("read.ejs");
});

let data = {};

// POST REQUEST to submit user data into the Articles Page(from Create Page) and also from Articles page to Read Page
app.post("/create", (req, res)=>{
    data = req.body;
    res.render("article.ejs", data);
    
});


const port = 3000;
//Initialise the Server and ensure its listening on Port 3000
app.listen(port, (req, res) =>{
    console.log(`The server is running on Port: ${port}`);
});