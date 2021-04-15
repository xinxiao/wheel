import { Main, Heading, Paragraph, Spinner, Header, Button, Anchor } from 'grommet';
import { Logout as LogoutIcon } from 'grommet-icons';

import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useAuth, SuspenseWithPerf, AuthCheck } from 'reactfire';

import './home.scss';

const Facade = () => {
  return <Main pad="medium" align="center" justify="center" animation={{ type: "fadeIn", duration: 3000 }}>
    <Heading>Deciding is hard...</Heading>
    <Paragraph>Wheel is here to help :)</Paragraph>
    <StyledFirebaseAuth
      firebaseAuth={useAuth()}
      uiConfig={{
        signInFlow: 'redirect',
        signInOptions: [useAuth.GoogleAuthProvider.PROVIDER_ID],
        callbacks: {
          signInSuccessWithAuthResult: () => false,
        }
      }} />
  </Main>;
}

const Loading = () => {
  return <Main pad="medium" align="center" justify="center" >
    <Spinner size="xlarge" />
  </Main>;
}

const Events = () => {
  const auth = useAuth();

  return <Header background="neutral">
    <Anchor style={{ marginLeft: "1rem" }} label="Wheel" alignSelf="center" />
    <Button icon={<LogoutIcon />} hoverIndicator onClick={() => auth.signOut()} />
  </Header>;
}

const Home = () => {
  return <SuspenseWithPerf traceId={'firebase-user-wait'} fallback={<Loading />}>
    <AuthCheck fallback={<Facade />}>
      <Events />
    </AuthCheck>
  </SuspenseWithPerf>
};

export default Home;
