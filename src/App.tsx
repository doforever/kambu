import Rate from './features/Rate/Rate';
import TransactionList from './features/TransactionList/TransactionList';
import MainLayout from './layout/MainLayout/MainLayout';
import MaxTransaction from './features/MaxTransaction/MaxTransaction';
import { CssBaseline, StyledEngineProvider, Grid } from '@mui/material';

function App() {
  return (
    <div>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <MainLayout>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <Rate />
            </Grid>
            <Grid item xs={12} lg={6}>
              <MaxTransaction />
            </Grid>
            <Grid item xs={12} >
              <TransactionList />
            </Grid>
          </Grid>
        </MainLayout>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
