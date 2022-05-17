import { Container } from '@mui/material';
import styles from './MainLayout.module.scss';

type Props = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => (
  <Container className={styles.root} component="main" maxWidth="lg">
    {children}
  </Container>
);

export default MainLayout;