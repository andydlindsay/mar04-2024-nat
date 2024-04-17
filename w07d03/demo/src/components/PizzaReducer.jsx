import {useState, useReducer} from 'react';

const ADD_NEW_TOPPING = 'add-new-topping';
const SET_CRUST_TYPE = 'set-crust-type';

const reducer = (state, action) => {
  if (action.type === ADD_NEW_TOPPING) {
    return {
      ...state,
      toppings: [
        ...state.toppings,
        action.payload
      ]
    };
  }

  if (action.type === SET_CRUST_TYPE) {
    return {
      ...state,
      crustType: action.payload
    };
  }
};

const initialState = {
  toppings: [],
  crustType: 'pan'
};

const Pizza = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [newTopping, setNewTopping] = useState('');

  const onAddClick = () => {
    dispatch({ type: ADD_NEW_TOPPING, payload: newTopping });
  };

  const onChangeCrust = (event) => {
    dispatch({ type: SET_CRUST_TYPE, payload: event.target.value });
  };

  const mappedToppings = state.toppings.map((topping, index) => {
    return <p key={index}>{topping}</p>;
  });

  return (
    <div>
      <h2>Pizza Component</h2>

      <div>
        <h3>Crust: {state.crustType}</h3>
        <label>Crust type:</label>
        <input 
          value={state.crustType}
          onChange={onChangeCrust}
        />
      </div>

      <div>
        <label>New topping:</label>
        <input 
          value={newTopping}
          onChange={(event) => { setNewTopping(event.target.value) }}
        />
        <button onClick={onAddClick}>Add</button>
      </div>

      <div>
        { mappedToppings }
      </div>
    </div>
  );
};

export default Pizza;
