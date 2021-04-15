import './home.scss';

import { Grommet, Main, Heading, Paragraph, Button } from 'grommet';
import { grommet } from 'grommet/themes';

const login = () => {
  console.log("log in");
}

const Home = () =>
  <Grommet theme={grommet} full={true}>
    <Main pad="medium" align="center" justify="center" animation={{ type: "fadeIn", duration: 4000 }}>
      <Heading>Deciding is hard...</Heading>
      <Paragraph>Wheel is here to help :)</Paragraph>
      <Button label="Enter" onClick={login} />
    </Main>
  </Grommet>;

export default Home;
