import { 
    ADD_CUSTOMERS,
    GET_CUSTOMERS,
    REMOVE_CUSTOMERS,
    REMOVE_ALL_CUSTOMERS,
    ADD_MANY_CUSTOMERS,
} from "./types";

const defaultState = {
    customers: []
};

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return {
                ...state,
                customers: [...state.customers, ...action.payload] // Correctly spread the payload array
            };
        case ADD_CUSTOMERS:
            return {
                ...state, 
                customers: [...state.customers, action.payload],
            };
        case GET_CUSTOMERS:
            return {
                ...state,
                customers: [...state.customers, action.payload],
            };
        case REMOVE_CUSTOMERS:
            return {
                ...state,
                customers: state.customers.filter(customer => customer.id !== action.payload),
            };
        case REMOVE_ALL_CUSTOMERS:
            return {
                ...state,
                customers: [], // Reset customers array
            };
        default:
            return state;
    }
};

export const addManyCustomers = (payload) => ({ type: ADD_MANY_CUSTOMERS, payload });
export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMERS, payload });
export const getCustomerAction = (payload) => ({ type: GET_CUSTOMERS, payload });
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMERS, payload });
export const removeAllCustomers = () => ({ type: REMOVE_ALL_CUSTOMERS });
