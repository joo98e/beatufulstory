import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { List } from './StyledHeaderComponent';

interface Props {

}

const Wrapper = styled.div`
    position : relative;
    display : grid;
    width : 1280px;
    grid-template-columns : 200px 1fr;
    margin : 0 auto;
    z-index : 99;
    color : #FFF;
    font-size : 1.2rem;
    font-weight :bold;
    text-align: center;

    & h1 {
        display : block;
        width : 230px;
        height : 120px;
        & img{
            width :230px;
            margin-top :15px;
        }
    }
    
    & ul{
        width : auto;
    }
`;

const MyHeader = styled.header`
    position: relative;
    z-index: 99;
    background: rgba(0,0,0,0.5);
`;

const Header: React.FC = (props: Props) => {
    return (
        <MyHeader>
            <Wrapper>
                <h1>
                    <Link to='/' style={{ display: "block" }}><img src={`${process.env.PUBLIC_URL}/asset/logo.png`} alt="뷰티풀스토리" /></Link>
                </h1>
                <List className="gnb top_menu">
                    <li>스토리</li>
                    <li>뷰티풀 툰</li>
                    <li>커뮤니티</li>
                    <li>STACK</li>
                </List>
            </Wrapper>
        </MyHeader>
    )
}

export default Header
