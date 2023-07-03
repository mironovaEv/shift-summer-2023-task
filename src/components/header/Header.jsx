import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from '../header/Header.module.css';

const Header = () => {
  return (
    <Navbar data-bs-theme="dark" className={styles.header}>
      <Container>
        <Navbar.Brand href="#home">
          <img src="public/logo.png" />
        </Navbar.Brand>
        <Button variant="outline-dark" className={styles.loginButton}>
          Войти
        </Button>
        <button className={styles.logoutButton}>
          <img className="d-inline align-middle" src="public/logout-vector.svg" />
          <span className="ms-1 d-inline align-middle ">Выйти</span>
        </button>
      </Container>
    </Navbar>
  );
};

export default Header;
