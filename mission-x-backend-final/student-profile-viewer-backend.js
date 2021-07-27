const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const port = "4000"

const app = express();
app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
    host: 'mission-x.c0zjjvsfa8g6.ap-southeast-2.rds.amazonaws.com',
    user: 'MRHQ_X',
    password: 'missionx',
    database: 'level_up_works',
})

db.connect((err) => {
    if (err) throw err;
    console.log("Database Connection Complete")
})

app.get('/student-profile/', (req, res) => {
    db.query("SELECT * FROM users_table WHERE role = 'student' AND user_id = " + [req.query.user_id], (err, result) => {
        if (err) console.log(err)
        console.log(result)
        res.send(result)
    })
})

app.listen(port)
