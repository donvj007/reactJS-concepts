import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people,setPeople] = React.useState(data);
  const removeItem = (id) =>{
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }
  return (<>
  {
    people.map((p) => {
      const {id,name} = p;
      return (
        <div key = {id} className='item'>
          <h4>{name}</h4>
          <button onClick={() => removeItem(id)}>remove</button>
        </div>
      );
    })
  }
  <button className = 'btn' onClick = {()=>setPeople([])}>clear item</button>
  </>);
};

export default UseStateArray;
