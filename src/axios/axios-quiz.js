import axios from 'axios';


export default axios.create({
    baseURL: 'https://react-quiz-app-32a50-default-rtdb.firebaseio.com/'
})