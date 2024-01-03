const express = require("express");
const path = require("path");

require("./db/conn");
const User = require("./models/useremail")
const hbs = require("hbs");
const app = express();

const port = process.env.PORT || 3000;



const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");


app.use('/css', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.static(staticpath))
app.set("view engine", "hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);



//routing
app.get("/",(req,res)=>{
    res.render("home");
})

app.get("/shop",(req,res)=>{
    res.render("shop");
})
app.get("/cart",(req,res)=>{
    res.render("cart");
})
app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/sproduct",(req,res)=>{
    res.render("sproduct");
})

app.get("/blog",(req,res)=>{
    res.render("blog");
})


app.post("/shop",(req,res) =>{
  try {
    res.send(req.body);
  } catch (error) {
    res.status(500).send(error);
  }
})
//server creat
app.listen(port, () => {
    console.log('server is running at port no 3000');
})