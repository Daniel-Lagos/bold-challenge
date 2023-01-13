export const formatDate = (transactionDate) => {
  const date = new Date(transactionDate);
  return `${date.getUTCDate()}/${
    date.getUTCMonth() + 1
  }/ ${date.getUTCFullYear()} - ${date.getHours()}-${date.getMinutes()}:${
    date.getSeconds()
  }`;
};

export const formatPrice = () => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  });
};
