import React, { Component } from 'react'
import { TransitionGroup } from 'react-transition-group'
import './App.css'
// components
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Navigation from './Navigation/Navigation'
import News from './News/News'
import Portfolio from './Portfolio/Portfolio'
import Services from './Services/Services'
import Team from './Team/Team'
import Contact from './Contact/Contact'
// router
import { Route, Switch } from 'react-router'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

const NotFound = () => {
  return (
    <Route render={({staticContext}) => {
      if (staticContext) { staticContext.status = 404 }
      return (<div>
        <h1>Sorry, can’t find that.</h1>
      </div>)
    }} />
  )
}

export default class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Header} />
            <Route path='/services' component={Services} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/our-team' component={Team} />
            <Route path='/blog' component={News} />
            <Route path='/contact-us' component={Contact} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

// const ChooseComponent = ({ match: { params } }) => {
//   console.log(1111111, params.component)
//   switch (params.component) {
//     case 'services' :
//       return Services
//       break
//     case 'portfolio' :
//       return Portfolio
//       break
//     case 'our-team' :
//       return Team
//       break
//     case 'blog' :
//       return News
//       break
//     case 'contact-us' :
//       return Contact
//       break
//     default:
//       return Header
//       break
//   }
// }
