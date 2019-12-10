import React from 'react'
import { Switch, Route, Link } from "react-router-dom"
import Start from './Start'
import Guitars from './Guitars'
import Thecompany from './Thecompany'
import Musicians from './Musicians'
import Helpcenter from './Helpcenter'
import Downloads from './Downloads'
import Contact from './Contact'

const navItems = [
    {
        path: '/start',
        component: <Start />,
        name: 'Start'
    }, {
        path: '/guitars',
        component: <Guitars />,
        name: 'Guitars'
    }, {
        path: '/thecompany',
        component: <Thecompany />,
        name: 'The Company'
    }, {
        path: '/musicians',
        component: <Musicians />,
        name: 'Musicians'
    }, {
        path: '/helpcenter',
        component: <Helpcenter />,
        name: 'Help Center'
    }, {
        path: '/downloads',
        component: <Downloads />,
        name: 'Downloads'
    }, {
        path: '/contact',
        component: <Contact />,
        name: 'Contacts'
    }
]

const customnav = () => {
    return (
        <div>
            <nav>
                <ul>
                    {
                        navItems.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>

            <Switch>
                {
                    navItems.map((item, index) => (
                        <Route path={item.path} key={index}>
                            {item.component}
                        </Route>
                    ))
                }
            </Switch>
        </div>
    )
}

export default customnav