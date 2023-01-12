import { useState } from 'react';
import styles from './Statistics.module.scss';

const Statistics = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    setOpen(false);
  };

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
          <button
            className={styles['filter-button']}
            onClick={() => setOpen(true)}
          >
            filtrar
          </button>
          <dialog open={open} className={styles['dialog']}>
            <div className={styles['dialog-header']}>
              <p>FILTRAR</p>
              <p onClick={() => setOpen(false)}>X</p>
            </div>
            <form>
              <div className={styles['input-content']}>
                <input type="checkbox" value="Bike" />
                <label>Cobro con datafono</label>
              </div>
              <div className={styles['input-content']}>
                <input type="checkbox" value="Bike" />
                <label>Cobros con link de pago</label>
              </div>
              <div className={styles['input-content']}>
                <input type="checkbox" value="Bike" />
                <label htmlFor="vehicle1">Ver todos</label>
              </div>
            </form>
            <br />
            <button onClick={handleSubmit} className={styles.submit}>
              Aplicar
            </button>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
