import { Card } from "../Card";
import styles from "./styles.module.css";

export const Team = ({ name, bgcolor, bColor, employees }) => {
  return (
    <section
      className={styles.container}
      style={{
        backgroundColor: bgcolor,
      }}
    >
      <h3
        className={styles.h3}
        style={{
          borderBottomColor: bColor,
        }}
      >
        {name}
      </h3>
      <div className={styles.containerCard}>
        {employees.map((employee) => (
          <Card
            key={employee.id}
            bColor={bColor}
            name={employee.name}
            post={employee.post}
            image={employee.image} />
        ))}
      </div>
    </section >
  );
};
