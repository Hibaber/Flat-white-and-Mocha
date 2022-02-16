const router = require("express").Router()
const { isLoggedIn, checkRole } = require("../middleware/route-guard");
const UserModel = require("../models/User.model");
const { isAdmin } = require('../utils')
const fileUploader = require('../config/cloudinary.config');



// Perfil administrador

router.get('/admin-profile', isLoggedIn, checkRole("ADMIN"), (req, res, next) => {

  res.render('admin/profile_page')
})


// privileges to the Admin

//CAFETERIA

//edit 

router.get("/edit/:id/cafeteria", isLoggedIn, (req, res, next) => {
  const { id } = req.params;
  Cafeteria
    .findById(id)
    .then((cafeteria) => res.render("cafeteria/edit_form", cafeteria))
    .catch((err) => console.log(err));
});

router.post("/edit/:id/cafeteria", isLoggedIn, fileUploader.single('image'), (req, res, next) => {
  const { id } = req.params;
  const { name, type, lat, lng, description, transport, website, rating } = req.body;

  Cafeteria
    .findByIdAndUpdate(id, { name, type, image: req.file.path, location: { coordinates: [lat, lng] }, description, transport, website, rating })
    .then(() => res.redirect("cafeteria/list_page"))
    .catch((err) => console.log(err));
});

//delete

router.post("/delete/:id/cafeteria", isLoggedIn, (req, res, next) => {
  const { id } = req.params;

  Cafeteria
    .findByIdAndDelete(id)
    .then(() => res.redirect("cafeteria/list_page"))
    .catch((err) => console.log(err));
});


//SHOP

//edit 

router.get("/edit/:id/shop", isLoggedIn, (req, res, next) => {
  const { id } = req.params;
  Shop
    .findById(id)
    .then((shop) => res.render("shop/edit_form", shop))
    .catch((err) => console.log(err));
});

router.post("/edit/:id/shop", isLoggedIn, fileUploader.single('image'), (req, res, next) => {
  const { id } = req.params;
  const { name, type, lat, lng, description, transport, website, rating } = req.body;

  Shop
    .findByIdAndUpdate(id, { name, type, image: req.file.path, location: { coordinates: [lat, lng] }, description, transport, website, rating })
    .then(() => res.redirect("shop/list_page"))
    .catch((err) => console.log(err));
});

//delete

router.post("/delete/:id/shop", isLoggedIn, (req, res, next) => {
  const { id } = req.params;

  Shop
    .findByIdAndDelete(id)
    .then(() => res.redirect("shop/list_page"))
    .catch((err) => console.log(err));
});

module.exports = router