import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8000/api/',
});

// http://ec2-3-89-241-97.compute-1.amazonaws.com/
// http://localhost:8000/api/
