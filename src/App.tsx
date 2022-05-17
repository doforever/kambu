import Rate from './features/rate/Rate';
import MainLayout from './layout/MainLayout/MainLayout';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

function App() {
  return (
    <div>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <MainLayout>
          <Rate />
        </MainLayout>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
