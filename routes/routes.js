const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   res.render('index', {
       heading: 'Benzino'
   }) 
});

router.get('/about', (req, res) => {
   res.render('about', {
       heading: 'About:'
   }) 
});

module.exports = router;