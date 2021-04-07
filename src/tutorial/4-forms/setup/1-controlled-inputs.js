import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(firstName,email);
    if(firstName && email){
      // const person = {firstName : firstName, email : email};
      const person = {id: new Date().getTime.toString(),firstName , email }; //same herees6 syntax if state name matches object property
      
      setPeople((people) => {
        return [...people, person]
      });
      setFirstName('');
      setEmail('');
      
    }
    else{
      console.log("empty values");
    }
    console.log(people);
  }
  return (
    <article>
      <form className='form' >
        <div className = 'form-control'>
          <label htmlFor='firstName'>Name : </label>
          <input type='text' id='firstName' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </div>

        <div className = 'form-control'>
          <label htmlFor='email'>Email : </label>
          <input type='text' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <button type='submit' className='btn' onClick={handleSubmit}>add person</button>
        <h5>{firstName}</h5>
        <h5>{email}</h5>
      </form>
      {
        people.map((person) => {
          const {id,firstName,email} = person;
          return <div className='item' key={id}>
            <h4>{firstName}</h4>
            <h6>{email}</h6>
          </div>
        })
      }
    </article>
  );
};

export default ControlledInputs;
