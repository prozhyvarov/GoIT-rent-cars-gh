import { RotatingLines } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled.jsx';

const Loader = () => {
  return (
    <LoaderStyled>
      <RotatingLines
        strokeColor="#fba003"
        strokeWidth="4"
        animationDuration="0.75"
        width="200"
        visible={true}
      />
    </LoaderStyled>
  );
};

export default Loader;
