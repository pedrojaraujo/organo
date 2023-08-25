import { useEffect, useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Team } from "./components/Team";

function App() {
  const times = [
    {
      id: 1,
      name: "Programação",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      id: 2,
      name: "Front-End",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
    },
    {
      id: 3,
      name: "Data Science",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2",
    },
    {
      id: 4,
      name: "Devops",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
    },
    {
      id: 5,
      name: "Ux e Design",
      corPrimaria: "#db6ebf",
      corSecundaria: "#fae9f5",
    },
    {
      id: 6,
      name: "Mobile",
      corPrimaria: "#ffba05",
      corSecundaria: "#fff5d9",
    },
    {
      id: 7,
      name: "Inovação e Gestão",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf",
    },
  ];

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Pedro Joaquim",
      post: "Programador",
      image: "https://github.com/pedrojaraujo.png",
      time: "Programação",
    }
  ]);

  const newEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  useEffect(() => {
    console.log(employees);
  }, [employees]);

  return (
    <div className="App">
      <Banner />
      <Form
        grupos={times}
        title="Preencha os dados para criar o card do colaborador."
        registeredEmployee={(employee) => newEmployee(employee)}
      />
      {times.map((time) => (
        <Team
          key={time.id}
          name={time.name}
          bgcolor={time.corSecundaria}
          bColor={time.corPrimaria}
          employees={employees}
        />
      ))}
    </div>
  );
}

export default App;
