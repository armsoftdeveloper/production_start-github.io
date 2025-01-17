import {
    ADD_CASH,
    GET_CASH
} from "./types";

const action = { type: "", payload: "" }
const defaultState = {
  cash: 0
}

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASH:
            return { ...state, cash: state.cash + action.payload }
        case GET_CASH:
            return { ...state, cash: state.cash - action.payload }
        default:
            return state
    }
}
