const express = require('express');
const router = express.Router();

router.route('/').get((req,res)=>{
    res.send('all items')
})
//const app = express(); 

module.exports = router