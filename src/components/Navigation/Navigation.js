import React, { Component } from 'react'
import {
  NavLink
} from 'react-router-dom'

export default class Navigation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navigation: false
    }
    this.openNavigation = this.openNavigation.bind(this)
    this.closeNavigation = this.closeNavigation.bind(this)
  }
  openNavigation () {
    this.setState({navigation: true})
  }
  closeNavigation () {
    this.setState({navigation: false})
  }
  render () {
    return (
      <div>
        <section
          className={`navigation-section ${this.state.navigation ? 'active' : ''}`}
          onMouseLeave={this.closeNavigation}
        >
          <div className='container'>
            <div className='navigation-container'>
              <div className='logo-container'>
                <NavLink to='/'><img src={require('../../../assets/images/logo.png')} alt='logo' /></NavLink>
              </div>
              <div className='nav-container'>
                <nav>
                  <ul className='list-items'>
                    <li className='nav-item'><NavLink to='/' activeClassName='active'>Home</NavLink></li>
                    <li className='nav-item'><NavLink to='/services' activeClassName='active'>Services</NavLink></li>
                    <li className='nav-item'><NavLink to='/portfolio' activeClassName='active'>Portfolio</NavLink></li>
                    <li className='nav-item'><NavLink to='/our-team' activeClassName='active'>Our team</NavLink></li>
                    <li className='nav-item'><NavLink to='/blog' activeClassName='active'>Blog</NavLink></li>
                    <li className='nav-item'><NavLink to='/contact-us' activeClassName='active'>Contact us</NavLink></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`open-navigation-section ${this.state.navigation ? 'navigation-active' : ''}`}
          onMouseEnter={this.openNavigation}
        >
          <p>Navigation</p>
        </section>
      </div>
    )
  }
}
