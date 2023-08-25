import styles from "./styles.module.css";

export const DropDown = ({ label, setTime, time, grupos }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <select
        onChange={(e) => setTime(e.target.value)}
        className={styles.select}
        required
      >
        <option value={time}>Selecione uma opção</option>
        {grupos.map((grupo) => (
          <option className={styles.option} key={grupo.id}>
            {grupo.name}
          </option>
        ))}
      </select>
    </div>
  );
};
