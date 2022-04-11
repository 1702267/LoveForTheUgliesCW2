import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import template from 'C:\Users\Acer Nitro 5 SSD\Documents\Uni Stuff\4th Year\Enterprise Web Systems\LoveForTheUgliesCW2\LoveForTheUgliesCW2\template'
import userRoutes from 'C:\Users\Acer Nitro 5 SSD\Documents\Uni Stuff\4th Year\Enterprise Web Systems\LoveForTheUgliesCW2\LoveForTheUgliesCW2\server\routes\user.routes'
import authRoutes from 'C:\Users\Acer Nitro 5 SSD\Documents\Uni Stuff\4th Year\Enterprise Web Systems\LoveForTheUgliesCW2\LoveForTheUgliesCW2\server\routes\auth.routes'

const app = express()

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
// secure apps by setting various HTTP headers
app.use(helmet())
// enable CORS - Cross Origin Resource Sharing
app.use(cors())

app.use('/', userRoutes)
app.use('/', authRoutes)

app.use((err, req, res, next) => {
 if (err.name === 'UnauthorizedError') {
 res.status(401).json({"error" : err.name + ": " + err.message})
 }else if (err) {
 res.status(400).json({"error" : err.name + ": " + err.message})
 console.log(err)
 }
})

app.get('/',(req, res) => {
  res.status(200).send(Template())
})


export default app
