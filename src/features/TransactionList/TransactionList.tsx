import { Paper, Stack } from '@mui/material';

type Props = {
  children?: React.ReactNode;
};

const TransactionList: React.FC<Props> = ({ children }) => (
  <Paper component="section">
    <Stack spacing={2}>
      {children}
    </Stack>
  </Paper>
);

export default TransactionList;