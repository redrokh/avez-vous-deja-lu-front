import axios from 'axios';

export default axios.create({
  baseURL: 'http://ec2-3-89-241-97.compute-1.amazonaws.com/api/',
});

// http://ec2-3-89-241-97.compute-1.amazonaws.com/api/
// http://localhost:8000/api/
