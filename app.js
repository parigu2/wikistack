const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: false }))

app.use(morgan('dev'));



app.get('/', (req, res) => {
  res.send(`<html>
  Hello World</html>`)
})


const PORT = 3000

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`)
})