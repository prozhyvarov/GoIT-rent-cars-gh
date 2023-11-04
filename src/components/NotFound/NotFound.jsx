import errorImage from '../../images/favorites_bgrd.png';
import { Container, NothingInlist, Img } from './NotFound.styled';

export const NotFound = () => {
  return (
    <Container>
      <Img src={errorImage} alt="Nothing in List" />
      <NothingInlist>Nothing in List !</NothingInlist>
    </Container>
  );
};
