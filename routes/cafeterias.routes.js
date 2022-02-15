const router = require("express").Router();

const cafeteria = require('../models/Cafeteria.model')

// Cafeteria List

router.get('/cafeterias', (req, res, next) => {

  cafeteria
    .find()
    .then(cafeteria => res.render('cafeteria/list_page', { cafeteria }))
    .catch(err => console.log(err))
});

// Add new Cafeteria

router.get('/create-cafeteria', (req, res, next) => {
  res.render('cafeteria/create_form')
    .catch(err => console.log(err))
});

router.post('/create-cafeteria', (req, res, next) => {

<<<<<<< HEAD
  const {name, type, image, l, description, transport, website, rating} = req.body
=======
  const { name, type, image, location, description, transport, website, rating } = req.body
>>>>>>> refs/remotes/origin/main

  cafeteria
    .create({ name, type, image, location, description, transport, website, rating })
    .then(() => res.redirect('/cafeteria/list_page'))
    .catch(err => console.log(err))

});

// Edit cafeteria
router.get('/edit/:id/cafeteria', (req, res, next) => {

  const { id } = req.params

  cafeteria
    .findById(id)
    .then(cafeteria => res.render('cafeteria/edit_form', cafeteria))
    .catch(err => console.log(err))

});

router.post('/edit/:id/cafeteria', (req, res, next) => {

  const { id } = req.params
  const { name, type, image, location, description, transport, website, rating } = req.body



  cafeteria
    .findByIdAndUpdate(id, { name, type, image, location, description, transport, website, rating }, { new: true })
    .then(() => res.redirect('/cafeteria/list_page'))
    .catch(err => console.log(err))

});


// Delete cafeteria
router.post('/delete/:id/cafeteria', (req, res, next) => {

  const { id } = req.params

  cafeteria
    .findByIdAndDelete(id)
    .then(() => res.redirect('/cafeteria/list_page'))
    .then(err => console.log(err))
});

module.exports = router;