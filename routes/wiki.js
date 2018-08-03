const express = require('express');
const router = express.Router();
const adding = require('../views/addPage.js');

router.get('/', (req, res, next) => {
    res.send('wiki')
});

router.post('/', (req, res, next) => {
  res.json(req.body);
  res.send('wiki post')
});

router.get('/add', (req, res, next) =>{
    res.send(adding())
})




module.exports = router;
