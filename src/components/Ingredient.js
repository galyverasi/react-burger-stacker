// Ingredient is a child of IngredientList
// gets the props of an individual ingredient, color and name
import React from 'react'

const Ingredient = props => {
    
    // render () {
        return (
            <p style={{backgroundColor: props.ingredient.color}} onClick={props.clicky}>
                { props.ingredient.name }
            </p>
        )
    }
// }

export default Ingredient