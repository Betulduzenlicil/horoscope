import React from 'react'
import "./Main.scss"
const Card = ({data}) => {
    console.log(data);
  return (
    <div className="container">
        {data.map(({id, title, date, desc,image})=>(
               <div key={id} className="card">
               <div>
                <img className='horoscope' src={image} alt=""  />
               </div>
               <div className='title'>{title}</div>
               <div className='date'>{date}</div>
               <p className='desc'>{desc}</p>
             
           </div>

        ))}
 
    </div>
  )
}

export default Card
