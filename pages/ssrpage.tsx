import { Button } from '@mui/material';
import StyledButton from '../component/Button/StyledButton';

const SSRPage = () => {
  return (
    <>
      <Button variant="contained" color="primary">
        MUI Button
      </Button>
      <StyledButton>Styled Button</StyledButton>
    </>
  );
};

export const getServerSideProps = () => {
  return { props: {} };
};

export default SSRPage;
