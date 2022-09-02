import React from 'react'
import { Link } from 'react-router-dom'
import BainAcctInqComponent from './BainAcctInqComponent'

function BianLinksComponent() {
  return (
    <div>
        <Link to="/createaccount">Create Account</Link> 
        <br />
        <Link to="/accountdetails">Account Inquiry</Link>
        <br />
        <Link to="/customerdetails">Customer Inquiry</Link>
    </div>
  )
}

export default BianLinksComponent