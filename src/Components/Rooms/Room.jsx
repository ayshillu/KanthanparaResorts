import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import './Room.css';

import img from '../../Assets/room.png'
const Room = () => {
  return (
    <div>
      <section className='rooms section'>
        <div className='secContainer'>
            <div className='secHeader flex'>
                <div className='textDiv'>
                    <h2 className='secTitle'>
                        Our Exclusive Stays
                    </h2>
                    <p>
                        Our rooms are designed to provide you with a comfortable and luxurious stay. 
                    </p>
                </div>
                <div className='iconsDiv flex'>
                    <BsArrowLeftShort className='icon2 lefticon'/>
                    <BsArrowRightShort className='icon2 righticon'/>
                </div>
            </div>
            <div className="mainContent grid">
                <div className="Room1">
                    <div className="roomImage">
                        <img src={img} alt='Image title'/>
                        <div className="overlayInfo">
                            <h3>some text</h3>
                            <p>soomem text</p>
                            <BsArrowRightShort className='icon1'/>
                        </div>
                    </div>
                    <div className="roomFooter">
                        <div className="number">
                            01
                        </div>
                        <div className="roomText flex1">
                            <h6>
                                Deluxe Room 
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}


export default Room
