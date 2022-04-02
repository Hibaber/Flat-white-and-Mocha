const router = require("express").Router();
const Cafeteria = require('../models/Cafeteria.model')
const fileUploader = require('../config/cloudinary.config');
const User = require("../models/User.model");
const { isLoggedIn, checkRole } = require("../middleware/route-guard");

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

// Add to favorits

router.post('/details/:id/cafeteria', isLoggedIn, (req, res, next) => {

  const cafeteria = { cafeteria }
  const { cafeteriaId } = req.params


  if (!cafeteria.includes(cafeteria)) {
    User
      .findByIdAndUpdate(cafeteriaId, { $push: { favorites: cafeteriaId } }, { new: true })
      .then(cafeteria => res.render('user/profile_page'))
      .catch(err => next(err))
  } else {
    res.redirect(`cafeteria/details_page`)
  }
})



module.exports = router;