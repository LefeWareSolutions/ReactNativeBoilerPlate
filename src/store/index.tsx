import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  AnyAction,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import * as InitialStore from './initialStore';

export interface ApplicationState {
  initialStore: InitialStore.InitialStoreState;
}

const combinedReducer = combineReducers({
  initialStore: InitialStore.reducer,
});

const rootReducer = (state: any, action: AnyAction) => {
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
