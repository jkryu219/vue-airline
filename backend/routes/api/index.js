const router = require('express').Router()
const authMiddleware = require('../../middlewares/auth')
const auth = require('./auth')
const user = require('./user')
const superUser = require('./superUser')
const superAuth = require('./superAuth')
const airport = require('./airport')
const city = require('./city')
const nation = require('./nation')

const guide =require('./guide')
const guideservice = require('./guideservice')
const review = require('./review')
const tag=require('./tag')
const option=require('./option')
const paidOption=require('./paidOption')

// SuperUser
router.use('/superauth', superAuth)
router.use('/superuser', authMiddleware)
router.use('/superuser', superUser)

// User
router.use('/auth', auth)
router.use('/user', authMiddleware)
router.use('/user', user)

// Guide
router.use('/guide',guide)

// GuideService
router.use('/guideservice',guideservice)

// Review
router.use('/review',review)

//Tag
router.use('/tag',tag)

//Option
router.use('/option',option)
router.use('/paidOption',paidOption)

router.use('/airport', airport)

router.use('/city', city)
router.use('/nation', nation)

module.exports = router
