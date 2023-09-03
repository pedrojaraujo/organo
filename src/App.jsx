import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import { v4 as uuidv4 } from "uuid";

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
  ]);
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Pedro Joaquim Araujo",
      post: "Programador Full Stack",
      image: "https://github.com/pedrojaraujo.png",
      time: "Programação",
    },
    {
      id: 2,
      name: "Martinez Silva",
      post: "Programador Mobile",
      image: "https://github.com/pedrojaraujo.png",
      time: "Mobile",
    },
    {
      id: 3,
      name: "Diogo Calabrez",
      post: "Programador Front-end",
      image: "https://github.com/pedrojaraujo.png",
      time: "Programação",
    },
  ]);

  const newEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteUser = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const changeColorTime = (color, id) => {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = color;
        }
        return time;
      }),
    );
  };

  const registerTeam = (newTeam) => {
    setTimes([...times, { ...newTeam, id: uuidv4() }]);
    setNomeTime("");
    setCorTime("");
  };
  return (
    <div className="App">
      <Banner />
      <Form
        nomeTime={nomeTime}
        corTime={corTime}
        setNomeTime={setNomeTime}
        setCorTime={setCorTime}
        registerTeam={registerTeam}
        grupos={times}
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
