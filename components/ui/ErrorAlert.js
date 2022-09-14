import styles from './errorAlert.module.css';

const ErrorAlert = props => {
  return <div className={styles.alert}>{props.children}</div>;
};

export default ErrorAlert;