const router = require('express').Router()
module.exports = router

// use /api
router.use('/order', require('./order'))
router.use('/destination', require('./destination'))
router.use('/user', require('./user'))
router.use('/trip', require('./trip'))
router.use('/payment', require('./payment'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
