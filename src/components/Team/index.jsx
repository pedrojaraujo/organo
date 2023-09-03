import hexToRgba from "hex-to-rgba";
import { Card } from "../Card";
import styles from "./styles.module.css";

export const Team = ({
  name,
  employees,
  deleteUser,
  changeColor,
  time,
  cor,
}) => {
  return employees.length > 0 ? (
    <>
      <section
        className={styles.container}
        style={{ backgroundColor: hexToRgba(cor, "0.6") }}
      >
        <input
          value={cor}
          onChange={(e) => changeColor(e.target.value, time.id)}
          type="color"
          className={styles.inputColor}
        />
        <h3 className={styles.h3}>{name}</h3>
        <div className={styles.containerCard}>
          {employees.map((employee) => {
            return (
              <Card
                deleteUser={deleteUser}
                key={employee.id}
                id={employee.id}
                cor={cor}
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
