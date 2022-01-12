import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Component/Home/Home'
import CustomRoute from './routes/CutomRoute'

interface Props {

}

const Router = (props: Props) => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <CustomRoute path='/' exact component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
