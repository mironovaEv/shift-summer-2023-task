/* eslint-disable react/prop-types */
import { Form } from 'react-bootstrap';
import styles from './Inputs.module.css';

const Control = ({ label, error }) => {
  return (
    <div className="mb-2">
      <Form.Label className={styles.label}>{label}</Form.Label>
      <Form.Control className={styles.input} type="text" />
      <Form.Text>{error}</Form.Text>
    </div>
  );
};

export default Control;
