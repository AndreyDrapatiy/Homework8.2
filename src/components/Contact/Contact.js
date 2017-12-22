import React, { Component } from 'react'

export default class Contact extends Component {
  render () {
    return (
      <section className='contact-section'>
        <div className='container'>
          <div className='contact-container'>
            <div className='header-container'>
              <h2>Contact Us</h2>
            </div>
            <div className='contact-content'>
              <form>
                <input type='text' placeholder='Name' />
                <input type='text' placeholder='Email' />
                <textarea>
                  Message
                </textarea>
              </form>
              <div className='information'>
                <p>
                  Nunc vitae euismod orci, sit amet hendrerit est.
                  Nulla id ipsum rhoncus, porttitor ipsum ut, tempus
                  libero. Morbi eget justo gravida, ornare ipsum interdum,
                  imperdiet sapien. Pellentesque vitae ipsum dui. Vivamus
                  a dolor urna. Cras posuere eros eu odio aliquet tincidunt.
                  Sed at consequat nulla. Nulla luctus dapibus nulla.
                  Lorem ut, tempus libero. Morbi eget justo gravida,
                  ornare ipsum interdum, imperdiet sapien. Pellentesque
                  vitae ipsum dui. Vivamus a dolor urna. Cras posuere eros
                </p>
                <div className='adress'>
                  <span>StreetName 163, 254 23 City</span>
                  <span>  (+254) 001 454 333 66</span>
                </div>
                <div className='buttons-container'>
                  <button className='team'>SEND MASSAGE</button>
                  <button className='contact'>VIEW MAP</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
