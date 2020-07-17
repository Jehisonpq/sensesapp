import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPacientes } from "../redux/actions";

import RowPaciente from "../components/row-paciente";

const ListPacientes = () => {
  const pacientes = useSelector((state) => state.pacientes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPacientes());
  }, []);

  const handleRenderPacientes = () => {
    const allPacientes = pacientes.map((paciente) => (
      <RowPaciente
        key={paciente.id}
        id={paciente.id}
        nombre={paciente.data().name}
        apellido={paciente.data().lastname}
        telefono={paciente.data().mobile}
      />
    ));

    return allPacientes;
  };

  return (
    <>
      <ul className="list-items">
        <li className="titles">
          <div className="row">
            <div className="col-xl-4">NOMBRES</div>
            <div className="col-xl-2">CELULAR</div>
            <div className="col-xl-5">ÚLTIMOS PROCEDIMIENTOS</div>
            <div className="col-xl-1">ACCIONES</div>
          </div>
        </li>
        {handleRenderPacientes()}
      </ul>
    </>
  );
};

export default ListPacientes;
