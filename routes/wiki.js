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
        res.redirect(`/wiki/${page.slug}`);
    } catch (error) { next(error) }
});

router.get('/', (req, res, next) => {
    res.send('wiki')
});


router.get('/add', (req, res, next) =>{
    res.send(adding())
});


router.get('/:slug', async (req, res, next) => {
    try {
        const page = await Page.findOne({
            where: {
                slug: req.params.slug
            }
        });
        res.json(page);
    } catch (error) {
        next(error)
    }
    res.send(`hit dynamic route at ${req.params.slug}`);
});



module.exports = router;
