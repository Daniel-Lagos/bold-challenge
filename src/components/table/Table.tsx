import { useFilterDataContext } from '../../context/FilterData';
import { formatDate, formatPrice } from '../../utils/formats';
import styles from './Table.module.scss';

const Table = () => {
  const { filteredData } = useFilterDataContext();
  return (
    <div className={styles['table-container']}>
      <header className={styles.header}>
        <h4> Total de ventas de septiembre</h4>
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
