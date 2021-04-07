import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const [name, setName] = useState('default name');
  const { ids } = useParams();

  useEffect(() => {
    // console.log('id is ',ids)
    const newPerson = data.find(person => 
     { 
      //  console.log(person.id === parseInt(ids))
       return person.id === parseInt(ids)
      }
      // console.log(person.id);
    );
    // for()
    // console.log(newPerson.name);
    setName(newPerson.name);
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <Link to='/people' className='btn'>
        Back To People
      </Link>
    </div>
  );
};

export default Person;
