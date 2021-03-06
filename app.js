const express = require('express');
const app = express();
const morgan = require('morgan');
const layout = require('./views/layout');
const { db } = require('./models');
const models = require('./models');
const wiki = require('./routes/wiki');
const user = require('./routes/user');

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: false }))
app.use('/wiki', wiki);
app.use('/user',user);

app.use(morgan('dev'));


// app.get('/wiki', async (req, res) => {
//   await db.sync();
//   res.send(layout(''));
// })

app.get('/', async (req, res) => {
  await db.sync();
  //res.redirect('/wiki');
  res.send(layout(''));
})




const PORT = 3000


const init = async () => {
  await models.db.sync({force: true});
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`)
  })
}

init();
