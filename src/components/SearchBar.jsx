import React from 'react'
import recorderIcon from '../images/google microphone.png'
import imgIcon from '../images/search-by-img.png'

export default function SearchBar() {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <form>
        <label> 
          <input type="text" />
        </label>
        <img src={recorderIcon} alt="apps launcher" style={{height:"20px" , }} /> 
      <img src={imgIcon} alt="apps launcher" style={{height:"20px" , }} /> 
      </form>

      {/* <img src={recorderIcon} alt="apps launcher" style={{height:"20px" , }} /> 
      <img src={imgIcon} alt="apps launcher" style={{height:"20px" , }} />  */}
    </div>
    


  )
}
