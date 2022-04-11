import express from 'express'
import authCtrl from 'C:/Users/Acer Nitro 5 SSD/Documents/Uni Stuff/4th Year/Enterprise Web Systems/LoveForTheUgliesCW2/LoveForTheUgliesCW2/server/controllers/auth.controller'

const router = express.Router()

router.route('/auth/signin')
 .post(authCtrl.signin)
router.route('/auth/signout')
 .get(authCtrl.signout)

export default router
