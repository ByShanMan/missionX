const bcrypt = require ('bcrypt')
const express = require ('express')
const mysql = require ('mysql2')
const cors = require ('cors')
const port = 4000

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'mission-x.c0zjjvsfa8g6.ap-southeast-2.rds.amazonaws.com',
  user: 'MRHQ_X',
  password: 'missionx',
  database: 'level_up_works',
})

db.connect(function (err) {
  if (err) {
    console.log (err)
  } else {
    console.log ("You're Connected!")
  }
})


app.post('/login', (req, res) => {
  const plainPass = req.body.password

  db.query("SELECT * FROM users_table WHERE email = ?", [req.body.email], function(err, result) {
    if (err) {
      console.log(err)
    } else {
      const passwordCheck = bcrypt.compare(plainPass, result.password)
      if (passwordCheck){
        res.sendStatus(200)
      } else {
        res.sendStatus(401)
      }
    }
  })
})

app.post('/signup', (req, res) => {
  const hashedPass = bcrypt.hashSync(req.body.password, 10)

  db.query("INSERT INTO users_table SET ?", {first_name: req.body.firstName, last_name: req.body.lastName, email: req.body.email, password: hashedPass}, function(err) {
    if(err) {
      console.log(err)
      } else {
        console.log("Successfully Signed Up!")
        res.sendStatus(201)
      }
    })
  })


app.listen(port)
