import { configureStore } from '@reduxjs/toolkit';
import heroesReducer from '../reducers/heroesReducer';
import filtersReducer from '../reducers/filtersReducer';

const store = configureStore({
  reducer: {
    heroesReducer,
    filtersReducer,
  },
});

export default store;
