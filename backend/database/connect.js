const mg=require('mongoose');
const conn=mg.connect('mongodb://127.0.0.1:27017/reddy',(err)=>{
    if(err) throw err
    else
    console.log("connected to mongo database");
});
module.exports=conn;