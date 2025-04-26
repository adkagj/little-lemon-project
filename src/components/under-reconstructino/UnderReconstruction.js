import styles from "./UnderConstruction.module.css";

// Under reconstruction page component
const UnderConstruction = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🚧 Under Construction 🚧</h1>
      <p className={styles.description}>
        We're working hard to improve this page. Please check back soon!
      </p>
      <div className={styles.spinner}>⚙️</div>
    </div>
  );
};

export default UnderConstruction;
