import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  selectAmountCars,
  selectFilteredCars,
  selectLoading,
} from 'redux/selectors.js';
import { fetchCars } from "redux/operation";
import { clearCarsList } from "redux/carSlice";
import { clearFilter } from "redux/filterSlice";

import { NotFound } from "components/NotFound/NotFound";
import { CarsList } from "components/CarsList/CarsList";
import { SearchForm } from "components/SearchForm/SearchForm";
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { Container } from "./Catalog.styled";
import Loader from "components/Loader/Loader";


const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
 const [initialLoad, setInitialLoad] = useState(true);
  const amount = useSelector(selectAmountCars);
 const filteredCars = useSelector(selectFilteredCars);
 const isLoading = useSelector(selectLoading);

 useEffect(() => {
   if (page === 1 && !initialLoad) {
     dispatch(clearCarsList());
     dispatch(clearFilter());
   }

   if (!initialLoad) {
     dispatch(fetchCars({ page, limit: 12 }));
   } else {
     setInitialLoad(false); 
   }
 }, [dispatch, page, initialLoad]); 

 const handleLoadMore = () => {
   setPage(prevState => prevState + 1);
 };

  return (
    <Container>
      <SearchForm />
      {isLoading && <Loader />}
      {filteredCars.length > 0 && <CarsList cars={filteredCars} />}
      {filteredCars.length === 0 && !isLoading && <NotFound />}
      {amount <40 && !isLoading && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
    </Container>
  );
};

export default Catalog;
