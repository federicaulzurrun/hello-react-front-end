import axios from 'axios';

const API_URL = 'http://localhost:3000';
const fetchRandomGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/api/greetings/random`);
    const randomGreeting = response.data.greeting;
    dispatch({ type: 'SET_RANDOM_GREETING', payload: randomGreeting });
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchRandomGreeting;
