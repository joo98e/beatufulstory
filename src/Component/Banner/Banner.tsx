import React, { useRef, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';
import { BannerTinyWrapper, BannerWrapper, EventBox, EventTinyBox, EventTinyWrapper } from './StyledBannerComponent';
import { BannerTitle } from '../../Assets/UIComponent';

interface Props {

}

const Wrapper = styled.div`
    position: relative;
    top: -120px;
    min-height : 516px;
`;

const Banner: React.FC = (props: Props) => {
    const [nav1, setNav1] = useState<any>();
    const [nav2, setNav2] = useState<any>();

    return (
        <Wrapper>
            <div style={{ maxHeight: "516px" }}>
                <Slider
                    asNavFor={nav2}
                    ref={slider1 => setNav1(slider1)}
                    fade={true}
                    touchMove={false}
                >
                    <BannerWrapper>
                        <img src={`${process.env.PUBLIC_URL}/slick/slide_01.png`} alt="낭만은 항상 가을에..." />
                        <EventBox>
                            <BannerTitle>낭만은 항상 가을에</BannerTitle>
                        </EventBox>
                    </BannerWrapper>
                    <BannerWrapper>
                        <img src={`${process.env.PUBLIC_URL}/slick/slide_02.png`} alt="최강 한파 속에 따뜻한 비결" />
                        <EventBox>
                            <BannerTitle>최강 한파 속에 따뜻한 비결</BannerTitle>
                        </EventBox>
                    </BannerWrapper>
                    <BannerWrapper>
                        <img src={`${process.env.PUBLIC_URL}/slick/slide_03.png`} alt="달려라 뷰티풀" />
                        <EventBox>
                            <BannerTitle>달려라 뷰티풀</BannerTitle>
                        </EventBox>
                    </BannerWrapper>
                    <BannerWrapper>
                        <img src={`${process.env.PUBLIC_URL}/slick/slide_04.png`} alt="나의 여름을 부탁해" />
                        <EventBox>
                            <BannerTitle>나의 여름을 부탁해</BannerTitle>
                        </EventBox>
                    </BannerWrapper>
                    <BannerWrapper>
                        <img src={`${process.env.PUBLIC_URL}/slick/slide_05.png`} alt="미움말고 관심" />
                        <EventBox>
                            <BannerTitle>미움말고 관심</BannerTitle>
                        </EventBox>
                    </BannerWrapper>
                    <BannerWrapper>
                        <img src={`${process.env.PUBLIC_URL}/slick/slide_06.png`} alt="추억은 미화를 타고" />
                        <EventBox>
                            <BannerTitle>추억은 미화를 타고</BannerTitle>
                        </EventBox>
                    </BannerWrapper>
                </Slider>
            </div>

            <div style={{ minHeight: "360px", background: `url(${process.env.PUBLIC_URL}/slick/bg_login.png) 0 0 no-repeat`, backgroundSize: "cover" }}>
                <EventTinyWrapper>
                    <Slider
                        asNavFor={nav1}
                        ref={(slider2) => setNav2(slider2)}
                        slidesToShow={4}
                        swipeToSlide={true}
                        focusOnSelect={true}
                    >
                        <BannerTinyWrapper>
                            <img src={`${process.env.PUBLIC_URL}/slick/slide_01.png`} alt="낭만은 항상 가을에" />
                            <EventTinyBox>
                                낭만은 항상 가을에!
                            </EventTinyBox>
                        </BannerTinyWrapper>
                        <BannerTinyWrapper>
                            <img src={`${process.env.PUBLIC_URL}/slick/slide_02.png`} alt="최강 한파 속에 따뜻한 비결" />
                            <EventTinyBox>
                                최강 한파 속에 따뜻한 비결
                            </EventTinyBox>
                        </BannerTinyWrapper>
                        <BannerTinyWrapper>
                            <img src={`${process.env.PUBLIC_URL}/slick/slide_03.png`} alt="달려라 뷰티풀" />
                            <EventTinyBox>
                                달려라 뷰티풀
                            </EventTinyBox>
                        </BannerTinyWrapper>
                        <BannerTinyWrapper>
                            <img src={`${process.env.PUBLIC_URL}/slick/slide_04.png`} alt="나의 여름을 부탁해" />
                            <EventTinyBox>
                                나의 여름을 부탁해
                            </EventTinyBox>
                        </BannerTinyWrapper>
                        <BannerTinyWrapper>
                            <img src={`${process.env.PUBLIC_URL}/slick/slide_05.png`} alt="미움말고 관심" />
                            <EventTinyBox>
                                미움말고 관심
                            </EventTinyBox>
                        </BannerTinyWrapper>
                        <BannerTinyWrapper>
                            <img src={`${process.env.PUBLIC_URL}/slick/slide_06.png`} alt="추억은 미화를 타고" />
                            <EventTinyBox>
                                추억은 미화를 타고
                            </EventTinyBox>
                        </BannerTinyWrapper>
                    </Slider>
                </EventTinyWrapper>
            </div>
        </Wrapper>
    )
}

export default Banner
