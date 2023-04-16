import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  formType: "",
  modalType: "",
  openModal: false,
  titleModal: "",
  popConfirm: "",
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
    changePopConfirm: (state, actions) => {
      state.popConfirm = actions.payload;
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
  changePopConfirm,
  changeModalType,
  changeTitleModal,
} = dataExtra.actions;

export default dataExtra.reducer;
