import React from 'react';
import './about.css';
import Navbar from './Navbar';
import { aboutdata } from './Data.js/Data';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import Copyright from './Copyright/Copyright';


export default function About() {

  const AboutCard = ({ index, heading, img, description }) => {
    return (
      <Tilt className=''>
        <motion.div>
          <div className="col-md-10 m-sm-0 m-3 border border-1 rounded" style={{ background: "var(--bs-second)" }} key={``}>
            <div className='d-flex flex-wrap' >
              <div >
              <img src={img} alt="About-img" className='img-fluid'/>
              </div>


              <div options={{
                 max: 45,
                 scale: 1,
                 speed: 450,
              }} className='p-2' style={{minHeight:'40vh'}}>
                <h4 className='text-light'>{heading}</h4>
                <p className='text-light'>{description}</p>
              </div>
            </div>
          </div>


        </motion.div>

      </Tilt>

    )

  }
  console.log(AboutCard)

  return (
    <>

      <section className='hero-ab'>
        <div className="container">
          <Navbar />

        </div>
        <div className="container abt-sec pt-md-5 mt-md-5 pt-sm-5 mt-sm-4">
          <div className='bord'></div>
          <h3 className='text-light pt-md-4 pt-sm-3 pt-2'>About Us</h3>
          <div className="col-md-8">
            <h3 className='text-light team pt-md-4 pt-sm-3 pt-2 '>
              We combine weather data, technology, and human insight to improve lives and businesses.
            </h3>
          </div>
          <div className="col-md-10 col-sm-8">
            <p className='text-light py-sm-3 py-2' style={{ fontSize: '20px' }}>
              Weather Matters. We forecast for every longitude and latitude point on Earth with Superior Accuracy™.
            </p>
          </div>
          <div className="row py-md-3 py-5">
            <div className="col-sm-4">
              <span className='text-light' style={{ fontSize: '55px' }}>
                190+
              </span >
              <p className='text-light pt-md-3 pt-2'>
                Forecast models used
              </p>

            </div>
            <div className="col-sm-4 ">
              <span className='text-light' style={{ fontSize: '55px' }}>
                100+
              </span >
              <p className='text-light pt-md-3 pt-2'>
                Expert meteorologists on staff
              </p>

            </div>
            <div className="col-sm-4">
              <span className='text-light' style={{ fontSize: '55px' }}>
                3.5 million
              </span >
              <p className='text-light pt-md-3 pt-2'>
                Location Forecasted
              </p>

            </div>

          </div>

          <div className=" mb-5 d-sm-flex justify-content-between align-items-center">
            {aboutdata.map((about, index) => (
              <AboutCard key={about.heading} index={index} {...about} />
            ))}

          </div>



        </div>
        <Copyright />

      </section>


    </>
  )
}
