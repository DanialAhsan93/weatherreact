import React from 'react'
import './home.css'
import bghero from '../components/images/bghero.svg';
import Navbar from './Navbar';
import Cards from './Cards';




export default function Home() {
  return (
    <>
      <section className='hero'>
        <div className="container-fluid">
          <div className="container">
            <Navbar />

              <div className='d-flex align-items-center justify-content-center my-5'>
                <h1 className='text-light text-center weather-head'>
                  Seeing the weather of the whole world with
                  <span style={{ color: '#4d7c96' }} className='inline-block dark-span'>
                    Dark weather!
                  </span>

                </h1>
              </div>
           

            <Cards />
              <div className='hollow'></div>
            


          </div>
        </div>
      </section>

    </>
  )
}
