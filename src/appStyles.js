import styled from 'styled-components';

const Grid = styled.h1`
  display: grid;
  grid-template-areas:
    '. title .' 'a info b' 'a img b' 'a img b' '. space .'
    'foot foot foot';
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  background: #5dbcd2;
  margin: 0;
  min-height: 100vh;
`;

export const Title = styled.h1`
  grid-area: title;
  justify-self: center;
`;

export const ImgArea = styled.img`
  grid-area: img;
  margin: 5%;
  width: 80%;
  justify-self: center;
  align-self: center;
`;

export const InfoText = styled.h3`
  grid-area: info;
`;

export const SideText = styled.p`
  grid-area: a;
  margin: 25%;
  justify-self: center;
  align-self: center;
`;

export const BQuote = styled.blockquote`
  grid-area: b;
  justify-self: center;
  align-self: center;
  font-style: italic;
`;

export const Footer = styled.div`
  grid-area: foot;
  background: #319cb4;
`;

export const FootText = styled.small`
  grid-area: foot;
  justify-self: center;
  align-self: center;
  color: #fbfbfb;
`;
export default Grid;
