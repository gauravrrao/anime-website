import React, { useContext } from 'react'
import './card.css'
import { appreactor } from './Context'
import Pagination from './Pagination'


const Card = () => {
  const { currentpost } = useContext(appreactor)
  return (
    <>
    <div className='main-box'>

      {
        currentpost ? (
          currentpost.map((cur, ind) => {
            return (
              <div className="container">
                <img className='image' src={cur.images.jpg.large_image_url} alt="" />
                <p>{cur.title}</p>
              </div>
            )
          })
        ) : "not found"
      }
      
    </div>
   
    </>
  )
}

export default Card