import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  formType: "",
  modalType: "",
  openModal: false,
  titleModal: "",
  popConfirm: "",
  uploadImg: '',
  formImg: '',
  actualizar: false,
  placeholderInput: "",
  form: {
    name: "",
    img: "",
    description: "",
    stock: "",
    category: "",
  },

};

export const dataExtra = createSlice({
  name: "dataExtra",
  initialState,
  reducers: {
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
    changeFormImg: (state, actions) => {
      state.formImg = actions.payload;
    },
    changeActualizar: (state, actions) => {
      state.actualizar = actions.payload;
    },
    changeModalType: (state, actions) => {
      state.modalType = actions.payload;
    },

    changeUploadImg: (state, actions) => {
      state.uploadImg = actions.payload;
    },
  },
});
export const {
  changeActualizar,
  changeFormType,
  changeOpenModal,
  changePopConfirm,
  changeModalType,
  changeTitleModal,
  changeFormImg,
  changeUploadImg
} = dataExtra.actions;

export default dataExtra.reducer;
