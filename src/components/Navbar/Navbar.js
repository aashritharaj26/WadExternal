import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='p-3  d-block ' style={{ 'backgroundColor':'#D5A6BD'}}>
        <div className='row w-50 ' style={{'marginLeft':'50%'}}>
            <div className='col'><Link to="/">Home</Link></div>
            <div className='col'><Link to="/signup">Sign Up</Link></div>
            <div className='col'><Link to="/signin">Sign In</Link></div>
            <div className='col'><Link to="/catalogue">Products</Link></div>
            <div className='col'><Link to="/cart">Cart</Link></div>
            <div className='col'><Link to="/aboutus">About us</Link></div>
            <div className='col'><Link to="/contactus">Contact</Link></div>

        </div>
    </div>
  )
}

export default Navbar