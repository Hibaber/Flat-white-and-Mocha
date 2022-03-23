const router = require("express").Router()
const { isLoggedIn, checkRole } = require("../middleware/route-guard");

router.get('/user-profile', isLoggedIn, (req, res, next) => {
    res.render('user/profile_page')
})

module.exports = router
