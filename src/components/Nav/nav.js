import React from 'react'
import "./nav.css"
import Logo from "../../assets/awlogo.png"

const nav = () => {
  return (
    <div className="nav-cont">
       <div className="nav-t1">Store</div>
       <div className="nav-t2">Releases</div>
       <img src={Logo} className="logo"></img>
       <div className="nav-t3">Tour</div>
       <div className="nav-t4">About</div>
       
    </div>
  )
}

export default nav