import { useEffect, useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";

function App() {
  const [employees, setEmployees] = useState([]);


  const newEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  useEffect(() => {
    console.log(employees);
  }, [employees])

  return (
    <div className="App">
      <Banner />
      <Form
        title="Preencha os dados para criar o card do colaborador."
        registeredEmployee={(employee) => newEmployee(employee)}
      />
    </div>
  );
}

export default App;
