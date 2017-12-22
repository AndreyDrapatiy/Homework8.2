import React, { Component } from 'react'

export default class Header extends Component {
  render () {
    return (
      <header className='header-section'>
        <div className='container'>
          <div className='header-container'>
            <div className='text-container'>
              <h1>ONE PAGE</h1>
              <p className='title-description'>IS ALL THAT YOU NEED</p>
              <p className='text'>
                Suspendisse mi nisl, adipiscing sit
                amet tellus sed, auctor aliquet felis.
                Aenean neque elit, blandit quis tempor eu,
                feugiat rhoncus lectus. Quisque sit amet pretium risus.
              </p>
              <div className='buttons-container'>
                <button className='team'>OUR TEAM</button>
                <button className='contact'>CONTACT US</button>
              </div>
            </div>
            <div className='image-container'>
              <img src={require('../../../assets/images/desctops.png')} alt='desctops' />
            </div>
          </div>
        </div>
      </header>
    )
  }
}
