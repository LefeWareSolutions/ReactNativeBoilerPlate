import {Action, Reducer} from 'redux';
import {Greeting} from '../models/IGreeting';

//// ------------- GLOBAL STATE ----------- ////
export interface InitialStoreState {
  greeting: Greeting;
}

//// ---------------- ACTIONS ------------- ////
const GET_INITIAL_STATE = 'GET_INITIAL_STATE';

export interface GetInitialStateAction {
  type: 'GET_INITIAL_STATE';
  greeting: Greeting;
}

export type KnownAction = GetInitialStateAction;

//// ---------------- ACTIONCREATORS------------- ////
export const actionCreators = {};

//// ---------------- REDUCER ------------- ////
export const reducer: Reducer<InitialStoreState> = (
  state: InitialStoreState | undefined,
  incomingAction: Action,
): InitialStoreState => {
  if (state === undefined) {
    return {
      greeting: {
        greeting: 'Hello World',
      },
    };
  }

  const action = incomingAction as KnownAction;
  switch (action.type) {
    case GET_INITIAL_STATE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
