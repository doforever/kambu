import { TextField, Typography, Paper, Stack, Button } from '@mui/material';
import { useAppDispatch } from '../../app/hooks';
import { add } from '../../redux/transactionsSlice';
import { useState } from 'react';

function AddTransaction() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [value, setValue] = useState(0);

  const addTransaction = () => {
    dispatch(add({ value, name }));
    setName('');
    setValue(0);
  };

  return (
    <Paper sx={{padding: '12px'}}>
      <Stack direction='row' spacing={2} justifyContent='space-between' alignItems='center'>
        <Typography component='h2' variant='h4' paragraph>Add transaction</Typography>
        <Button variant="contained" onClick={addTransaction}>Add</Button>
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          fullWidth
          value={name}
          label='Name'
          type='text'
          onChange={(e) => setName(e.target.value)}
          inputProps={{ step: "0.1" }}
        />
        <TextField
          value={value}
          label='EUR'
          type='number'
          onChange={(e) => setValue(parseFloat(e.target.value))}
          inputProps={{ step: "0.1" }}
        />
      </Stack>
    </Paper>
  );
}

export default AddTransaction;