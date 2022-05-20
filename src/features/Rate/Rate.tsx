import { TextField, Typography, Paper, Stack } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectRate, setRate, fetchRate } from '../../redux/rateSlice';
import { useEffect } from 'react';

function Rate () {
  const count = useAppSelector(selectRate);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRate());
  }, []);

  return (
    <Paper sx={{padding: '12px', width: '100%'}}>
      <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={2} >
        <Typography component='h2' variant='h4'>Exchange rate</Typography>
        <TextField
          aria-label="Exchange rate"
          value={count}
          type="number"
          onChange={(e) => dispatch(setRate(parseFloat(e.target.value)))}
          inputProps={{ step: "0.1"}}
        />
      </Stack>
    </Paper>
  );
}

export default Rate;