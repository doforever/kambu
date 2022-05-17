import { TextField, Typography, Paper } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectRate, setRate } from '../../redux/rateSlice';
import styles from './Rate.module.scss';

function Rate () {
  const count = useAppSelector(selectRate);
  const dispatch = useAppDispatch();

  return (
    <Paper className={styles.root}>
      <Typography variant='h2'>Exchange rate</Typography>
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