//Import NPM Packages
import express from "express";
import bodyParser from "body-parser";

//Create an express object to initialise the Server
const app = express();
// Allow Express to use the body-parser middleware
app.use(bodyParser.urlencoded({extended:true}));

//-------------------------------HTTP Requests and Routing-------------------------------//


const port = 3000;
//Initialise the Server and ensure its listening on Port 3000
app.listen(port, (req, res) =>{
    console.log(`The server is running on Port: ${port}`);
})