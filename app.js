const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

app.get('/status',(req,res)=>{
    res.status(200).json({
        success:true, 
        data:[],
        messsage:'server is running...'
    });
})

// connection to mongo db
mongoose.connect("mongodb://localhost/todo_express", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

//routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));

// server configurations..
const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`server is running on the ${PORT}`);
});

process.on("unhandledRejection", (error) => {
  server.close();
  process.exit(1);
});
