import React from 'react'
import { Data } from '../App'

const CardDetail: React.FC<Data> = ({ id, name, age, affinity, description, url }) => {
  return (
    <div>{name}</div>
  )
}

export default CardDetail