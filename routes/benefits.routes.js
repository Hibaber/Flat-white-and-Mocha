const router = require('express').Router();

//no requieren llamar a ningún modelo.

/* benefits  */
router.get("/caffee/beneficios", (req, res, next) => {
   res.render("./caffee/benefits_page") // los puntos están reservados
});

module.exports = router;