const initialState = {
  pacientes: [],
  procedimientos: [],
  listProceduresId: [],
  listProceduresShortName: [],
  listProceduresColor: [],
  infoClinic: [],
  setting: [],
  isLoading: false,
  isUpdating: false,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PROCEDIMIENTOS_START":
      return {
        ...state,
        isLoading: true,
        procedimientos: [],
        listProceduresId: [],
        listProceduresShortName: [],
        listProceduresColor: [],
        error: null,
      };
    case "GET_PROCEDIMIENTOS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: false,
        procedimientos: action.payload,
        listProceduresId: action.listProceduresId,
        listProceduresShortName: action.listProceduresShortName,
        listProceduresColor: action.listProceduresColor,
      };
    case "GET_PROCEDIMIENTOS_ERROR":
      return {
        ...state,
        isLoading: false,
        procedimientos: null,
        listProceduresId: null,
        listProceduresShortName: null,
        listProceduresColor: null,
        error: action.error,
      };
    case "GET_INFOCLINIC_START":
      return {
        ...state,
        isLoading: true,
        infoClinic: [],
        error: null,
      };
    case "GET_INFOCLINIC_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: false,
        infoClinic: action.payload,
      };
    case "GET_INFOCLINIC_ERROR":
      return {
        ...state,
        isLoading: false,
        infoClinic: null,
        error: action.error,
      };
    case "GET_SETTING_START":
      return {
        ...state,
        isLoading: true,
        setting: [],
        error: null,
      };
    case "GET_SETTING_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: false,
        setting: action.payload,
      };
    case "GET_SETTING_ERROR":
      return {
        ...state,
        isLoading: false,
        setting: null,
        error: action.error,
      };
    case "GET_PACIENTES_START":
      return {
        ...state,
        isLoading: true,
        pacientes: [],
        error: null,
      };
    case "GET_PACIENTES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: false,
        pacientes: action.payload,
      };
    case "GET_PACIENTES_ERROR":
      return {
        ...state,
        isLoading: false,
        pacientes: null,
        error: action.error,
      };
    case "UPDATE_INFOCLINIC_START":
      return {
        ...state,
        isUpdating: true,
        infoClinic: [],
        error: null,
      };
    case "UPDATE_INFOCLINIC_SUCCESS":
      return {
        ...state,
        isUpdating: false,
        error: false,
        infoClinic: action.payload,
      };
    case "UPDATE_INFOCLINIC_ERROR":
      return {
        ...state,
        isUpdating: false,
        infoClinic: null,
        error: action.error,
      };
    case "UPDATE_SETTINGS_CLINIC_START":
      return {
        ...state,
        isUpdating: true,
        infoClinic: [],
        error: null,
      };
    case "UPDATE_SETTINGS_CLINIC_SUCCESS":
      return {
        ...state,
        isUpdating: false,
        error: false,
        infoClinic: action.payload,
      };
    case "UPDATE_SETTINGS_CLINIC_ERROR":
      return {
        ...state,
        isUpdating: false,
        infoClinic: null,
        error: action.error,
      };
    default:
      return state;
  }
}

export default reducer;
