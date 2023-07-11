/* eslint-disable react/prop-types */
import styles from './Buttons.module.css';

const WhiteButton = ({ text }) => {
  return (
    <button disabled className={styles.whiteButton} type="submit">
      {text}
    </button>
  );
};

export default WhiteButton;
