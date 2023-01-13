import { useFilterDataContext } from '../../context/FilterData';
import { formatDate, formatPrice } from '../../utils/formats';
import { MdPhonelinkRing } from 'react-icons/md';
import { MdLink } from 'react-icons/md';

import styles from './Table.module.scss';

const Table = () => {
  const { filteredData, filters } = useFilterDataContext();
  const getTimeLabel = (time: 'DAY' | 'WEEK' | 'MONTH' | '') => {
    const month = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Deciembre',
    ];
    const today = new Date();
    switch (time) {
      case 'DAY':
        return 'hoy';
      case 'WEEK':
        return 'esta semana';
      default:
        return month[today.getMonth()];
    }
  };
  return (
    <div className={styles['table-container']}>
      <header className={styles.header}>
        <h4> Total de ventas de {getTimeLabel(filters?.timeFilter || '')}</h4>
      </header>
      <div style={{ overflowX: 'auto' }}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Transaccion</th>
              <th>Fecha y hora</th>
              <th>Metodo de pago</th>
              <th>ID transaccion bold</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((transaction) => (
              <tr key={transaction.IDTransaction}>
                <td>
                  {transaction.typePayment === 'LINK' ? (
                    <MdLink />
                  ) : (
                    <MdPhonelinkRing />
                  )}{' '}
                  {transaction.transactionStatus === 'SUCCESS'
                    ? 'Cobro exitoso'
                    : 'Cobro no realizado'}
                </td>
                <td>{formatDate(transaction.date)}</td>
                <td>{transaction.payMethod}</td>
                <td>{transaction.IDTransaction}</td>
                <td>{formatPrice().format(transaction.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
