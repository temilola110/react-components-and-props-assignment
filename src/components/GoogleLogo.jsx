import React from 'react'
import Logo from '../images/googlelogo.png'

export default function GoogleLogo() {
    return (
        <div>
            <img src={Logo} alt="google logo" style={{ height: "100px", }} />
        </div>
    )
}
