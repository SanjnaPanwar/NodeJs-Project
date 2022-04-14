const express=require("express");
const data=require("./packData");

const app=express();
app.use(express.json())

app.listen(4000,()=>{
    console.log("listening on port 4000");
})

app.get('/',(req,res)=>{
    res.json({message:"API is working"})
})

app.get('/api/data',(req,res)=>{
    res.json(data)
})

app.post('/api/data',(req,res)=>{
    const user= {
       
        "id":req.body.id,
        "name": req.body.name,
        "notes":req.body.notes,
        "days_to_complete": req.body.days_to_complete,
        "short_description": req.body.short_description,
        "type": req.body.type,
        "course_type": req.body.course_type,
        "lang_available": [req.body.lang_available]
    }
    data.push(user)
    res.json(user)
})

app.put('/api/data/:id',(req,res)=>{
    let id=req.params.id
    
    let name= req.body.name
    let notes=req.body.notes
    let days_to_complete= req.body.days_to_complete
    let short_description= req.body.short_description
    let type=req.body.type
    let course_type = req.body.course_type
    let lang_available = [req.body.lang_available]
    
    let index = data.findIndex((data)=>{
        return (data.id==Number.parseInt(id))
    }) 
    console.log(id,req.body,index);

    if (index>=0){
        let dta=data[index]
        dta.name= req.body.name
        dta.notes=req.body.notes
        dta.days_to_complete=days_to_complete
        dta.short_description=short_description
        dta.type=req.body.type
        dta.course_type=course_type
        dta.lang_available = [req.body.lang_available]
        res.json(dta)
    }else{
        res.status(404)
    }
})

app.delete("/api/data/:id",(req,res)=>{
    let id=req.params.id;
    let index = data.findIndex((data)=>{
        return (data.id==Number.parseInt(id))
    }) 

    if (index>=0){
        let dta=data[index]
        data.splice(index.toExponential,1)
        res.json(dta)
    }else{
        res.status(404)
        res.end()
    }
})                                                                              