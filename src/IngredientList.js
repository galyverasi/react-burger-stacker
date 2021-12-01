import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    render() {
        const ingredientComponents = this.props.ingredients.map(item => (
            <li>
                <Ingredient ingredient={item.name} color={item.color}/>
            </li>
        ))
        return (
            <ul>
                {ingredientComponents}
            </ul>
        )
    }
} 