import { TextField, Typography, Paper, Stack, Button } from '@mui/material';
import { useAppDispatch } from '../../app/hooks';
import { add } from '../../redux/transactionsSlice';
import { useState } from 'react';

function AddTransaction() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [value, setValue] = useState(0);
  const [errors, setErrors] = useState({name: '', value: ''})

  const addTransaction = () => {
    if (isNameValid() && isValueValid()) {
      dispatch(add({ value, name }));
      setName('');
      setValue(0);
    }
  };

  const isNameValid = (newName?: string) => {
    const testedValue = typeof (newName) != 'undefined'  ? newName : name;
    if (testedValue.length > 0) {
      setErrors({...errors, name: ''});
      return true;
    } else {
      setErrors({...errors, name: 'Name required'});
      return false;
    }
  };

  const isValueValid = (newValue?: number) => {
    const testedValue = typeof (newValue) != 'undefined' ? newValue : value;
    if (testedValue !== 0 ) {
      setErrors({...errors, value: ''});
      return true;
    } else {
      setErrors({...errors, value: 'Value required'});
      return false;
    }
  }

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
          onChange={(e) => { setName(e.target.value); isNameValid(e.target.value);}}
          inputProps={{ step: "0.1" }}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          value={value}
          label='EUR'
          type='number'
          onChange={(e) => { setValue(parseFloat(e.target.value)); isValueValid(parseFloat(e.target.value));}}
          inputProps={{ step: "0.1" }}
          error={!!errors.value}
          helperText={errors.value}
        />
      </Stack>
    </Paper>
  );
}

export default AddTransaction;