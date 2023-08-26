import { Card } from "../Card";
import styles from "./styles.module.css";

export const Team = ({ name, bgcolor, bColor, employees, deleteUser }) => {
  return employees.length > 0 ? (
    <>
      <section
        className={styles.container}
        style={{
          backgroundColor: bgcolor,
        }}
      >
        <input type="color" className={styles.inputColor} />
        <h3
          className={styles.h3}
          style={{
            borderBottomColor: bColor,
          }}
        >
          {name}
        </h3>
        <div className={styles.containerCard}>
          {employees.map((employee) => {
            return (
              <Card
                deleteUser={deleteUser}
                key={employee.id}
                bColor={bColor}
                name={employee.name}
                post={employee.post}
                image={employee.image}
              />
            );
          })}
        </div>
      </section>
    </>
  ) : (
    ""
  );
};
