import { useState, useEffect } from "react";

import ListadoPacientes from "./components/ListadoPacientes";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLS);
    };
    obtenerLS();
  }, []);
  
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);
  
  return (
    <>
      <div className="container mt-10 mx-auto">
        <Header />
        <div className="mt-12 md:flex ">
          <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
        </div>
      </div>
    </>
  );
}

export default App;
