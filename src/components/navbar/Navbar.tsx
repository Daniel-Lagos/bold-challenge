import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <header className={styles['header-container']}>
      <nav className={styles['navigation']}>
        <svg
          width="102"
          height="60"
          viewBox="0 0 102 60"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1687_16162)">
            <path d="M30.7002 36.4202H55.8948C55.289 42.9071 49.8718 48 43.2964 48C36.721 48 31.3049 42.9071 30.6991 36.4202H30.7002ZM12.7253 22.4844V47.9424C19.1418 47.3302 24.1835 41.8555 24.1835 35.2129C24.1835 28.5703 19.1418 23.0977 12.7253 22.4855V22.4844ZM43.2975 22.4268C36.7231 22.4268 31.306 27.5218 30.7002 34.0087H55.8948C55.289 27.5218 49.8718 22.4268 43.2964 22.4268H43.2975ZM0 31.7188V48.0011H10.2626V12H0V31.7188ZM91.4703 12V48H101.733V12H91.4703ZM77.623 35.2139C77.623 36.0224 77.7008 36.8117 77.8437 37.5785C78.8741 43.114 83.4454 47.4038 89.0822 47.9413V22.4844C82.6657 23.0966 77.624 28.5713 77.624 35.2139H77.623ZM61.0847 48H71.3473V12H61.0847V48Z"></path>
          </g>
          <defs>
            <clipPath id="clip0_1687_16162">
              <rect
                width="101.733"
                height="36"
                fill="white"
                transform="translate(0 12)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
        <div className={styles['action-content']}>
          <a className={styles['link']} href="/mi-negocio">
            mi negocio
          </a>
          <a className={styles['link']} href="https://bold.co/contacto.html">
            ayuda
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
