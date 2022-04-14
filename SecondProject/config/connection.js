const mysql=require("mysql");
const con=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"@Laddu123",
    database:"MerakiData"
})
con.connect((err)=>{
    if (err){
    console.log(err,"connnection error");
    }
})
 module.exports = con;