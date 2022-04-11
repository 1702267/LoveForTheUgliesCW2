import React from 'react'
import MainRouter from 'C:/Users/Acer Nitro 5 SSD/Documents/Uni Stuff/4th Year/Enterprise Web Systems/LoveForTheUgliesCW2/LoveForTheUgliesCW2/love4theuglies/src/MainRouter'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from 'C:/Users/Acer Nitro 5 SSD/Documents/Uni Stuff/4th Year/Enterprise Web Systems/LoveForTheUgliesCW2/LoveForTheUgliesCW2/love4theuglies/src/theme'
import { hot } from 'react-hot-loader'

const App = () => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
  <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainRouter/>
      </ThemeProvider>
  </BrowserRouter>
)}

export default hot(module)(App)
