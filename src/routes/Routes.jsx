import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

import InfoModal from '../components/InfoModal'
import Host from '../pages/Host'
import Beacons from '../pages/Beacons'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog/:slug' exact component={Product}/>
            <Route path='/catalog' exact component={Catalog}/>
            <Route path='/cart'  exact component={Cart}/>
            <Route path='/confirm' exact component={InfoModal}/>
            <Route path='/host' exact component={Host} />
            <Route path='/info' exact component={Beacons} />
        </Switch>
    )
}

export default Routes
