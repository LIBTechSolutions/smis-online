'use strict'

import React from 'react'
import {Link, IndexLink} from 'react-router'

export default class Navigation extends React.Component {
  render () {
    return (
      <div>

        <header role='banner'>
          <div className='row'>
            <div className='nav-inner row-content buffer-left buffer-right even clear-after'>
              <div id='brand'>
                <h1 className='reset'><a href=''>Techsol</a></h1>
              </div>
              <a id='menu-toggle' href='#'><i className='fa fa-bars fa-lg' /></a>
              <nav>
                <ul className='reset' role='navigation'>
                  <li className='menu-item' className='active'><IndexLink to='/'>Home</IndexLink></li>
                  <li className='menu-item'><a href=''>Academics</a>
                    <ul className='sub-menu'>
                      <li className='menu-item'><Link to='calendar' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Academic Calendar</Link></li>
                      <li className='menu-item'><Link to='tuition' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Tuition & Fees</Link></li>
                    </ul>
                  </li>
                  <li className='menu-item'><a>Administration</a><ul className='sub-menu'>
                    <li className='menu-item'><Link to='principal' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Office of the Principal</Link></li>
                    <li className='menu-item'><Link to='vprincipal' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Office of the Vice Principal</Link></li>
                  </ul>
                  </li>
                  <li className='menu-item'><a href='administration'>Portals</a>
                    <ul className='sub-menu'>
                      <li className='menu-item'><Link to='studentportal' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Student Portal</Link></li>
                      <li className='menu-item'><Link to='faculty' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Faculty Portal</Link></li>
                      <li className='menu-item'><Link to='administration' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Administration Portal</Link></li>
                    </ul>
                  </li>
                  <li className='menu-item'><Link to='blog' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Blog</Link></li>
                  <li className='menu-item'><a>About</a><ul className='sub-menu'>
                    <li className='menu-item'><Link to='history' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>History of the School</Link></li>
                  </ul>
                  </li>
                  <li className='menu-item'><Link to='contact' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Contact</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
