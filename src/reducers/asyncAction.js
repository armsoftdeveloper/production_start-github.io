import { addManyCustomers } from "./customerReducer"

export const fetchCustomers = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users') // Fetch multiple customers
            .then(response => response.json())
            .then(json => dispatch(addManyCustomers(json)));
    };
};
