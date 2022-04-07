
const router = require("express").Router()
const { isLoggedIn, checkRole } = require("../middleware/route-guard");
const Cafeteria = require("../models/Cafeteria.model");
const User = require("../models/User.model");

router.get('/user-profile', isLoggedIn, (req, res, next) => {
    const { _id: userId } = req.session.currentUser;


    User
        .findById(userId)
        .then(userInfo => {
            const userFavs = userInfo.favorites
            const favoritesPromise = userFavs.map(elm => Cafeteria.findById(elm))
            return Promise.all(favoritesPromise);
        })
        .then(data => {
            res.render('user/profile_page', { data })
        })
        .catch(err => next(err))
})



module.exports = router
