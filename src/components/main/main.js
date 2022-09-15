import React from 'react'
import "./main.css"
import Awmain from '../../assets/aw1.png'

const main = () => {
  return (
    <div className="main-cont">
    <img src={Awmain} className='main-img'></img>
    <div className='aw-text'>ALAN WALKER</div>
    <div className='aw-text1'>ORIGINS</div>
    <div className='aw-text2'>OUT NOW</div>
    <button className='listern-b'>
      <div className='button-t'>LISTERN HERE</div>
    </button>
    </div>
  )
}

export default main