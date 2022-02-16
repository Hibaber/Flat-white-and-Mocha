const router = require("express").Router()
const bcryptjs = require('bcryptjs')
const User = require("../models/User.model")
const saltRounds = 10

// Signup

router.get('/signup', (req, res, next) => res.render('auth/signup_form'))
router.post('/signup', (req, res, next) => {

  const { userPwd } = req.body

  bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(userPwd, salt))
    .then(hashedPassword => User.create({ ...req.body, password: hashedPassword }))
    .then(createdUser => res.redirect('/'))
    .catch(error => next(error))
})



// Login
router.get('/login', (req, res, next) => res.render('auth/login_form'))
router.post('/login', (req, res, next) => {

  const { email, userPwd } = req.body

  User
    .findOne({ email })
    .then(user => {
      if (!user) {
        res.render('auth/login_form', { errorMessage: 'Email no registrado en la Base de Datos' })
        return
      } else if (bcryptjs.compareSync(userPwd, user.password) === false) {
        res.render('auth/login_form', { errorMessage: 'La contraseña es incorrecta' })
        return
      } else {
        req.session.currentUser = user
        res.redirect('user/profile_page')
      }
    })
    .catch(error => next(error))
})


// Logout
router.post('/logout', (req, res, next) => {
  req.session.destroy(() => res.redirect('/login'))
})

module.exports = router