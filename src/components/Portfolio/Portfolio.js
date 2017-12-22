import React, { Component } from 'react'

export default class Portfolio extends Component {
  render () {
    return (
      <section className='portfolio-section'>
        <div className='container'>
          <div className='portfolio-container'>
            <div className='header-container'>
              <h2>Our Portfolio</h2>
            </div>
            <div className='portfolio'>
              <ul className='portfolio-list'>
                <li className='portfolio-item col-6'>
                  <div className='item'>
                    <img src={require('../../../assets/images/portfolio-image-1.png')} alt='portfolio' />
                    <div className='portfolio-hover'>
                      <h4>Love Conquers All</h4>
                      <span className='hover-icon' />
                    </div>
                  </div>
                </li>
                <li className='portfolio-item col-6'>
                  <div className='item'>
                    <img src={require('../../../assets/images/portfolio-image-2.png')} alt='portfolio' />
                    <div className='portfolio-hover'>
                      <h4>Love Conquers All</h4>
                      <span className='hover-icon' />
                    </div>
                  </div>
                </li>
                <li className='portfolio-item col-3'>
                  <div className='item'>
                    <img src={require('../../../assets/images/portfolio-image-3.png')} alt='portfolio' />
                    <div className='portfolio-hover'>
                      <h4>Love Conquers All</h4>
                      <span className='hover-icon' />
                    </div>
                  </div>
                </li>
                <li className='portfolio-item col-3'>
                  <div className='item'>
                    <img src={require('../../../assets/images/portfolio-image-4.png')} alt='portfolio' />
                    <div className='portfolio-hover'>
                      <h4>Love Conquers All</h4>
                      <span className='hover-icon' />
                    </div>
                  </div>
                </li>
                <li className='portfolio-item col-3'>
                  <div className='item'>
                    <img src={require('../../../assets/images/portfolio-image-5.png')} alt='portfolio' />
                    <div className='portfolio-hover'>
                      <h4>Love Conquers All</h4>
                      <span className='hover-icon' />
                    </div>
                  </div>
                </li>
                <li className='portfolio-item col-3'>
                  <div className='item'>
                    <img src={require('../../../assets/images/portfolio-image-6.png')} alt='portfolio' />
                    <div className='portfolio-hover'>
                      <h4>Love Conquers All</h4>
                      <span className='hover-icon' />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
