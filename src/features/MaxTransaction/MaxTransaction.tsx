import { Typography, Paper, Stack } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { selectTransactionsMax } from '../../redux/transactionsSlice';
import { exchange } from '../../app/utils';
import { selectRate } from '../../redux/rateSlice';

function MaxTransaction() {
  const transaction = useAppSelector(selectTransactionsMax);
  const exchangeRate = useAppSelector(selectRate);

  return (
    <Paper sx={{ padding: '12px'}}>
      <Stack spacing={2}>
        <Typography component='h2' variant='h4'>Highest transation</Typography>
        <Stack 
          direction='row' 
          spacing={2} 
          justifyContent='space-between' 
          alignItems='center'
        >
          <Typography component='h3' variant='h6'>{transaction.name}</Typography>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Typography variant='body1'>{transaction.value}EUR</Typography>
            <Typography variant='body1'>{exchange(transaction.value, exchangeRate)}PLN</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default MaxTransaction;