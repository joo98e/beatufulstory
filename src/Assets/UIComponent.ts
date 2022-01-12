import styled from 'styled-components';

export const Section = styled.section`
    width : 960px;
    max-width : 960px;
    margin : 0 auto;
`;

export const SectionTitle = styled.h3`
    font-size : 2rem;
    color : ${props => props.theme.sectionColor};
`;

export const BannerTitle = styled.h2`
    font-size : 2rem;
    color : ${props => props.theme.textColor};
`;