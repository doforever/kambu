import { Typography, Paper, Stack } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { selectTransactionsMax } from '../../redux/transactionsSlice';
import styles from './MaxTransaction.module.scss';

function MaxTransaction() {
  const transaction = useAppSelector(selectTransactionsMax);

  return (
    <Paper className={styles.root}>
      <Stack spacing={2}>
        <Typography variant='h2'>Highest transation</Typography>
        <Stack 
          direction={{ xs: 'row', lg: 'column' }} 
          spacing={2} 
          justifyContent="space-between" 
          alignItems={{ xs: 'center', lg: 'flex-start'}}
        >
          <Typography variant='h4'>{transaction.name}</Typography>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Typography variant='body1'>{transaction.value}EUR</Typography>
            <Typography variant='body1'>{transaction.value}PLN</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default MaxTransaction;