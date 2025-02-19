import React from 'react'
import './Home.css'


const Home = () => {
  return (
    <section className='home'>
      <div className='secContainer container'>
        <div className="homeText">
          <h1 className="homeTitle">Explore Nature With Us</h1>

          <p className='subTitle'>
            We are a group of passionate individuals who believe in the importance of preserving our planet's natural beauty
          </p>

          <button className="explorebtn">
            <a className='exploretext' href='#'>Explore Now</a>
          </button>
        </div>

        <div className='homeCard grid'>
          <div className='checkinDIV'>
            <label htmlFor="checkin">CHECKIN</label>
            <input type='date' placeholder='dd/mm/yy'/>
          </div>

          <div className='checkoutDiv'>
            <label htmlFor='checkout'>CHECKOUT</label>
            <input type='date' placeholder='dd/mm/yy' />
          </div>
          <button className='btn'>
            Search
          </button>
        </div>
      </div>
    </section>
  )
}
export default Home
