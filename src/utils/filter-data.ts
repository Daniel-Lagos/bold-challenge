import { Filters } from '../context/FilterData';

export const filterData = (filters: Filters, data = []) => {
  const validateTime = (transaction, timeFilter) => {
    const transactionDate = new Date(transaction.date);
    switch (timeFilter) {
      case 'DAY':
        const today = new Date(
          `${transactionDate.getUTCFullYear()}/${
            transactionDate.getUTCMonth() + 1
          }/${transactionDate.getUTCDate()}`,
        );
        return transactionDate >= today;
      case 'MONTH':
        const monthDate = new Date(
          `${transactionDate.getUTCFullYear()}/${
            transactionDate.getUTCMonth() + 1
          }/01`,
        );
        return transactionDate > monthDate;
      case 'WEEK':
        const week = new Date(
          `${transactionDate.getUTCFullYear()}/${
            transactionDate.getUTCMonth() + 1
          }/${transactionDate.getUTCDate() - transactionDate.getDay() - 1}`,
        );
        return transactionDate > week;
    }
  };

  if (!filters?.timeFilter && !filters?.typePayment) return data;

  return data.map(
    (transaction) =>
      (filters?.typePayment ||
        filters.typePayment.includes(transaction.typePayment)) &&
      (filters?.timeFilter || validateTime(transaction, filters.timeFilter)),
  );
};
