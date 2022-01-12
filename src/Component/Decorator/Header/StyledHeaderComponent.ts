import styled from 'styled-components';


export const List = styled.ul.attrs({ "data-name": "gnb" })`
    display : flex;
    width :1280px;
    max-width :1280px;
    justify-content : space-around;
    align-items : center;
    box-sizing: border-box;
    padding : 10px;
    & li {
        text-shadow : rgb(0 0 0 / 52%) -3px 3px 5px, rgb(255 255 255 / 30%) 1px -5px 10px
    }
`;