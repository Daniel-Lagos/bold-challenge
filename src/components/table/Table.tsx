import styles from './Table.module.scss';

const Table = () => {
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
            <tr>
              <td>Cobro Exitoso</td>
              <td>04/06/2022</td>
              <td>**** **** **** 7711</td>
              <td>FD87SDF87G876GFG</td>
              <td>$250000</td>
            </tr>
            <tr>
              <td>Cobro Exitoso</td>
              <td>04/06/2022</td>
              <td>**** **** **** 7711</td>
              <td>FD87SDF87G876GFG</td>
              <td>$250000</td>
            </tr>
            <tr>
              <td>Cobro Exitoso</td>
              <td>04/06/2022</td>
              <td>**** **** **** 7711</td>
              <td>FD87SDF87G876GFG</td>
              <td>$250000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
