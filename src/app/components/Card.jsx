import React from 'react'

const Card = ({data}) => {
  const {strMeal:name,strMealThumb:img}=data
  console.log(data);
  return (
    <div className='w-60 gap-2 cursor-pointer hover:scale-105 transition-all p-2 shadow-md shadow-gray-900 rounded-sm flex flex-col justify-center items-center'>
        <img className='rounded-sm' src={img} alt="meal-img" /> 
      <p className='font-bold'>{name}</p>
    </div>
  )
}

export default Card;