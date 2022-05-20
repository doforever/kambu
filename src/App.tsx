import Rate from './features/Rate/Rate';
import TransactionList from './features/TransactionList/TransactionList';
import MaxTransaction from './features/MaxTransaction/MaxTransaction';
import AddTransaction from './features/AddTransaction/AddTransaction';
import { CssBaseline, StyledEngineProvider, Stack, Container } from '@mui/material';

function App() {
  return (
    <div>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <Container sx={{ padding: '24px' }} component="main" maxWidth="lg">
          <Stack spacing={2} alignItems='stretch'>
            <Stack direction={{xs:'column', md:'row'}} spacing={2}>
              <Rate />
              <MaxTransaction />
            </Stack>
            <AddTransaction />
            <TransactionList />
          </Stack>
        </Container>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
