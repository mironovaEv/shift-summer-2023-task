import { Container, Form } from 'react-bootstrap';
import styles from './Login.module.css';
import RedButton from '../ui/buttons/RedButton';
import Control from '../ui/inputs/Control';

const Login = () => {
  return (
    <Container className="d-flex align-middle justify-content-center">
      <div className={styles.loginContainer}>
        <h3 className={styles.loginTitle}>Авторизация</h3>
        <Form className="row  m-0 mt-4">
          <Control label={'Номер телефона*'} />
          <RedButton text={'Продолжить'} />
        </Form>
      </div>
    </Container>
  );
};

export default Login;
