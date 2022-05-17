import { Container } from '@mui/material';
import './MainLayout.scss';

type Props = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => (
  <Container className="root" component="main" maxWidth="lg">
    {children}
  </Container>
);

export default MainLayout;