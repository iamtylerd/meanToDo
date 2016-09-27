const { Router } = require('express')
const router = Router()
const home = require('../controllers/rootCtrl')


router.get('/api/messages', home.new)
router.post('/api/messages', home.create)
router.patch('/api/messages/:id', home.done)
router.delete('/api/delete/:id', home.destroy)


module.exports = router
