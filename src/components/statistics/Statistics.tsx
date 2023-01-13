import { useState } from 'react';
import { useFilterDataContext } from '../../context/FilterData';
import { MdOutlineHelpOutline } from 'react-icons/md';
import { MdOutlineClose } from 'react-icons/md';
import { MdFilterList } from 'react-icons/md';
import styles from './Statistics.module.scss';
import { formatPrice } from '../../utils/formats';

const Statistics = () => {
  const { filters, setFilters, filteredData } = useFilterDataContext();
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
  const getTimeLabel = (time: 'DAY' | 'WEEK' | 'MONTH' | '') => {
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
    <div className={styles.container}>
      <div className={styles.card}>
        <header className={styles.header}>
          <h4> Total de ventas de {getTimeLabel(filters?.timeFilter || '')}</h4>
          <MdOutlineHelpOutline />
        </header>
        <div className={styles.content}>
          <h2 className={styles.price}>
            {formatPrice().format(
              filteredData.reduce((acc, cu) => acc + cu.amount, 0),
            )}
          </h2>
          <p>{getTimeLabel(filters?.timeFilter || '')}, 2023</p>
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
            {month[new Date().getMonth()]}
          </button>
        </div>
        <div className={styles['filter-content']}>
          <button
            className={styles['filter-button']}
            onClick={() => setOpen(true)}
          >
            filtrar
            <MdFilterList />
          </button>
          <dialog open={open} className={styles['dialog']}>
            <div className={styles['dialog-header']}>
              <p>FILTRAR</p>
              <MdOutlineClose
                style={{ cursor: 'pointer' }}
                onClick={() => setOpen(false)}
              />
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
