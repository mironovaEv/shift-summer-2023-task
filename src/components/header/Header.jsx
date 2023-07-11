import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';
import styles from '../header/Header.module.css';
import LightButton from '../ui/buttons/LightButton';

const Header = () => {
  return (
    <Navbar data-bs-theme="dark" className={styles.header}>
      <Container>
        <Navbar.Brand className={styles.brand} href="#home">
          <img src="public/logo.png" />
        </Navbar.Brand>

        <LightButton text={'Войти'} />
        <button className={styles.logoutButton}>
          <img className="d-inline align-middle" src="public/logout-vector.svg" />
          <span className="ms-1 d-inline align-middle ">Выйти</span>
        </button>
      </Container>
    </Navbar>
  );
};

export default Header;
