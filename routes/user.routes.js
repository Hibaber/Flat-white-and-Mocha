const router = require("express").Router()
const { isLoggedIn, checkRole } = require("../middleware/route-guard");

//PREGUNTAR AÑADIR Y BORRAR A LA LISTA DE FAVORITOS DEL USUARIO 

//Perfil del usuario


router.get('/user-profile', isLoggedIn, (req, res, next) => {
    res.render('user/profile_page')
})





module.exports = router
