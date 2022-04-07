const router = require("express").Router();
const Cafeteria = require('../models/Cafeteria.model')
const fileUploader = require('../config/cloudinary.config');
const User = require("../models/User.model");
const { isLoggedIn, checkRole } = require("../middleware/route-guard");

// Cafeteria List
let prevPage = 0
let nextPage = 0

router.get("/cafeterias", (req, res, next) => {

  const { page } = req.query // Gracias a esto, en la URL hay que ir a /cafetria?page=1

  switch (page) {
    case '1':
      prevPage = 0
      nextPage = 8
      break;
    case '2':
      prevPage = 9
      nextPage = 8
      break;
    case '3':
      prevPage = 10
      nextPage = 8
      break;
    case '4':
      prevPage = 11
      nextPage = 8
    default:
      break;
  }

  Cafeteria
    .find()
    .then((cafeteria) => {
      const fileteredArr = cafeteria.splice(prevPage, nextPage)
      console.log(fileteredArr);
      res.render("cafeteria/list_page", { fileteredArr, page });
    })
    .catch((err) => console.log(err));
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

  const { id } = req.params
  const { _id: userId } = req.session.currentUser;

  if (!req.session.currentUser.favorites.includes(id)) {
    User
      .findByIdAndUpdate(userId, { $push: { favorites: id } })
      .then(() => res.redirect('/user-profile'))
      .catch(err => next(err))
  } else {
    res.redirect(`/user-profile`)
  }
})


module.exports = router;