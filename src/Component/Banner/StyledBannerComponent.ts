import styled from 'styled-components';

export const BannerWrapper = styled.div`
    position : relative;
    width : 100%;
    max-height : 516px;
`;

export const BannerTinyWrapper = styled.div`
    width : 220px;
    max-width : 220px;
    margin : 10px 0 10px 10px;
    & img {
        width : 220px;
        text-align :center;
    }
    & :first-child{
        margin-left : 0
    }
`;

export const EventBox = styled.div`
    position : absolute;
    left : 50%;
    bottom : 0;
    width : 960px;
    min-height : 280px;
    color : #FFF;
    background : rgba(0, 0, 0, 0.6);
    box-sizing :border-box;
    padding : 15px 15px 0 15px;
    border-radius : 15px 15px 0 0;
    transform : translateX(-50%);
`;

export const EventTinyWrapper = styled.div`
    max-width : 960px;
    margin : 0 auto;
    background : rgba(0, 0, 0, 0.5);
    cursor : pointer;
`;

export const EventTinyBox = styled.div`
    width : 220px;
    padding : 10px;
    color : #FFF;
    text-align : center;
    box-sizing : border-box;
`;