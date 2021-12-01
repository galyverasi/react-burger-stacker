import React, { Component } from 'react'
// build and import BurgerPane
// build and import IngredientList

export default class BurgerStacker extends Component {
    // state --> holds ingredients
    state = {
        ingredients: [
            {name: 'Kaiser Bun', color: 'saddlebrown'},
            {name: 'Sesame Bun', color: 'sandybrown'},
            {name: 'Gluten Free Bun', color: 'peru'},
            {name: 'Lettuce Wrap', color: 'olivedrab'},
            {name: 'Beef Patty', color: '#3F250B'},
            {name: 'Soy Patty', color: '#3F250B'},
            {name: 'Black Bean Patty', color: '#3F250B'},
            {name: 'Chicken Patty', color: 'burlywood'},
            {name: 'Lettuce', color: 'lawngreen'},
            {name: 'Tomato', color: 'tomato'},
            {name: 'Bacon', color: 'maroon'},
            {name: 'Onion', color: 'lightyellow'}
        ],
        burgerIngredients: []
    }
    // add to stack function(maybe passed to child?)

    // clear burger stack function(maybe passed to child?)

    render () {
        return (
            <main>
                <h1>Burger Stacker</h1>
                <div className="panes">
                    <p>child components go here</p>
                </div>
            </main>
        )
    }
}