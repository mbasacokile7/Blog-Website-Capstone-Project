//Import NPM Packages
import express from "express";
import bodyParser from "body-parser";
import session from "express-session";

//Create an express object to initialise the Server
const app = express();
// Allow Express to use the body-parser middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000} 
}));
// Define a variable to store variable to store 
let d = new Date();
let todayDate = d.getMonth() + " " +  d.getDate() + " " + d.getFullYear();
let createArticle = false;
//-------------------------------HTTP Requests and Routing-------------------------------//

// GET Request to render the landing page
app.get("/", (req, res) =>{
    createArticle = false;
    res.render("index.ejs");
});

//Get request to route to the Create Page
app.get("/create", (req, res) =>{
    createArticle = false;
    res.render("create.ejs");

});

//GET Request to get the Articles Page
app.get("/read", (req, res) =>{
    createArticle = false;
    res.render("article.ejs");
});

/* GET Requst to render the Read Page
app.get("/read", (req, res)=>{
    res.render("read.ejs");
}); */

let data = null;

// POST REQUEST to submit user data into the Articles Page(from Create Page) and also from Articles page to Read Page
app.post("/create", (req, res)=>{
    createArticle = true;
    req.session.data = req.body ;
    data = req.session.data;
    //console.log(data);
    res.render("article.ejs", {articleTitle: data.title, todayDate: todayDate, articleContent:data.content, createArticle:createArticle});
    
});

//Get Request to populate Reading Page

app.get("/article", (req, res) =>{
    createArticle = true;
    let data = req.session.data;
    //console.log(data);
    res.render("read.ejs", {articleTitle:data.title, todayDate: todayDate ,articleContent:data.content, createArticle:createArticle});
});


const port = 3000;
//Initialise the Server and ensure its listening on Port 3000
app.listen(port, (req, res) =>{
    console.log(`The server is running on Port: ${port}`);
});

//TODO:
//When the user has just got to the page and they press READ button
//On Navbar or the landing page "Read" button. 
//They will be directed to the articles page.
//The page should show only the gegenral Lorem Ipsum articles we have. 
//Only after they create an article in Create page, then they can view the full page.