import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className='mb-3 mt-3' style={{ textTransform: "uppercase", color:"green" }}>Welcome to Our Unique Online shop</h1>
      <p>Are you debating over SSG and SSR in Next.js? It shouldn’t be difficult. Let us discuss and choose the one that suits your needs. Before we begin, take a quick look at the data fetching methods. Data Fetching Next.js allows you to fetch data.</p>
      <br/>
      <br/>
      <p>There are a lot of misconceptions out there about this topic, and it can lead to a lot of uncertainty. If we don't understand React's render cycle, how can we understand how to use React.memo, or when we should wrap our functions in useCallback??</p>
      <br/>
      <br/>
      <p>I think this is true for lots of React developers. We understand enough to get by, but if you ask a group of React developers a question like “What triggers a re-render in React?”, you'll likely get a handful of different hand-wavy answers.</p>
    </div>
  )
}

export default About
