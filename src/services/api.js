import axios from 'axios';
//const axios = require('axios'); // legacy way
const GetArticles = () => {
return axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed') ;
}

export default GetArticles;