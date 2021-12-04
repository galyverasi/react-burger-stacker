import React, { Component } from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

export default class BurgerStacker extends Component {
	// state --> holds ingredients
	state = {
		ingredients: [
			{ name: 'Kaiser Bun', color: 'saddlebrown' },
			{ name: 'Sesame Bun', color: 'sandybrown' },
			{ name: 'Gluten Free Bun', color: 'peru' },
			{ name: 'Lettuce Wrap', color: 'olivedrab' },
			{ name: 'Beef Patty', color: '#3F250B' },
			{ name: 'Soy Patty', color: '#3F250B' },
			{ name: 'Black Bean Patty', color: '#3F250B' },
			{ name: 'Chicken Patty', color: 'burlywood' },
			{ name: 'Lettuce', color: 'lawngreen' },
			{ name: 'Tomato', color: 'tomato' },
			{ name: 'Bacon', color: 'maroon' },
			{ name: 'Onion', color: 'lightyellow' },
			{ name: 'Cheese', color: 'gold' },
		],
		burgerIngredients: []
	}
	// add to stack function(maybe passed to child?)
    addToStack = (e) => {
        console.log('this is what was clicked', e.target)
        let ingColor = e.target.style.backgroundColor
        console.log('is this what I want?', e.target.style.backgroundColor)
        let ingName = e.target.innerText
        this.setState({
					burgerIngredients: [
						{ name: ingName, color: ingColor },
                        ...this.state.burgerIngredients
					]
				})
    }

    // remove from stack
    removeFromStack = (e) => {
        console.log('old stack', this.state.burgerIngredients)
        let newBurgIngArr = this.state.burgerIngredients.filter(ingrs => ingrs.name != e.target.innerText)
        console.log('new stack', newBurgIngArr)
        this.setState({
            burgerIngredients: newBurgIngArr
        })
    }

	// clear burger stack function(maybe passed to child?)
    clearBurger = () => {
        this.setState({
            burgerIngredients: []
        })
    }

	render() {
        console.log('a react component', React)
		return (
			<main>
				<h1>Burger Stacker</h1>
				<div className='panes'>
					<IngredientList 
                        ingredients={this.state.ingredients} 
                        add={this.addToStack}
                    />
					<BurgerPane 
                        ingredients={this.state.burgerIngredients}
                        remove={this.removeFromStack}
                        clear={this.clearBurger}
                    />
				</div>
			</main>
		)
	}
}