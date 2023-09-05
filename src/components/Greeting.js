import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchRandomGreeting from '../actions/greetingActions';

function Greeting() {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.greeting.randomGreeting);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div className="Greeting">
      <h1>Random Greeting:</h1>
      <h4>Everytime you reload the page a new greetingis going to show up!</h4>
      <p>{randomGreeting}</p>
    </div>
  );
}

export default Greeting;
