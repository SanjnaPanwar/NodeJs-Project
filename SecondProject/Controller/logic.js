
const { knex } = require("../Model/createTable")

// get data from table
const myDataGet = async (req, res) => {
    a = await knex.select("*").from("MerakiDataTable");
    res.send(a)

}

// get data from id
const myDataGetById = async (req, res) => {
    a = await knex.select("*").from("MerakiDataTable").where("id", req.params.id);
    res.send(a)

}
// post data into table
const myDataPost = async (req, res) => {
    const Data = {
        name: req.body.name,
        logo: req.body.logo,
        notes: req.body.notes,
        days_to_complete: req.body.days_to_complete,
        short_description: req.body.short_description,
        type: req.body.type,
        course_type: req.body.course_type,
        lang_available: req.body.lang_available
    };
    await knex("MerakiDataTable").insert(Data)
    res.send(Data)
}

// put/update data into table
const myDataPut = async (req, res) => {
    const Data = {
        name: req.body.name,
        logo: req.body.logo,
        notes: req.body.notes,
        days_to_complete: req.body.days_to_complete,
        short_description: req.body.short_description,
        type: req.body.type,
        course_type: req.body.course_type,
        lang_available: req.body.lang_available
    };
    await knex("MerakiDataTable").update(Data).where("id", req.params.id);
    res.send(Data)
}

// delete data from table
const myDataDel = async (req, res) => {
    a = await knex("MerakiDataTable").where("id", req.params.id).del();
    res.send(a)

}


module.exports = { myDataPost, myDataGet, myDataGetById, myDataPut,myDataDel }