import React from 'react'
import styled from 'styled-components'
import Footer from './Decorator/Footer/Footer'
import Header from './Decorator/Header/Header'

interface Props {
    component: React.FC
}

const Wrapper = styled.div`
    width : 100%;
`;

const Main = styled.main`

`;

const Layout = ({ component: Component }: Props) => {

    return (
        <Wrapper>

            {/* main element */}
            <Header />
            <Main>
                <Component />
                <Footer />
            </Main>

            {/* side element */}

        </Wrapper>
    )
}

export default Layout
