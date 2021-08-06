const bcrypt = require ('bcrypt')
const express = require ('express')
const mysql = require ('mysql2')
const cors = require ('cors')
const port = 4000

const app = express();
app.use(cors());
app.use(express.json());


/* ----- Connection to Database ----- */

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


/* ----- Login-Request to Database ----- */

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


/* ----- Sign-Up-Request to Database ----- */

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


/* ----- Profile-Login Request ----- */

  app.get('/profile', (req, res) => {
    db.query("SELECT profile_pic, first_name, last_name FROM users_table WHERE user_id = ? ", [req.query.user_id], (err, result) => {
        if (err) console.log(err)
        console.log(result)
        res.send(result)
    })
})


/* ----- Profile-Viewer-Page Request ----- */

  app.get('/profile', (req, res) => {
    db.query("SELECT * FROM users_table WHERE user_id = ? ", [req.query.user_id], (err, result) => {
        if (err) console.log(err)
        console.log(result)
        res.send(result)
    })
})


// to get an avatar for TPB, (using a specific id for now)
app.get('/avatart', (req, res) => {
  db.query('SELECT * FROM users_table WHERE user_id = "6"', function (err, result) {
     if (err) {
         console.log("no teacher avatar");
     } else {
      console.log("teacher avatar is displaying in side bar")
      res.send(result)
     }
   
  })
})

// to get an avatar for SPB, (using a specific id for now)
app.get('/avatars', (req, res) => {
  db.query('SELECT * FROM users_table WHERE user_id = "7"', function (err, result) {
     if (err) {
         console.log("no student avatar");
     } else {
      console.log("student avatar is displaying in side bar")
      res.send(result)
     }
   
  })
})

// learning objectives for project builders
app.get('/learningobj', (req, res) => {
  db.query("SELECT * FROM project_table WHERE project_id = '22'", function (err, result) {
      if (err) {
          console.log("alexa, play coldplay - fix you");
      } else {
        console.log("learning objectives yuh!")
          res.send(result)
      }
  })
})
// instructions for project builders
app.get('/instructions', (req, res) => {
  db.query("SELECT * FROM project_table WHERE project_id = '26'", function (err, result) {
      if (err) {
          console.log("alexa, play coldplay - fix you");
      } else {
        console.log("instructions yuh!")
          res.send(result)
      }
  })
})
// video tutorial for project builders
app.get('/video', (req, res) => {
  db.query('SELECT * FROM project_table WHERE project_name = "VIDEO TUTORIAL"', function (err, result) {
      if (err) {
          console.log("video where?");
      } else {
        console.log("youtube video is here boy")
          res.send(result)
      }
  })
})

// preview project for TPB, using a specific id
app.get('/preproj', (req, res) => {
  db.query("SELECT * FROM progress_history WHERE user_id = '2'", function (err, result) {
      if (err) {
          console.log("preview deez");
      } else {
        console.log("preview project")
          res.send(result)
      }
  })
})
// this is to get student profiles for TPB check submissions
app.get('/check-submissions', (req, res) => {
  db.query('SELECT * FROM users_table JOIN progress_history ON users_table.user_id = progress_history.user_id WHERE role = "student"',
  function (err, result) {
     if (err) {
         console.log("error 292");
     } else {
      console.log("check submissions? check!")
      res.send(result)
     }
   
  })
});




app.listen(port)
