import React from 'react'
import Guitar_info_component from './Guitar_info_component'
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom'
import guitars from '../../guitars/guitars'


const Series_component = (props) => {

    let match = useRouteMatch();
    console.log(match.url)

    const fguitars = guitars.filter(guitar => guitar.category === props.category)

    return (
        <div>
            <h1>Series Component</h1>
            {
                fguitars.map((guitar, index) => (
                    <div key={index} style={{ borderStyle: "solid", marginBottom: "1em" }}>
                        <Link to={`${match.url}/${guitar.model_name}`}>
                            <p>{guitar.name}</p>
                        </Link>

                        <p>{guitar.top}</p>
                        <p>{guitar.back_sides}</p>
                        <p>{guitar.neck_width_a_nut}</p>
                        <p>{guitar.scale_length}</p>
                        <p>
                            {((guitar.cutaway !== "none") || (guitar.pickup_system !== "none")) && "With "}
                            {guitar.cutaway !== "none" && "cutaway"}
                            {((guitar.cutaway !== "none") && (guitar.pickup_system !== "none")) && " and "}
                            {guitar.pickup_system !== "none" && `pickup system (${guitar.pickup_system})`}
                        </p>
                    </div>
                ))
            }

            <Switch>
                {
                    fguitars.map((guitar, index) => (


                        <Route
                            key={index}
                            path={`${match.url}/${guitar.model_name}`}
                            render={(props) => <Guitar_info_component {...props} guitarInfo={guitar} />}
                        />
                    ))
                }
            </Switch>

        </div>
    )
}

export default Series_component