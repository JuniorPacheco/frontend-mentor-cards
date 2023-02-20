import React from 'react'
import "./styles/PrincipalCard.css"

const PrincipalCard = () => {
  return (
    <article className='principalCard'>
      <header className='principalCard__header'>
        <div className='principalCard__img'>
          <img src="/images/image-jeremy.png" alt="" />
        </div>
        <div className='principalCard__header-info'>
          <h5>Report for</h5>
          <h2>Jeremy Robson</h2>
        </div>
      </header>
      <section className='principalCard__body'>
        <ul className='principalCard__body-list'>
          <li>Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </section>
    </article>
  )
}

export default PrincipalCard