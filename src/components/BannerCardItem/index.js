import React from 'react'
import './index.css'

const BannerCard = props => {
  const {bannerObject} = props
  const {headerText, description, className} = bannerObject

  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}

export default BannerCard
