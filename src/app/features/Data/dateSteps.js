import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  paso1: "",
  paso2: "",
  paso3: "",
  paso4: "",
  paso5: "",
  currentSteps: 0,
  steps: [
    {
      title: "First",
    },
  ],
  stepsDefault: [
    {
      title: "First",
    },
  ],
};
export const steps = createSlice({
  name: "steps",
  initialState,
  reducers: {
    changeSteps: (state, actions) => {
      state.steps[0].content = actions.payload.contentFirst;
      state.steps.push(actions.payload.second);
      actions.payload.thirst ? state.steps.push(actions.payload.thirst) : "";
      actions.payload.four ? state.steps.push(actions.payload.four) : "";
    },
    changeStepsDefault: (state, actions) => {
      state.paso1 = "";
      state.paso2 = "";
      state.paso3 = "";
      state.paso4 = "";
      state.currentSteps = 0;
      state.steps = state.stepsDefault;
    },
    changeCurrentSteps: (state, actions) => {
      state.currentSteps = actions.payload;
    },
    changePaso1: (state, actions) => {
      state.paso1 = actions.payload;
    },
    changePaso2: (state, actions) => {
      state.paso2 = actions.payload;
    },
    changePaso3: (state, actions) => {
      state.paso3 = actions.payload;
    },
    changePaso4: (state, actions) => {
      state.paso4 = actions.payload;
    },
    changePaso5: (state, actions) => {
      state.paso5 = actions.payload;
    },
  },
});
export const {
  changeCurrentSteps,
  changeStepsDefault,
  changeSteps,
  changePaso1,
  changePaso2,
  changePaso3,
  changePaso4,
  changePaso5,
} = steps.actions;
export default steps.reducer;
