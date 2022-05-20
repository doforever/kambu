export function exchange(euro: number, rate: number) {
  return (rate * 10000) * (euro * 100) / 1000000;
}