import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const   Possibility = () => {
  return (
    <div className='gpt3__possiblity section__padding' id='possibility'>
      <div className='gpt3__possiblity-image'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>
          Request Early Access to Get Started
        </h4>
        <h1 className='gradient__text'>
          The Possibilities are beyond your Imagination
        </h1>
        <p>
          Discover a world where the only limit is your imagination, and the possibilities are as infinite as the universe itself. Let your creativity soar and embark on an extraordinary journey beyond the boundaries of what you thought possible.
        </p>
        <h4>
          Request Early Access to Get Started
        </h4>
      </div>
    </div>
  )
}

export default Possibility