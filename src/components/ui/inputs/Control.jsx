/* eslint-disable react/prop-types */
import { Form } from 'react-bootstrap';
import styles from './Inputs.module.css';

const Control = ({ label, error }) => {
  return (
    <Form.Group className="p-0">
      <Form.Label className={styles.label}>{label}</Form.Label>
      <Form.Control className={styles.input} type="text" />
      <Form.Text>{error}</Form.Text>
    </Form.Group>
  );
};

export default Control;
