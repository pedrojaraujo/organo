import styles from "./styles.module.css";

export const DropDown = ({ label, setTime, time }) => {
  const grupos = [
    {
      id: 1,
      name: "Programação",
    },
    {
      id: 2,
      name: "Front-End",
    },
    {
      id: 3,
      name: "Data Science",
    },
    {
      id: 4,
      name: "Devops",
    },
    {
      id: 5,
      name: "Ux e Design",
    },
    {
      id: 6,
      name: "Mobile",
    },
    {
      id: 7,
      name: "Inovação e Gestão",
    },
  ];

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
