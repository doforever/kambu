import { useState } from 'react';
import {
  Paper,
  TableContainer,
  Table, TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Stack,
  IconButton,
  Typography,
  Divider
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectTransactions, Transaction, remove } from '../../redux/transactionsSlice';
import { exchange } from '../../app/utils';
import { selectRate } from '../../redux/rateSlice';

interface Column {
  id: 'name' | 'euro' | 'pln' | 'actions';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  {
    id: 'euro',
    label: 'EURO',
    minWidth: 50,
    align: 'right'
  },
  {
    id: 'pln',
    label: 'PLN',
    minWidth: 50,
    align: 'right',
  },
  {
    id: 'actions',
    label: 'Actions',
    minWidth: 40,
    align: 'right'
  }
];

const TransactionList = () => {
  const transactions = useAppSelector(selectTransactions);
  const exchangeRate = useAppSelector(selectRate);
  const dispatch = useAppDispatch();

  function createData({ name, value, id }: Transaction) {
    return {
      id, name, euro: value, pln: exchange(value, exchangeRate),
      actions: (<IconButton aria-label="delete" onClick={() => dispatch(remove(id))}>
        <DeleteIcon />
      </IconButton>)
    };
  }

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const sumTransactions = () => transactions.map(t => t.value).reduce<number>((prev, curr) => (prev + curr), 0);

  const rows = [...transactions.map(t => createData(t))];

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader size="small" aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Divider/>
      <Stack
        alignItems="flex-end"
        spacing={2}
      >
        <Typography variant='h3'>{sumTransactions()} EUR</Typography>
        <Typography variant='h3'>{exchange(sumTransactions(), exchangeRate)} PLN</Typography>
      </Stack>
    </Paper>
  );
};

export default TransactionList;