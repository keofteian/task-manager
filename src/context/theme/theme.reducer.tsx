import { Actions } from './theme.actions';

export interface IState {
    dark: boolean;
}
  
export const initialState: IState = {
    dark: false
};
  
export const reducer = (state: IState, action: Actions) => {
    switch (action.type) {
      case "TOGGLE_THEME":
        return { ...state, dark: !state.dark };
    }
};