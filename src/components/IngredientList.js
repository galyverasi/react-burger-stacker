// ingredient list will loop over props(ingredients) 
// produces an Ingredient component for every ingredient in the array
import React from 'react'
import Ingredient from './Ingredient'

const IngredientList = props => {
    // render () {
        // here we need to store our group of ingredients(the component)
        let allIngredients = props.ingredients.map(mapIngredient => (
            <li onClick={props.add}>
                <Ingredient ingredient={mapIngredient} />
            </li>
        ))
        // then in our return, we'll render those as necessary
        return (
            <section className='pane'>
                <h3>Ingredient List</h3>
                <ul className="ingredient-list">
                    { allIngredients }
                </ul>
            </section>
        )
    }
//}

export default IngredientList