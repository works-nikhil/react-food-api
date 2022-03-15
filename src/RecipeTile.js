import React from 'react'
import './RecipeTile.css'

export default function RecipeTile({ recipe }) {
  return (

    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null   // to check if the object getting fetched is in image format only
    &&
    (
      <div className='recipeTile' onClick={() => {
        window.open(recipe["recipe"]["url"])
      }}>

        <img recipe="recipe.id" alt="" className="recipeTile__img"
          src={recipe["recipe"]["image"]}
        />
        <p  recipe="recipe.id" className="recipeTile__name"> 
          {recipe["recipe"]["label"]}
        </p>

      </div>
    )
  )
}




