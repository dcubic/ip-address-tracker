import styles from './InformationBlock.module.css';

export default function InformationBlock({ name, value }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.value}>{value}</p>
    </div>
  );
}
