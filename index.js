var express = require("express");
const app = express();
const port = 5000;
app.get("/api/flower",(req,res)=>{
    const flowers = [
        {id:1, ten:"hoa giang"},
        {id:2, ten:"hoa giang1"},
        {id:3, ten:"hoa giang2"}
    ];
    res.json(flowers);
});
app.listen(port,()=>console.log(`server is listening on port ${port}`));