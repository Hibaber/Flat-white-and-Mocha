const router = require("express").Router();

const Cafeteria = require('../models/Cafeteria.model')

const fileUploader = require('../config/cloudinary.config');
const User = require("../models/User.model");

// Cafeteria List

router.get('/cafeterias', (req, res, next) => {

  Cafeteria
    .find()
    .then(cafeteria => res.render('cafeteria/list_page', { cafeteria }))
    .catch(err => console.log(err))
});

//Details Cafeteria

router.get('/details/:id/cafeteria', (req, res, next) => {

  const { id } = req.params


  Cafeteria
    .findById(id)
    .then(cafeteria => res.render('cafeteria/details_page', cafeteria)) //  comments
    .catch(err => console.log(err))
});


//favoritos usuario 

router.post('/:id/cafeteria', (req, res, next) => {

  const { id } = req.params

  User
    .findByIdAndUpdate(req.session.currentUser._id, { $push: { "favorites": id } }, { new: true })
    .then((id1) => console.log(id1))
    .catch(err => console.log(err))

});



module.exports = router;