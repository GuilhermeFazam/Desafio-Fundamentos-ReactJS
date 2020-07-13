const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

// TODO

// Intl.DateTimeFormat('pt-br').format(value);

export default formatValue;
