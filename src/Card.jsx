import React from "react"

const Card = (props) => {
    
  return (
    <div style={{border:'1px solid #fff',padding:'2rem'}}>
    <div>{props.description}</div>
    <img src={props.images} width={100} />
    <p>{props.prices}</p>
    <p>{props.ratings} Star</p>
    </div>
  )
}

export default Card