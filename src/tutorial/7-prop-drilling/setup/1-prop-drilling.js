import React, { useState } from 'react';
import {data} from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people,setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
     
    })

  };
  return (
    <>
      <h2>prop drilling</h2>
      <List people1 = {people} removePerson={removePerson}/>
    </>
  );
};

const List = ({people1,removePerson}) => {
  return (
    <>
      {people1.map((person) =>{
        return <SinglePerson key={person.id}{...person} removePerson={removePerson}/>
      })}
    </>
  );
}

const SinglePerson = ({id,name,removePerson}) =>{
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick = {()=>removePerson(id)}>remove</button>
    </div>
  )
}

export default PropDrilling;
