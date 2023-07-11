import { Container, Form } from 'react-bootstrap';
import styles from './Login.module.css';
import RedButton from '../ui/buttons/RedButton';
import Control from '../ui/inputs/Control';
import LightButton from '../ui/buttons/LightButton';
import WhiteButton from '../ui/buttons/WhiteButton';

const Login = () => {
  return (
    <Container className="d-flex align-middle justify-content-center">
      <div className={styles.loginContainer}>
        <h3 className={styles.loginTitle}>Авторизация</h3>
        <Form className="row  m-0 mt-4">
          <Form.Group className="p-0 mb-4">
            <Control label={'Номер телефона*'} />
            <Control label={'Код из SMS'} />
          </Form.Group>
          <Form.Text className={styles.time} muted>
            Запросить код повторно можно через 39 секунд
          </Form.Text>
          <WhiteButton text={'Запросить код'} />
          <LightButton text={'Запросить код'} />
          <RedButton text={'Продолжить'} />
        </Form>
      </div>
    </Container>
  );
};

export default Login;
