/* eslint-disable react/prop-types */
import styles from './Buttons.module.css';

const RedButton = ({ text }) => {
  return (
    <button className={styles.redButton} type="submit">
      {text}
    </button>
  );
};

export default RedButton;
