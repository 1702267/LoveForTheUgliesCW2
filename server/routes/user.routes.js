import express from 'express'
import userCtrl from 'C:\Users\Acer Nitro 5 SSD\Documents\Uni Stuff\4th Year\Enterprise Web Systems\LoveForTheUgliesCW2\LoveForTheUgliesCW2\server\controllers\user.controller'
import authCtrl from 'C:\Users\Acer Nitro 5 SSD\Documents\Uni Stuff\4th Year\Enterprise Web Systems\LoveForTheUgliesCW2\LoveForTheUgliesCW2\server\controllers\auth.controller'

const router = express.Router()

router.route('/api/users')
 .get(userCtrl.list)
 .post(userCtrl.create)
 router.route('/api/users/:userId')
  .get(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)
 .get(userCtrl.read)
 .put(userCtrl.update)
 .delete(userCtrl.remove)

router.param('userId', userCtrl.userByID)

export default router
