import React, { Component } from 'react'
import HeaderAbout from "./HeaderAbout"
import Footer from "./Footer"

class About extends Component {
  render () {
    return (
      <div>
      <HeaderAbout />
        <div className = "aboutPage">
        </div>
      <Footer />
      </div>
    )
  }
}

export default About
