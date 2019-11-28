import React from 'react'
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom'
import Selections from './guitarSelection/Selections'

const Guitars = () => {
    let match = useRouteMatch();
    return (
        <div>
            <h1>Guitar selection</h1>
            {
                Selections.map((item, index) => (
                    <div key={index}>
                        <Link to={
                            index === 5 ? `${item.path}` : `${match.url}${item.path}`
                        }>{item.type}</Link>
                    </div>
                ))
            }

            <Switch>
                {
                    Selections.map((item, index) => (
                        <Route path={
                            index === 5 ? `${item.path}` : `${match.path}${item.path}`
                        } key={index}
                            render={item.component} />
                    ))
                }
            </Switch>
        </div>
    )
}

export default Guitars