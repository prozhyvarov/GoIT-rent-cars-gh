
import { lazy } from 'react';
import { Suspense } from 'react';
import { Navigate,Route, Routes } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import { Container } from '../App/App.styled';

const HomePage = lazy(() => import('../../pages/HomePage/Homepage'));
const Catalog = lazy(() => import('../../pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../../pages/Favotites/Favorites'));

export const App = () => {
  return (
    <Container>
      <Suspense>
        <Navigation />
        <Routes>    
            <Route index element={<HomePage />}/>
            <Route path="/catalog" element={<Catalog />}/>
            <Route path="/favorites" element={<Favorites />}/>
            <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
