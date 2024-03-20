import React from 'react'
import { layout } from '../style'
import styles from '../style'
import Button from './Button'
import { card } from '../assets'

const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card Deal <br className='sm:block hidden'/>
          in a few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elite enime sed massa etiam. Mauris euasipiscing ultrices ametodio aenean neque.
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati, esse dolorem suscipit, maiores assumenda, odit
          
        </p>
        <Button/>
      </div>
  <div className={layout.sectionImg}>
    <img src={card} alt="card" className='h-[100%] w-[100%]' />
  </div>
    </section>
  )


export default CardDeal
