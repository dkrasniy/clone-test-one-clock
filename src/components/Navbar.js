import React from 'react'
import { Link } from 'gatsby' 
import contactinfo from '../settings/contact_info.json'

function Navbar() {

  return (
  <div className="bg-red-500">{contactinfo.companyname}</div>
  )
}

export default Navbar 