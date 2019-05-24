import React from 'react';
import Grid, {
  Title,
  ImgArea,
  SideText,
  BQuote,
  Footer,
  FootText
} from './appStyles';
import Map from './img/map.png';

function App() {
  return (
    <Grid>
      <Title>Important Memo!!</Title>
      <SideText>It was going to be a lonely trip back.</SideText>
      <BQuote>
        Now the real medical miracle is pooping at poo poo point. Making the
        hike while holding it in. Then pee in pee pee creek
        <br />
        <br />
        ~Brandon Hart~
        <br />
        2019
      </BQuote>
      <ImgArea src={Map} alt="Important Map" />
      <Footer>
        <FootText>Made with Sarcasm and Love, Tex</FootText>
      </Footer>
    </Grid>
  );
}

export default App;
