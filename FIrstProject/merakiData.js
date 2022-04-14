const axios=require("axios");
const fs=require("fs");
get_url =axios.get("https://api.merakilearn.org/courses");
const mainData=new Promise((resolve,reject)=>{
    resolve(get_url);
});
mainData.then((resolve)=>{
    mdata=resolve.data
    fs.writeFileSync("packData.json",JSON.stringify(mdata,null,3));
}).catch((reject)=>{
    console.log(reject);
})