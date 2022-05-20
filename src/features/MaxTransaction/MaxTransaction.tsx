import { Typography, Paper, Stack } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { selectTransactionsMax } from '../../redux/transactionsSlice';
import { exchange, parseEUR, parsePLN } from '../../app/utils';
import { selectRate } from '../../redux/rateSlice';

function MaxTransaction() {
  const transaction = useAppSelector(selectTransactionsMax);
  const exchangeRate = useAppSelector(selectRate);

  return (
    <Paper sx={{ padding: '12px', width: '100%'}}>
      <Stack spacing={2}>
        <Typography component='h2' variant='h4'>Highest transaction</Typography>
        <Stack 
          direction='row' 
          spacing={2} 
          justifyContent='space-between' 
          alignItems='center'
        >
          <Typography component='h3' variant='h6'>{transaction.name}</Typography>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Typography variant='body1'>{parseEUR(transaction.value)}</Typography>
            <Typography variant='body1'>{parsePLN(exchange(transaction.value, exchangeRate))}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default MaxTransaction;