'use strict'

import React from 'react'
import {Link} from 'react-router'
import FormInfo from '../Forms/FormInfo'

export default class Home extends React.Component {
  render () {
    let props = this.props
    return (
      <div>
        <main role='main'>
          <div id='intro-wrap'>
            <div id='intro' className='preload darken' data-autoplay='3000' data-navigation='true' data-pagination='true' data-transition='fadeUp'>
              <div className='intro-item slide-image1'>
                <div className='caption'>
                  <h2 />
                  <p />
                </div>
                <div className='photocaption'>
                  <h4>Powered by <a href=''>TechSol</a></h4>
                </div>
              </div>
              <div className='intro-item slide-image2'>
                <div className='caption'>
                  <h2 />
                  <p />
                </div>
                <div className='photocaption'>
                  <h4>Powered by <a href=''>TechSol</a></h4>
                </div>
              </div>
              <div className='intro-item slide-image3'>
                <div className='caption'>
                  <h2 />
                  <p />
                </div>
                <div className='photocaption'>
                  <h4>Powered by <a href=''>TechSol</a></h4>
                </div>
              </div>
              <div className='intro-item slide-image4'>
                <div className='caption'>
                  <h2 />
                  <p />
                </div>
                <div className='photocaption'>
                  <h4>Powered by <a href=''>TechSol</a></h4>
                </div>
              </div>
            </div>
          </div>

          <div id='main'>

            <section className='row section call-to-action'>
              <div className='row-content buffer even'>
                <p>Have you thought of attending TechSol Academy?</p>
                <FormInfo {...props} />
              </div>
            </section>

            <section className='row section'>
              <div className='row-content buffer even clear-after'>
                <div className='column four'>
                  <div className='small-icon red'><i className='icon icon-paperfly' /></div>
                  <div className='small-icon-text clear-after'>
                    <h4><Link to='history' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>History of TechSol Academy</Link></h4>
                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
                <div className='column four'>
                  <div className='small-icon red'><i className='icon icon-diamond' /></div>
                  <div className='small-icon-text clear-after'>
                    <h4><Link to='calendar' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Academic Calendar</Link></h4>
                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
                <div className='column four last'>
                  <div className='small-icon red'><i className='icon icon-crown' /></div>
                  <div className='small-icon-text clear-after'>
                    <h4><Link to='administration' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Administration</Link></h4>
                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
                <div className='column four'>
                  <div className='small-icon red'><i className='icon icon-tablet' /></div>
                  <div className='small-icon-text clear-after'>
                    <h4><Link to='principal' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Office of the Principal</Link></h4>
                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
                <div className='column four'>
                  <div className='small-icon red'><i className='icon icon-megaphone' /></div>
                  <div className='small-icon-text clear-after'>
                    <h4><Link to='contact' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Contact</Link></h4>
                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
                <div className='column four last'>
                  <div className='small-icon red'><i className='icon icon-multiview' /></div>
                  <div className='small-icon-text clear-after'>
                    <h4><Link to='tuition' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Tuition and Fees</Link></h4>
                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    )
  }
}
