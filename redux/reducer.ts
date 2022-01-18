import { combineReducers } from 'redux';
import exampleReducer from './example/reducer';
import { login, loginUser } from './auth/reducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  exampleReducer,
  login,
  loginUser,
  form: reduxFormReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
