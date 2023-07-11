import { Container, Form } from 'react-bootstrap';
import styles from './Login.module.css';
import RedButton from '../ui/buttons/RedButton';

const Login = () => {
  return (
    <Container className="d-flex align-middle justify-content-center">
      <div className={styles.loginContainer}>
        <h3 className={styles.loginTitle}>Авторизация</h3>
        <Form className="row  m-0 mt-4">
          <Form.Group className="p-0">
            <Form.Label className={styles.phoneNumber}>Номер телефона*</Form.Label>
            <Form.Control className={styles.input} type="text" />
          </Form.Group>
          <RedButton text={'Продолжить'} />
        </Form>
      </div>
    </Container>
  );
};

export default Login;
