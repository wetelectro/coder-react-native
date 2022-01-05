import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import ReduxThunk from 'redux-thunk';

import globalReducers from './AppState/appState';
import todoReducers from './ToDoSlice/todoSlice';

export default configureStore({
  reducer: {
    app : globalReducers,
    todo: todoReducers
  }
}, applyMiddleware(ReduxThunk));