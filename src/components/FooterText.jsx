import React from 'react'
import carbon from '../images/carbon neutra.png'

export default function() {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <a href="https://sustainability.google/carbon-free/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content=#home">
      <img src={carbon} alt="apps launcher" style={{height:"20px" , }} /> 
        <span>Carbon neutral since 2007</span>
      </a>
    </div>
  )
}
