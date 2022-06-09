import axios from "axios";


const mainURL = axios.create({
    baseURL:'https://api.themoviedb.org/3'
});

export default mainURL;