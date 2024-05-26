import { createSlice } from "@reduxjs/toolkit";

// export interface QuestionState {
//   queue: string[];
//   answer: string[];
//   trace: number;
// }

// // const initialState: QuestionState = {
// //   queue: [], //store all questions,get from database
// //   answer: [], //store all answers
// //   trace: 0, //the question number
// // };
export const questionReducer = createSlice({
  name: "questions",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    //specify and dispatch an action, the action change the value
    //of the store. use createSlice it automatically create action
    startExamAction: (state, action) => {
      //access the value of user input by action
      //state is current state
      let { question, answers } = action.payload;
      return {
        ...state,
        queue: question, //get user input value
        answers,
      };
    },
    moveNextAction: (state) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
    movePrevAction: (state) => {
      return {
        ...state,
        trace: state.trace - 1,
      };
    },
    resetAllAction: () => {
      return {
        queue: [],
        answers: [],
        trace: 0,
      };
    },
  },
});

export const {
  startExamAction,
  moveNextAction,
  movePrevAction,
  resetAllAction,
} = questionReducer.actions;
export default questionReducer.reducer;
