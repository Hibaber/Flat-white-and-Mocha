const router = require("express").Router();

const Cafeteria = require('../models/Cafeteria.model')

const fileUploader = require('../config/cloudinary.config');

// Cafeteria List

router.get('/cafeterias', (req, res, next) => {

  Cafeteria
    .find()
    .then(cafeteria => res.render('cafeteria/list_page', { cafeteria }))
    .catch(err => console.log(err))
});

//Details Cafeteria

router.get('/details/:id/cafeteria', (req, res, next) => {

  // Promise.all().then()

  // Comment.find({ cafeteria: req.params.id }).then(comments => {

  // })


  Cafeteria
    .find()
    .then(cafeteria => res.render('cafeteria/details_page', { cafeteria })) // , comments
    .catch(err => console.log(err))
});

// añadir comentario: vista para formulario para crear 

// Add new Cafeteria

router.get('/create-cafeteria', (req, res, next) => {
  res.render('cafeteria/create_form')

});

router.post('/create-cafeteria', fileUploader.single('image'), (req, res, next) => {

  const { name, type, lat, lng, description, transport, website, rating } = req.body

  Cafeteria
    .create({ name, type, image: req.file.path, location: { coordinates: [lat, lng] }, description, transport, website, rating })
    .then(() => res.render('cafeteria/list_page'))
    .catch(err => console.log(err))
  // hacer console.log (req.file.path)

});

// Edit cafeteria
router.get('/edit/:id/cafeteria', (req, res, next) => {

  const { id } = req.params

  Cafeteria
    .findById(id)
    .then(cafeteria => res.render('cafeteria/edit_form', cafeteria))
    .catch(err => console.log(err))

});

router.post('/edit/:id/cafeteria', (req, res, next) => {

  const { id } = req.params
  const { name, type, image, location, description, transport, website, rating } = req.body



  Cafeteria
    .findByIdAndUpdate(id, { name, type, image, location, description, transport, website, rating }, { new: true })
    .then(() => res.render('cafeteria/list_page'))
    .catch(err => console.log(err))

});


// Delete cafeteria
router.post('/delete/:id/cafeteria', (req, res, next) => {

  const { id } = req.params

  Cafeteria
    .findByIdAndDelete(id)
    .then(() => res.render('cafeteria/list_page'))
    .then(err => console.log(err))
});

module.exports = router;