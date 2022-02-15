const router = require("express").Router();

const cafeteria = require ('../models/Cafeteria.model')

// Shop List

router.get('/tienda', (req, res, next) => {
  
  cafeteria
    .find()
    .then(cafeteria => res.render ('shop/list_page',{cafeteria}))
    .catch(err => console.log (err))
});

// Add new Shop  - only Admin

router.get('/tienda/nueva', (req, res, next) => {
 res.render('shop/create_form')
 .catch(err => console.log (err))
});

router.post('/tienda/nueva', (req, res, next) => {

  const {name, type, image, location, description, transport, website, rating} = req.body

  cafeteria
    .create ({name, type, image, location, description, transport, website, rating})
    .then (()=> res.redirect ('/shop/list_page'))
    .catch(err => console.log (err))

});

// Edit Shop  - only Admin
router.get('/tienda/:id/editar', (req, res, next) => {

    const {id} = req.params

    cafeteria
    .findById(id)
    .then(cafeteria=> res.render('shop/edit_form', cafeteria))
    .catch(err => console.log (err))

});

router.post('/tienda/:id/editar', (req, res, next) => {

  const {id} = req.params
  const { name, type, image, location, description, transport, website, rating } = req.body

  cafeteria
    .findByIdAndUpdate(id, {name, type, image, location, description, transport, website, rating}, {new: true})
    .then(() => res.redirect('/shop/list_page'))
    .catch(err => console.log (err))
    
});


// Delete cafeteria - only Admin
router.post('/shop/:id/eliminar', (req, res, next) => {
  
  const {id}= req.params

  cafeteria
    .findByIdAndDelete (id)
    .then (()=> res.redirect('/shop/list_page'))
    .then(err=> console.log(err))
}); 

module.exports = router;