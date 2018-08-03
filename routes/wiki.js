const express = require('express');
const router = express.Router();
const adding = require('../views/addPage.js');
const { Page } = require("../models");
//const { addPage } = require("../views");

router.post('/', async (req, res, next) => {
  const page = new Page({
      title: req.body.title,
      content: req.body.content,
      name: req.body.name,
      email: req.body.email,
      status: req.body.status,
      slug: req.body.title
    });
    try {
        await page.save();
        console.log(page);
        res.redirect('/');
    } catch (error) { next(error) }
});

router.get('/', (req, res, next) => {
    res.send('wiki')
});


router.get('/add', (req, res, next) =>{
    res.send(adding())
})




module.exports = router;
