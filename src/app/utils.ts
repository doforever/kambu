export function exchange(value: number, rate: number) {
  return (rate * 10000) * (value * 100) / 1000000;
}

function parseCurrency(value: number, currency: string) {
  return new Intl.NumberFormat('pl-PL', { style: 'currency', currency }).format(value);
}

export function parsePLN(value: number) {
  return parseCurrency(value, 'PLN');
}

export function parseEUR(value: number) {
  return parseCurrency(value, 'EUR');
}
