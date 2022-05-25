const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

//router para las vistas
router.get('/', authController.isAuthenticated, (req, res)=>{    
    res.render('index', {user:req.user})
})
router.get('/login', (req, res)=>{
    res.render('login', {alert:false})
})
router.get('/register', (req, res)=>{
    res.render('register')
})
// lo nuevo aqui-------------------------------
router.get('/principal', (req, res)=>{
    res.render('principal')
})

router.get('/customers', (req, res)=>{
    res.render('customers')
})
router.get('/customers_edit', (req, res)=>{
    res.render('customers_edit')
})
router.get('/horario', (req, res)=>{
    res.render('horario')
})
router.get('/reportes', (req, res)=>{
    res.render('reportes')
})


//---------------------------------------------------------

//router para los métodos del controller
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)

module.exports = router