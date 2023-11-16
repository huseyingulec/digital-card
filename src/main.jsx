import React from 'react'
import ReactDOM from 'react-dom/client'
import Info from './info'
import About from "./About"
import Interests  from './Interests'
import Footer  from './footer'

function Main() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
