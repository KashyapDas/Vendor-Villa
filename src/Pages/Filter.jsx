import React from 'react'
import { useParams } from 'react-router-dom'

const Filter = () => {

  const getDynamicCategory = useParams();
  console.log(getDynamicCategory);

  return (
    <div>
      <h1>Filter</h1>
    </div>
  )
}

export default Filter
