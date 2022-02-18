
const router = require("express").Router()
const { isLoggedIn, checkRole } = require("../middleware/route-guard");
const UserModel = require("../models/User.model");
const { isAdmin } = require('../utils')
const fileUploader = require('../config/cloudinary.config');
const Cafeteria = require('../models/Cafeteria.model')



// Perfil administrador
router.get('/admin-profile', isLoggedIn, checkRole("ADMIN"), (req, res, next) => {
  res.render('admin/profile_page')
})


//Cafeteria
//Crear nueva cafeteria
//GET
router.get('/create-cafeteria', isLoggedIn, checkRole("ADMIN"), (req, res, next) => {
  res.render('cafeteria/create_form')
});

//POST
router.post('/create-cafeteria', fileUploader.single('image'), isLoggedIn, checkRole("ADMIN"), (req, res, next) => {

  const { name, type, lat, lng, description, transport, website, rating } = req.body

  Cafeteria
    .create({ name, type, image: req.file.path, location: { coordinates: [lat, lng] }, description, transport, website, rating })
    .then(() => {
      return Cafeteria.find()
    })
    .then(list => res.render('cafeteria/list_page'))
    .catch(err => console.log(err))
})
// Editar cafeteria
// GET
router.get("/edit/:id/cafeteria", isLoggedIn, checkRole("ADMIN"), (req, res, next) => {
  const { id } = req.params;

  Cafeteria
    .findById(id)
    .then((cafeteria) => res.render("cafeteria/edit_form", cafeteria))
    .catch((err) => console.log(err));
});
// POST
router.post("/edit/:id/cafeteria", isLoggedIn, checkRole("ADMIN"), (req, res, next) => {
  const { id } = req.params;
  const { name, type, lat, lng, description, transport, website, rating } = req.body;

  Cafeteria
    .findByIdAndUpdate(id, { name, type, description, transport, website, rating })
    .then(() => res.redirect("/cafeterias"))
    .catch((err) => console.log(err));
});

//Borrar cafeteria
//POST
router.post("/delete/:id/cafeteria", isLoggedIn, checkRole("ADMIN"), (req, res, next) => {
  const { id } = req.params;

  Cafeteria
    .findByIdAndDelete(id)
    .then(() => res.redirect("/cafeterias"))
    .catch((err) => console.log(err));
});


//Shop
//Crear nueva tienda
//GET
router.get('/create-shop', isLoggedIn, checkRole("ADMIN"), (req, res, next) => {
  res.render('shop/create_form')

});
//POST
router.post('/create-shop', fileUploader.single('image'), isLoggedIn, checkRole("ADMIN"), (req, res, next) => {

  const { name, type, lat, lng, description, transport, website, rating } = req.body

  Cafeteria
    .create({ name, type, image: req.file.path, location: { coordinates: [lat, lng] }, description, transport, website, rating })
    .then(() => res.redirect('/shops'))
    .catch(err => console.log(err))

});

//Editar tienda
//GET
router.get("/edit/:id/shop", isLoggedIn, checkRole("ADMIN"), (req, res, next) => {
  const { id } = req.params;
  Cafeteria
    .findById(id)
    .then((shop) => res.render("shop/edit_form", shop))
    .catch((err) => console.log(err));
});

//POST
router.post("/edit/:id/shop", isLoggedIn, checkRole("ADMIN"), fileUploader.single('image'), (req, res, next) => {
  const { id } = req.params;
  const { name, type, lat, lng, description, transport, website, rating } = req.body;

  Cafeteria
    .findByIdAndUpdate(id, { name, type, image: req.file.path, location: { coordinates: [lat, lng] }, description, transport, website, rating })
    .then(() => res.redirect("/cafeterias"))
    .catch((err) => console.log(err));
});

//Borrar tienda
//POST
router.post("/delete/:id/shop", isLoggedIn, checkRole("ADMIN"), (req, res, next) => {
  const { id } = req.params;

  Cafeteria
    .findByIdAndDelete(id)
    .then(() => res.redirect("shop/list_page"))
    .catch((err) => console.log(err));
});

module.exports = router 