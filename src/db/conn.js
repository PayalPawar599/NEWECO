const mongoose = require("mongoose");


//creating db
mongoose.connect("mongodb://localhost:27017/payal",{
    //useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})