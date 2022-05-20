import Rate from './features/Rate/Rate';
import TransactionList from './features/TransactionList/TransactionList';
import MaxTransaction from './features/MaxTransaction/MaxTransaction';
import AddTransaction from './features/AddTransaction/AddTransaction';
import { CssBaseline, StyledEngineProvider, Stack, Container, createTheme, ThemeProvider } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  spacing: 6,
});

function App() {
  return (
    <div>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
