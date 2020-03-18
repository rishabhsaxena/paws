import styled from 'styled-components';
import { Container } from '@material-ui/core';

const StyledHeader = styled.header`
  border-bottom: 1px solid #cbcbcb;
  color: black;

  & .header-contents {
    padding: 20px 20px;
  }

  & .logo {
    .paw {
      max-width: 20%;
      margin-right: 3px;
    }
    display: flex;
    align-items: center;
    max-width: 200px;
    padding-top: 10px;
    ${({ theme }) => `
      @media (max-width: ${theme.breakpoints.values.sm}px) {
        max-width: 100px;
      }
    `}
    img {
      flex: 1;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <Container maxWidth="lg" className="header-contents">
      <div className="logo">
        <img className="paw" src={ require('~/images/paw_symbol.png') }/>
        <img src={ require('~/images/logo.png') } />
      </div>
    </Container>
  </StyledHeader>
);

export default Header;
