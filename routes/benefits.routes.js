const router = require('express').Router();


/* benefits  */
router.get("/coffee-benefits", (req, res, next) => {
   res.render("coffee/benefits_page") 
});

module.exports = router;