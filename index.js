const express = require ('express')
const app = express()
const db = require('./models')

db.sequelize.sync().then(()=>{ //code to check whether the tables exists or not
    app.listen(3002, ()=>{
        console.log("Server running on port 3002");
    });
});

