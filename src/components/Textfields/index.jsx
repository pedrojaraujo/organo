import styles from "./styles.module.css";

export const Textfields = ({
  label,
  placeholder,
  type,
  value,
  setState,
  className,
}) => {
  const stateInput = (e) => {
    setState(e.target.value);
  };

  return (
    <div className={styles.input__container}>
      <label className={styles.label__input}>{label}</label>
      <input
        value={value}
        onChange={stateInput}
        type={type}
        className={type === "color" ? styles.coloring : styles.input__text}
        placeholder={placeholder}
        required
      />
    </div>
  );
};
