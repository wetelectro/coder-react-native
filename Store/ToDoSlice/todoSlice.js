import { createSlice } from '@reduxjs/toolkit'

export const todoState = createSlice({
  name: 'todoState',
  initialState: {
    tasks: []
  },
  reducers: {
    addTask: (state, action) => {
        console.log('Adding a new task');
        state.tasks.push({
            id: Math.floor(Math.random() * 100000000),
            text: action.payload,
            isFinished: false
        });
    },
    deleteTask: (state, action) => {
        console.log('Deleting task with id : ' + action.payload );
        state.tasks.forEach( (task, index) => {
            if(task.id === action.payload){
                state.tasks.splice(index, 1);
            }
        })
    },
    finishTask: (state, action) => {
        console.log('Finishing task with id : ' + action.payload );
        state.tasks.forEach( (task, index) => {
            if(task.id === action.payload){
                task.isFinished = true;
            }
        })
    }
  }
})

export const { addTask, deleteTask, finishTask } = todoState.actions
export default todoState.reducer