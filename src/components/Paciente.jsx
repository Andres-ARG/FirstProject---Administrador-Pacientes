/* eslint-disable react/prop-types */

const Paciente = ({ paciente, setPaciente, pacientes, setPacientes }) => {
  const eliminarPaciente = (id) => {
    const respuesta = confirm("Deseas eliminar este paciente?");

    if (respuesta) {
      const actualizacionPacientes = pacientes.filter(
        (paciente) => paciente.id !== id
      );
      setPacientes(actualizacionPacientes);
    }
  };

  const { nombre, propietario, email, fecha, sintomas } = paciente;

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        NOMBRE: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        PROPIETARIO:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        EMAIL: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        FECHA ALTA: <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        SÍNTOMAS: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between">
        <button
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          editar
        </button>
        <button className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" onClick={() => eliminarPaciente(paciente.id)}>
          eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
