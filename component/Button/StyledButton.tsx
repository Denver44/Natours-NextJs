import styled, { css } from 'styled-components';

interface IButtonProps {
  primary: boolean;
  backgroundColor: string;
}

const Button = styled.button<IButtonProps>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.primary &&
    css`
      background: ${props.backgroundColor};
      color: white;
    `};
`;

interface StyledButtonProps {
  children: String;
}
const StyledButton = ({ children }: StyledButtonProps) => {
  return (
    <Button primary backgroundColor="hotpink">
      {children}
    </Button>
  );
};

export default StyledButton;
