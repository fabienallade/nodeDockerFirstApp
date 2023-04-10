const express = require('express')
const db = require('./app/db')
const app = express()
const port = 3000

const env = require("./config")
const User = db.users


app.get('/', (req, res) => {
  console.log(env.config.DATABASE_URL);
  console.log(db.mongoose.connect(env.config.DATABASE_URL))
  const user = new User({
    name:"fabien",
    lastName:"fabien",
    connected:false
  });
  user.save(user).then(()=>console.log("fabien")).catch((err)=>console.log(err))
  res.send('Hello World! fabien est dans la place')
})

app.listen(port, () => {
  console.log(`Node application listening on port ${port}`)
})
