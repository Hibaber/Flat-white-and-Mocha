const isLoggedIn = (req, res, next) => {
    req.session.currentUser ? next() : res.render('auth/login_form', {
        errorMessage: 'Identifícate, por favor! :)'
    })
}

const checkRole = (...admittedRoles) => (req, res, next) => {
    admittedRoles.includes(req.session.currentUser.role) ? next() : res.render('auth/login_form', {
        errorMessage: 'Solo personal autorizado'
    })
}

module.exports = { isLoggedIn, checkRole }