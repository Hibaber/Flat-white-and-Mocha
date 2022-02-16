const router = require("express").Router();



// ********* require fileUploader in order to use it *********
const fileUploader = require('../config/cloudinary.config');


const cafeteria = require('../models/Cafeteria.model')

// Shop List

router.get('/shops', (req, res, next) => {

  cafeteria
    .find()
    .then(cafeteria => res.render('shop/list_page', { cafeteria }))

});

// Shop details

router.get('/details/:id/shop', (req, res, next) => {

  cafeteria
    .find()
    .then(cafeteria => res.render('shop/details_page', { cafeteria }))
    .catch(err => console.log(err))
});

// Add new Shop  - only Admin

router.get('/create-shop', (req, res, next) => {
  res.render('shop/create_form')
    
});

router.post('/create-shop', fileUploader.single('image'), (req, res, next) => {

  const { name, type, lat, lng, description, transport, website, rating } = req.body


  cafeteria
    .create({ name, type, image: req.file.path, location:{coordinates: [lat, lng]}, description, transport, website, rating })
    .then(() => res.redirect('shop/list_page'))
    .catch(err => console.log(err))

});

// Edit Shop  - only Admin
router.get('/edit/:id/shop', (req, res, next) => {

  const { id } = req.params

  cafeteria
    .findById(id)
    .then(cafeteria => res.render('shop/edit_form', cafeteria))
    .catch(err => console.log(err))

});

router.post('/edit/:id/shop', (req, res, next) => {

  const { id } = req.params
  const { name, type, image, location, description, transport, website, rating } = req.body

  cafeteria
    .findByIdAndUpdate(id, { name, type, image, location, description, transport, website, rating }, { new: true })
    .then(() => res.redirect('/shop/list_page'))
    .catch(err => console.log(err))

});


// Delete cafeteria - only Admin
router.post('/delete/:id/shop', (req, res, next) => {

  const { id } = req.params

  cafeteria
    .findByIdAndDelete(id)
    .then(() => res.redirect('/shop/list_page'))
    .then(err => console.log(err))
});

module.exports = router;