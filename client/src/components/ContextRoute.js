import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FilterContextProvider from './contextApi/filterContext'
import Mens from './pages/Mens'
import SortFilter from './pages/SortFilter'

function ContextRoute() {
    return (
        <div>
            <Router>
                <Switch>
                    <FilterContextProvider>
                        <SortFilter />
                        <Route path="/men" exact ><Mens /></Route>
                    </FilterContextProvider>
                </Switch>
            </Router>
        </div>
    )
}

export default ContextRoute
