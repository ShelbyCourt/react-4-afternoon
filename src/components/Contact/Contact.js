import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to="/about" className='subnav_links'>
          <h3>About</h3>
          </Link>
          <Link to="/history" className='subnav_links'>
          <h3>History</h3>
          </Link>
          <Link to="/contact" className='subnav_links'><h3>Contact</h3>
          </Link>
        </div>
      <div className="box">
        <h1 className='title'>Contact Information of WestSide University:</h1>
        <div className='sub_box'>
          <p><strong>Address:</strong> 123 West 4590 North, Paradise UT</p>
          <p><strong>Number:</strong> 1-800-234-5678</p>
          <p><strong>Email:</strong> contact@wsu.edu</p>
        </div>
      </div>
      </div>
    )
  }
}