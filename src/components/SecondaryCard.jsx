import React from 'react'
import "./styles/SecondaryCard.css"

const SecondayCard = ({info}) => {
  return (
    <article className={`secondaryCard ${info.title}`}>
      <div className='secondaryCard__img'>
        <img src={info.icon} alt="" />
      </div>
      <section className='secondaryCard__contain'>
        <header className='secondaryCard__header'>
          <h4 className='secondaryCard__title'>{info.title}</h4>
          <div className='secondaryCard__dots'>
            <img src="/images/icon-ellipsis.svg" alt="" />
          </div>
        </header>
        <section className='secondaryCard__info'>
          <h3 className='secondaryCard__hours'>{info.hours}</h3>
          <h5 className='secondaryCard__last'>{info.last}</h5>
        </section>
      </section>
    </article>
  )
}

export default SecondayCard