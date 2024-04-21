import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="Apr 18, 2024" title="GPT-# and Open AI is the future. Let us explore how it is." />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date="Apr 18, 2024" title="GPT-# and Open AI is the future. Let us explore how it is." />
          <Article imgUrl={blog03} date="Apr 18, 2024" title="GPT-# and Open AI is the future. Let us explore how it is." />
          <Article imgUrl={blog04} date="Apr 18, 2024" title="GPT-# and Open AI is the future. Let us explore how it is." />
          <Article imgUrl={blog05} date="Apr 18, 2024" title="GPT-# and Open AI is the future. Let us explore how it is." />
        </div>
      </div>
    </div>
  )
}

export default Blog