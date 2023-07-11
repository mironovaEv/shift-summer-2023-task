/* eslint-disable react/prop-types */
import styles from './Buttons.module.css';

const LightButton = ({ text }) => {
  return (
    <button className={styles.lightButton} type="submit">
      {text}
    </button>
  );
};

export default LightButton;
