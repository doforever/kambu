import { TextField, Typography, Paper } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectRate, setRate, fetchRate } from '../../redux/rateSlice';
import { useEffect } from 'react';
import styles from './Rate.module.scss';

function Rate () {
  const count = useAppSelector(selectRate);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRate());
  }, []);

  return (
    <Paper className={styles.root}>
      <Typography component='h2' variant='h4'>Exchange rate</Typography>
      <TextField
        aria-label="Exchange rate"
        value={count}
        type="number"
        onChange={(e) => dispatch(setRate(parseFloat(e.target.value)))}
        inputProps={{ step: "0.1"}}
      />
    </Paper>
  );
}

export default Rate;