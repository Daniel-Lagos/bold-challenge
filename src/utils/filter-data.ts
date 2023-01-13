import { Filters } from '../context/FilterData';

export const filterData = (filters: Filters, data = []) => {
  const validateTime = (transaction, timeFilter) => {
    const transactionDate = new Date(transaction.date);
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    switch (timeFilter) {
      case 'DAY':
        const today = new Date(`${year}-${month}-${day - 1}`);
        const tomorrow = new Date(`${year}-${month}-${day}`);
        return transactionDate >= today && transactionDate <= tomorrow;
      case 'MONTH':
        const monthDate = new Date(`${year}/${month}/01`);
        const nextMonth = new Date(`${year}/${month + 1}/01`);
        return transactionDate >= monthDate && transactionDate <= nextMonth;
      case 'WEEK':
        const week = new Date(`${year}/${month}/${day - dateObj.getDay() - 1}`);
        return transactionDate >= week && transactionDate <= dateObj;
    }
  };

  if (!filters?.timeFilter && !filters?.typePayment) return data;

  const filterDataByTime = !filters.timeFilter
    ? data
    : data.filter((transaction) =>
        validateTime(transaction, filters.timeFilter),
      );
  const filterDataByPayment =
    !filters?.typePayment ||
    filters?.typePayment.some((filter) => filter === 'ALL')
      ? filterDataByTime
      : filterDataByTime.filter((transaction) =>
          [...filters.typePayment].some(
            (type) => type === transaction.typePayment,
          ),
        );
  return filterDataByPayment;
};
