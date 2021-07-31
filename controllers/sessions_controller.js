const express = require('express');
const User = require("../models/user");
const router = express.Router();

router.post('/', (req, res)=>{
    const email = req.body.email
    const password = req.body.password
    User.get(email).then((user) => {
        req.session.userId = user.id;
        res.send(req.session)
    });
    req.session // Session object
    // if(user){
    //      // 
    // }

    // // To check if the user is logged in
    // if(req.session.userId){

    // }
    

});

router.get('/', (req, res)=>{
    res.json(req.session); // Or some version of this // Depending on what
    // you actually want the front end to know about the session
})

module.exports = router;