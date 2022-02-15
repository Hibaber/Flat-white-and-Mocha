const router = require('express').Router();


/* benefits  */
router.get("/about-coffee", (req, res, next) => {
   res.render("coffee/about-coffee_page") 
});

module.exports = router;