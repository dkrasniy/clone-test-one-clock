import React from 'react'
import { Link } from 'gatsby' 
import contactinfo from '../settings/contact_info.json'

function Navbar() {

  return (
  <div className="bg-white">
    <div className="container text-center p-8">
      {contactinfo.companyname}</div></div>
      
  )
}

export default Navbar 