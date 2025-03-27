import React from 'react'

import './Card.css'
const Card = ({data}) => {
  return (
    <>
    <div className="card">
      <h1>{data.title}</h1>
        <img src={data.thumbnail} alt="" />
        <p>{data.description}</p>
    </div>
    </>
  )
}

export default Card