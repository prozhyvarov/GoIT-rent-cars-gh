import {
  NavMain,
  NavLink,
  Container,
} from './Navigation.styled';

const Navigation = () => {

  return (
    <>
      <NavMain>
        <Container>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </Container>
      </NavMain>
    </>
  );
};

export default Navigation;
