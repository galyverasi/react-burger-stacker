import React, { useState } from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

const BurgerStacker = props => {
	// state --> holds ingredients
	// state = {
		const [ingredients] = useState ([
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
		])
		const [burgerIngredients, setBurgerIngredients] = useState ([])
	//}
	// add to stack function(maybe passed to child?)
    const addToStack = (e) => {
        console.log('this is what was clicked', e.target)
        let ingColor = e.target.style.backgroundColor
        console.log('is this what I want?', e.target.style.backgroundColor)
        let ingName = e.target.innerText
        setBurgerIngredients(() => {
					return [
						{ name: ingName, color: ingColor },
                        ...burgerIngredients
					]
				})
    }

    // remove from stack
    const removeFromStack = (e) => {
        console.log('old stack', burgerIngredients)
        let newBurgIngArr = burgerIngredients.filter(ingrs => ingrs.name !== e.target.innerText)
        console.log('new stack', newBurgIngArr)
        setBurgerIngredients(() => {
            return newBurgIngArr
        })
    }

	// clear burger stack function(maybe passed to child?)
    const clearBurger = () => {
        setBurgerIngredients(() => {
            return []
        })
    }

	// render() {
        console.log('a react component', React)
		return (
			<main>
				<h1>Burger Stacker</h1>
				<div className='panes'>
					<IngredientList 
                        ingredients={ingredients} 
                        add={addToStack}
                    />
					<BurgerPane 
                        ingredients={burgerIngredients}
                        remove={removeFromStack}
                        clear={clearBurger}
                    />
				</div>
			</main>
		)
	}
// }

export default BurgerStacker