import styles from './Statistics.module.scss';

const Statistics = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <header className={styles.header}>
          <h4> Total de ventas de septiembre</h4>
          <p>icon</p>
        </header>
        <div className={styles.content}>
          <h2 className={styles.price}>$1560.000</h2>
          <p>Septiembre 21</p>
        </div>
      </div>

      <div className={styles['statistics-container']}>
        <div className={styles['time-statistics']}>
          <button className={styles['time-button']}>Hoy</button>
          <button className={styles['time-button']}>Esta semana</button>
          <button className={styles['time-button']}>Septiembre</button>
        </div>
        <div className={styles['filter-content']}>
          <button className={styles['filter-button']}>filtrar</button>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
