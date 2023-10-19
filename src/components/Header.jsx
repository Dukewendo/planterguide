import React from 'react'

import '../components/header.css'

export default function header() {
  return (
    <div className='header-container'>
        <ul className='header-list'>
            <li className='header-list-item'>Home</li>
            <li className='header-list-item'>About</li>
        </ul>
    </div>
  )
}
