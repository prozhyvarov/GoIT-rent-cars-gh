import { selectFavoritesCars } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import background from 'images/favorites_bgrd.png';
import { CarsList } from 'components/CarsList/CarsList.jsx';
import { deleteAllFavoriteCars } from 'redux/favoriteSlice';
import { Container, NavLink, Img, Text, DeleteBtn } from './Favorites.styled';

const Favorites = () => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoritesCars);

  const handleDeleteAll = () => {
    dispatch(deleteAllFavoriteCars());
  };
  return (
    <Container>
      {favoriteCars.length > 0 ? (
        <>
          <CarsList cars={favoriteCars} />
          <DeleteBtn onClick={handleDeleteAll}>
            Remove all favorites cars
          </DeleteBtn>
        </>
      ) : (
        <>
          <Text>
            Here will be your favorite cars. You can add them from our catalog.
          </Text>
          <Img src={background} alt="oops" />
          <NavLink to="/catalog">Go to Catalog</NavLink>
        </>
      )}
    </Container>
  );
};

export default Favorites;