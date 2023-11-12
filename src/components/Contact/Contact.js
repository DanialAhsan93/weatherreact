import React, { useState } from 'react';
import Copyright from '../Copyright/Copyright';
import Navbar from '../Navbar';

export default function Contact() {
  const [bgclr, setbgclr] = useState(true)
  const [loading, setloading] = useState(false)
  const handclr = () => {
    setbgclr(false)
    setloading(true)
    
    setTimeout(() => {
      setbgclr(true)
      setloading(false)
    }, 1000)
  }
  return (
    <section className='hero-ab'>
      <div className="container">
        <Navbar />
      </div>
      <div className="container">
        <h1 className='text-light  mt-md-5 mt-0' style={{ fontSize: '65px' }}>
          Contact Us
        </h1>
        <div className='bord mt-3 ms-1'></div>
        <div className='col-sm-7 mt-5 '>
          <p className='text-light' style={{ fontSize: "22px" }}>
            We’d love to hear from you. To help us connect you with the right team, we just need some information.
          </p>

        </div>
        <hr className='text-light' />
        <div className="row justify-content-center mt-3">
          <div className="col-sm-3">
            <p className=' text-light' style={{ fontSize: '22px' }}>
              Your Info
            </p>

          </div>
          <div className='col-sm-9 py-md-5 py-2 ps-md-5'>
            <div className='ps-md-5 text-sm-start text-center'>
              <input
                type="text"
                name='name'
                placeholder='Name'
                className='py-2 ps-3'
                style={{ width: '80%', outline: 'none', fontSize: '16px' }}
              />
              <input
                type="text"
                name='email'
                placeholder='Email'
                className='my-4 py-2 ps-3'
                style={{ width: '80%', outline: 'none', fontSize: '16px' }}
              />
              <input
                type="text"
                name='company'
                placeholder='Company'
                className='mb-4 py-2 ps-3'
                style={{ width: '80%', outline: 'none', fontSize: '16px' }}
              />
              <textarea
                type="text"
                rows={5}
                placeholder='How can we help you'
                className='py-2 ps-3'
                style={{ width: '80%', outline: 'none', fontSize: '16px' }}
              />
              {
                bgclr ?
                  <button type='submit' className='btn text-light mt-3' style={{
                    width: '80%',
                    background: 'var(--bs-primary)',
                    outline: 'none',

                  }}
                  onClick={handclr}
                  >
                    {loading ? "Sending" : "Send"}
                  </button> :
                  <button type='submit' className='btn text-light mt-3' style={{
                    width: '80%',
                    background: 'var(--bs-second)',
                    outline: 'none',

                  }}
                  onClick={handclr}

                  >
                    {loading ? "Sending" : "Send"}
                  </button>
              }



            </div>


          </div>
        </div>


      </div>
      <Copyright />
    </section>
  )
}
