import styles from "../../../common/styles";

export function Work({text = ''}) {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <div style={styles.text}>{text}</div>
      </div>
    </div>
  );
}
