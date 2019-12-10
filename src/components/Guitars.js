import React from 'react'
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom'
import Selections from './guitars/Selections'


const Guitars = () => {
    let match = useRouteMatch();

    const generateCustomRoute = (Cmp, pth, cat, idx) => {
        return <Route
            key={idx}
            path={pth}
            render={(props) => <Cmp {...props} category={cat} />}
        />
    }

    return (
        <div>
            <h1>Guitar selection</h1>
            {
                Selections.map((item, index) => (
                    <div key={index}>
                        <Link to={`${match.url}${item.path}`}>
                            {item.type}
                        </Link>
                    </div>
                ))
            }

            <Switch>
                {
                    Selections.map((item, index) => (
                        generateCustomRoute(
                            item.component,
                            index === 5 ? `${item.path}` : `${match.path}${item.path}`,
                            item.category,
                            index)
                    ))
                }
            </Switch>
        </div>
    )
}

export default Guitars