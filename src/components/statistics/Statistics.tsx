import { useState } from 'react';
import { useFilterDataContext } from '../../context/FilterData';
import styles from './Statistics.module.scss';

const Statistics = () => {
  const { filters, setFilters } = useFilterDataContext();
  const [typePayment, setTypePayment] = useState<
    Array<'LINK' | 'DATAPHONE' | 'ALL'>
  >(filters?.typePayment || []);
  const [open, setOpen] = useState(false);

  const handleTime = (time: 'DAY' | 'WEEK' | 'MONTH') => {
    setFilters({ ...filters, timeFilter: time });
  };

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTypePayment([...typePayment, value]);
    } else {
      setTypePayment(typePayment.filter((e) => e !== value));
    }
  };

  const handleSubmit = () => {
    setFilters({
      ...filters,
      typePayment: typePayment.length > 0 ? typePayment : null,
    });
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
          <button
            className={styles['time-button']}
            onClick={() => handleTime('DAY')}
          >
            Hoy
          </button>
          <button
            className={styles['time-button']}
            onClick={() => handleTime('WEEK')}
          >
            Esta semana
          </button>
          <button
            className={styles['time-button']}
            onClick={() => handleTime('MONTH')}
          >
            Septiembre
          </button>
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
                <input
                  type="checkbox"
                  value="DATAPHONE"
                  checked={typePayment.some((value) => value === 'DATAPHONE')}
                  onChange={handleChange}
                />
                <label>Cobro con datafono</label>
              </div>
              <div className={styles['input-content']}>
                <input
                  type="checkbox"
                  value="LINK"
                  onChange={handleChange}
                  checked={typePayment.some((value) => value === 'LINK')}
                />
                <label>Cobros con link de pago</label>
              </div>
              <div className={styles['input-content']}>
                <input
                  type="checkbox"
                  value="ALL"
                  onChange={handleChange}
                  checked={typePayment.some((value) => value === 'ALL')}
                />
                <label htmlFor="vehicle1">Ver todos</label>
              </div>
            </form>
            <br />
            <div style={{ display: 'flex', width: '100%' }}>
              <button onClick={handleSubmit} className={styles.submit}>
                Aplicar
              </button>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
