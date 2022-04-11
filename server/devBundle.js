import config from 'C:/Users/Acer Nitro 5 SSD/Documents/Uni Stuff/4th Year/Enterprise Web Systems/LoveForTheUgliesCW2/LoveForTheUgliesCW2/config/config'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from 'C:/Users/Acer Nitro 5 SSD/Documents/Uni Stuff/4th Year/Enterprise Web Systems/LoveForTheUgliesCW2/LoveForTheUgliesCW2/webpack.config.client.js'

const compile = (app) => {
  if(config.env === "development"){
    const compiler = webpack(webpackConfig)
    const middleware = webpackMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath
    })
    app.use(middleware)
    app.use(webpackHotMiddleware(compiler))
  }
}

export default {
  compile
}
