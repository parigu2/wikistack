const express = require('express');
const app = express();
const morgan = require('morgan');
const layout = require('./views/layout');
// const { db } = require('./models');
const models = require('./models');

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })



app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: false }))

app.use(morgan('dev'));



app.get('/', async (req, res) => {
  await db.sync();
  res.send(layout(''));
})



const PORT = 3000


const init = async () => {
  // await db.User.sync();
  // await db.Page.sync();
  await models.db.sync({force: true});
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`)
  })
}

init();
