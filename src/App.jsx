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
      cor: "#d9f7e9",
    },
    {
      id: 2,
      name: "Front-End",
      cor: "#e8f8ff",
    },
    {
      id: 3,
      name: "Data Science",
      cor: "#f0f8e2",
    },
    {
      id: 4,
      name: "Devops",
      cor: "#fde7e8",
    },
    {
      id: 5,
      name: "Ux e Design",
      cor: "#fae9f5",
    },
    {
      id: 6,
      name: "Mobile",
      cor: "#fff5d9",
    },
    {
      id: 7,
      name: "Inovação e Gestão",
      cor: "#ffeedf",
    },
  ])

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Pedro Joaquim Araujo",
      post: "Programador Front-End",
      image: "https://github.com/pedrojaraujo.png",
      time: "Programação",
    },
    {
      id: 2,
      name: "Marcelo",
      post: "Data Scientist",
      image:
        "https://image-resize.qconcursos.com/?image=https%3A%2F%2Fassets.atlas.grupoq.io%2Finstructors%2F39289c1d-11e1-4298-a95a-cbf39646518b.png&fit=scale-down&width=576&quality=75",
      time: "Data Science",
    },
    {
      id: 3,
      name: "Pedro ",
      post: "Back-End",
      image: "https://github.com/pedrojaraujo.png",
      time: "Programação",
    },
    {
      id: 4,
      name: "Pedro Joaquim Araujo",
      post: "Front-End Developer",
      image: "https://github.com/pedrojaraujo.png",
      time: "Front-End",
    },
    {
      id: 5,
      name: "Pedro Joaquim Araujo",
      post: "Devops",
      image: "https://github.com/pedrojaraujo.png",
      time: "Devops",
    },
    {
      id: 6,
      name: "Pedro Joaquim Araujo",
      post: "Mobile Engineer",
      image: "https://github.com/pedrojaraujo.png",
      time: "Mobile",
    },
    {
      id: 7,
      name: "Pedro Joaquim Araujo",
      post: "Designer",
      image: "https://github.com/pedrojaraujo.png",
      time: "Ux e Design",
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
