import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';



import Navigation from 'components/Navigation/Navigation';

import { Container } from '../App/App.styled';
import HomePage from 'pages/HomePage/Homepage';
import Catalog from 'pages/Catalog/Catalog';
import Favorites from 'pages/Favotites/Favorites';

// const SignUp = lazy(() => import('../../pages/SingUp/SignUp'));
// const Login = lazy(() => import('../../pages/Login/Login'));
// const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));

export const App = () => {
  return (
    <Container>
      <Suspense>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
