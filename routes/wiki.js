const express = require('express');
const router = express.Router();
const adding = require('../views/addPage.js');
const { Page } = require("../models");
const { addPage } = require("../views");

router.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`
  
  const page = new Page({
      title: req.body.title,
      content: req.body.content,
      name: req.body.name,
      email: req.body.email,
      status: req.body.status,
      slug: `http://localhost:3000/wiki/${req.body.title}`
    });
    
    // make sure we only redirect *after* our save is complete!
    // note: `.save` returns a promise.
    try {
        await page.save();
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
