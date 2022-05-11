import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
    <ul className='NavigationItems'>
        <NavigationItem active link="/" >
            Burger builder
        </NavigationItem>
        <NavigationItem link="/" >
            Checkout
        </NavigationItem>
    </ul>
)

export default navigationItems