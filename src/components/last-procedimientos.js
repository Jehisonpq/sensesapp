import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import db from "../js/firebase";

import TagProcedimiento from "../components/tag-procedimiento";

const LastProcedimientos = (props) => {
  const setting = useSelector((state) => state.setting);
  const [procedimientosPaciente, setProcedimientos] = useState({});

  useEffect(() => {
    listProcedures();
  }, []);

  const listProcedures = () => {
    db.collection("patients/" + props.id + "/appointments")
      .orderBy("date", "desc")
      .get()
      .then((info) => {
        setProcedimientos(info);
        return procedimientosPaciente;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRenderProcedures = () => {
    const newProcedimientosPaciente = newListLastProcedures();

    if (!newProcedimientosPaciente) return;

    const listProcedures = newProcedimientosPaciente.map((item, index) => (
      <TagProcedimiento key={index} id={item} color="#f500a9" />
    ));

    return listProcedures;
  };

  const newListLastProcedures = () => {
    if (Object.keys(procedimientosPaciente).length === 0) return;

    let flag = 0;
    let newListProcedures = [];
    procedimientosPaciente.forEach((procedure) => {
      const limit = setting.number_procedures_patients_list;

      for (let i = procedure.data().id_procedures.length - 1; i >= 0; i--) {
        let idProcedure = procedure.data().id_procedures[i];

        if (flag < limit) {
          newListProcedures.push(idProcedure);
          flag = flag + 1;
        }
      }
    });

    return newListProcedures;
  };

  return (
    <div className="list-tags list-procedures">{handleRenderProcedures()}</div>
  );
};

export default LastProcedimientos;
