import React, { Component } from 'react'

export default class Services extends Component {
  render () {
    return (
      <section className='services-section'>
        <div className='container'>
          <div className='services-container'>
            <div className='header-container'>
              <h2>Our Services</h2>
            </div>
            <div className='services'>
              <ul className='services-list'>
                <li className='services-item'>
                  <div className='img-container'>
                    <img src={require('../../../assets/images/service-html.png')} alt='services' />
                  </div>
                  <h3 className='services-title'>HTML 5 & CSS3</h3>
                  <p className='services-description'>
                    Sed fermentum, ante vel sagittis adipiscing,
                    purus nisi ultrices dolor, a aliquam nunc lacus
                    in turpis. Nunc molestie nisi diam. Donec commodo
                    quam sit amet mauris pellentesque, in
                    commodo lorem venenatis. Nullam consequat
                    venenatis fringilla.
                  </p>
                </li>
                <li className='services-item'>
                  <div className='img-container'>
                    <img src={require('../../../assets/images/service-seo.png')} alt='services' />
                  </div>
                  <h3 className='services-title'>SEO Optimization</h3>
                  <p className='services-description'>
                    Sed fermentum, ante vel sagittis adipiscing,
                    purus nisi ultrices dolor, a aliquam nunc lacus
                    in turpis. Nunc molestie nisi diam. Donec commodo
                    quam sit amet mauris pellentesque, in
                    commodo lorem venenatis. Nullam consequat
                    venenatis fringilla.
                  </p>
                </li>
                <li className='services-item'>
                  <div className='img-container'>
                    <img src={require('../../../assets/images/service-design.png')} alt='services' />
                  </div>
                  <h3 className='services-title'>Graphic Design</h3>
                  <p className='services-description'>
                    Sed fermentum, ante vel sagittis adipiscing,
                    purus nisi ultrices dolor, a aliquam nunc lacus
                    in turpis. Nunc molestie nisi diam. Donec commodo
                    quam sit amet mauris pellentesque, in
                    commodo lorem venenatis. Nullam consequat
                    venenatis fringilla.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
