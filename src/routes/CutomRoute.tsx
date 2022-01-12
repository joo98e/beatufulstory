import React from 'react'
import { Route } from 'react-router'
import Layout from '../Component/Layout'

interface ICustomRoute {
    component: React.FC;
    exact?: boolean;
    path?: string;
    layout?: boolean;
}

const CustomRoute = ({ component: Component, layout, ...rest }: ICustomRoute) => {

    return (
        <>
            {
                <Route {...rest}
                    render={(props) => {
                        return layout ?
                            <Layout component={Component} />
                            :
                            <Component />
                    }}
                />
            }
        </>
    )
}

CustomRoute.defaultProps = {
    layout: true
}

export default CustomRoute
