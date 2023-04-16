import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  formType: "",
  modalType: "",
  openModal: false,
  titleModal: "",
  messageNotification: "",
  endPoint: '',
  actualizar: false,
  placeholderInput: "",
  labelName: ''
};

export const dataExtra = createSlice({
  name: "dataExtra",
  initialState,
  reducers: {
    changeLabelName: (state, actions) => {
      state.labelName = actions.payload;
    },
    changeFormType: (state, actions) => {
      state.formType = actions.payload;
    },
    changeOpenModal: (state, actions) => {
      state.openModal = actions.payload;
      state.uploadImg = ''
    },
    changeTitleModal: (state, actions) => {
      state.titleModal = actions.payload;
    },
    changeMessageNotification: (state, actions) => {
      state.messageNotification = actions.payload;
    },
    changeEndPoint: (state, actions) => {
      state.endPoint = actions.payload;
    },
    changeActualizar: (state, actions) => {
      state.actualizar = actions.payload;
    },
    changeModalType: (state, actions) => {
      state.modalType = actions.payload;
    },

  },
});
export const {
  changeLabelName,
  changeActualizar,
  changeEndPoint,
  changeFormType,
  changeOpenModal,
  changeMessageNotification,
  changeModalType,
  changeTitleModal,
} = dataExtra.actions;

export default dataExtra.reducer;
