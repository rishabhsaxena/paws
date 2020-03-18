import Header from './Header';
import { Container } from '@material-ui/core';

const Layout = ({ children }) => (
  <>
    <Header/>
    <Container maxWidth="lg" style={ { paddingTop: 20 } }>
      {children}
    </Container>
  </>
);

export default Layout;
