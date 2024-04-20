import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Promptly addressing concerns, cultivating trust, and instilling confidence with decisive and significant advancements.'
  },
  {
    title: 'Become the tended active',
    text: 'Become the trended active: Ignite change, inspire others, and leave a lasting impact on the world around you through your proactive endeavors.'
  },
  {
    title: 'Mesage or am nothing',
    text: 'Embrace the power of expression, define your identity, and transform mere words into meaningful stories that resonate with others.'
  },
  {
    title: 'Really boy law counting',
    text: 'Exploring the world of legal systems and their intricate mechanisms through the lens of quantitative analysis and statistical methodologies.'
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id='features'>
      <div className='gpt3__features-heading'>
         <h1 className='gradient__text'>
          The Future is now and You just Need To Realize it. Step Into  Future Today & make it Happen.
         </h1>
         <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features