'use strict'

import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
      <div>
        <footer role='contentinfo'>
          <div className='row'>
            <div className='row-content buffer clear-after'>
              <section id='top-footer'>
                <div className='widget meta-social column three'>
                  <h4>Follow Us</h4>
                  <ul className='inline'>
                    <li><a href='#' className='twitter-share border-box'><i className='fa fa-twitter fa-lg' /></a></li>
                    <li><a href='#' className='facebook-share border-box'><i className='fa fa-facebook fa-lg' /></a></li>
                    <li><a href='#' className='pinterest-share border-box'><i className='fa fa-pinterest fa-lg' /></a></li>
                  </ul>
                </div>
              </section>
              <section id='bottom-footer'>
                <p className='keep-left'>Powered by <i className='fa fa-love' /><a href=''>TechSol</a></p>

              </section>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
