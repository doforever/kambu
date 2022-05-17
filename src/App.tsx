import Rate from './features/Rate/Rate';
import TransactionList from './features/TransactionList/TransactionList';
import MainLayout from './layout/MainLayout/MainLayout';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

function App() {
  return (
    <div>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <MainLayout>
          <Rate />
          <TransactionList />
        </MainLayout>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
