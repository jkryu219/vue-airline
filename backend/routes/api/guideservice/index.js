const router = require('express').Router()
const controller = require('./controller')

router.get('/:id',controller.findReview)
router.get('/findGS/:id',controller.findGSById)
router.get('/:user/:title',controller.findGSByUserObIdTitle)
router.post('/',controller.createGuideService)

router.delete('/:user/:title',controller.deleteGuideService)
router.put('/:user/:title',controller.updateGuideService)


module.exports = router
