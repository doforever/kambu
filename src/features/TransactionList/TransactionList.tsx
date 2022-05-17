import { useState } from 'react';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination, Stack, Typography } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { selectTransactions, Transaction } from '../../redux/transactionsSlice';
import { Simulate } from 'react-dom/test-utils';

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
    minWidth: 100,
    align: 'right'
  },
  {
    id: 'pln',
    label: 'PLN',
    minWidth: 100,
    align: 'right',
  },
];

function createData({ name, value, id }: Transaction) {
  return { id, name, euro: value, pln: value, actions: '' };
}

const TransactionList = () => {
  const transactions = useAppSelector(selectTransactions);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  interface transactionSummarizer {
    (transactions: Transaction[]): number
  }

  const sumTransactions: transactionSummarizer = (t) => t.reduce((prev, curr) => (prev.value + curr.value));

  const rows = [...transactions.map(t => createData(t))];

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
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
              .slice(page * 10, page * 10 + 10)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
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
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
      >
        <Typography variant='h3'>Sum:</Typography>
        <Paper>{sumTransactions(transactions)}</Paper>
      </Stack>
    </Paper>
  );
};

export default TransactionList;