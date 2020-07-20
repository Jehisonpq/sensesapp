import db from "../js/firebase";

export function cambiarNombre() {
  return {
    type: "CAMBIAR_NOMBRE",
  };
}

export function getPacientes() {
  return (dispatch) => {
    dispatch({ type: "GET_PACIENTES_START" });

    db.collection("patients")
      .where("active", "==", true)
      .orderBy("name", "asc")
      .get()
      .then((data) => {
        dispatch({ type: "GET_PACIENTES_SUCCESS", payload: data.docs });
      })
      .catch((error) => {
        dispatch({ type: "GET_PACIENTES_ERROR", error });
      });
  };
}

export function getInfoClinic() {
  return (dispatch) => {
    dispatch({ type: "GET_INFOCLINIC_START" });

    db.collection("info_clinic")
      .doc("AKtpYVg6lHRySHcFa9EN")
      .get()
      .then((info) => {
        dispatch({ type: "GET_INFOCLINIC_SUCCESS", payload: info.data() });
      })
      .catch((error) => {
        dispatch({ type: "GET_INFOCLINIC_ERROR", error });
      });
  };
}

export function getSetting() {
  return (dispatch) => {
    dispatch({ type: "GET_SETTING_START" });

    db.collection("setting")
      .doc("jK8ga1JxZdqy5em32PYB")
      .get()
      .then((info) => {
        dispatch({ type: "GET_SETTING_SUCCESS", payload: info.data() });
      })
      .catch((error) => {
        dispatch({ type: "GET_SETTING_ERROR", error });
      });
  };
}

export function getProcedimientos() {
  return (dispatch) => {
    dispatch({ type: "GET_PROCEDIMIENTOS_START" });

    db.collection("procedures")
      .get()
      .then((procedures) => {
        let listProceduresId = [];
        let listProceduresShortName = [];
        let listProceduresColor = [];

        procedures.forEach((procedure) => {
          const procedureId = procedure.id;
          const procedureName = procedure.data().short_name;
          const procedureColor = procedure.data().color;

          listProceduresId.push(procedureId);
          listProceduresShortName.push(procedureName);
          listProceduresColor.push(procedureColor);
        });

        dispatch({
          type: "GET_PROCEDIMIENTOS_SUCCESS",
          payload: procedures.docs,
          listProceduresId: listProceduresId,
          listProceduresShortName: listProceduresShortName,
          listProceduresColor: listProceduresColor,
        });
      })
      .catch((error) => {
        dispatch({ type: "GET_PROCEDIMIENTOS_ERROR", error });
      });
  };
}

export function updateInfoClinic(dataForm) {
  return (dispatch) => {
    dispatch({ type: "UPDATE_INFOCLINIC_START" });

    db.collection("info_clinic")
      .doc("AKtpYVg6lHRySHcFa9EN")
      .update(dataForm)
      .then(() => {
        console.log("Document successfully updated!");

        db.collection("info_clinic")
          .doc("AKtpYVg6lHRySHcFa9EN")
          .get()
          .then((info) => {
            dispatch({
              type: "UPDATE_INFOCLINIC_SUCCESS",
              payload: info.data(),
            });
          })
          .catch((error) => {
            dispatch({ type: "UPDATE_INFOCLINIC_ERROR", error });
          });
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  };
}

export function updateSettingsClinic(dataForm) {
  return (dispatch) => {
    dispatch({ type: "UPDATE_SETTINGS_CLINIC_START" });

    db.collection("setting")
      .doc("jK8ga1JxZdqy5em32PYB")
      .update(dataForm)
      .then(() => {
        console.log("Document successfully updated!");

        db.collection("setting")
          .doc("jK8ga1JxZdqy5em32PYB")
          .get()
          .then((info) => {
            dispatch({
              type: "UPDATE_SETTINGS_CLINIC_SUCCESS",
              payload: info.data(),
            });
          })
          .catch((error) => {
            dispatch({ type: "UPDATE_SETTINGS_CLINIC_ERROR", error });
          });
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  };
}
