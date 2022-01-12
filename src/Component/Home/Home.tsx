import React from 'react'
import Banner from '../Banner/Banner'
import Webtoon from '../Webtoon/Webtoon'

interface Props {

}

const Home: React.FC = (props: Props) => {
    return (
        <div style={{ background: "#eeeeee" }}>

            <Banner />

            <Webtoon />
            
        </div>
    )
}

export default Home
