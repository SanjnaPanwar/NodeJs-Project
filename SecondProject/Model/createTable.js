const con = require("../config/connection")
const options = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '@Laddu123',
        database: 'MerakiData'
    }
}

const knex = require('knex')(options);

knex.schema.createTable('MerakiDataTable', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('logo')
    table.string('notes')
    table.integer('days_to_complete')
    table.string('short_description ')
    table.string('type')
    table.string('course_type')
    table.string('lang_available')
}).then((data) => {
    console.log("Table Created");
  })
  .catch((err) => {
    console.log("Table Already Exist!!");
  });

module.exports={knex};


let sql = `INSERT INTO MerakiDataTable values?`;
const data=require("../fileData")
let values = [];
data.forEach((ele)=>{
  values.push([ele.id, ele.name, ele.logo, ele.notes, ele.days_to_complete, ele.short_description, ele.type, ele.course_type,JSON.stringify(ele.lang_available)])
})

con.query(sql, [values], (err, result) => {
  if (err){
    console.log("data is already insert");

  }
  else{
      console.log('data inseted succesfully.');
  }
});
