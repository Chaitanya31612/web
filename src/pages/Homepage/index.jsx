import {
  Functions,
  HomeEvents,
  HomeTeam,
  Introduction,
  Vision,
  ExpertPanel,
} from 'containers/Homepage';
import NewsPanel from 'containers/Homepage/NewsPanel';
import styled from 'styled-components';
import { appColors } from 'styles/colors';

function Homepage() {
  return (
    <Container>
      <Introduction />
      <Vision />
      <Functions />
      <ExpertPanel />
      <NewsPanel />
      <HomeEvents />
      <HomeTeam />
    </Container>
  );
}

export default Homepage;

const Container = styled.div`
  background-color: ${appColors.bgVar1};
  height: 100%;
`;
