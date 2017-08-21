'use strict'

import React from 'react'
import Navigation from 'Navigation'
import Footer from 'Footer'

export default class Main extends React.Component {
  render () {
    return (
      <div>
        <Navigation />
        <div>
          <div>
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
