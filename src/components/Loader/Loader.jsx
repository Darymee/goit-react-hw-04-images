import { MagnifyingGlass } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled.js';

export const Loader = () => {
  return (
    <Wrapper>
      <MagnifyingGlass
        visible={true}
        height="100"
        width="100"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#57370d"
      />
    </Wrapper>
  );
};
