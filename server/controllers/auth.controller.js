import User from 'C:/Users/Acer Nitro 5 SSD/Documents/Uni Stuff/4th Year/Enterprise Web Systems/LoveForTheUgliesCW2/LoveForTheUgliesCW2/server/models/user.model'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from 'C:/Users/Acer Nitro 5 SSD/Documents/Uni Stuff/4th Year/Enterprise Web Systems/LoveForTheUgliesCW2/LoveForTheUgliesCW2/config/config'

const signin = async (req, res) => {
  try {
      let user = await User.findOne({
        "email": req.body.email
      })
      if (!user)
        return res.status('401').json({
          error: "User not found"
        })

      if (!user.authenticate(req.body.password)) {
        return res.status('401').send({
          error: "Email and password don't match."
        })
      }

      const token = jwt.sign({
        _id: user._id
      }, config.jwtSecret)

      res.cookie("t", token, {
        expire: new Date() + 9999
      })

      return res.json({
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email
        }
      })

    } catch (err) {

      return res.status('401').json({
        error: "Could not sign in"
      })

    }
}

const signout = (req, res) => {
  res.clearCookie("t")
    return res.status('200').json({
      message: "signed out"
    })
}

const requireSignin = expressJwt({
  secret: config.jwtSecret,
  userProperty: 'auth',
  algorithms: ['HS256']
})

const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id
  if (!(authorized)) {
    return res.status('403').json({
      error: "User is not authorized"
    })
  }
  next()
}


export default {
  signin,
  signout,
  requireSignin,
  hasAuthorization
}
