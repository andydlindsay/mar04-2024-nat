import {useState} from 'react';

const Pizza = () => {
  const [newTopping, setNewTopping] = useState('');

  // const [toppings, setToppings] = useState([]);
  // const [crustType, setCrustType] = useState('stuffed');

  const [pizza, setPizza] = useState({
    toppings: [],
    crustType: 'pan'
  });

  const onAddClick = () => {
    // const copy = [...toppings, newTopping];
    // setToppings(copy);

    const copy = {
      ...pizza,
      toppings: [
        ...pizza.toppings,
        newTopping
      ]
    };
    setPizza(copy);
  };

  const mappedToppings = pizza.toppings.map((topping, index) => {
    return <p key={index}>{topping}</p>;
  });

  const onChangeCrust = (event) => {
    const copy = {
      ...pizza,
      crustType: event.target.value
    };
    setPizza(copy);
  };

  return (
    <div>
      <h2>Pizza Component</h2>

      <div>
        <h3>Crust: {pizza.crustType}</h3>
        <label>Crust type:</label>
        <input 
          value={pizza.crustType}
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
