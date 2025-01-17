import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeAllCustomers } from './reducers/customerReducer';
import { getCustomerAction, removeCustomerAction } from './reducers/customerReducer';
import { fetchCustomers } from './reducers/asyncAction';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash); // Assuming cashReducer returns a number
  const customers = useSelector(state => state.customers.customers); // Assuming customerReducer has a customers array

  const handleAddCash = (cash) => {
    dispatch({
      type: "ADD_CASH",
      payload: cash,
    });
  };

  const handleGetCash = (cash) => {
    dispatch({
      type: "GET_CASH",
      payload: cash,
    });
  };

  const handleCustomersAdd = (name) => {
    const customerData = { name, id: Date.now() };
    dispatch(addCustomerAction(customerData));
  };

  const handleCustomersGet = (name) => {
    const customerData = { name, id: Date.now() };
    dispatch(getCustomerAction(customerData));
  };

  const handleRemoveCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  const handleRemoveAllCustomers = () => {
    dispatch(removeAllCustomers());
  };

  return (
    <div className="App">
      <h1>Cash: {cash}</h1>
      <button onClick={() => handleAddCash(Number(prompt("Enter cash to add:")))}>Add Cash</button>
      <button onClick={() => handleGetCash(Number(prompt("Enter cash to get:")))}>Get Cash</button>
      <hr />
      <button onClick={() => dispatch(fetchCustomers())}>Get All Customers</button>
      <button onClick={() => handleCustomersAdd(prompt("Enter customer name to add"))}>
        Customers Add
      </button>
      <button onClick={() => handleCustomersGet(prompt("Enter customer name to get"))}>
        Customers Get
      </button>
      {customers.length > 0 ? (
        <>
          <div>
            {customers.map((customer) => (
              <div key={customer.id} onClick={() => handleRemoveCustomer(customer)}>
                {customer.name}
              </div>
            ))}
          </div>
          <button onClick={() => handleRemoveAllCustomers()}>Remove All Customers</button>
        </>
      ) : (
        <div>Customers Empty</div>
      )}
    </div>
  );
}

export default App;
