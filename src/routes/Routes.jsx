import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Comestic from '../pages/Comestic'
import ComesticsCatalog from '../pages/ComesticsCatalog'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog/:slug' exact component={Product}/>
            <Route path='/catalog' exact component={Catalog}/>
            <Route path='/cart'  exact component={Cart}/>
            <Route path='/comestics'  exact component={ComesticsCatalog}/>
            <Route path='/comestics/:slug' exact component={Comestic}/>
        </Switch>
    )
}

export default Routes
