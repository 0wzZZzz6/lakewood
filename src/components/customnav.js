import React from 'react'
import { Switch, Route, Link } from "react-router-dom"
import Start from './start/Start'
import Guitars from './guitars/Guitars'
import Thecompany from './thecompany/Thecompany'
import Customshop from './customshop/Customshop'
import Dealers from './dealers/Dealers'
import Musicians from './musicians/Musicians'
import Helpcenter from './helpcenter/Helpcenter'
import Downloads from './downloads/Downloads'
import Contact from './contact/Contact'

const customnav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/start">Start</Link>
                    </li>
                    <li>
                        <Link to="/guitars">Guitars</Link>
                    </li>
                    <li>
                        <Link to="/thecompany">The Company</Link>
                    </li>
                    <li>
                        <Link to="/customshop">Customshop</Link>
                    </li>
                    <li>
                        <Link to="dealers">Dealers</Link>
                    </li>
                    <li>
                        <Link to="/musicians">Musicians</Link>
                    </li>
                    <li>
                        <Link to="/helpcenter">Help Center</Link>
                    </li>
                    <li>
                        <Link to="/downloads">Downloads</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/start">
                    <Start />
                </Route>
                <Route path="/guitars">
                    <Guitars />
                </Route>
                <Route path="/thecompany">
                    <Thecompany />
                </Route>
                <Route path="/customshop">
                    <Customshop />
                </Route>
                <Route path="/dealers">
                    <Dealers />
                </Route>
                <Route path="/musicians">
                    <Musicians />
                </Route>
                <Route path="/helpcenter">
                    <Helpcenter />
                </Route>
                <Route path="/downloads">
                    <Downloads />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </div>
    )
}

export default customnav