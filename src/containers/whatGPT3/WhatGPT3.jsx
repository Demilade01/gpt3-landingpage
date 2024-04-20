import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-features'>
        <Feature title="What is GPT-3" text="GPT-3, or Generative Pre-trained Transformer 3, is a state-of-the-art language model developed by OpenAI. It's renowned for its ability to generate human-like text, comprehend context, and perform a wide range of natural language processing tasks" />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          Possibilities are beyond your Imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
      <Feature title='Chatbots' text="Explore the future of human-computer interaction and discover the endless possibilities of intelligent conversational agents." />
      <Feature title='Knowledgebase' text="Unlock a wealth of information and insights tailored to your needs, empowering you to explore, learn, and innovate with confidence." />
      <Feature title='Education' text="Nurturing minds, igniting curiosity, and fostering lifelong learning. Providing the tools and knowledge to empower individuals, shape futures, and create a brighter tomorrow for generations to come." />
      </div>
    </div>
  )
}

export default WhatGPT3