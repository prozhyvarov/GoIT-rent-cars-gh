import { useState } from 'react';
import {
  Btn,
  Descr,
  Image,
  ImageThumb,
  Item,
  Text,
  Paragraf,
  Span,
  StyledHeart,
  StyledHeartIcon,
} from './CarsListItem.styled';

import { Modal } from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoritesCars } from 'redux/selectors';
import { addFavoriteCar, deleteFavoritCar } from 'redux/favoriteSlice';
import PropTypes from 'prop-types';

export const CarsListItem = ({ car }) => {
  const [toggleModal, setToggleModal] = useState(false);
console.log(toggleModal);
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoritesCars);
  const handleClick = () => {
    setToggleModal(prevState => !prevState);
  };

  const handleToogleFavorites = carId => {
    const persistedCar = favoriteCars.find(({ id }) => carId === id);

    if (!persistedCar) {
      dispatch(addFavoriteCar(car));
    } else {
      dispatch(deleteFavoritCar(carId));
    }
  };

  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    functionalities,
    accessories,
    rentalCompany,
    type,
    address,
  } = car;
console.log(favoriteCars);
  const updateaddress = address.split(', ').slice(-2).join(' | ');
  const isInFavorites = favoriteCars.some(i => i.id === id);
  return (
    <>
      <Item>
        <ImageThumb>
          <Image src={img} alt={model} />
        </ImageThumb>
        <Paragraf>
          <Text>
            {make} <Span> {model}, </Span> {year}
          </Text>
          <Text> {rentalPrice}</Text>
        </Paragraf>
        <Descr>
          {updateaddress} | {rentalCompany} | {make} | {id} | {type} |{' '}
          {accessories[0]} | {functionalities[0]}
        </Descr>
        <Btn id={id} onClick={handleClick}>
          Learn more
        </Btn>
        <StyledHeart id={id} onClick={() => handleToogleFavorites(id)}>
          <StyledHeartIcon $isInFavorites={isInFavorites} />
        </StyledHeart>
      </Item>
      {toggleModal && <Modal handleClick={handleClick} car={car}></Modal>}
    </>
  );
};

CarsListItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    year: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    type: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
    accessories: PropTypes.arrayOf(PropTypes.string),
    functionalities: PropTypes.arrayOf(PropTypes.string),
    rentalPrice: PropTypes.string,
    rentalCompany: PropTypes.string,
    address: PropTypes.string,
  }),
};
