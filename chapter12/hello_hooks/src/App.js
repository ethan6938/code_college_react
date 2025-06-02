import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import useFetch from './useFetch';
// import Users from './Users';

const App = () => {
  const usersUrl = 'https://jsonplaceholder.typicode.com/users';
  const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  const todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  //initial state
  const [requested, setRequested] = useState(postsUrl);
  const data = useFetch(requested);

  //works like componentDidMount() as it prevents unnecessary re-renders
  //makes app run faster
  // useEffect(() => {
  //   fetch(requested)
  //   .then(response => response.json())
  //   .then(data => setData(data)) // data array is then populated with data from collection
  // }, [requested]);
  //[] :data gets rendered the first time 

  return (
    <div>
      {/* <Users /> */}
      {/* displays data from the users collection */}
      <Button variant="link" onClick={() => setRequested(usersUrl)}>
        Users
      </Button>
      {/* displays data from the posts collection */}
      <Button variant="link" onClick={() => setRequested(postsUrl)}>
        Posts
      </Button>
      {/* displays data from the todos collection */}
      <Button variant="link" onClick={() => setRequested(todosUrl)}>
        Todos
      </Button>
      <br />
      Requested: {requested}
      <ul>
        {data.map(el => (
            <li key={el.id}>{el.title || el.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
