import React from 'react';
import { TextField } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectRate, setRate } from '../../redux/rateSlice';

function Rate() {
  const count = useAppSelector(selectRate);
  const dispatch = useAppDispatch();

  return (
    <div>
      <TextField
        aria-label="Exchange rate"
        value={count}
        type="number"
        onChange={(e) => dispatch(setRate(parseFloat(e.target.value)))}
        inputProps={{ step: "0.1"}}
      />
    </div>
  );
}

export default Rate;