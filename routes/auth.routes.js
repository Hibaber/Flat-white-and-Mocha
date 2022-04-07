const router = require("express").Router()
const bcryptjs = require('bcryptjs')
const User = require("../models/User.model")
const saltRounds = 10

// Signup

router.get('/singup', (req, res, next) => res.render('auth/signup_form'))


router.post('/singup', (req, res, next) => {

  const { userPwd } = req.body

  bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(userPwd, salt))
    .then(hashedPassword => User.create({ ...req.body, password: hashedPassword }))
    .then(createdUser => res.redirect('/'))
    .catch(error => next(error))
})



// Login
//get
router.get('/login', (req, res, next) => res.render('auth/login_form'))

//post
router.post('/login', (req, res, next) => {

  const { email, userPwd } = req.body

  User
    .findOne({ email })
    .then(user => {
      if (!user) {
        res.render('auth/login_form', { errorMessage: 'Email no registrado en la Base de Datos' })
        return
      }
      if (bcryptjs.compareSync(userPwd, user.password) === false) {
        res.render('auth/login_form', { errorMessage: 'La contraseña es incorrecta' })
        return
      }

      req.session.currentUser = user
      req.app.locals.isLogged = true
      if (user.role === 'USER')
        res.redirect('/user-profile')
      else
        res.redirect('/admin-profile')
    })
    .catch(error => next(error))
})


// Logout
router.get('/logout', (req, res, next) => {
  req.app.locals.isLogged = false
  req.session.destroy(() => res.redirect('/login'))
})




module.exports = router