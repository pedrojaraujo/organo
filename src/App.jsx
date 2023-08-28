import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";

function App() {
  const [times, setTimes] = useState([
    {
      id: 1,
      name: "Programação",
      cor: "#57c278",
    },
    {
      id: 2,
      name: "Front-End",
      cor: "#82cffa",
    },
    {
      id: 3,
      name: "Data Science",
      cor: "#a6d157",
    },
    {
      id: 4,
      name: "Devops",
      cor: "#ff6d6a",
    },
    {
      id: 5,
      name: "Ux e Design",
      cor: "#ffa0e7",
    },
    {
      id: 6,
      name: "Mobile",
      cor: "#ffba05",
    },
    {
      id: 7,
      name: "Inovação e Gestão",
      cor: "#ff8a29",
    },
  ])

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Pedro Joaquim Araujo",
      post: "Programador Full Stack",
      image: "https://github.com/pedrojaraujo.png",
      time: "Programação",
    },

  ]);

  const newEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteUser = () => {
    console.log("Deletou card!");
  };

  const changeColorTime = (color, id) => {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = color;
      }
      return time;
    }));
  };

  return (
    <div className="App">
      <Banner />
      <Form
        grupos={times}
        title="Preencha os dados para criar o card do colaborador."
        registeredEmployee={(employee) => newEmployee(employee)}
      />
      <section className="times">
        <h1>Distribuição de times</h1>
        {times.map((time) => (
          <Team
            key={time.id}
            name={time.name}
            cor={time.cor}
            setTimes={setTimes}
            deleteUser={deleteUser}
            changeColor={changeColorTime}
            time={time}
            employees={employees.filter(
              (employee) => employee.time === time.name,
            )}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
