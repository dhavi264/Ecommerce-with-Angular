const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsoptions = {
    origin:"https://localhost:8081"
};
app.use(cors(corsoptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const db = require("./app/models");
db.mongoose.connect(db.url, {
                       useNewUrlParser:true,
                       useUnifiedTopology:true
})
.then(()=>{
    console.log("Connected to database");
})
.catch(err=>{
    console.log("Cannot connect to the database!", err);
    process.exit();
});

app.get("/", (req, res) =>{
    res.json("welcome");
});

require("./app/routes/tutorial.routes")(app);

const PORT = process.env.PORT||8080;
app.listen(PORT, () =>{
    console.log("server is running");
});
