import React, {useState, useEffect} from 'react';

function Postgres() {
  const [people, setPeople] = useState(false);
  useEffect(() => {
    getPeople();
  }, []);
  function getPeople() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setPeople(data);
      });
  }
  function createPeople() {
    let name = prompt('Enter user name');
    let email = prompt('Enter user email');
    fetch('http://localhost:3001/people', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getPeople();
      });
  }
  function deletePeople() {
    let id = prompt('Enter user id');
    fetch(`http://localhost:3001/people/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getPeople();
      });
  }
  return (
    <div>
      {people ? people : 'There is no user data available'}
      <br />
      <button onClick={createPeople}>Add user</button>
      <br />
      <button onClick={deletePeople}>Delete user</button>
    </div>
  );
}
export default Postgres;