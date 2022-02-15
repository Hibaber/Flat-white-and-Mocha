const router = require("express").Router();

const cafeteria = require ('../models/Cafeteria.model')

// Cafeteria List

router.get('/cafeteria', (req, res, next) => {
  
  cafeteria
    .find()
    .then(cafeteria => res.render ('cafeteria/list_page',{ cafeteria}))
    .catch(err => console.log (err))
});

// Add new Cafeteria

router.get('/cafeteria/nueva', (req, res, next) => {
 res.render('cafeteria/create_form')
 .catch(err => console.log (err))
});

router.post('/cafeteria/nueva', (req, res, next) => {

  const {name, type, image, location, description, transport, website, rating} = req.body

  cafeteria
    .create ({name, type, image, location, description, transport, website, rating})
    .then (()=> res.redirect ('/cafeteria/list_page'))
    .catch(err => console.log (err))

});

// Edit cafeteria
router.get('/cafeteria/:id/editar', (req, res, next) => {

    const {id} = req.params

    cafeteria
    .findById(id)
    .then(cafeteria=> res.render('cafeteria/edit_form', cafeteria))
    .catch(err => console.log (err))

});

router.post('/cafeteria/:id/editar', (req, res, next) => {

  const {id} = req.params
  const { name, type, image, location, description, transport, website, rating } = req.body
  


  cafeteria
    .findByIdAndUpdate(id, {name, type, image, location, description, transport, website, rating}, {new: true})
    .then(() => res.redirect('/cafeteria/list_page'))
    .catch(err => console.log (err))
    
});


// Delete cafeteria
router.post('/cafeteria/:id/eliminar', (req, res, next) => {
  
  const {id}= req.params

  cafeteria
    .findByIdAndDelete (id)
    .then (()=> res.redirect('/cafeteria/list_page'))
    .then(err=> console.log(err))
}); 

module.exports = router;