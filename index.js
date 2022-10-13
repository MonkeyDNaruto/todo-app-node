const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({
        success:true,
        data:[],
        messsage:'server is running...'
    });
})

const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`server is running on the ${PORT}`);
});

process.on("unhandledRejection", (error) => {
  server.close();
  process.exit(1);
});
